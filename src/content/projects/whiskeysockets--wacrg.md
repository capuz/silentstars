---
repo: "WhiskeySockets/wacrg"
name: "wacrg"
description: "WhatsApp Calls Research Group"
url: "https://github.com/WhiskeySockets/wacrg"
homepage: "https://whiskeysockets.github.io/wacrg/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T13:06:05Z"
lastCommitAt: "2026-06-24T00:24:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 59
undervaluedScore: 38
maintainers: ["purpshell"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7e3e027b43ee661b8e96b61c734106a6265d0a04e22e77f96f9facab76b7633/WhiskeySockets/wacrg"
fundingLinks: ["GITHUB:https://github.com/purpshell", "GITHUB:https://github.com/jlucaso1", "GITHUB:https://github.com/Auties00", "GITHUB:https://github.com/vinikjkkj", "CUSTOM:https://github.com/sponsors/sheiitear", "CUSTOM:https://github.com/sponsors/edgardmessias"]
discussionCount: 1
---

# WhatsApp Calls Research Group (wacrg)

A collaborative home for reverse-engineering and documenting a complete, maintainer-approved spec of the WhatsApp VoIP/RTC stack to achieve 1:1 WhatsApp calling capabilities and to keep it maintained.

## Table of contents

- [What is wacrg?](#what-is-wacrg)
- [The provenance + confidence model](#the-provenance--confidence-model)
- [How the machine-readable spec works](#how-the-machine-readable-spec-works)
- [Featured tooling: warden](#featured-tooling-warden)
- [Repository map](#repository-map)
- [Quickstart for contributors](#quickstart-for-contributors)
- [The GitHub-native workflow](#the-github-native-workflow)
- [Coverage](#coverage)
- [Governance, conduct, security, disclaimer](#governance-conduct-security-disclaimer)
- [Licensing](#licensing)

## What is wacrg?

[WhiskeySockets](https://github.com/WhiskeySockets) maintains
[Baileys](https://github.com/WhiskeySockets/Baileys), a TypeScript library for the WhatsApp
Web / multi-device protocol. Several maintainers and community researchers have independently
poked at **WhatsApp calling** using different reverse-engineering techniques: WebSocket
captures, Baileys instrumentation, Frida…
