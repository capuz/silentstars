---
repo: "TencentCloud/octop-harness"
name: "octop-harness"
description: "A production-grade agent runtime engineered from the Harness Engineering philosophy."
readmeQualityOk: true
url: "https://github.com/TencentCloud/octop-harness"
homepage: "https://octop.cloud"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "agent-framework", "agents"]
stars: 172
forks: 109
openIssues: 25
closedIssues: 3
watchers: 1
contributors: 31
recentReleases: 10
createdAt: "2026-09-24T03:56:58Z"
lastCommitAt: "2026-11-26T13:00:35Z"
lastReleaseAt: "2026-11-10T12:21:32Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 74
undervaluedScore: 33
maintainers: ["Bosheng0422", "eileennchen", "jubaoliang"]
openGraphImageUrl: "https://opengraph.githubassets.com/84cab26d7f08f2d2a61c3c9e0b5e5dbdca414ef691451b81a58f363a9084a3c2/TencentCloud/octop-harness"
---

---

**octop-harness** is a production-grade agent runtime built on the harness engineering theory. At its core it is a thin, battle-tested **encapsulation and engineering layer around [deepagents](https://github.com/langchain-ai/deepagents)** — we take the elegant `create_deep_agent` primitive from deepagents and package it with everything you need to run agents in production: multi-provider model routing, persistent memory, browser/search tools, a multi-agent registry, pluggable storage backends, and a terminal CLI.

> 💜 **A tribute to deepagents.** octop-harness stands on the shoulders of [deepagents](https://github.com/langchain-ai/deepagents) (by the LangChain team). Our `HarnessAgent` ultimately delegates to `deepagents.create_deep_agent`, and everything else — model routing, backends, tiered memory, the agent registry, CLI, and ACP — is the engineering we added on top. deepagents gives us the agentic foundation; Harness gives it a home for production.
