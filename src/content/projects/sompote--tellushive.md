---
repo: "Sompote/TellusHive"
name: "TellusHive"
description: "TellusHive is an open-source multi-agent system for civil-engineering design, written entirely in Rust. The engineer chats with a coordinator agent, which hands the work to a team of specialists that calculate to the chosen standards, check each other's results, draw, write the calculation report and drive FE programs such as Tellus through MCP."
readmeQualityOk: true
url: "https://github.com/Sompote/TellusHive"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-10T23:05:10Z"
lastCommitAt: "2026-11-26T23:30:11Z"
lastReleaseAt: "2026-11-26T05:46:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 45
maintainers: ["Sompote"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a0694d57280b1b03c36250b51df1df8bed802e71bb7ab9c57b89d2942fb5edf/Sompote/TellusHive"
---

# TellusHive

TellusHive is an open-source multi-agent system for civil-engineering design, written entirely
in Rust. The engineer chats with a coordinator agent, which hands the work to a team of
specialists that calculate to the chosen standards, check each other's results, draw, write the
calculation report and drive FE programs such as Tellus through MCP.

Its agent harness, `th-hive`, is developed from [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
(`dsh`, DeepSeek-AI) and ports its **everything-is-a-plugin** architecture to Rust. Like dsh,
TellusHive builds on [Cordis](https://github.com/cordiverse/cordis), whose design is described in
[_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512): the
model adapter, the tool registry, the session log and the agent loop are all plugins on one
shared context, and the engineering side of TellusHive is one more bundle of plugins on top.
