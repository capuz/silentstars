---
repo: "diffscope/diffscope-project"
name: "diffscope-project"
description: "DiffScope project."
readmeQualityOk: true
url: "https://github.com/diffscope/diffscope-project"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [69, 29]
stars: 26
forks: 6
openIssues: 8
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-11T14:48:06Z"
lastCommitAt: "2026-07-12T06:16:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 54
maintainers: ["CrSjimo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4685ae8e0e1b8408d6e44cf55650422cd826456b83f44feea7ff72c7e107c636/diffscope/diffscope-project"
---

# DiffScope

A free, professional singing-voice-synthesis editor powered by [DiffSinger](https://github.com/openvpi/DiffSinger)

> [!NOTE]
> This project is currently under development. Anything related to the project is subject to change.

## Looking for Contributors

This project is currently under active development, and we are looking for contributors to help develop it.

Preferred Skills:
- C++ (front-end core logic)
- Qt QML (front-end GUI)
- Golang (backend)

Additionally, familiarity with singing voice synthesis (SVS), digital audio processing, or related fields is highly appreciated.

If you are interested in contributing or collaborating, please feel free to reach out via Issues.

## Progress

- [x] Application GUI shell
- [x] Arrangement and piano roll editors
- [x] Basic audio processing functionalities
- [ ] Phoneme and parameter editors
- [x] Audio playback
- [ ] Integration of synthesis engine

## Build

1. Install essential tools for C/C++ development and Qt.
2. Clone this repository recursively.

  ```bash
  git clone --recursive https://github.com/diffscope/diffscope-project.git
  ```
   
3. Install dependencies via Vcpkg.

  ```bash
  vcpkg install…
