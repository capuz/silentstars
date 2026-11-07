---
repo: "lance-format/lance-context"
name: "lance-context"
description: "Manage Multimodal Agentic Context Lifecycle with Lance"
readmeQualityOk: true
url: "https://github.com/lance-format/lance-context"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 89
forks: 21
openIssues: 11
closedIssues: 61
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2026-01-16T18:16:05Z"
lastCommitAt: "2026-11-07T22:50:43Z"
lastReleaseAt: "2026-06-12T05:53:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 41
maintainers: ["beinan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2744d2be43ac04e04b90846df64673fe213b1903d4e6a6f7eb124ccd13425574/lance-format/lance-context"
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
