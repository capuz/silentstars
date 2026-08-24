---
repo: "MikanseiLaboratory/omt-tools"
name: "omt-tools"
description: "OMT(OpenMediaTransport) related softwares. Inspired by NDI Tools."
readmeQualityOk: true
url: "https://github.com/MikanseiLaboratory/omt-tools"
homepage: "https://mikanseilaboratory.github.io/projects/omt-tools.html"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["ndi", "ndi-tools", "omt", "openmediatransport", "vmix"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 33
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-08-09T20:49:46Z"
lastCommitAt: "2026-08-24T04:21:59Z"
lastReleaseAt: "2026-08-19T14:06:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 65
maintainers: ["FlowingSPDG", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd1e862a167ea054f57f43f438ffcd2037b1a83f2112270f004026b6ac4b79e1/MikanseiLaboratory/omt-tools"
---

# OMT Tools

Open Media Transport production utilities inspired by NDI Tools.

## Suite contents

| Tool | Description |
|------|-------------|
| Studio Monitor | Discover and view OMT sources on the LAN |
| Test Patterns | Send SMPTE-style patterns + tone over OMT |
| Config Manager | View and edit the global OMT `settings.xml` |
| Discovery Server | GUI + CLI TCP discovery server (port 6399) |

Official vMix OMT tools for Windows (Desktop Capture, Viewer, Matrix Router, Settings Manager): [vMix Desktop Capture](https://www.vmix.com/software/vmix-desktop-capture.aspx)

Runtime media stack: [`MikanseiLaboratory/openmediatransport-rs`](https://github.com/MikanseiLaboratory/openmediatransport-rs) + [`MikanseiLaboratory/vmx-rs`](https://github.com/MikanseiLaboratory/vmx-rs)
(VMX SIMD path reporting via `simd_path()`: `avx2` / `sse128` / `neon` / `scalar`).

## Prerequisites

- Rust **1.97+** (edition 2024)
- Bun 1.2+ (launcher frontend)

## Build Targets

- Windows x64 (`x86_64-pc-windows-msvc`)
- Windows Arm64 (`aarch64-pc-windows-msvc`)
- macOS Intel (`x86_64-apple-darwin`)
- macOS Apple Silicon (`aarch64-apple-darwin`)
- Linux x64 (`x86_64-unknown-linux-gnu`)
- Linux Arm64…
