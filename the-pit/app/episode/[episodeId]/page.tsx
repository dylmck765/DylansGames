import { ALL_EPISODES } from "@/lib/content";
import EpisodePageClient from "./EpisodePageClient";

export function generateStaticParams() {
  return ALL_EPISODES.map((ep) => ({ episodeId: ep.id }));
}

export default function Page() {
  return <EpisodePageClient />;
}
