---
repo: "nexxeln/torrential"
name: "torrential"
description: "Find films and shows, and watch them on your Mac, phone, or TV while they download."
readmeQualityOk: true
url: "https://github.com/nexxeln/torrential"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["ai-agents", "bittorrent", "cli", "libtorrent", "rust", "torrent", "tui"]
stars: 119
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-18T00:12:56Z"
lastCommitAt: "2026-11-15T05:09:57Z"
lastReleaseAt: "2026-11-14T11:26:47Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 31
maintainers: ["nexxeln"]
openGraphImageUrl: "https://opengraph.githubassets.com/30da8920ba5a4a6fbc703b7b72b4e4a796b01f46fa43d252d36180c848716af7/nexxeln/torrential"
---

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/nexxeln/torrential/main/install.sh | sh
```

The script puts one file at `~/.local/bin/torrential`. torrential runs on macOS 14 or later on Apple silicon, and on 64-bit Linux.

The engine starts at login and keeps running, so your phone and TV can always reach it. It resumes downloads after a restart and installs updates when nothing is playing. To stop it starting at login, run `torrential engine uninstall`.

You need Rust, and Nix with flakes turned on.

```sh
git clone --recursive https://github.com/nexxeln/torrential
cd torrential
nix develop -c cargo install --path crates/torrential
```

## Watch on the Mac

```sh
torrential web
```

Search by name. Each film or show is one card, not a list of torrents. Press Play. torrential picks the torrent that suits your language and the screen you watch on, and moves to the next one if it does not start. While you watch, the film gets the bandwidth before other downloads.

What you play goes to a folder that only torrential uses, capped at 20 GiB. When it fills, torrential deletes the plays you watched longest ago, but never the film you watched last or a title you saved.…
