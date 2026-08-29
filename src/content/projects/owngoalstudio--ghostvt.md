---
repo: "OwnGoalStudio/GhostVT"
name: "GhostVT"
description: "Ghostty-powered terminal for jailbroken iOS — daemon-backed sessions that survive relaunch"
readmeQualityOk: true
url: "https://github.com/OwnGoalStudio/GhostVT"
homepage: "https://owngoalstudio.github.io/GhostVT/"
language: "Swift"
languages: ["Swift"]
languagePcts: [89]
stars: 100
forks: 8
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-17T12:50:41Z"
lastCommitAt: "2026-08-29T10:22:01Z"
lastReleaseAt: "2026-08-28T19:34:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 38
maintainers: ["Lakr233"]
openGraphImageUrl: "https://opengraph.githubassets.com/0462cf22e2f77f5e7b9112ab10d0e5389c417faa1798b7479b2c0732bc1e7625/OwnGoalStudio/GhostVT"
---

# iGhostVT

Ghostty-powered terminal for jailbroken iOS — [roothide](https://github.com/roothide)
and rootless bootstraps alike — built on
[libghostty-spm](https://github.com/Lakr233/libghostty-spm)'s terminal core
with a host-managed I/O backend.

The app never spawns a process. `ighostvtd`, a root LaunchDaemon, owns every
terminal session and is the only component that can start one; the app reaches
it over a mach service and is entitled to nothing else. Sessions therefore
outlive the app — quitting detaches, and relaunching reattaches to the shells
still running.

## Layout

| Path                   | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| `iGhostVT/`            | The app: `main.swift`, `Application/`, `Backend/`, `Interface/`, `Resources/` |
| `iGhostVTDaemon/`       | `ighostvtd`: the only process that spawns terminal sessions      |
| `Shared/`              | XPC wire protocol, compiled into both targets                    |
| `Packages/iGhostVTKit/` | Transport layer: the `TerminalTransport` protocol                |
| `Configuration/`       | xcconfig…
