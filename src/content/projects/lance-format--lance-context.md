---
repo: "lance-format/lance-context"
name: "lance-context"
description: "Manage Multimodal Agentic Context Lifecycle with Lance"
readmeQualityOk: true
url: "https://github.com/lance-format/lance-context"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [74, 26]
stars: 73
forks: 13
openIssues: 2
closedIssues: 41
watchers: 3
contributors: 40
recentReleases: 5
createdAt: "2026-01-16T18:16:05Z"
lastCommitAt: "2026-07-14T05:52:38Z"
lastReleaseAt: "2026-06-12T05:53:04Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["beinan", "dcfocus", "wulansari999"]
openGraphImageUrl: "https://opengraph.githubassets.com/929d990ae74176351be7d24414113078472b0bb5640d5b4a577641a7425cc91b/lance-format/lance-context"
---

# lance-context

**A storage engine for AI data — agent memory and RL training data — built on [Lance](https://lancedb.github.io/lance/).**

Modern AI systems produce two kinds of data that are awkward to store well:

1. **Agent memory** — the running history of a chat or agent: text, images, tool
   calls, and their embeddings, which you later search over to recall context.
2. **RL training data** — the trajectories, rewards, and logprobs produced when
   you train models with reinforcement learning (GRPO, RLVR, PPO, ...).

`lance-context` stores both in one place. It gives you a durable, columnar,
versioned table you can append to, search, filter, and time-travel through —
without standing up a database server (though a server is available if you want
one).

## Why use it

- **Two use cases, one engine.** A `Context` store for agent memory and a
  `RolloutStore` (a purpose-built **RolloutDB**) for RL rollouts. Same storage
  format, same versioning, same cloud backends.
- **Multimodal.** Store text, images, and binary blobs next to their embeddings
  and typed metadata — the raw bytes are kept, not just a pointer.
- **Search built in.** Run vector search, full-text search, or…
