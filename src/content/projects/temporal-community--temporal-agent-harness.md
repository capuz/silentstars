---
repo: "temporal-community/temporal-agent-harness"
name: "temporal-agent-harness"
description: "Temporal-native Durable Multi Agent Harness"
readmeQualityOk: true
url: "https://github.com/temporal-community/temporal-agent-harness"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [34, 26]
stars: 136
forks: 38
openIssues: 6
closedIssues: 6
watchers: 2
contributors: 18
recentReleases: 9
createdAt: "2026-06-18T22:43:11Z"
lastCommitAt: "2026-11-05T00:22:42Z"
lastReleaseAt: "2026-11-02T18:16:55Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 86
undervaluedScore: 33
maintainers: ["JasonSteving99", "shphrd", "Alex-Tideman"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9c2d79cb3bace02a2fbee5e754d327631781883fe90856e158dd612982da207/temporal-community/temporal-agent-harness"
---

# Temporal Agent Harness

**Temporal-native agent harness (experimental) — build durable, composable AI agents on Temporal, with the AI SDKs you already use.**

> ⚠️ **Experimental.** An early, fast-moving project from Temporal Technologies. APIs will change.

[Demo Video](https://www.youtube.com/watch?v=z3L41NvF6wE)

The Temporal Agent Harness gives your agents capabilities that are painful and error-prone to
build yourself:

- agents **survive crashes and resume mid-turn**, exactly where they left off (no wasted tokens!);
- a **rich tool-approval policy engine** decides exactly when a tool call needs human
  sign-off — handing control to a human only then, and resuming the moment it's granted —
- agents **compose programmatically**, through real typed contracts (not limited to just text in,
  text out);
- **Code Mode** — one tool that runs a Python script over your toolset — so a single
  turn orchestrates many tool calls with real control flow and concurrency;
- **callback tools** let an agent invoke a tool that runs on the *client* — reading a file on a
  user's laptop, capturing a photo on their phone — even though the agent runs on a remote worker;
- agents are **fully…
