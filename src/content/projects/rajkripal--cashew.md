---
repo: "rajkripal/cashew"
name: "cashew"
description: "Persistent memory for AI agents. Extract once, recall forever."
url: "https://github.com/rajkripal/cashew"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [75, 24]
topics: ["ai-agents", "graph-memory", "llm", "memory", "personal-knowledge-graph", "sqlite", "agent-memory", "claude-code", "knowledge-graph", "llm-harness"]
stars: 21
forks: 6
openIssues: 3
closedIssues: 19
watchers: 2
contributors: 5
recentReleases: 5
createdAt: "2026-03-08T02:12:05Z"
lastCommitAt: "2026-07-03T06:24:05Z"
lastReleaseAt: "2026-06-29T05:14:52Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 51
maintainers: ["rajkripal", "bunny-bot-openclaw", "magnus919"]
openGraphImageUrl: "https://opengraph.githubassets.com/abe3ffd6b59774be561bbae1dadc549d25064c94c3afd803683baa831f248945/rajkripal/cashew"
discussionCount: 2
---

# Cashew 🥜

**Persistent thought-graph memory for AI agents.**

The name comes from asking "do cats eat cashews?", a question I asked my aunt as a 10-year-old kid in India, because the cashews were left open in the kitchen and I knew stray cats sneak into homes to eat food. My family still brings it up every time I visit. I never stopped asking questions. This system doesn't either: autonomous think cycles find connections you didn't know existed.

📝 **Blog post:** [I Built My AI a Brain and It Started Thinking for Itself](https://open.substack.com/pub/rajkripaldanday/p/i-built-my-ai-a-brain-and-it-started)

## Architecture

## What It Does

- **Remembers across sessions.** Decisions, patterns, relationships, and project context survive compaction and restart. Your agent picks up where it left off.
- **Learns autonomously.** Think cycles find cross-domain connections without prompting. A pattern in your work habits connects to a pattern in your communication style, and the brain surfaces it.
- **Constant context cost.** Seeds come from a brute-force sqlite-vec scan (O(N), microseconds at this scale), then a bounded recursive BFS walk returns the same amount of context regardless…
