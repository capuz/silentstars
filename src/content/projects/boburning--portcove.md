---
repo: "boburning/portcove"
name: "portcove"
description: "Local-first manager for decompilations, recompilations, and native PC ports."
readmeQualityOk: true
url: "https://github.com/boburning/portcove"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [64, 31]
topics: ["decompilation", "game-ports", "recompilation", "rust", "tauri"]
stars: 12
forks: 0
openIssues: 1541
closedIssues: 428
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-02T10:10:17Z"
lastCommitAt: "2026-10-30T10:23:01Z"
lastReleaseAt: "2026-09-08T16:48:17Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 84
undervaluedScore: 42
maintainers: ["boburning", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7a209365a6f362c57e39e8b299409930ccd592f978db38a3f1ca3bcd0bce3d/boburning/portcove"
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
