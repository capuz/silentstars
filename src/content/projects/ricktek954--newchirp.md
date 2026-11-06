---
repo: "ricktek954/newchirp"
name: "newchirp"
description: "A modern desktop channel editor for amateur and GMRS radios."
readmeQualityOk: true
url: "https://github.com/ricktek954/newchirp"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [47, 46]
stars: 29
forks: 6
openIssues: 10
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-08-23T09:08:40Z"
lastCommitAt: "2026-11-06T13:19:42Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 31
maintainers: ["ricktek954", "Rlopez", "marianomd"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ec900035e4ac9e255d274587a025639c75074d269f467d0a3b177d7ed290b71/ricktek954/newchirp"
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
- Multi-row selection with Shift and Cmd/Ctrl, plus a CHIRP-style Properties
  editor that applies only modified fields across the selected channels
- Drag-and-drop channel rearrangement across the radio's occupied memory slots
- Optional empty-slot view that keeps memory gaps visible and lets a channel
  be created directly in a specific slot
- Right-click copy, cut, paste, and duplicate for channel rows
- Right-click clear channel, which clears it from the radio on the next write
- Undo/redo with keyboard shortcuts
- 22-channel GMRS starter library
- RepeaterBook search with state, location,…
