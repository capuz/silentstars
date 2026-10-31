---
repo: "XMZO/Hanagram-web"
name: "Hanagram-web"
description: "Self-hosted, multi-user web workspace for Telegram sessions and Steam Guard authenticators. Per-user encryption, passkey sign-in, one-command Docker deploy."
readmeQualityOk: true
url: "https://github.com/XMZO/Hanagram-web"
language: "Rust"
languages: ["Rust"]
languagePcts: [70]
topics: ["2fa", "authenticator", "axum", "docker", "passkeys", "rust", "security", "self-hosted", "steam", "steam-guard"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-12T09:47:36Z"
lastCommitAt: "2026-10-31T09:53:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 56
undervaluedScore: 41
maintainers: ["XMZO"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0d617569950076153bdcbcbe4fd0ca628547b640d9c93879036cba7469d90ec/XMZO/Hanagram-web"
---

# Hanagram-web

**A self-hosted, multi-user account security workspace for anyone who manages Telegram sessions and Steam Guard authenticators.**

Keep Telegram sessions online to catch login codes, and manage Steam Guard authenticators (codes, trade confirmations, login approvals) from one browser tab. Each user's data is encrypted at rest with their own key. Built in Rust (Axum + Tera), ships as a single binary in a Docker image, UI in English and Chinese.

English | [简体中文](https://github.com/XMZO/Hanagram-web/blob/HEAD/README.zh-CN.md)

## Who is it for

Two-factor codes and signed-in sessions tend to end up scattered across phones, desktop apps and exported files. Hanagram-web puts them in one encrypted place that you host yourself. It is built for:

- **Self-hosters** who want their 2FA secrets and sessions on hardware they control.
- **People and community admins with several Telegram accounts** who need every login code in one place.
- **Steam players and traders** who want Guard codes and trade confirmations in a browser, not tied to a single phone.
- **Admins of a family, club or small team** who run one instance and give everyone a separate, isolated account.

## Why…
