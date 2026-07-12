---
repo: "darwinscat/orbitcab"
name: "orbitcab"
description: "Free, open-source IR cabinet loader for guitar & bass — load a cab impulse response and hear your DI through it, in any DAW. VST3 · AU · CLAP for Windows, macOS & Linux. Felitronics by Darwin's Cat."
readmeQualityOk: true
url: "https://github.com/darwinscat/orbitcab"
homepage: "https://darwinscat.com/orbitcab"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["agpl", "audio-plugin", "audio-unit", "bass", "cabinet", "guitar", "impulse-response", "juce", "vst3", "audio-effect"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 22
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-19T17:50:41Z"
lastCommitAt: "2026-07-12T06:17:32Z"
lastReleaseAt: "2026-07-03T14:44:00Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["tsyma", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274618038/86cbbb02-a26a-4005-939a-7fb86b66360f"
---

# OrbitCab

**A free, open-source amp + cab for guitar and bass — built around captured real gear.** VST3, AU, and
CLAP. Plug in a DI and build the chain like a real rig: captured preamps, a tube power stage, and
impulse-response cabinets — in your DAW.

## The signal chain

OrbitCab runs the full path from DI to speaker — or bypass any stage and bring your own:

```
DI → PREAMP (NAM capture) → TONE → POWERAMP (tube captures | tube sim) → CAB (IR) → out
```

## Preamps — captured amps up front

The preamp stage is the heart of OrbitCab. A **NAM capture** is a neural model trained from a real piece
of gear — it learns how that amp gains up, cleans up, compresses, and answers your pick attack. OrbitCab
ships captures of hardware the author owns:

- **V4KRAK** — Victory V4 **The Kraken**: modern British gain — tight low end, heavy saturation, and
  enough cut to keep fast riffs readable. **Green** (rhythm / crunch) and **Red** (high-gain lead)
  channels, captured across the full gain range (7h–17h).
- **V4SHER** — Victory V4 **The Sheriff**: classic British crunch and lead — open mids, bark, and sustain
  that doesn't slide into fizz. Two channels, full gain sweep.
- **V4COPP** —…
