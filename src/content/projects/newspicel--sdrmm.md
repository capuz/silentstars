---
repo: "Newspicel/sdrmm"
name: "sdrmm"
description: "modular, client–server software-defined radio"
readmeQualityOk: true
url: "https://github.com/Newspicel/sdrmm"
homepage: "https://sdrmm.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["sdr", "dsp", "hackrf", "ham-radio", "rtl-sdr", "rust", "software-defined-radio"]
stars: 292
forks: 20
openIssues: 1
closedIssues: 42
watchers: 10
contributors: 2
recentReleases: 10
createdAt: "2026-08-08T23:09:41Z"
lastCommitAt: "2026-10-07T10:31:30Z"
lastReleaseAt: "2026-08-16T19:46:09Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["Newspicel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c736c45486566d1ac0df2ae4a551283db73e8b2b027b6299d14668ca4aad9738/Newspicel/sdrmm"
fundingLinks: ["GITHUB:https://github.com/Newspicel"]
---

# SDR--

A software-defined radio application for listening, decoding, and recording. Connect radios,
channels, and displays in **Patch** view, then pin your everyday controls to **Rack** view.

Run the desktop app with a local SDR, or place the server near your antenna and connect through
a browser. Both use the same receiver engine and interface.

Read the [docs](https://sdrmm.com/docs/). Questions or ideas? Join the
[Discord](https://discord.gg/dYaRyGwBNw).

## Install

Download a desktop installer or portable server from
[GitHub Releases](https://github.com/Newspicel/sdrmm/releases), or
[build](https://sdrmm.com/docs/development/building) it yourself.
The [installation guide](https://sdrmm.com/docs/getting-started/install)
covers macOS, Windows, Linux, Homebrew, APT, DNF, Nix, and Docker.

## Start with an RTL-SDR

1. Plug in the RTL-SDR and pick it on the **Device** node. Set the rate to **2.4 MS/s**.
2. Add a **WFM** channel from **+ Node** and set it to a local FM station.
3. Wire Device `iq` to WFM `iq`, and WFM `audio` to the Speaker.
4. Start the Speaker. Press `p` on a node to pin it to the Rack.

[Your first…
