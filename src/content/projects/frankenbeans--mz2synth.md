---
repo: "frankenbeans/MZ2SYNTH"
name: "MZ2SYNTH"
description: "MZ2SYNTH - a software synthesizer modellled on Yevgeny Murzin's ANS synthesizer"
readmeQualityOk: true
url: "https://github.com/frankenbeans/MZ2SYNTH"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [100]
topics: ["ans", "music", "polyphonic", "synthesizer", "murzin", "electronic"]
stars: 24
forks: 2
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-11-09T22:12:17Z"
lastCommitAt: "2026-11-07T09:30:59Z"
lastReleaseAt: "2026-06-28T09:33:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5786003bf47d9e1fc117b26f1c28efc763a18a5ab1acee3d5ad0f5bf2b8a5d2e/frankenbeans/MZ2SYNTH"
discussionCount: 6
---

# README for MZ2SYNTH

Copyright (c) 2025 by E. Lamprecht.  All rights reserved.  See
LICENSE.md for licensing terms and TODO.md for notes on the current
development status.

# MANUAL PAGE

## NAME

> mz2 [options]... <input_file>

## DESCRIPTION

MZ2SYNTH is a wavetable synthesizer inspired by the ANS synthesizer
built by Yevgeny Murzin in various versions up to 1958, and currently
housed in the Glinka State Central Museum of Musical Culture in Moscow
(https://en.wikipedia.org/wiki/ANS_synthesizer).

MZ2SYNTH models 720 oscillators spanning 10 octaves, with oscillator
no. 294 set up with a fundamental frequency of 440 Hz and all others
calibrated to this using equal temperament.  Each oscillator has four
channels, these generating sine, square, sawtooth and triangle waves.
The wave-table is initialized in such a manner that, at the desired
audio sampling frequency, no aliasing will occur.  In practice, this
also means that oscillators with fundamental frequencies above the
Nyquist frequency corresponding to the desired audio sampling
frequency would be silent.

Input takes the form of a PPM graphics file with 720 rows and as many
columns as desired.  MZ2SYNTH begins at the…
