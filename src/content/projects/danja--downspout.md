---
repo: "danja/downspout"
name: "downspout"
description: "Generative VST Plugin Experiments"
readmeQualityOk: true
url: "https://github.com/danja/downspout"
homepage: "https://danja.github.io/downspout/"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["daw", "experimental", "generative", "music", "plugins", "vst"]
stars: 30
forks: 3
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-18T12:33:02Z"
lastCommitAt: "2026-11-25T12:33:17Z"
lastReleaseAt: "2026-05-22T11:34:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 39
maintainers: ["danja"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f65f9713b252f2bf5aac59c21bcb14923f95236326b7382d1ef3cd6cb20d4aa/danja/downspout"
---

# downspout

About a hundred VST3 plugins (MIT, C++/[DPF](https://github.com/DISTRHO/DPF)): mostly generative and algorithmic MIDI tools, instruments and audio effects.
There are screenshots, notes and a plugin finder on the [project site](https://danja.github.io/downspout/).

## Install All Plugins (from [Releases](https://github.com/danja/downspout/releases))

1. Download the zip for your platform from GitHub Releases:
   - `downspout-<version>-linux-x86_64-vst3.zip`
   - `downspout-<version>-macos-arm64-vst3.zip` (Apple Silicon)
   - `downspout-<version>-macos-x86_64-vst3.zip` (Intel Mac)
   - `downspout-<version>-windows-x86_64-vst3.zip`
2. Unzip it. It contains one `.vst3` bundle per plugin.
3. Copy **all** the `.vst3` bundles into your VST3 folder:

**Linux** (`~/.vst3`):

```bash
mkdir -p ~/.vst3
cp -r *.vst3 ~/.vst3/
```

### Dependencies

The release zips are self-contained: using them needs only a VST3 host, no build
tools or extra libraries. The one optional runtime helper is `zenity`, which
gives Campione a multi-file WAV chooser; without it the button falls back to the
DPF built-in single-file browser.
