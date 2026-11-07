---
repo: "kristofferR/Carrier"
name: "Carrier"
description: "Free, open-source Facebook Messenger desktop app for macOS, Windows & Linux - no Feed, Reels, or Facebook clutter. Tiny Tauri build with native notifications and auto-updates."
readmeQualityOk: true
url: "https://github.com/kristofferR/Carrier"
language: "TypeScript"
languages: ["TypeScript", "Rust", "JavaScript"]
languagePcts: [43, 33, 22]
topics: ["desktop-app", "distraction-free", "facebook-messenger", "linux", "macos", "messenger", "messenger-alternative", "no-electron", "rust", "tauri"]
stars: 16
forks: 4
openIssues: 33
closedIssues: 129
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-27T00:56:03Z"
lastCommitAt: "2026-11-07T22:51:03Z"
lastReleaseAt: "2026-07-16T01:33:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["kristofferR", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a43eed4985469fa6ec0516e68146b849d7200b583ac108c28aed159382b381e2/kristofferR/Carrier"
---

A free, open-source desktop app for macOS, Windows, and Linux.

    Intel Mac, Windows ARM, Linux ARM, portable Windows, <code>.deb</code>, or <code>.rpm</code>?

---

Meta discontinued its Messenger desktop apps, then retired the standalone
`messenger.com` experience. Carrier brings the focused desktop experience back:
it opens `facebook.com/messages` in a dedicated window and removes Facebook's
Feed, Reels, Marketplace, global search, and other surrounding chrome.

Carrier uses the operating system's WebView through
[Tauri](https://tauri.app), rather than shipping another copy of Chromium. The
macOS and Windows installers are roughly **2–3.5 MB**, while still providing
native notifications, unread badges, tray integration, global shortcuts, and
cryptographically verified updates.

## Why Carrier?

- **Just your conversations** — no Feed, Reels, Marketplace, or browser tabs.
- **[Schedule messages](https://github.com/kristofferR/Carrier/blob/HEAD/docs/scheduled-sending.md)** — send texts at a chosen date
  and time. Carrier must be running and connected.
- **Small by design** — one system WebView instead of a bundled browser engine.
- **Real desktop notifications** — including…
