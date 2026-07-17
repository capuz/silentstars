---
repo: "dl-alexandre/Google-Play-Developer-CLI"
name: "Google-Play-Developer-CLI"
description: "A fast, lightweight, AI-agent friendly CLI for Google Play"
readmeQualityOk: true
url: "https://github.com/dl-alexandre/Google-Play-Developer-CLI"
homepage: "https://dl-alexandre.github.io/Google-Play-Developer-CLI/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 33
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-23T22:00:41Z"
lastCommitAt: "2026-07-17T05:59:55Z"
lastReleaseAt: "2026-02-19T15:07:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 39
maintainers: ["dl-alexandre", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e93e98dc2c249d6f47b5213a0278e74a67b83220fd0d15cb4f1cc5aaa9ce09b1/dl-alexandre/Google-Play-Developer-CLI"
---

# gpd – Google Play Developer CLI

**The fast, lightweight, zero-Ruby alternative to Fastlane for Google Play Console.**

- ⚡ **Sub-200ms cold start** — no Ruby VM bloat, instant even on slow CI runners
- 🖥️ **JSON-first output** — built for AI agents, scripts, and automation (predictable exit codes, no parsing HTML)
- 🔒 **Secure by default** — platform keystore + PII redaction, never leak service account keys
- ✅ **Full Play Console coverage** — publishing, reviews, analytics, vitals, monetization, integrity + 61+ commands
- 🛠️ **Cross-platform** — macOS, Linux, Windows via Homebrew, curl, or Go install

If Fastlane feels heavy/slow, gpd gives you the same power with a tiny footprint and modern DX.

**[Quick Install →](#quick-install)**

---

## gpd vs Fastlane

| Feature | gpd (Google-Play-Developer-CLI) | Fastlane (supply) |
|---------|----------------------------------|-------------------|
| Cold start time | <200ms | 2–10s+ (Ruby boot) |
| Runtime footprint | ~10–20 MB | 100+ MB + gems |
| Language / Deps | Go – single binary | Ruby + heavy dependencies |
| Output format | JSON-first, machine-readable | Human text + plugins |
| AI/Script friendliness | Designed for agents…
