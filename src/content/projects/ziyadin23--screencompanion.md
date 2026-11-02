---
repo: "Ziyadin23/ScreenCompanion"
name: "ScreenCompanion"
description: "SC: portable Windows 10/11 x64 screen-question assistant"
readmeQualityOk: true
url: "https://github.com/Ziyadin23/ScreenCompanion"
homepage: "https://ziyadin23.github.io/screencompanion-website/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-26T20:08:23Z"
lastCommitAt: "2026-11-02T11:32:47Z"
lastReleaseAt: "2026-10-30T10:34:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 50
maintainers: ["Ziyadin23"]
openGraphImageUrl: "https://opengraph.githubassets.com/634ba553f815e5533851983a44e99e7db30c0285f84e5bd10f73f72a1527e520/Ziyadin23/ScreenCompanion"
---

# SC

SC is a Windows app that answers questions from your screen or from text you type. It takes one fresh monitor capture per request and displays the answer in a compact panel where you can select and copy text.

[Visit the SC website](https://ziyadin23.github.io/screencompanion-website/).

## TypeScript desktop application

SC's Windows Electron/TypeScript application lives under
[`desktop/`](https://github.com/Ziyadin23/ScreenCompanion/blob/HEAD/desktop/REWRITE.md), with a React interface and a C++ Windows bridge.
The previous C# application is archived in the [v0.4.14 source tag](https://github.com/Ziyadin23/ScreenCompanion/tree/v0.4.14)
and its existing releases. Only its frozen vault-compatibility test fixture remains here.
The current source version is **0.5.0-beta.6**, available as a GitHub prerelease
with verification still in progress. It clarifies extraction types for tasks with diagrams, tightens
Direct answer formatting, cancels active panel drags when hidden, and adds Windows
control and update checks. Recorder exclusion, duplicate-launch behavior and live
answer quality still need verification. See the [beta.6 release…
