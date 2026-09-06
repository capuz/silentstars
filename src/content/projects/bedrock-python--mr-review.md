---
repo: "bedrock-python/mr-review"
name: "mr-review"
description: "AI-powered merge request review tool. Connects to GitLab, GitHub, Gitea, Forgejo, or Bitbucket. Works with Claude, OpenAI, or any OpenAI-compatible model. Self-hosted, no data leaves your machine."
readmeQualityOk: true
url: "https://github.com/bedrock-python/mr-review"
homepage: "https://bedrock-python.github.io/mr-review/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [57, 38]
topics: ["ai", "code-review", "fastapi", "github", "gitlab", "llm", "python", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-15T13:03:08Z"
lastCommitAt: "2026-09-06T08:03:30Z"
lastReleaseAt: "2026-08-15T08:36:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 57
maintainers: ["AlexeyShalaev", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38e461a4da5bac61c8d7d64e307f8482833bee5078de66f43f2d43b548a5fbfc/bedrock-python/mr-review"
---

# mr-review

AI-powered merge request review tool. Runs locally via Docker, connects to GitLab, GitHub, Gitea, Forgejo, or Bitbucket, and works with Claude, OpenAI, or any OpenAI-compatible model.

> **Full documentation → [bedrock-python.github.io/mr-review](https://bedrock-python.github.io/mr-review/)**

---

## Quick start

```bash
mkdir mr-review && cd mr-review
curl -O https://raw.githubusercontent.com/bedrock-python/mr-review/master/deploy/all-in-one/docker-compose.yml
docker compose up -d
```

Open **http://localhost:8000**, add an AI provider and a VCS host, then pick an MR to review.

That's it — no accounts, no cloud, no data leaves your machine.

---

## How it works

Pick a merge request and let the AI walk through it in four stages:

| Stage | What happens |
|-------|-------------|
| **Brief** | Choose a review preset (thorough / security / style / performance) and add custom instructions |
| **Dispatch** | AI reviews the diff — comments appear as they stream in |
| **Polish** | Edit, keep, or dismiss individual comments before posting |
| **Post** | Approved comments are sent back to the MR as inline review notes |

---

## Deployment

### All-in-one (recommended)…
