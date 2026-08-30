---
repo: "Daniele-Cangi/Satellite-RF-Observatory"
name: "Satellite-RF-Observatory"
description: "Offline-first satellite RF observatory for SDR capture, deterministic DSP, orbital propagation, and evidence-based candidate scoring."
readmeQualityOk: true
url: "https://github.com/Daniele-Cangi/Satellite-RF-Observatory"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["doppler", "dsp", "orbital-mechanics", "radio-frequency", "satellite", "sdr", "sgp4", "signal-processing", "soapy-sdr", "software-defined-radio"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-06T12:33:50Z"
lastCommitAt: "2026-08-30T09:26:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["Daniele-Cangi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4973ce216e580ecf4a60838f8e27a5ca7612394ca365ed21f91bc2f0eccc20de/Daniele-Cangi/Satellite-RF-Observatory"
---

# Satellite RF Observatory

An experimental laboratory for testing whether a predicted satellite orbit
leaves an observer-dependent RF structure that survives measurement nuisance
and predicts an independent time interval better than non-orbital alternatives.

The project now follows one satellite-first causal order:

```text
candidate orbit + observer geometry + event time
  -> distributed fractional-Doppler prediction
  -> pass-specific detectability requirement
  -> qualified Internet measurement capability
  -> prospective held-out observation
  -> comparison with frozen non-orbital nulls
```

The orbit determines what an instrument must preserve before an endpoint,
frequency or acquisition window is selected. A connected receiver, a visible
spectral feature or a good fit on calibration data is not by itself evidence
of orbital origin.

This is research software. It is not an operational monitoring platform, a
signal-identification service or evidence that any transmitter has been
identified.

## Current direction

The primary scientific surface is…
