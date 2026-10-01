---
repo: "acg-box/decodex"
name: "decodex"
description: "A signal layer for Codex — tracking updates, shifts, and community feedback."
readmeQualityOk: true
url: "https://github.com/acg-box/decodex"
homepage: "https://decodex.space/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 12
forks: 1
openIssues: 13
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T18:17:36Z"
lastCommitAt: "2026-10-01T10:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 80
undervaluedScore: 40
maintainers: ["acgxv"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc47ce6bd02d6f7f629fa82612a1d3ee879eea8deffeb6dd7ff469bec94cd8bb/acg-box/decodex"
discussionCount: 1
---

# Decodex

Local agent factory above Codex app-server.

</div>

Decodex is not another coding model or a replacement for Codex. Codex app-server is the
execution runtime for independent threads. Decodex adds the durable product state and coordination
needed when one engineer manages many conversations, accounts, dependencies, gates, and
follow-up actions.

The personal Agent coordinates goals through independent Codex threads. It receives
worker and automation results, requests repairs in the original worker thread, and
reports decisions to the user. SQLite preserves work relationships and obligations
across service restarts. Ordinary Conversations remain available for direct work.
See [Agent coordination](https://github.com/acg-box/decodex/blob/HEAD/openwiki/architecture/chief-coordination.md) for the current ownership model.

## Working with Agent

The Agent tab uses the same local service as the other app surfaces. Select an
explicit model, reasoning effort, working directory and execution policy before
starting. Workers use the same model with medium effort. The account-owned process
remains alive across turns; a worker result can wake the original Agent later.
Agent process…
