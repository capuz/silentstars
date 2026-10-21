---
repo: "nikserg/skim"
name: "skim"
description: "A free, open-source AI email client for Windows that doesn't suck (that hard). ~5 MB installer, BYOK AI."
readmeQualityOk: true
url: "https://github.com/nikserg/skim"
homepage: "https://skim-tech.com/"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [67, 24]
topics: ["ai", "email-client", "open-source", "rust", "tauri", "windows", "scoop-bucket"]
stars: 66
forks: 11
openIssues: 7
closedIssues: 20
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-12T09:37:00Z"
lastCommitAt: "2026-10-21T08:49:04Z"
lastReleaseAt: "2026-07-14T17:09:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 36
maintainers: ["nikserg", "github-actions[bot]", "gildas-refacto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1298153351/493b8f2c-29f7-4122-921e-a7f536d40970"
fundingLinks: ["GITHUB:https://github.com/nikserg"]
---

# Skim

**A free AI email client for Windows that doesn't suck _(that hard)_.**

Minimalist, native, fast. Bring your own AI key for the assistant and co-writer. No subscriptions, free forever.

Grab <code>Skim_x.y.z_x64-setup.exe</code> from the latest release</sub>

---

## Why Skim

Email clients usually come in two flavors: a browser cosplaying as an app, or a monstrous do-everything suite with ICQ-era vibes. Skim is neither:

- ⚡ **Native, not Chromium.** A Rust core with a system WebView2 UI (Tauri 2) — no bundled browser like Electron. The installer is a few megabytes, cold start is instant, idle memory is modest. No admin rights.
- ✂️ **Half the features, cut on purpose.** No calendar, no contacts manager, no rules, no filters, no snooze — none of the stuff you never actually use anyway. Fewer buttons, less cognitive load. Need a do-everything suite? Install Outlook.
- 🎯 **Actions when you need them.** Buttons appear only when they're useful; there's no menu bar at all. Skim's job is to surface the right action at the right moment.
- 🔒 **Local and private by default.** Your mail syncs over IMAP straight into a local SQLite cache. It works offline, search is instant, and…
