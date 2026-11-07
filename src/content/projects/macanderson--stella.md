---
repo: "macanderson/stella"
name: "stella"
description: "A coding agent that builds it's own tools and mines it's own skills and always ships with receipts."
readmeQualityOk: true
url: "https://github.com/macanderson/stella"
homepage: "https://stella.oxagen.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["agent-coding", "agent-memory", "agent-swarm", "agent-teams", "ai-coding", "evals", "knowledge-graph", "coding-agent", "rust", "terminal-bench"]
stars: 18
forks: 4
openIssues: 431
closedIssues: 2742
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-11T23:06:59Z"
lastCommitAt: "2026-11-07T22:50:35Z"
lastReleaseAt: "2026-07-17T19:29:19Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 49
maintainers: ["github-actions[bot]", "macanderson", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297837446/eb8df265-8333-4dcc-b441-8952a5d6ddf0"
fundingLinks: ["GITHUB:https://github.com/macanderson", "CUSTOM:https://oxagen.sh"]
---

Stella is an open-source, bring-your-own-key (BYOK) coding agent for your
terminal. It runs on every hosted provider in the table below plus any local
OpenAI-compatible server, keeps its telemetry in a local SQLite database, and
enforces a hard per-run budget. Nothing leaves your machine except calls to the
provider you configured — the two paths that would export anything else
(Oxagen Enterprise enrollment, or a `drain` block in `~/.stella/cloud.json`)
exist in no default install. Written in Rust as a workspace of focused crates.

### Stella and Oxagen

**Stella runs the agent. [Oxagen](https://oxagen.sh) governs the run.** They
are two products from one company, and neither duplicates the other:

- **Stella is the coding agent.** It plans, runs tools, verifies, and
  records what it did. It is also the reference implementation of the
  [Context Graph Protocol](https://github.com/oxageninc/context-graph-protocol)
  and of the run/turn/step trace vocabulary Oxagen reads.
- **Oxagen is the governance plane.** It grounds, governs, explains, meters,
  and rates agents. It runs no agent loop of its own, so nothing in this
  repository is duplicated there and nothing there runs a…
