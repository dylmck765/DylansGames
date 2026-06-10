// Merges seeded community posts with the user's posts and votes into one feed.

import { seedPosts } from "../data/community-seed";
import type { PitState } from "./progress";
import { hashString } from "./util";

export interface FeedPost {
  id: string;
  author: string;
  isMine: boolean;
  ticker: string;
  direction: "bullish" | "bearish";
  title: string;
  catalyst: string;
  thesis: string;
  maxLoss: string;
  score: number;
  ageDays: number;
  commentCount: number;
}

/** Simulated crowd reception for a user post: grows a little each day. */
function crowdVotes(postId: string, ageDays: number): number {
  const h = hashString("crowd:" + postId);
  return (h % 9) + Math.min(ageDays, 6) * ((h >> 4) % 5);
}

export function buildFeed(state: PitState): FeedPost[] {
  const now = Date.now();
  const feed: FeedPost[] = [];

  for (const p of seedPosts) {
    const myVote = state.votes[p.id] ?? 0;
    const userComments = state.comments.filter((c) => c.postId === p.id).length;
    feed.push({
      id: p.id,
      author: p.author,
      isMine: false,
      ticker: p.ticker,
      direction: p.direction,
      title: p.title,
      catalyst: p.catalyst,
      thesis: p.thesis,
      maxLoss: p.maxLoss,
      score: p.upvotes + myVote,
      ageDays: p.createdDaysAgo,
      commentCount: p.comments.length + userComments,
    });
  }

  for (const p of state.posts) {
    const ageDays = Math.max(0, Math.floor((now - new Date(p.createdAt).getTime()) / 86_400_000));
    const myVote = state.votes[p.id] ?? 0;
    feed.push({
      id: p.id,
      author: state.profile.handle,
      isMine: true,
      ticker: p.ticker,
      direction: p.direction,
      title: p.title,
      catalyst: p.catalyst,
      thesis: p.thesis,
      maxLoss: p.maxLoss,
      score: 1 + crowdVotes(p.id, ageDays) + myVote,
      ageDays,
      commentCount: state.comments.filter((c) => c.postId === p.id).length,
    });
  }

  return feed;
}

/** Top thesis posted within the last 7 days. */
export function weeklyTop(feed: FeedPost[]): FeedPost | null {
  const recent = feed.filter((p) => p.ageDays <= 6);
  if (!recent.length) return null;
  return recent.reduce((a, b) => (b.score > a.score ? b : a));
}
