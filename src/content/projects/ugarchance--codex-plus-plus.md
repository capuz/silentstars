---
repo: "ugarchance/codex-plus-plus"
name: "codex-plus-plus"
description: "Multiple ChatGPT subscriptions in one Codex desktop app — switch accounts, per-account usage, original app untouched. macOS."
readmeQualityOk: true
url: "https://github.com/ugarchance/codex-plus-plus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["chatgpt", "codex", "developer-tools", "electron", "macos", "openai", "reverse-engineering"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-16T03:18:15Z"
lastCommitAt: "2026-09-09T08:20:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["ugarchance", "ahmedhfz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7095224789bd4dab3f1daa95c429bbecedb76000c66ab226c00e08486720a344/ugarchance/codex-plus-plus"
---

# Codex++

Multiple ChatGPT subscriptions in one Codex desktop app.

Windows 26.901 also includes **Settings → Providers**, directly below Analytics:
multiple API connections, enabled models and efforts, and account usage in one
compact settings pane. The provider catalog can be refreshed from codex-router;
OpenCode Go and paid Zen remain separate connections. See the
[provider setup and current adapter limits](https://github.com/ugarchance/codex-plus-plus/blob/HEAD/docs/providers.md).

Codex++ installs a second app next to the original — on macOS next to
`ChatGPT.app`, on Windows as a per-user copy of the store-installed Codex app —
without touching the original. Every subscription you connect shows up in the
profile menu with its own avatar, plan and remaining usage. Click a row to
switch the whole app to that account — history, projects and skills stay
shared.

The original app is left exactly as it is. You can go back to it whenever you
want.

## Install

### Install via prompt

To install Codex++ using an AI coding agent, paste this prompt into the assistant:

> Clone the repository (or work from this local checkout) and run the installer for this operating system…
