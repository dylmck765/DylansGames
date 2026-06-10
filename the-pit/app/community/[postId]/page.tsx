import { seedPosts } from "@/data/community-seed";
import ThesisPageClient from "./ThesisPageClient";

export function generateStaticParams() {
  return seedPosts.map((p) => ({ postId: p.id }));
}

export default function Page() {
  return <ThesisPageClient />;
}
