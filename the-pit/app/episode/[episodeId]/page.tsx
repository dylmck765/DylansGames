"use client";

// A full episode: game film, case studies, quiz, paper trade sim, scenario.

import Link from "next/link";
import { useParams } from "next/navigation";

export function generateStaticParams() {
  const { ALL_EPISODES } = require("@/lib/content");
  return ALL_EPISODES.map((ep: { id: string }) => ({ episodeId: ep.id }));
}
import { useGame } from "@/lib/state";
import { getEpisode, isEpisodeUnlocked, ALL_EPISODES, episodeIndex } from "@/lib/content";
import { episodeComplete } from "@/lib/progress";
import QuizBlock from "@/components/QuizBlock";
import PaperTradeBlock from "@/components/PaperTradeBlock";
import ScenarioBlock from "@/components/ScenarioBlock";

export default function EpisodePage() {
  const params = useParams<{ episodeId: string }>();
  const { state, ready, submitQuiz, submitPaper, submitScenario } = useGame();
  const ep = getEpisode(params.episodeId);

  if (!ready) return <main className="page" />;

  if (!ep) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <h2 className="display" style={{ fontSize: 26 }}>No film for that episode.</h2>
        <Link href="/seasons" className="btn" style={{ marginTop: 14 }}>Back to the Schedule</Link>
      </main>
    );
  }

  if (!isEpisodeUnlocked(ep.id, state)) {
    return (
      <main className="page" style={{ textAlign: "center", paddingTop: 60 }}>
        <div style={{ fontSize: 44 }}>🔒</div>
        <h2 className="display" style={{ fontSize: 26, margin: "8px 0" }}>This game hasn&apos;t been scheduled yet.</h2>
        <p className="muted">Finish the previous episode&apos;s quiz to unlock it.</p>
        <Link href={`/seasons/${ep.seasonId}`} className="btn" style={{ marginTop: 14 }}>
          Season {ep.seasonId} Schedule
        </Link>
      </main>
    );
  }

  const prog = state.episodes[ep.id];
  const complete = episodeComplete(prog);
  const idx = episodeIndex(ep.id);
  const nextEp = idx >= 0 && idx < ALL_EPISODES.length - 1 ? ALL_EPISODES[idx + 1] : null;

  return (
    <main className="page">
      <Link href={`/seasons/${ep.seasonId}`} className="kicker" style={{ display: "inline-block", marginTop: 10 }}>
        ← SEASON {ep.seasonId}
      </Link>
      <div className="kicker" style={{ marginTop: 8 }}>EPISODE {ep.number}</div>
      <h1 className="display-italic" style={{ fontSize: 32 }}>{ep.title}</h1>
      <p className="muted" style={{ margin: "4px 0 18px", fontSize: 14 }}>{ep.tagline}</p>

      {/* Cold open */}
      <div className="card card-banner" style={{ borderLeft: "4px solid var(--gold)" }}>
        <div className="kicker" style={{ color: "var(--gold)" }}>🏈 PLAY OF THE WEEK</div>
        <p style={{ marginTop: 8, fontSize: 15 }}>{ep.playOfTheWeek}</p>
      </div>

      {/* Game film */}
      <div className="section-head"><h2>🎬 The Game Film</h2></div>
      <div className="card">
        {ep.gameFilm.map((para, i) => (
          <p key={i} style={{ marginBottom: i === ep.gameFilm.length - 1 ? 0 : 12, fontSize: 15 }}>
            {para}
          </p>
        ))}
        <hr className="divider" />
        <div className="kicker">THE TAKEAWAY</div>
        <p style={{ marginTop: 6, fontWeight: 600 }}>{ep.takeaway}</p>
      </div>

      {/* Case studies */}
      <div className="section-head"><h2>📼 Case Studies</h2></div>
      {ep.caseStudies.map((cs, i) => (
        <div className="card" key={i}>
          <div className="row-between">
            <h3 className="display" style={{ fontSize: 20 }}>{cs.title}</h3>
            <span className={`pill ${cs.kind === "real" ? "pill-red" : ""}`}>
              {cs.kind === "real" ? "REAL FILM" : "SCRIMMAGE"}
            </span>
          </div>
          <p style={{ margin: "8px 0", fontSize: 14 }}><strong className="muted">THE SETUP:</strong> {cs.setup}</p>
          <p style={{ margin: "8px 0", fontSize: 14 }}><strong className="muted">THE PLAY:</strong> {cs.thePlay}</p>
          <p style={{ margin: "8px 0", fontSize: 14 }}><strong className="muted">THE RESULT:</strong> {cs.outcome}</p>
          <div className="explain">{cs.lesson}</div>
        </div>
      ))}

      {/* Quiz */}
      <div className="section-head">
        <h2>🧠 The Quiz</h2>
        <span className="pill pill-gold">100 XP / answer • +500 perfect</span>
      </div>
      <div className="card">
        <QuizBlock
          questions={ep.quiz}
          done={!!prog?.quizDone}
          doneText={`Quiz in the books: ${prog?.quizCorrect ?? 0}/${ep.quiz.length} correct. XP banked.`}
          onComplete={(correct) => submitQuiz(ep.id, correct, ep.quiz.length)}
        />
      </div>

      {/* Paper trade */}
      <div className="section-head">
        <h2>💵 Paper Trade Sim</h2>
        <span className="pill pill-gold">+250 XP</span>
      </div>
      <div className="card">
        <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{ep.paperTrade.title}</h3>
        <PaperTradeBlock sim={ep.paperTrade} done={!!prog?.paperDone} onComplete={(best) => submitPaper(ep.id, best)} />
      </div>

      {/* Scenario */}
      <div className="section-head">
        <h2>🤔 What Would You Do?</h2>
        <span className="pill pill-gold">+300 XP</span>
      </div>
      <div className="card">
        <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{ep.scenario.title}</h3>
        <ScenarioBlock
          situation={ep.scenario.situation}
          question={ep.scenario.question}
          options={ep.scenario.options}
          bestIndex={ep.scenario.bestIndex}
          coachNotes={ep.scenario.coachNotes}
          done={!!prog?.scenarioDone}
          onComplete={(won) => submitScenario(ep.id, won)}
        />
      </div>

      {complete && (
        <div className="card card-banner" style={{ textAlign: "center", borderColor: "var(--green)" }}>
          <div className="display" style={{ fontSize: 24, color: "var(--green)" }}>
            EPISODE COMPLETE {prog?.perfect ? "— PERFECT GAME ⭐" : ""}
          </div>
          {nextEp ? (
            <Link href={`/episode/${nextEp.id}`} className="btn btn-primary" style={{ marginTop: 12 }}>
              ▶ Next Up: {nextEp.title}
            </Link>
          ) : (
            <p className="gold" style={{ marginTop: 10, fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase" }}>
              That was the final episode. Welcome to the Hall. 🐐
            </p>
          )}
        </div>
      )}
    </main>
  );
}
