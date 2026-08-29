---
repo: "samwhosung/benilla"
name: "benilla"
description: "A from-scratch World of Warcraft 1.12.1 client in Rust + Bevy"
readmeQualityOk: true
url: "https://github.com/samwhosung/benilla"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 188
forks: 34
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 2
recentReleases: 0
createdAt: "2026-07-24T05:31:27Z"
lastCommitAt: "2026-08-29T10:23:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: ["samwhosung"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e3e4ad36cdddee9e42a840889abfeb642b3f3e2c283a804a985519ee2b26f49/samwhosung/benilla"
---

<h1>benilla</h1>
  <p><b>A from-scratch World of Warcraft 1.12.1 client in Rust and <a href="https://bevy.org">Bevy</a></b></p>
  <p>
  </p>
</div>

> [!IMPORTANT]
> **Issues and pull requests are closed here.** benilla is a solo project developed in a private
> tree; this repo is its export, published as squashed snapshots, so a PR here has nothing to land
> on. The best way to contribute is to join the [Discord](https://discord.gg/wJSJx467G4) and report
> the bugs you find. Questions and ideas are welcome in the same place.

benilla speaks the original 1.12.1 protocol, so it connects to any server the real client could,
and reads its game data at runtime from your own 1.12.1 install. Every file format and the network
protocol are implemented from scratch, with no original client code, no third-party WoW crates,
and no bundled game assets.

## What works

- **Formats:** readers for the full asset stack (MPQ patch chain, BLP, DBC, ADT/WDT/WDL, M2, WMO),
  wired into Bevy as an asset source.
- **World:** streamed terrain out to the horizon, portal-culled WMOs with interior lighting,
  doodads and ground clutter, swimmable liquids, sky and weather, and the client's own day/night…
