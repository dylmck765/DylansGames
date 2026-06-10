import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GameProvider } from "@/lib/state";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "THE PIT — Options Trading. Game On.",
  description:
    "The free, gamified training ground that turns stock investors into confident directional options traders. Step into The Pit.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GameProvider>
          <AppShell>{children}</AppShell>
        </GameProvider>
      </body>
    </html>
  );
}
