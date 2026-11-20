---
repo: "sl2365/Afterglow"
name: "Afterglow"
description: "Multi-mode Delay plugin with Sequencer and preset browser"
readmeQualityOk: true
url: "https://github.com/sl2365/Afterglow"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T15:44:55Z"
lastCommitAt: "2026-11-20T12:21:19Z"
lastReleaseAt: "2026-11-01T22:40:18Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: ["sl2365"]
openGraphImageUrl: "https://opengraph.githubassets.com/8880855a8ef85aa3d9ab0f78bb0fd9d975f42e5aa810ec78aaa0f71bd802d452/sl2365/Afterglow"
---

# Afterglow

Afterglow is a stereo VST3 delay by sl23 for the Dead Channel Audio plugin suite.

Credits: Many thanks to Artvera for the logo.

## Build and installation

Project root: `_Projects\Afterglow`, beside the shared `_Projects\_Tools` folder.

1. Save the current PolyHostInterface project because the build closes PHI automatically.
2. Double-click `- Build.bat`.
3. Wait until `BUILD SUMMARY` shows all four checks as `PASS`.
4. Use the portable Windows x64 plugin at `dist\Afterglow.vst3`.
5. If the build fails, send the newly generated `Results.log`.

The build uses JUCE 9.0.4, CMake 4.4.2 and Visual Studio Community 2026 x64 from the existing shared tool folders. It does not install the plugin automatically.

## Requirements

- Windows x64
- A 64-bit VST3 host
- A writable VST3 folder if Afterglow's portable settings, presets, sequences and Models are to remain beside the plugin
