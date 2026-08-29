---
repo: "d4vid87/hookecho"
name: "hookecho"
description: "Advanced NEXRAD weather radar viewer in Rust — Level 2/3 analysis, MRMS, future radar, warning intelligence, TDS + rotation detection. Windows, Linux, Android."
readmeQualityOk: true
url: "https://github.com/d4vid87/hookecho"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["egui", "hrrr", "meteorology", "mrms", "nexrad", "radar", "rust", "storm-chasing", "weather", "wgpu"]
stars: 52
forks: 2
openIssues: 4
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-07-19T04:28:06Z"
lastCommitAt: "2026-08-29T17:28:28Z"
lastReleaseAt: "2026-08-26T19:55:53Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 37
maintainers: ["d4vid87"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9ec191d5beacbb20840021e3c09fee9ad700be61c88993566795b55e245bb0f/d4vid87/hookecho"
discussionCount: 0
---

</p>

# HookEcho

-lightgrey)

Advanced NEXRAD weather radar viewer — an open-source homage to
[supercell-wx](https://github.com/dpaulat/supercell-wx), built from scratch in Rust
with `wgpu` + `egui`. Deep per-site Level 2 / Level 3 analysis plus national
situational awareness, forecast environment overlays, and warning intelligence —
on Windows, Linux, and Android.

### **[hookecho.io](https://hookecho.io/)** · **[Try it in your browser →](https://app.hookecho.io/)** · **[Discord](https://discord.gg/VNMW2Gyg4V)**

The whole app as wasm, on live data, with nothing to install.

<sub>**KTLX 0.5° reflectivity — Moore, Oklahoma, 20 May 2013.** Replayed from the
public archive inside the app, one scan every few seconds, with the tornado
warning that was in force at the time.</sub>

<sub>**Animated wind.** HRRR 10 m wind as drifting particles coloured by speed —
built from NOAA's free GRIB grids, so it needs no API key.</sub>

## Install

- **Linux**: download `HookEcho-x86_64.AppImage` from
  [Releases](https://github.com/d4vid87/hookecho/blob/HEAD/../../releases), `chmod +x`, run. Debian/Ubuntu users can install
  `hookecho_<version>_amd64.deb` from the same place
  (`sudo apt install…
