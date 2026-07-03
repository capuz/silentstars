---
repo: "alienplatform/alien"
name: "alien"
description: "Infrastructure for managed self-hosting"
url: "https://github.com/alienplatform/alien"
homepage: "https://alien.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 34]
topics: ["ai", "aws", "azure", "google-cloud", "local-first", "on-premise"]
stars: 178
forks: 8
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-03-12T17:20:35Z"
lastCommitAt: "2026-07-03T12:21:46Z"
lastReleaseAt: "2026-06-11T14:59:56Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 77
undervaluedScore: 27
maintainers: ["alongubkin", "github-actions[bot]", "ItamarZand88"]
openGraphImageUrl: "https://opengraph.githubassets.com/7696220651cd75a2e38f43d91b43e0f7bcc97b70d945695c4227d5a9b7084bb5/alienplatform/alien"
---

# Alien

Alien provides infrastructure to deploy and operate software inside your users' environments, while retaining centralized control over updates, monitoring, and lifecycle management.

## Why Alien?

Self-hosting works - *until someone starts paying for your software*.

Customers run it in their own environment, but they don't actually know how to operate it. They might change something small like Postgres version, environment variables, IAM, firewall rules, and things start failing. From their perspective, your product is broken. And even if the root cause is on their side, it doesn't matter... the customer is always right, you're still the one expected to fix it.

But you can't. You don't have access to their environment. You don't have real visibility. You can't run anything yourself. So you're stuck debugging a system you don't control, through screenshots and copy-pasted logs on a Zoom call. You end up responsible for something you don't control.

Alien provides a better model: **managed self-hosting**.

## Quickstart

Install the CLI:

```bash title="macOS / Linux"
curl -fsSL https://alien.dev/install | sh
export PATH="$HOME/.local/bin:$PATH"
```

```powershell…
