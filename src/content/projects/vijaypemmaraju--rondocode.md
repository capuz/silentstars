---
repo: "vijaypemmaraju/rondocode"
name: "rondocode"
description: "Live-codeable synths and mini-notation patterns in the browser, with a from-scratch AudioWorklet DSP engine."
readmeQualityOk: true
url: "https://github.com/vijaypemmaraju/rondocode"
homepage: "https://rondocode.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["audioworklet", "dsp", "live-coding", "music", "synthesizer", "webaudio", "mini-notation"]
stars: 48
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-21T01:45:08Z"
lastCommitAt: "2026-07-29T06:15:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["vijaypemmaraju"]
openGraphImageUrl: "https://opengraph.githubassets.com/d25c5f97f475fe4583817acf04c41de4510e8c85c9b95ff2a7c70e04f77c96c9/vijaypemmaraju/rondocode"
discussionCount: 0
---

# rondocode

Live-codeable synths and mini-notation patterns, in the browser, built to be
played on a phone. You write two kinds of code, **synths** (functions that
wire oscillators, filters and envelopes into a sound) and **patterns**
(mini-notation sequences that trigger those synths in time), in either of two
languages:

- **JavaScript**, the full DSL, and
- **rondo**, a terse phone-first language that transpiles to it. One stage per
  line, signal flowing downward, bindings for modulation. The two are
  round-trip convertible: the editor's language toggle decompiles JavaScript
  back into rondo, and `compile → decompile → compile` returns byte-identical
  JavaScript. Whatever the terse syntax cannot express survives inside a `js`
  block, and the fixed point is fuzz-tested over tens of thousands of
  generated programs.

A custom AudioWorklet DSP engine runs it all; nothing is sampled unless you
load (or record, or resample) a sample.

**Try it: [rondocode.com](https://rondocode.com)** · the full guide lives at
[/docs](https://rondocode.com/docs) · iOS/Safari audio diagnostics at
[/diag](https://rondocode.com/diag).

## What's in the box

- **The code is the instrument.**…
