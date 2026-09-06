---
repo: "MrRobotoGit/tiramisu"
name: "tiramisu"
description: "The most advanced BitTorrent engine and FUSE virtual filesystem for live streaming to your private Plex/Jellyfin library. Forget Real-Debrid."
readmeQualityOk: true
url: "https://github.com/MrRobotoGit/tiramisu"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["plex-media-server", "torrent", "fuse", "go-fuse", "golang", "jellyfin", "p2p", "python", "raspberry-pi", "bittorent"]
stars: 137
forks: 10
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-02-27T20:21:30Z"
lastCommitAt: "2026-09-06T08:05:05Z"
lastReleaseAt: "2026-03-06T23:05:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 30
maintainers: ["MrRobotoGit"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ae0db972fab2f58ca229c7bc4d48578dbe2b8893149442666b991d147a31c8d/MrRobotoGit/tiramisu"
fundingLinks: ["GITHUB:https://github.com/MrRobotoGit"]
---

```
████████╗ ██╗ ██████╗   █████╗  ███╗   ███╗ ██╗ ███████╗ ██╗   ██╗
╚══██╔══╝ ██║ ██╔══██╗ ██╔══██╗ ████╗ ████║ ██║ ██╔════╝ ██║   ██║
   ██║    ██║ ██████╔╝ ███████║ ██╔████╔██║ ██║ ███████╗ ██║   ██║
   ██║    ██║ ██╔══██╗ ██╔══██║ ██║╚██╔╝██║ ██║ ╚════██║ ██║   ██║
   ██║    ██║ ██║  ██║ ██║  ██║ ██║ ╚═╝ ██║ ██║ ███████║ ╚██████╔╝
   ╚═╝    ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝     ╚═╝ ╚═╝ ╚══════╝  ╚═════╝
```

<h1><sub><sub><strong>Tiramisu</strong> is the most advanced BitTorrent engine and FUSE virtual filesystem for live streaming to your private Plex/Jellyfin library. Forget Real-Debrid.</sub></sub></h1>

> [!NOTE]
> This project used to be called GoStream. It is now Tiramisu, same project, same codebase, just a new name. Nothing about how it works has changed, and everything in this README still applies. If you are upgrading from an older install, note that the binary name, config paths, and systemd service name have all changed too, so a fresh run of the install script is the easiest way to pick up the new layout.

---

Tiramisu exposes a **custom FUSE virtual filesystem** where every `.mkv` file is a perfect illusion: it looks like a real file on disk, but every byte is served…
