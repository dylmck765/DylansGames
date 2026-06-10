"use client";

// Global chat: one room, every player. Messages live in Supabase; new ones
// arrive over Realtime, with a slow poll as fallback so the room still
// updates if the websocket can't connect.

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGame } from "@/lib/state";
import { supabase, type MessageRow } from "@/lib/supabase";

const MAX_LEN = 280;

function mergeById(prev: MessageRow[], incoming: MessageRow[]): MessageRow[] {
  const map = new Map<number, MessageRow>();
  for (const m of prev) map.set(m.id, m);
  for (const m of incoming) map.set(m.id, m);
  return [...map.values()].sort((a, b) => a.id - b.id).slice(-200);
}

export default function ChatPage() {
  const { state, ready } = useGame();
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchLatest = () => {
      supabase.from("messages").select("*").order("id", { ascending: false }).limit(100)
        .then(({ data }) => {
          if (cancelled) return;
          if (data) setMessages((prev) => mergeById(prev, data as MessageRow[]));
          setLoading(false);
        });
    };
    fetchLatest();
    const poll = setInterval(fetchLatest, 12_000);
    const channel = supabase
      .channel("pit-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => setMessages((prev) => mergeById(prev, [payload.new as MessageRow]))
      )
      .subscribe();
    return () => {
      cancelled = true;
      clearInterval(poll);
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length]);

  if (!ready) return <main className="page" />;

  const send = async () => {
    const text = draft.trim().slice(0, MAX_LEN);
    if (!text || sending || !state.profile.onboarded) return;
    setSending(true);
    const { data } = await supabase
      .from("messages")
      .insert({ handle: state.profile.handle, text })
      .select()
      .single();
    if (data) setMessages((prev) => mergeById(prev, [data as MessageRow]));
    setDraft("");
    setSending(false);
  };

  const fmtTime = (iso: string) => {
    const d = new Date(iso);
    const hm = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return d.toDateString() === new Date().toDateString()
      ? hm
      : `${d.toLocaleDateString([], { month: "short", day: "numeric" })} ${hm}`;
  };

  return (
    <main className="page">
      <div className="kicker" style={{ marginTop: 10 }}>THE TRADING FLOOR — EVERY PLAYER, ONE ROOM</div>
      <h1 className="display-italic" style={{ fontSize: 34, marginBottom: 12 }}>Global Chat</h1>

      <div className="chat-list">
        {loading ? (
          <p className="muted" style={{ textAlign: "center", padding: "40px 0" }}>Opening the floor...</p>
        ) : messages.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: "36px 20px" }}>
            <p className="display" style={{ fontSize: 20 }}>Nobody&apos;s talking yet.</p>
            <p className="muted" style={{ marginTop: 6, fontSize: 13 }}>
              Say something — every player in The Pit sees this room.
            </p>
          </div>
        ) : (
          messages.map((m) => {
            const mine = m.handle === state.profile.handle;
            return (
              <div className={`chat-msg ${mine ? "mine" : ""}`} key={m.id}>
                <div className="who">
                  <span>{m.handle}{mine ? " (you)" : ""}</span>
                  <span className="t">{fmtTime(m.created_at)}</span>
                </div>
                <div className="txt">{m.text}</div>
              </div>
            );
          })
        )}
        <div ref={endRef} />
      </div>

      {state.profile.onboarded ? (
        <div className="chat-bar">
          <input
            className="input"
            style={{ flex: 1 }}
            placeholder="Talk your book..."
            maxLength={MAX_LEN}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          />
          <button className="btn btn-primary" disabled={!draft.trim() || sending} onClick={send}>
            {sending ? "..." : "Send"}
          </button>
        </div>
      ) : (
        <div className="chat-bar" style={{ justifyContent: "center" }}>
          <Link href="/onboarding" className="btn btn-primary btn-sm">Make the roster to chat</Link>
        </div>
      )}
    </main>
  );
}
