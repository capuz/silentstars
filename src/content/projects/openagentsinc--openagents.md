---
repo: "OpenAgentsInc/openagents"
name: "openagents"
description: "Monorepo & docs"
readmeQualityOk: true
url: "https://github.com/OpenAgentsInc/openagents"
homepage: "https://openagents.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 457
forks: 62
openIssues: 15
closedIssues: 9279
watchers: 7
contributors: 52
recentReleases: 2
createdAt: "2023-11-07T16:16:46Z"
lastCommitAt: "2026-10-21T20:00:50Z"
lastReleaseAt: "2026-10-15T23:48:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 41
maintainers: ["AtlantisPleb", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/a53e7774487f8f35fce4f902c06bd43f0865773c16c88a98b8633de5939e844f/OpenAgentsInc/openagents"
discussionCount: 0
---

# OpenAgents

OpenAgents is a **composable general agent**: one agent you reach from
anywhere, made of many specialized members that it brings in for each
request. Ask a question, plan some work, change some code, pay for a
service, or build something it can't do yet. Each step goes to whichever
member, model, or computer serves it best.

- **One agent, every surface.** [openagents.com](https://openagents.com),
  the phone and desktop apps, the terminal, and any other app through
  [our API](https://openagents.com/docs/agents). They're the same agent and
  the same chats.
- **A cheap decision layer in front.** A typed decision model, System 1,
  decides what each step needs before any big model runs. It goes through
  our [Decisions API](https://github.com/OpenAgentsInc/openagents/blob/HEAD/docs/api/decisions.md), Clef first.
- **Members are admitted on evidence.** A member can be an answer, a
  knowledge entry, a plugin someone wrote, another agent, or another
  computer. It joins the defaults only after a with-and-without measurement
  shows it helps. We call these
  [test-time…
