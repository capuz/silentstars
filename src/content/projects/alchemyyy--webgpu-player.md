---
repo: "alchemyyy/WebGPU-Player"
name: "WebGPU-Player"
description: "A WebGPU-based video and audio player "
readmeQualityOk: true
url: "https://github.com/alchemyyy/WebGPU-Player"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T01:45:59Z"
lastCommitAt: "2026-11-03T19:05:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["alchemyyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/15cfca373b13507768b2c1a9f76d261fda3dc5489d1ea97deeda254039dafcb5/alchemyyy/WebGPU-Player"
---

This is a video streaming player backend built on top of WebGPU. It is therefore unhindered by the limitations of the stock HTML video players that get shipped with web browsers.

Benefits of this:

* HDR tone-mapping
* Multi-channel audio downmixing
* Non-native codec support
* Post-processing effects
* and a lot more.

Codecs and post-processing effects are supported through dynamically loaded WGSL + WASM modules. This means any codec or post-processing effect can be supported, without the need for clients to manually install additional software. Packs use GPU, CPU, or Hybrid architectures to achieve excellent playback performance, even with ultra-high-bitrate 4K media.

The documentation is a book in [docs/](https://github.com/alchemyyy/WebGPU-Player/blob/HEAD/docs/src/SUMMARY.md), written with [mdBook](https://github.com/rust-lang/mdBook). The current list of supported formats and codecs is [here](https://github.com/alchemyyy/WebGPU-Player/blob/HEAD/docs/src/codec-support.md).

### Sandbox Screenshot

## Requirements

Required:

- Node.js 24 or later and npm 11 or later.
- Git, GNU Make, and a POSIX shell (Git Bash on Windows).
- Emscripten 4.0.13 and rustup, to build the…
