---
repo: "boburning/portcove"
name: "portcove"
description: "Local-first manager for decompilations, recompilations, and native PC ports."
readmeQualityOk: true
url: "https://github.com/boburning/portcove"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [65, 30]
topics: ["decompilation", "game-ports", "recompilation", "rust", "tauri"]
stars: 13
forks: 0
openIssues: 1254
closedIssues: 868
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-09-02T10:10:17Z"
lastCommitAt: "2026-11-07T13:54:48Z"
lastReleaseAt: "2026-11-07T06:08:09Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 88
undervaluedScore: 46
maintainers: ["boburning", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb893f1223fc7f3ecdc3c516f50787085eba5f70a15aae2f0f5c4448900c1b0/boburning/portcove"
discussionCount: 0
---

Install, update, and play native game ports.

Portcove brings native game ports into one local library. Choose a port, add the
game files it needs, and use the desktop app or command-line tool to manage
supported installations, updates, and backups. Some ports use an existing
installation rather than installing or updating files through Portcove.

_Windows development build, October 1, 2026: an installed game, available ports,
and real mixed artwork. This is the application, not a mockup; the pictured
design and default covers are newer than the published Alpha 2 preview._

Existing Alpha 1 libraries can be carried forward with the documented
[upgrade and recovery procedure](https://github.com/boburning/portcove/blob/HEAD/docs/UPGRADING.md).

> [!NOTE]
> Portcove does not include or download ROMs, disc images, BIOS files, or other
> copyrighted game data. It checks game files locally and does not
> upload them. You can use their current location, copy them into Portcove, or
> explicitly move them after reviewing the consequences. A completed Move
> removes the original only after a verified managed copy is registered.

## What Portcove does

### For players

- Browse a catalog of…
