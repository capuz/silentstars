---
repo: "burgerwdev/harogic-websa"
name: "harogic-websa"
description: "A Web Spectrum Aanalyzer Software for Harogic SAN-45/SAN-60/SAN-90 devices."
readmeQualityOk: true
url: "https://github.com/burgerwdev/harogic-websa"
language: "Python"
languages: ["Python", "TypeScript", "Rust"]
languagePcts: [33, 32, 30]
topics: ["harogic", "spectrum-analyzer", "san-45", "san-60", "san-90", "webconsole"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-05T03:59:28Z"
lastCommitAt: "2026-10-12T11:16:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["tommywangcc"]
openGraphImageUrl: "https://opengraph.githubassets.com/180d1f96dd6705a8c923357748af9ec0136fbdfd0ded8586b27621774980f9a8/burgerwdev/harogic-websa"
---

# Harogic SAN Series Web Spectrum Analyzer (SAN-45 / SAN-60 / SAN-90)

**中文文档: [README.zh-CN.md](https://github.com/burgerwdev/harogic-websa/blob/HEAD/README.zh-CN.md)**

A browser-based control and measurement application for **Harogic SAN series spectrum analyzers** (SAN-45 / SAN-60 / SAN-90, 海得逻捷), built on the official SDK (`htra_api.py` + `libhtraapi.so`, USB connection).

## Hardware

| SAN-90 | SAN-90 + WebSA |
|---|---|
|  |  |

## Features

- **Narrow SDR captures stay smooth** — an IQ capture bandwidth below about 100 kHz keeps the
  panadapter at its full frame rate and the audio free of gaps: the analyzer captures wider and
  shows the requested span.
- **Spectrum** — Clear Write / Max Hold / Min Hold / Average / View, four traces, smoothing,
  peak-preserving resampling
- **Display zoom** — enlarge the captured spectrum on screen. No retune, no new sweep. An
  overview shows the full window. The waterfall follows the same view.
- **SDR tuning step** — set the arrow-key step per capture bandwidth. Quick steps run from
  1 Hz to 100 MHz, and To Center puts the signal at the centre.
- **Controls** — atomic Center/Span and Start/Stop, span stepping and Full Span, RBW /…
