---
repo: "bloodborne-native/bloodborne-runtime"
name: "bloodborne-runtime"
description: "Runs Bloodborne (PS4) outside a PS4: loader, PS4 system libraries, Vulkan renderer. Built on bbport and shadPS4."
readmeQualityOk: true
url: "https://github.com/bloodborne-native/bloodborne-runtime"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 5
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-10-10T23:37:11Z"
lastCommitAt: "2026-10-31T15:58:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 64
maintainers: ["PabloVSouza", "SEKY443"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb22e9ec99c8082308c99d62476fb901768787121944208acd294cdd30ec530a/bloodborne-native/bloodborne-runtime"
---

# bloodborne-runtime

What runs Bloodborne (PS4, CUSA03173 1.09) outside a PS4: it loads the game's executable,
provides the PS4 system libraries the game calls (threads, memory, files, saves, pad, audio,
video out, network) and draws its graphics with a renderer derived from shadPS4. On Apple
Silicon the renderer draws with **Metal directly** (the default; MetalFX is its upscaler); the
older path through Vulkan and MoltenVK stays selectable (`BB_METAL_FRAME=0`, with FSR 3.1 and
FSR 4.1.1). Other platforms use Vulkan. An optional online module (`BB_ONLINE=1`) plays on the
community servers: Seamless Hunt and The Hunter's Dream.

It is **built on [bbport](https://github.com/deadinside28/bloodborne_pc) by deadinside28**, the
native Linux port this work started from as a fork, whose releases keep being merged or ported
here (0.51, and parts of 0.6: [Upstream](https://github.com/bloodborne-native/bloodborne-runtime/blob/HEAD/docs/UPSTREAM.md)). On Apple Silicon the game's code
runs through bbcpu, the CPU layer of
[bloodborne-recomp](https://github.com/bloodborne-native/bloodborne-recomp) (the `recomp/`
submodule), or as recompiled native code it generates.

| Repository | |
|---|---|…
