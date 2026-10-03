---
repo: "hivecommons/hive"
name: "hive"
description: "AI agent orchestration for open and closed source — a fully customizable fleet of AI agents covering every level of project maintenance, from brainstorming to full autonomy"
readmeQualityOk: true
url: "https://github.com/hivecommons/hive"
homepage: "https://hive.hivecommons.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["agent-orchestration", "ai-agents", "autonomous-agents", "code-review", "devops", "github-automation", "golang", "kubernetes", "llm", "ci-cd"]
stars: 62
forks: 44
openIssues: 25
closedIssues: 2889
watchers: 1
contributors: 27
recentReleases: 10
createdAt: "2026-04-17T15:00:19Z"
lastCommitAt: "2026-10-03T09:23:28Z"
lastReleaseAt: "2026-09-03T02:11:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 50
maintainers: ["clubanderson", "hivecommons-hive[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/5743b9137e0d80a63ce356ee727f18fe62d97ab553daa3d20db26db3351a35fe/hivecommons/hive"
discussionCount: 3
---

</p>

# Hive

AI agent orchestration for open source projects. A single Go binary enumerates issues and pull/merge requests from connected work sources, classifies them by complexity, and dispatches work to AI agents (Claude, Copilot, Gemini, Goose) on adaptive cadences governed by queue depth.

Hive separates decisions into two layers: a **deterministic pipeline** of shell scripts handles filtering, classification, merge-gating, and enforcement before any LLM sees the work. Agents only handle judgment calls — reading code, reasoning about fixes, writing PRs.

## Quick Start

Two supported standalone runtimes. **Docker Compose is the default** and is what
the rest of this README assumes; **Podman** is a parallel supported choice, not
an experiment and not a recommendation over Docker. Pick one — they install the
same two services (Hive plus its authenticating gateway) and land the dashboard
on the same port.

| | [Docker Compose](#quick-start-docker-compose) | [Podman](#quick-start-podman) |
| --- | --- | --- |
| Lifecycle | `docker compose up -d` | Quadlet units under systemd |
| Runs as | the Docker daemon | rootful **or** rootless |
| Update path | pull and recreate; optional…
