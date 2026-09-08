---
repo: "biomassa/tui-wave"
name: "tui-wave"
description: "A terminal audio file editor"
readmeQualityOk: true
url: "https://github.com/biomassa/tui-wave"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 33
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-23T14:33:30Z"
lastCommitAt: "2026-09-08T08:17:07Z"
lastReleaseAt: "2026-08-22T19:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["biomassa"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1f0cdaf5261b5f2ec6b6b31d3ed20c0c61bdf9b3838afae6a9ede3a6cd56a/biomassa/tui-wave"
---

# tui-wave

A keyboard-driven audio editor that runs in a terminal (mouse works too!).

tui-wave draws waveforms, plays and edits audio. It handles mono, stereo and multichannel
files. A file larger than the size threshold (4GB by default, and configurable) opens in
streaming mode and never loads into memory. That mode is what lets you audition, cut and
process the large session captures that software such as Cycling74's Max writes.

tui-wave is also a front end for three process backends. Two of them are optional and you
install them yourself:

- **Composer's Desktop Project (CDP)**, a set of command-line utilities that have a history of
  decades. They do time-domain and frequency-domain work you find nowhere else. Andrew Bentley,
  Archer Endrich, Richard Orton and Trevor Wishart founded the project in 1986.
- **praatAudioTools**, 457 sound-transformation scripts for Praat by Shai Cohen.
- **Airwindows**, 500 effects by Chris Johnson. This one needs no install, because tui-wave
  compiles it in.

One browser lists all three, and one chain can mix them.

Read [DOCUMENTATION.md](https://github.com/biomassa/tui-wave/blob/HEAD/DOCUMENTATION.md) to learn how to use it.

## What it…
