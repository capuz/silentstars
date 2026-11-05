---
repo: "beneaze/ClubCraft"
name: "ClubCraft"
description: "Open-source DJ studio + live performance app in Rust: studio-grade stem separation (HTDemucs + Mel-Band RoFormer), automatic cues, beat-matched mixes, VirtualDJ-style decks"
readmeQualityOk: true
url: "https://github.com/beneaze/ClubCraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 26
forks: 3
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-10-14T09:54:59Z"
lastCommitAt: "2026-11-05T00:21:41Z"
lastReleaseAt: "2026-10-25T14:29:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 40
maintainers: ["beneaze", "timz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bef0e848733138c9f08620631a72c1d3e5bb8fdbfff1792276fb2168b28be423/beneaze/ClubCraft"
---

Separate tracks into vocals, melody, bass and drums, let the analysis find the beats, keys, drops and mix points,<br>
  design beat-matched transitions in the studio, then take the same mix out on the live decks.

      Meta's HTDemucs and Mel-Band RoFormer run natively on the Apple GPU (CoreML) or any DX12 GPU (DirectML). On real tracks they match the PyTorch reference to more than 100 dB.
      Every track gets a beat grid, key, energy, sections and eight hot cues: Start, Mix In, Vocal, Build, Drop, Break and Mix Out. You don't place a single marker.
      One library and one analysis. A mix designed in the studio plays on the live decks with the same mix points, and its auto cues are already on the pads.
      A lock-free Rust audio engine: about 1.5 % CPU per deck with keylock, stems and FX. Tracks that are playing stay locked in RAM, so playback doesn't stutter when the Mac is short on memory. Mixes stream track by track, so a 28-minute export stays under 300 MB.

## Features

Every screenshot here is the real app at work on a 23-track mix. ClubCraft captures them itself through its developer control channel.

      Drop tracks in and <b>✨ Harmonize</b> orders them by Camelot…
