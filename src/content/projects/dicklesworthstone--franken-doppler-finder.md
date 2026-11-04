---
repo: "Dicklesworthstone/franken_doppler_finder"
name: "franken_doppler_finder"
description: "Locate an audio or video recording from the Doppler curves of propeller aircraft, matched against archived ADS-B flight tracks. Rust, on frankenscipy and asupersync."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_doppler_finder"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["acoustics", "ads-b", "adsb", "adsb-lol", "aircraft", "asupersync", "audio-analysis", "audio-forensics", "cli", "curve-fitting"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-03T17:03:54Z"
lastCommitAt: "2026-11-04T02:56:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/7768c00006e99315172ca82bda25f983f78c8e3e191047e4a424f46c0a0e9e4c/Dicklesworthstone/franken_doppler_finder"
---

# franken_doppler_finder (`fdop`)

**Give `fdop` a recording, the day it was made and a rough US region. It finds the propeller aircraft you
can't hear in it, fits their Doppler curves, matches them against archived ADS-B flight tracks, and returns a
latitude and longitude, a confidence radius, a map, and the nearest town and ZIP code.**

```bash
git clone https://github.com/Dicklesworthstone/franken_doppler_finder && cd franken_doppler_finder
cargo build --release                  # rustup fetches the pinned nightly from rust-toolchain.toml
./target/release/fdop selftest         # offline known-answer run on a synthesised recording (needs ffmpeg)
./target/release/fdop locate clip.m4a --dates 2026-09-08 --near "NY"
```

A recording with no GPS tag and nothing recognisable in frame usually still carries the drone of light
aircraft passing kilometres away. Each pass leaves a falling tone whose shape fixes the aircraft's speed and its
closest distance. Two passes, with their real time gap, fix a place and a clock. Public ADS-B archives record
where every transponder-equipped aircraft was, second by second. `fdop` automates the whole chain, from
finding the faint curves in a…
