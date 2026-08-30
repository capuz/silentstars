---
repo: "avraham12200540/extsync"
name: "extsync"
description: "ExtSync — distribute, install and auto-update private Chrome extensions outside the Web Store (FastAPI + Next.js + Windows Agent)."
readmeQualityOk: true
url: "https://github.com/avraham12200540/extsync"
homepage: "https://extsync.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 32]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-09T13:58:32Z"
lastCommitAt: "2026-08-30T09:24:19Z"
lastReleaseAt: "2026-06-10T21:51:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 66
maintainers: ["avraham12200540"]
openGraphImageUrl: "https://opengraph.githubassets.com/0deedd8ed29330a0b9217d861bf76d06e67d1a62262fda2cf643d5e2019f2f9f/avraham12200540/extsync"
---

# ExtSync

**Distribute, install and auto-update private Chrome extensions - outside the Chrome Web Store.**

[🌐 extsync.com](https://extsync.com) · [📦 Store](https://extsync.com/store) · [📖 Guide](https://extsync.com/docs) · [🇮🇱 עברית](https://github.com/avraham12200540/extsync/blob/HEAD/README.he.md)

</div>

## What is ExtSync?

ExtSync is a platform to distribute, install, manage and **auto-update private (or unlisted) Chrome Manifest V3 extensions outside the Chrome Web Store** - for private, internal and team extensions.

Every release is **Ed25519-signed** and SHA-256 verified. A small Windows Agent installs the extension once, then keeps it up to date automatically, with auto-rollback on failed updates.

> ExtSync is not a replacement for the Chrome Web Store. The first install of an unpacked extension still requires enabling Developer mode and loading the folder once in `chrome://extensions`. ExtSync makes that one step as simple as possible and then manages every update after it. See [architecture/limitations.md](https://github.com/avraham12200540/extsync/blob/HEAD/docs/architecture/limitations.md).

## Highlights

- 🔐 **Signed releases** - Ed25519 over canonical…
