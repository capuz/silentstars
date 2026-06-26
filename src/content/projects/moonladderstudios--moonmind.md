---
repo: "MoonLadderStudios/MoonMind"
name: "MoonMind"
description: "Run Claude Code and Codex with superior safety, resiliency, and observability."
url: "https://github.com/MoonLadderStudios/MoonMind"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 11
forks: 4
openIssues: 49
closedIssues: 134
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-01-14T18:54:41Z"
lastCommitAt: "2026-06-26T06:46:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 69
maintainers: ["nsticco", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/916785816/183489af-83d3-4d80-b5af-5a5a1c39656b"
---

# 🌙 MoonMind — Safety, resiliency, and observability for Claude Code and Codex CLI

    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/MoonLadderStudios/MoonMind/main/docs/assets/moonmindlogo.png">
    </picture>
</p>

MoonMind is an open-source framework that makes Claude Code and Codex CLI **safer**, more **resilient**, and more **observable** by wrapping agent CLI runs in Docker containers, using Temporal-based durable workflows, and providing a powerful UI dashboard.

For now, MoonMind is focused on software engineering use cases.

## Quick Start

1. [Install Docker Desktop](https://docs.docker.com/get-started/get-docker/)
2. Install git
3. `git clone https://github.com/MoonLadderStudios/MoonMind.git`
4. Run `docker compose up -d` to start the service
5. Open [http://localhost:8000/workflows](http://localhost:8000/workflows)
6. In Settings:
    - Add a GitHub personal access token
    - Add an API key or click OAuth to authenticate a provider profile
    - Configure any other secrets or settings you want to adjust for your first workflow
7. Click Create and submit a workflow!

`.env` is optional for normal local…
