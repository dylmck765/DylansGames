import SeasonPageClient from "./SeasonPageClient";

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((id) => ({ seasonId: String(id) }));
}

export default function Page() {
  return <SeasonPageClient />;
}
