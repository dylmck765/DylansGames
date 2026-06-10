"use client";

// ESPN-player-card style shareable image, drawn on a canvas and downloadable.

import { useEffect, useRef } from "react";
import { formatXp } from "@/lib/util";

interface Props {
  handle: string;
  rankName: string;
  xp: number;
  badgeCount: number;
  streak: number;
  episodesDone: number;
}

const W = 1000;
const H = 560;

export default function ShareCard(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    draw(ctx, props);
  }, [props]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = `the-pit-${props.handle.replace(/\W+/g, "-").toLowerCase()}-card.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        style={{ width: "100%", borderRadius: 12, border: "1px solid var(--line)" }}
      />
      <button className="btn btn-primary btn-block" style={{ marginTop: 10 }} onClick={download}>
        📸 Download Your Player Card
      </button>
    </div>
  );
}

function draw(ctx: CanvasRenderingContext2D, p: Props) {
  // Background
  ctx.fillStyle = "#0a0a0c";
  ctx.fillRect(0, 0, W, H);

  // Diagonal red sweep
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "rgba(255,30,45,0.30)");
  grad.addColorStop(0.45, "rgba(255,30,45,0.05)");
  grad.addColorStop(1, "rgba(255,30,45,0.0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Angled stripes top-right
  ctx.save();
  ctx.translate(W - 240, 0);
  ctx.rotate(0.35);
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = i % 2 === 0 ? "#ff1e2d" : "#26262e";
    ctx.fillRect(i * 46, -100, 22, 420);
  }
  ctx.restore();

  // Border frame
  ctx.strokeStyle = "#ff1e2d";
  ctx.lineWidth = 6;
  ctx.strokeRect(12, 12, W - 24, H - 24);

  // Logo
  ctx.fillStyle = "#f5f5f7";
  ctx.font = "italic 900 44px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  ctx.fillText("THE", 50, 86);
  ctx.fillStyle = "#ff1e2d";
  ctx.fillText("PIT", 138, 86);
  ctx.fillStyle = "#9a9aa3";
  ctx.font = "700 17px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  ctx.fillText("O F F I C I A L   P L A Y E R   C A R D", 50, 112);

  // Handle
  ctx.fillStyle = "#f5f5f7";
  ctx.font = "italic 900 84px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  const handle = p.handle.toUpperCase().slice(0, 16);
  ctx.fillText(handle, 50, 228);

  // Rank plate
  ctx.fillStyle = "#ff1e2d";
  ctx.font = "900 54px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  ctx.fillText(p.rankName.toUpperCase(), 50, 300);

  // Stat row
  const stats: [string, string][] = [
    [formatXp(p.xp), "CAREER XP"],
    [String(p.badgeCount), "BADGES"],
    [`${p.streak} DAY`, "STREAK"],
    [`${p.episodesDone}/60`, "EPISODES"],
  ];
  let x = 50;
  for (const [val, label] of stats) {
    ctx.fillStyle = "#ffc62d";
    ctx.font = "900 46px 'Barlow Condensed', 'Arial Narrow', sans-serif";
    ctx.fillText(val, x, 400);
    ctx.fillStyle = "#9a9aa3";
    ctx.font = "700 16px 'Barlow Condensed', 'Arial Narrow', sans-serif";
    ctx.fillText(label, x, 426);
    x += Math.max(ctx.measureText(label).width, measure(ctx, val)) + 64;
  }

  // Footer ribbon
  ctx.fillStyle = "#131318";
  ctx.fillRect(12, H - 78, W - 24, 66);
  ctx.fillStyle = "#ff1e2d";
  ctx.fillRect(12, H - 78, 8, 66);
  ctx.fillStyle = "#f5f5f7";
  ctx.font = "800 26px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  ctx.fillText("STOCKS WERE THE PRESEASON. OPTIONS ARE THE SHOW.", 44, H - 36);
}

function measure(ctx: CanvasRenderingContext2D, text: string): number {
  ctx.font = "900 46px 'Barlow Condensed', 'Arial Narrow', sans-serif";
  return ctx.measureText(text).width;
}
