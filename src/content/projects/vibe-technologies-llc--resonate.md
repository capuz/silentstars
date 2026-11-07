---
repo: "vibe-technologies-llc/resonate"
name: "resonate"
description: "Opinionated media player"
readmeQualityOk: true
url: "https://github.com/vibe-technologies-llc/resonate"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["rust", "media-player"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-09-23T23:46:27Z"
lastCommitAt: "2026-11-07T16:11:39Z"
lastReleaseAt: "2026-11-07T00:48:00Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["Tecnio", "Trol"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fafe9ef4a47117efcb88077fa213086f94edbde16d2a2373e4e7b5d63c62091/vibe-technologies-llc/resonate"
---

# Resonate

A music player for audio enthusiasts, targeting Linux first (with a Windows port), with
high-fidelity, high-performance playback as the guiding constraint.

- A **native PipeWire client** rather than a PulseAudio or ALSA compatibility layer. It reads the
  rates a sink advertises, switches the graph to the source's own rate where the hardware takes it,
  and resamples with its own filters where it does not — so a lossless file reaches the
  device bit-accurate wherever the device allows it. ReplayGain, a true-peak guard, dither with
  noise shaping and DoP for DSD sit in the same chain.
- A **GPUI front end** running natively on Wayland: a library with albums, artists, playlists,
  favourites and suggestions, a search grammar, synced lyrics, an analysis pane, an equaliser and a
  settings pane that writes `config.toml` back.
- **MPRIS on the session bus**, which is how media keys, notifications and every desktop's own
  player controls reach the transport — the player itself reads no key. A second `resonate`
  reaches a running one over the same interface.
- **A catalog that knows what it holds.** A scan reads tags, cue sheets and embedded pictures into
  SQLite; an…
