---
repo: "boburning/portcove"
name: "portcove"
description: "Local-first manager for decompilations, recompilations, and native PC ports."
readmeQualityOk: true
url: "https://github.com/boburning/portcove"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [51, 24]
topics: ["decompilation", "game-ports", "recompilation", "rust", "tauri"]
stars: 5
forks: 0
openIssues: 340
closedIssues: 231
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-02T10:10:17Z"
lastCommitAt: "2026-09-29T08:10:13Z"
lastReleaseAt: "2026-09-08T16:48:17Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 88
undervaluedScore: 51
maintainers: ["boburning", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf1ee14315c64e56641974d36cfc6615246932692376f527294303463eebef4d/boburning/portcove"
discussionCount: 0
---

</p>

<h1 align="center">Portcove</h1>

  Install, update, and play native game ports.
</p>

</p>

Portcove brings native game ports into one local library. Choose a port, add the
game files it needs, and use the desktop app or command-line tool to manage
supported installations, updates, and backups. Some ports use an existing
installation rather than installing or updating files through Portcove.

Existing Alpha 1 libraries can be carried forward with the documented
[upgrade and recovery procedure](https://github.com/boburning/portcove/blob/HEAD/docs/UPGRADING.md).

> [!NOTE]
> Portcove does not include or download ROMs, disc images, BIOS files, or other
> copyrighted game data. It checks game files locally and does not
> upload them. You can use their current location, copy them into Portcove, or
> explicitly move them after reviewing the consequences. A completed Move
> removes the original only after a verified managed copy is registered.

## What Portcove does

- Browse a catalog of native ports and manage them as one library.
- Check game files locally. A saved location can point to the
  current file; copying into Portcove leaves the original in place, while Move…
