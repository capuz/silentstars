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
openIssues: 43
closedIssues: 254
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-01-14T18:54:41Z"
lastCommitAt: "2026-08-03T15:13:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["nsticco", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/916785816/183489af-83d3-4d80-b5af-5a5a1c39656b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061316Z&X-Amz-Expires=300&X-Amz-Signature=df20e30ad62d09fbafd2fd588371bb4d469ba15d333501438345ea18595de4da&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDI5NiwibmJmIjoxNzg1ODIzOTk2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.CBLYuP-b4hNcQ2zyKs8bSIf9jpfolrn326EyFwcFKoc"
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
