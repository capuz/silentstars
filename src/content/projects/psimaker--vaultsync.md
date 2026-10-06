---
repo: "psimaker/vaultsync"
name: "vaultsync"
description: "Self-hosted Obsidian vault sync for iOS — powered by Syncthing."
readmeQualityOk: true
url: "https://github.com/psimaker/vaultsync"
homepage: "https://vaultsync.eu"
language: "Swift"
languages: ["Swift", "Go"]
languagePcts: [50, 47]
topics: ["homelab", "ios", "notes", "obsidian", "privacy", "self-hosted", "swift", "syncthing"]
stars: 146
forks: 5
openIssues: 24
closedIssues: 67
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-04-06T15:38:12Z"
lastCommitAt: "2026-10-06T10:41:25Z"
lastReleaseAt: "2026-07-07T08:36:36Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 30
maintainers: ["psimaker", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59c0cd26b1248213d3208eb259531374eee04591d6f40fdd4228ea86898bd14e/psimaker/vaultsync"
---

# [VaultSync](https://apps.apple.com/app/vaultsync/id6761845197)

**Self-hosted Obsidian vault sync for iPhone and iPad.**<br>
Your notes sync peer-to-peer over Syncthing, straight into Obsidian's iOS sandbox — no note cloud, no account, no tracking.

---

## 🔭 Why VaultSync

- **Peer-to-peer & private** — syncs directly between your own devices over [Syncthing](https://syncthing.net/). No note cloud, no account, no tracking.
- **Lands in Obsidian** — files sync into Obsidian's iOS sandbox, where the app already looks for them.
- **Pair by QR, resolve conflicts** — connect your server in seconds; settle Markdown conflicts with side-by-side diffs.
- **Server changes can wake your iPhone** — optional Cloud Relay asks iOS to wake the app after the helper observes a server change. The activity timeline shows local sync activity, while Diagnostics keeps Relay, delivery, and local-data evidence separate.

*VoiceOver and Dynamic Type throughout. Localized in English, German, Spanish, and Simplified Chinese. Independent project — not affiliated with Obsidian or Syncthing.*

---

## 🧭 How it works

Syncthing runs on a machine you keep on; VaultSync joins as a peer and syncs into…
