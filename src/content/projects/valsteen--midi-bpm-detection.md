---
repo: "valsteen/midi_bpm_detection"
name: "midi_bpm_detection"
description: "Midi BPM detection Clap/VST3 plugin. Check the demo at https://valsteen.github.io/midi_bpm_detection/ 👷 Very early phase, it won't build for you 🚧"
url: "https://github.com/valsteen/midi_bpm_detection"
homepage: "https://valsteen.github.io/midi_bpm_detection/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["clap", "clap-plugin", "egui", "midi", "rust"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-02-20T18:21:47Z"
lastCommitAt: "2026-06-26T06:46:46Z"
lastReleaseAt: "2026-06-25T21:27:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["valsteen"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b2cfd5c05ebe71f87f031e435135437b1fb4f8f0d613175d5fb0b0bd9a1aeb/valsteen/midi_bpm_detection"
discussionCount: 0
---

# MIDI BPM Detection

MIDI BPM Detection estimates tempo from incoming MIDI note-on events while you play. The goal is to let a musician record
freely, infer the tempo from the performance in realtime, and feed that tempo back to the host DAW so the recording can
fit a loop with less manual adjustment.

The detector compares intervals between recent notes, scores likely beat durations, and exposes both a single estimated
BPM and a histogram that shows competing tempo candidates. The histogram is important: it makes the guess inspectable
instead of hiding the model behind one number.

The screenshot below shows the plugin/demo UI with detection parameters and the realtime histogram. The strongest peak is
the current most likely BPM.

Try the browser demo: https://valsteen.github.io/midi_bpm_detection/

## What This Repository Contains

This is an experimental BPM detection monorepo. The Rust side contains three runtime modes:

- `plugin`: the CLAP/VST3 target intended to run inside a DAW. This is the production constraint.
- `desktop`: a native GUI app used for local iteration and native MIDI experiments.
- `wasm`: a browser demo that makes the detector easy to try and share.

The…
