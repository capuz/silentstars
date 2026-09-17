---
repo: "rleeon/hoard"
name: "hoard"
description: "Automatic, versioned game save sync across devices. Supports Steam, GOG, 20k+ games, emulators. Hoard-Cloud or Self-Host without account or telemetry. Open source (AGPL-3.0)."
readmeQualityOk: true
url: "https://github.com/rleeon/hoard"
homepage: "https://hoard.services/"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["backup", "cloud-storage", "emulators", "game-saves", "open-source", "self-hosted", "sync"]
stars: 105
forks: 9
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-05-03T14:02:27Z"
lastCommitAt: "2026-09-17T08:50:25Z"
lastReleaseAt: "2026-08-20T04:02:23Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 37
maintainers: ["rleeon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd40ec1f7f9c02fbf0d5ee669b12e6d5fab055c2432e1a8cfeb510a1e480adb/rleeon/hoard"
fundingLinks: ["GITHUB:https://github.com/rleeon", "CUSTOM:https://hoard.services/pricing"]
discussionCount: 1
---

# oard ([1.2](https://github.com/rleeon/hoard/blob/main/CHANGELOG.md) is comming guys)

> Steam Cloud is not a backup strategy. Hoard is.

**Hoard is an open-source (AGPL-3.0) game save backup and sync system.** 
You can Self-Host **Without Account or Telemetry**, or log in and play.
The desktop app and the CLI work the same against either. Self-hosting
needs no Hoard account and has no quota beyond your own disk.

> *Ships in eight languages, You can ask for other Language.*

Steam Cloud, GOG Galaxy and friends work fine — right up until they overwrite
a 200-hour save with a corrupted one from another machine, the publisher
kills the service, or the game just isn't covered. Hoard is the boring,
paranoid alternative: it snapshots your saves every time you stop playing,
hashes every file, and lets you roll back to any earlier version or pull
your entire library onto a fresh machine. Nothing is ever silently
overwritten — that's the entire point.

Auto-detects your games. Watches your saves. Syncs in the background.
Rolls back when things go wrong. That's it. That's Hoard.

*Necessity is the mother of invention — I created **Hoard** because I needed it.*

| Feature | What it means…
