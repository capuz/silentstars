---
repo: "MoonLadderStudios/MoonMind"
name: "MoonMind"
description: "Run Claude Code and Codex with superior safety, resiliency, and observability."
readmeQualityOk: true
url: "https://github.com/MoonLadderStudios/MoonMind"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 12
forks: 5
openIssues: 50
closedIssues: 315
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2025-01-14T18:54:41Z"
lastCommitAt: "2026-08-29T18:11:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["nsticco", "dependabot[bot]", "Romie321"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/916785816/183489af-83d3-4d80-b5af-5a5a1c39656b"
postedAt: "2026-07-22T06:20:57.914Z"
---

# 🌙 MoonMind — Safety, resiliency, and observability for AI coding agents

    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/MoonLadderStudios/MoonMind/main/docs/assets/moonmindlogo.png">
    </picture>
</p>

MoonMind is an open-source framework that makes AI coding agents **safer**, more **resilient**, and more **observable** through Temporal-based durable workflows, explicit Provider Profiles and policies, controlled runtime and container boundaries, and an operational dashboard.

For now, MoonMind is focused on software engineering use cases, but it can be used for other use cases as well. Support for workflows that do not require a Git repository will become easier over time.

## Runtime direction

**Omnigent is to become MoonMind's primary runtime provider over time.** Codex, Claude Code, OpenCode, and future approved harnesses should converge on one generic Omnigent execution plane rather than accumulating separate MoonMind runtime architectures.

MoonMind will continue to own Temporal orchestration, Provider Profiles, OAuth enrollment, secret references, workspaces, Skills, model and policy selection, publication,…
