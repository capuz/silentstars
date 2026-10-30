---
repo: "ricktek954/newchirp"
name: "newchirp"
description: "A modern desktop channel editor for amateur and GMRS radios."
readmeQualityOk: true
url: "https://github.com/ricktek954/newchirp"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [59, 29]
stars: 20
forks: 3
openIssues: 9
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-23T09:08:40Z"
lastCommitAt: "2026-10-30T10:22:38Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 32
maintainers: ["ricktek954", "Rlopez", "Dirtpusher"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e4b2c88c1992a933117f694d75bd56060839e66cf6936a89c40d01601d73817/ricktek954/newchirp"
---

# NewChirp

NewChirp is a Flutter desktop channel editor for amateur and GMRS radios. It
uses the CHIRP driver tree as a compatibility layer for safe radio transfers
while presenting a fresh desktop interface.

See [docs/SOFTWARE_ROADMAP.md](https://github.com/ricktek954/newchirp/blob/HEAD/docs/SOFTWARE_ROADMAP.md) for the complete
implementation history, architecture, known risks, and prioritized next work.

## Included

- CHIRP-compatible CSV import and export
- CSV/GMRS template insertion starting at any channel number
- Searchable channel library with validation and detailed editing
- Drag-and-drop channel rearrangement across the radio's occupied memory slots
- Optional empty-slot view that keeps memory gaps visible and lets a channel
  be created directly in a specific slot
- Right-click copy, cut, paste, and duplicate for channel rows
- Right-click clear channel, which clears it from the radio on the next write
- Undo/redo with keyboard shortcuts
- 22-channel GMRS starter library
- RepeaterBook search with state, location, radius, mode, and open-repeater
  filters; preview on a synchronized interactive map and selectively insert
  amateur or GMRS repeater channels
- USB…
