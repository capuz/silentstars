---
repo: "Glad-Labs/poindexter"
name: "poindexter"
description: "The open-source AI content factory that runs on your PC — discovers topics, researches, writes, reviews with multi-model QA, and publishes. Local-first via Ollama, $0 API costs."
readmeQualityOk: true
url: "https://github.com/Glad-Labs/poindexter"
homepage: "https://www.gladlabs.io"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai", "ai-content", "automation", "blog-engine", "content-pipeline", "fastapi", "grafana", "headless-cms", "llm", "ollama"]
stars: 5
forks: 0
openIssues: 51
closedIssues: 825
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-04-10T02:25:55Z"
lastCommitAt: "2026-08-26T04:16:25Z"
lastReleaseAt: "2026-05-28T06:23:24Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["mattg-stack", "glad-labs-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1206534248/3c985862-b5f4-4238-89b4-279f8312bf0b"
fundingLinks: ["GITHUB:https://github.com/Glad-Labs", "CUSTOM:https://buymeacoffee.com/gladlabs"]
discussionCount: 2
---

**One engine that discovers topics, researches them, writes long-form posts, tears them apart in review, and publishes the survivors — on your GPU, with zero API costs.**

[Quick start](#quick-start) · [What it does](#what-it-does) · [The QA gauntlet](#built-to-reject-its-own-work) · [Architecture](#architecture) · [Docs](https://gladlabs.mintlify.app/docs/welcome) · [Pro](#poindexter-pro)

</div>

---

This is not a demo repo. Poindexter is the production system behind [gladlabs.io](https://www.gladlabs.io) — 166 live posts and counting, every one generated, reviewed, and published by this pipeline on a single PC. Here is the operator's actual view of it running:

_The Pipeline dashboard (ships with the repo): drafts arrive scored, weak ones are auto-rejected, survivors wait for your one-click approval._

## Quick start

From clean machine to a running pipeline in about 30 minutes — most of it one-time model downloads.

**Prereqs:** [Docker](https://docker.com) · [Ollama](https://ollama.com) · Python 3.13+ · NVIDIA GPU with 8 GB+ VRAM (CPU works, just slowly) · Node.js 22+ only if you want the optional Next.js frontend. **Windows:** run from Git Bash or WSL2.

```bash
# 1. Clone…
