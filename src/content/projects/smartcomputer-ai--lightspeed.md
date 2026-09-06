---
repo: "smartcomputer-ai/lightspeed"
name: "lightspeed"
description: "Deterministic agent harness for Temporal (in Rust)"
readmeQualityOk: true
url: "https://github.com/smartcomputer-ai/lightspeed"
homepage: "https://ls.bot/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [74, 25]
topics: ["agent", "ai", "autonomous-agents", "rust-lang", "software-factory", "agent-harness", "event-sourcing", "temporal"]
stars: 91
forks: 17
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2026-02-09T09:09:53Z"
lastCommitAt: "2026-09-06T08:03:37Z"
lastReleaseAt: "2026-09-01T20:27:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 35
maintainers: ["lukebuehler", "lightspeed-internal-1[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf160eacc1a785a06cb54861eea97f6e6eeac03a97d3ad96f30a33538ab1907/smartcomputer-ai/lightspeed"
---

</a>
</p>

# Lightspeed

Lightspeed is open-source infrastructure for running long-lived agent fleets as durable workflows.

Agents survive restarts, can run for months, and stay cheap when idle. When they
need an operating system, they borrow a real machine for as long as the task
requires.

  </a>
</p>

Lightspeed's Rust core runs on [Temporal](https://temporal.io/) today and stores
production data in Postgres with optional S3. The frontend is TypeScript and
React. Support for other durable workflow engines is planned.

## Why Lightspeed?

Lightspeed aims for the capability of Claude Code, Codex, and OpenClaw without
requiring one operating system per agent. 

Most frontier harnesses live inside a guest OS, which makes them difficult to scale and secure. Hence the emerging pattern to
["separate the harness from compute"](https://openai.com/index/the-next-evolution-of-the-agents-sdk/#:~:text=long%2Drunning%20task.-,Separating%20harness%20from%20compute%20for%20security%2C%20durability%2C%20and%20scale,-Agent%20systems%20should). This is especially
useful in enterprises with more stringent supervision and scaling requirements.

So, in Lightspeed, the harness (the agent loop,…
