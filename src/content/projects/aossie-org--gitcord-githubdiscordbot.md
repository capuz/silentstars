---
repo: "AOSSIE-Org/Gitcord-GithubDiscordBot"
name: "Gitcord-GithubDiscordBot"
description: "Local-First Discord ↔ GitHub Automation for Organizations"
readmeQualityOk: true
url: "https://github.com/AOSSIE-Org/Gitcord-GithubDiscordBot"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["bot", "bots", "discord", "discord-bot", "docker", "github", "github-api", "gsoc", "gsoc-2026", "open-source"]
stars: 24
forks: 37
openIssues: 5
closedIssues: 45
watchers: 0
contributors: 58
recentReleases: 0
createdAt: "2026-01-20T06:48:01Z"
lastCommitAt: "2026-10-19T09:15:17Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 63
maintainers: ["shubham5080", "PrithvijitBose", "Sashang-debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba497bd16fde28f4d0d236621d5272548f5615ee8ba5116677766f7c277689e4/AOSSIE-Org/Gitcord-GithubDiscordBot"
fundingLinks: ["PATREON:https://patreon.com/AOSSIE", "OPEN_COLLECTIVE:https://opencollective.com/aossie", "BUY_ME_A_COFFEE:https://buymeacoffee.com/aossie", "CUSTOM:https://docs.stability.nexus/about-us/fund-us/donate"]
---

&nbsp;

&nbsp;&nbsp;

&nbsp;&nbsp;

&nbsp;&nbsp;

---

Gitcord is a local, offline‑first automation engine that reads GitHub activity and Discord state, then plans role changes and GitHub assignments in a deterministic, reviewable way. It is designed for safety: dry‑run and observer modes produce audit reports without mutating anything.

---

## 🚀 Features

- **Offline‑first execution**: run locally on demand, no daemon required.
- **Audit‑first workflow**: JSON + Markdown reports before any writes.
- **Deterministic planning**: identical inputs produce identical plans.
- **Permission‑aware IO**: readers degrade safely on missing permissions.
- **Discord Bot**: Interactive slash commands for identity linking, contributor profiles, metrics, and notifications.

---

## 💻 Tech Stack

### Backend

- Python 3.11+
- SQLite (local state)
- Pydantic + PyYAML

---

## ✅ Project Checklist

- [x] **Audit-first workflow**: reports generated for review.
- [x] **Dry-run default**: writes gated by mode and permissions.
- [x] **Permission-limited operation**: safe under missing permissions.

---

## 🔗 Repository Links

1. [Main…
