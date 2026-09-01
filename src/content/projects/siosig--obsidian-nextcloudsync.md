---
repo: "siosig/obsidian-nextcloudsync"
name: "obsidian-nextcloudsync"
description: "A Nextcloud-specific Obsidian Vault synchronization plugin."
readmeQualityOk: true
url: "https://github.com/siosig/obsidian-nextcloudsync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 78
forks: 7
openIssues: 3
closedIssues: 25
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-08T06:23:41Z"
lastCommitAt: "2026-09-01T08:51:32Z"
lastReleaseAt: "2026-06-16T23:39:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 38
maintainers: ["siosig"]
openGraphImageUrl: "https://opengraph.githubassets.com/88eee2ae82dc59f8229370c218ac840abb4292826372ff45d78bf69dd99b8540/siosig/obsidian-nextcloudsync"
discussionCount: 9
---

# Nextcloud Sync for Obsidian

**Good news for anyone working across multiple desktops and mobile devices.**

The only cost you pay is waiting for the initial Vault index to complete on first install. From that moment on, you get:

- **Your writing is never lost** — the merge logic keeps your Vault in a clean, consistent state even when the same note is edited on multiple devices at once.
- **Sync fades into the background** — Nextcloud's fast differential sync means you'll stop noticing sync time altogether.
- **Works beyond Nextcloud too** — with slightly reduced features, it works against any standard WebDAV server as well.

---

Bidirectional sync between your Obsidian Vault and Nextcloud — built **specifically for Nextcloud**, not just generic WebDAV.

Most "WebDAV sync" plugins treat the server as a dumb file store: they compare modification times, copy files, and hope for the best. **Nextcloud Sync** instead talks to Nextcloud's own APIs (Capabilities, file IDs, checksums, versions, locking, Login Flow v2) to make syncing *safe*, *fast*, and *frictionless* — while still degrading gracefully to plain WebDAV when those APIs aren't available.

> A Japanese translation is…
