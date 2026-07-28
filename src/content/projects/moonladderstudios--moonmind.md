---
repo: "MoonLadderStudios/MoonMind"
name: "MoonMind"
description: "Run Claude Code and Codex with superior safety, resiliency, and observability."
readmeQualityOk: true
url: "https://github.com/MoonLadderStudios/MoonMind"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 12
forks: 5
openIssues: 59
closedIssues: 230
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-01-14T18:54:41Z"
lastCommitAt: "2026-07-28T13:57:06Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["nsticco", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/916785816/183489af-83d3-4d80-b5af-5a5a1c39656b"
postedAt: "2026-07-22T06:20:57.914Z"
---

# 🌙 MoonMind — Safety, resiliency, and observability for Claude Code and Codex CLI

    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/MoonLadderStudios/MoonMind/main/docs/assets/moonmindlogo.png">
    </picture>
</p>

MoonMind is an open-source framework that makes Claude Code and Codex CLI **safer**, more **resilient**, and more **observable** by wrapping agent CLI runs in Docker containers, using Temporal-based durable workflows, and providing a powerful UI dashboard.

For now, MoonMind is focused on software engineering use cases, but can be used for other use cases as well and this will be made easier in the future (e.g. not requiring a git repo).

MoonMind includes a Codex-through-[Omnigent](https://github.com/omnigent-ai/omnigent) managed-runtime path with profile and policy readiness gating, static and on-demand hosts, durable event replay, controls, and artifact harvesting. It is currently an explicit opt-in path while the protected live support matrix is completed; direct Codex remains a truthfully labeled migration fallback and historical-read substrate. See the [versioned support and cutover…
