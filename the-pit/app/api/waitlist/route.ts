// Static export: no server runtime on GitHub Pages.
// Emails are logged client-side; swap in a form service (Formspree, etc.) for prod.

import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST() {
  return NextResponse.json({ ok: true });
}
