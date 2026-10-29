---
repo: "youtube-at-vach/MeasureLab"
name: "MeasureLab"
description: "DIY tools for generating test signals and measuring harmonic distortion. Built together with AI. Feel free to use, modify, and experiment."
readmeQualityOk: true
url: "https://github.com/youtube-at-vach/MeasureLab"
homepage: "https://youtube-at-vach.github.io/MeasureLab/download"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["audio", "audio-analysis", "measure", "signal", "acoustics", "dsp", "fft", "lock-in-amplifier", "microphone"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 15
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-05-01T01:40:45Z"
lastCommitAt: "2026-10-29T12:25:26Z"
lastReleaseAt: "2025-12-09T15:00:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 75
maintainers: ["youtube-at-vach", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/975835354/4aa3b76e-3027-42c2-a32b-f98a6f54ed54"
fundingLinks: ["GITHUB:https://github.com/youtube-at-vach"]
discussionCount: 4
---

# MeasureLab — Audio Measurement Lab

[日本語](https://github.com/youtube-at-vach/MeasureLab/blob/HEAD/README.ja.md)

**Accurate measurement, free and accessible to everyone.**

Turn your PC and audio interface into a place to explore signals. See the waveform, inspect its spectrum, watch frequencies evolve, and explore the relationship between two channels—all in one measurement workspace.

**MeasureLab is developed in Rust on `main`, with v0.10.0 in preparation.** The prototype combines reproducible measurements, responsive controls and GPU plots. Scope, four-channel Spectrum, Spectrogram and XY are implemented, together with experimental Generator, Lock-in and synchronous two-channel comparison. You can build it from source today and help shape the next version.

*The current Rust console showing Scope, instrument navigation and tabs used when the requested layout does not fit. This screenshot uses synthetic QA fixtures. Click any screenshot to view it at full size.*

## Built to measure, built to explore

- **Follow the signal.** Move between time, frequency, time–frequency and XY views, or focus on Scope and Spectrum together. Choose the channels you need from a 1–16 channel…
