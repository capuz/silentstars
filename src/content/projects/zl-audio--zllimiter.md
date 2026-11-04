---
repo: "ZL-Audio/ZLLimiter"
name: "ZLLimiter"
description: "limiter plugin"
readmeQualityOk: true
url: "https://github.com/ZL-Audio/ZLLimiter"
homepage: "https://zl-audio.github.io/plugins/zllimiter/"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["audio-effect", "audio-unit", "juce", "limiter", "lv2", "vst3"]
stars: 28
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-30T20:19:22Z"
lastCommitAt: "2026-11-04T02:56:24Z"
lastReleaseAt: "2026-10-31T02:42:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["zsliu98", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/caf62b4d93633aac1ef562ea76c7c1fed992677f934060ef441ca80468e4e1fe/ZL-Audio/ZLLimiter"
discussionCount: 0
---

# ZL Limiter

ZL Limiter is a limiter plugin (work in progress).

## Build from Source

### Install Dependencies

Please make sure `Clang` (`AppleClang 16+` or `LLVM/Clang 17+`), `cmake 3.25+`, `ninja` are installed and configured on your OS.

On Linux, you can install the remaining dependencies with the following command:

```console
sudo apt-get update && sudo apt install libasound2-dev libx11-dev libxcomposite-dev libxcursor-dev libxext-dev libxinerama-dev libxrandr-dev libxrender-dev libfreetype-dev libfontconfig1-dev libxi-dev
```

### Clone and Build

Once you have set up the environment, you can clone the ZL Spectrum Equalizer code, populate all submodules, then configure & build the code. Please set:

- the variable `ZL_JUCE_FORMATS` as a list of plugin formats that you want, e.g., `"VST3;LV2"`
  - AAX plug-ins need to be digitally signed using PACE Anti-Piracy's signing tools before they will run in commercially available versions of Pro Tools.
- the variable `ZL_HWY_STATIC_TARGET` as the SIMD target
  - If you are on x86-64 and your CPU supports SSE2, set `ZL_HWY_STATIC_TARGET=SSE2`.
  - If you are on x86-64 and your CPU supports SSE2/SSE4, set…
