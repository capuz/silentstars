---
repo: "jadeowaowa/scarlett-layer"
name: "scarlett-layer"
description: "Experimental Windows x64 / D3D12 compatibility layer for unpacked, unencrypted Xbox Series X|S (GDK) executables"
readmeQualityOk: true
url: "https://github.com/jadeowaowa/scarlett-layer"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-11-20T23:54:18Z"
lastCommitAt: "2026-11-22T02:10:25Z"
lastReleaseAt: "2026-11-21T05:23:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["Vampiiblood", "jadeowaowa"]
openGraphImageUrl: "https://opengraph.githubassets.com/d44daafe82fac15569aca8ff269168a5b1945d38ea31234d4a646cd3c8cf2989/jadeowaowa/scarlett-layer"
---

# scarlett-layer

An experimental Windows / Direct3D 12 compatibility layer for running **unpacked, unencrypted** Xbox Series X|S (Scarlett / GDK) x64 executables on a Windows PC.

> **Status: experimental.** The subsystems below are implemented and exercised by an automated test suite. No commercial title has been run end-to-end through the layer yet. See [Current status](#current-status).

## What it does

`loader.exe` starts a target executable suspended, rewrites its imports (including delay-load and ordinal imports), and injects `scarlett_hook.dll` before the entry point runs. The hook DLL intercepts `LoadLibrary*`, `GetModuleHandle*` and `GetProcAddress`, so console-specific calls are redirected to native Windows shims instead of the missing console runtime. The title's directory and the host's `System32` are never modified.

Virtual drives `G:\`, `T:\` and `S:\` are mounted for the title.
