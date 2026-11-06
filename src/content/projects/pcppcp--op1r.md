---
repo: "pcppcp/op1r"
name: "op1r"
description: "Patches for the original OP1 r246 firmware. New synths, drum, fxs, sequencers. Sample editor, improved tape tools and other cool features & bugfixes. Use at your own risk & have fun."
readmeQualityOk: true
url: "https://github.com/pcppcp/op1r"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [40, 34, 25]
stars: 121
forks: 10
openIssues: 2
closedIssues: 6
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-10-09T09:55:03Z"
lastCommitAt: "2026-11-06T11:19:13Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 29
maintainers: ["pcppcp"]
openGraphImageUrl: "https://opengraph.githubassets.com/f94ba31991e99f634a1e9823dc5908dce704a17980d4726b5eef1210ea57dcca/pcppcp/op1r"
---

# OP-1 custom firmware patcher (R246)

## Web patcher

### [Patch OG OP1 Firmware in your browser](https://pcppcp.github.io/op1r/web/)

## What is this

Turns the original Teenage Engineering OP-1 firmware **R246** (`op1_246.op1`) into a custom firmware
with:

- custom synth engines with their own screens: **supersaw** (chainsaw), **fmbell** (bell), **granular**; they follow note velocity
  - **granular** plays the slot's sample: press **input** on a granular slot for "keyboard to sample" and record
    straight into it (the slot stays granular); **white press** = sample browser (the sampler presets, as on
    sampler+; the slot stays granular); **red press** = page 2, sample gain (0–4×); values shown in ms / s / ×
- animated **lab screen for the stock iter synth**: gauges follow the knobs; bubbles, flame, falling dashes, voice
  dots and a note display react to the knobs and to what you play (graphic: `iter-lab.svg` from
  [op1repacker](https://github.com/op1hacks/op1repacker), MIT License, © 2016 op1hacks)
- boot screen shows `op1r <version>` under the TE logo; after a crash the error screen adds the op1r version and the
  code addresses on the crashed stack (plugins by name):…
