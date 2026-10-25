---
repo: "cohexa-ai/agent-coherence"
name: "agent-coherence"
description: "The coordination layer for Multiplayer AI"
readmeQualityOk: true
url: "https://github.com/cohexa-ai/agent-coherence"
homepage: "https://agent-coherence.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["state-synchronization", "token-efficiency", "agent-memory", "ai-agent", "cache-coherence", "llm-agent", "multi-agent-systems", "python", "ai-agents", "claude-code"]
stars: 11
forks: 3
openIssues: 90
closedIssues: 48
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-04T13:43:03Z"
lastCommitAt: "2026-10-25T09:01:24Z"
lastReleaseAt: "2026-05-18T13:57:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 53
maintainers: ["hipvlady", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0ff202f78be9fdee32488648cc8b9b820f29cf3d4e1f5ad1ee704bdefc1594f/cohexa-ai/agent-coherence"
discussionCount: 3
---

# agent-coherence

**`agent-coherence` stops one agent from silently clobbering another's work on a shared `plan.md`, store key, or `memory.json` — a vendor-neutral MESI + optimistic-concurrency coordinator for agent state on a single host, with the safety invariants machine-checked in TLA+.**

Two agents share an artifact — a `plan.md`, a store key, a `memory.json`. One reads it and works; meanwhile a peer commits a newer version; the first writes back anyway. Last write wins, the peer's work is silently gone, nothing errors, and every downstream decision builds on the wrong version.

**Why it goes unnoticed.** An agent system keeps two records of what happened: the one your infrastructure can verify — which version each agent held, what actually committed, what was refused — and the one the model narrates, *"task complete", "the plan is updated"*. They agree until an agent acts on a version that moved underneath it, and the narrated record is the one you read. That is why a lost update looks like a clean run and gets debugged as a model problem. `agent-coherence` is the verified record for the state your agents share. (It does not verify what an agent did in the outside world —…
