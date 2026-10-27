---
repo: "ChenNeuroscience/waveform"
name: "waveform"
description: "browser-based GUI for working with extra-neuronal waveform data"
readmeQualityOk: true
url: "https://github.com/ChenNeuroscience/waveform"
homepage: "http://chenneuroscience.github.io/waveform/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
stars: 11
forks: 4
openIssues: 17
closedIssues: 22
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2013-05-26T12:05:39Z"
lastCommitAt: "2026-10-27T09:17:27Z"
lastReleaseAt: "2016-04-13T22:03:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 72
maintainers: ["d1manson", "annie2013"]
openGraphImageUrl: "https://opengraph.githubassets.com/05496c5c6fc8918025bf25a2e7695acc245b14fa9152b6655181e8e3a05cf8b0/ChenNeuroscience/waveform"
---

# Waveform 2

## WARNING: v2 is not quite ready for use - see [Waveform v1](https://github.com/ChenNeuroscience/waveform/tree/waveform-v1).

A local-first workspace for LTX neural recordings, rebuilt with **Rust / WebAssembly, React, TypeScript and WebGL2**. Import recording files, move quickly between trials and tetrodes, inspect cells, and edit/export cuts with a separate undo/redo history for each cut.

The replacement starts from the original `gh-pages` implementation at `bf0f51bd75cd44a6edecfa09e10e5ae68c5961c8`. Abandoned rewrite branches were not used. The original application and source are preserved on the [waveform-v1 branch](https://github.com/ChenNeuroscience/waveform/tree/waveform-v1).

## Features

- Drop files or folders, or use the file/folder picker. Group `.set`, `.pos`, numeric tetrode files, `.cut` and `.clu.N` by trial and tetrode. Add files incrementally and select alternative cuts.
- Six GPU amplitude projections, cell isolation, a mean-spike-time drift view, additive point density and point size, drawing every spike.
- Compact light desktop layout: files, position and feature projections on the left, a scrolling cell tile wall on the right. Tiles size to…
