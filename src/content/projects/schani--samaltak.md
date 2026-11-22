---
repo: "schani/samaltak"
name: "samaltak"
description: "A repository for samaltak"
readmeQualityOk: true
url: "https://github.com/schani/samaltak"
language: "C"
languages: ["C"]
languagePcts: [66]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-22T23:21:52Z"
lastCommitAt: "2026-11-22T11:46:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 40
maintainers: ["schani"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0a3f5a36fdde64d286c92c7c9f2c21c056299bdbf480597ebf62542f5dcb99e/schani/samaltak"
---

# Samaltak

A Smalltalk-80 system with green threads and a GPU-composited UI (SDL3 + SDL_GPU on Metal or Vulkan), written entirely in Smalltalk and built from the text sources in `src/`: the compiler, class library, fonts, renderer, window system, browser, debugger, profiler and remote control, and the VM itself. The VM and its platform layer are written in Lowtalk, a subset of Smalltalk (docs/lowtalk.md): run as Smalltalk it is a simulator you can debug in the image; translated to C (`vm/gen/`) it is the VM.

## Build and run

macOS on Apple Silicon (Homebrew `sdl3` and `openssl@3`), or Linux on arm64 or x86-64 (`sdl3`, `shaderc` and OpenSSL 3, e.g. `libssl-dev`; e.g. Asahi Linux, Vulkan). The JIT emits arm64 or x86-64 (docs/jit.md).

    make            # VM (from vm/gen), seed image (ImageBuilder in boot/seed.image), stage 2 → build/samaltak.image
    make run        # start it (rebuilds the image first only if src/, boot/ or the VM changed since it was built or saved)
    make translate  # after changing the VM's Lowtalk sources (src/VM-Core, src/VM-Platform): regenerate vm/gen
