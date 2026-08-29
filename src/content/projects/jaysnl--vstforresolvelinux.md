---
repo: "JaySNL/VSTForResolveLinux"
name: "VSTForResolveLinux"
description: "As the name says"
readmeQualityOk: true
url: "https://github.com/JaySNL/VSTForResolveLinux"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-08-24T21:36:05Z"
lastCommitAt: "2026-08-29T17:26:57Z"
lastReleaseAt: "2026-08-29T17:27:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["JaySNL"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7cb6d05f16a9d6f8d4871e0ccd2f67f8a9b69e9d0a9ebdda1853579cd4553bd/JaySNL/VSTForResolveLinux"
---

# VST for Resolve on Linux

**VST2, VST3 and CLAP plugins running inside DaVinci Resolve on Linux.** Not bounced out to an
external editor — loaded on the track, with their own GUIs, live on the timeline.

Blackmagic does not support this. Their manual lists VST as macOS and Windows only, and nothing in
the Linux interface loads a VST.

The binary is a different story. `libFairlightPage.so` carries **VST host code** — 198 symbols
under `VSTPlugin` — and the parts of it this project has actually read are real implementations,
not empty shells: `VSTPlugin::StorePreset` and `VSTPlugin::LoadPreset` drive a plugin's own
`effGetChunk` and `effSetChunk`, and `VSTHost::LoadPlugin` has a body. Reading those is what taught
this project how Resolve stores plugin settings, and it is why your settings now live in the
project file.

**That is symbols and a few method bodies, not a working host.** Nothing here has run any of it,
and why it is unreachable from the Linux interface is not established. Two `VST3Host` methods were
measured as stubs, so the VST3 side and the VST2 side do not look alike.

*(An earlier version of this readme said the Linux build ships no VST host, and a first attempt at…
