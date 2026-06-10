// Waitlist capture. Appends to waitlist.csv at the project root.
// Note: on serverless hosts (Vercel) the filesystem is ephemeral — emails are
// also logged so they appear in function logs. Swap in a form service for prod.

import { NextResponse } from "next/server";
import { appendFile, writeFile, access } from "fs/promises";
import path from "path";

const CSV_PATH = path.join(process.cwd(), "waitlist.csv");

export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    email = String(body.email || "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const line = `${email},${new Date().toISOString()}\n`;
  try {
    try {
      await access(CSV_PATH);
    } catch {
      await writeFile(CSV_PATH, "email,signed_up_at\n");
    }
    await appendFile(CSV_PATH, line);
  } catch (err) {
    console.log("[waitlist] (csv write failed, logging instead)", line.trim(), err);
  }

  console.log("[waitlist] new signup:", email);
  return NextResponse.json({ ok: true });
}
