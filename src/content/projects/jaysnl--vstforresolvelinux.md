---
repo: "JaySNL/VSTForResolveLinux"
name: "VSTForResolveLinux"
description: "As the name says"
readmeQualityOk: true
url: "https://github.com/JaySNL/VSTForResolveLinux"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2026-08-24T21:36:05Z"
lastCommitAt: "2026-11-24T01:57:08Z"
lastReleaseAt: "2026-08-30T16:49:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 56
maintainers: ["JaySNL", "mbaksa", "mogorman"]
openGraphImageUrl: "https://opengraph.githubassets.com/15ee5b042edefd2bc189151be47cb4ebb22808a24c56f77937c8ad27f057c981/JaySNL/VSTForResolveLinux"
---

# VST for Resolve on Linux

**VST2, VST3 and CLAP plugins running inside DaVinci Resolve on Linux.** Not bounced out to an
external editor: loaded on the track, with their own GUIs, live on the timeline.

Blackmagic does not support this. Their manual lists VST as macOS and Windows only, and nothing in
the Linux interface loads a VST. `libFairlightPage.so` does carry VST host symbols, but nothing here
has run any of them and why they are unreachable is not established; the evidence is in
[`docs/engineering-log.md`](https://github.com/JaySNL/VSTForResolveLinux/blob/HEAD/docs/engineering-log.md). This library takes a different route: it
registers through Resolve's private plugin ABI and hosts the plugins itself.

Four plugins open at once on one track. The **Effects** column in the mixer shows `pp-track`,
`soothe2…`, `Clarity V…`, `NS1`: each effect carries its own name, and each is a real plugin
processing real audio.

## Which release for which Resolve

Requires **DaVinci Resolve Studio 21** on Linux. The free version does not load this ABI.
