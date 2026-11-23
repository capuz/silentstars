---
repo: "gluon/oscq-inspector"
name: "oscq-inspector"
description: "OSCQuery browser, editor and live peers map, for macOS, Windows and Linux"
readmeQualityOk: true
url: "https://github.com/gluon/oscq-inspector"
homepage: "https://structure-void.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["egui", "open-sound-control", "osc", "oscquery", "rust"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-09T08:28:48Z"
lastCommitAt: "2026-11-23T10:20:29Z"
lastReleaseAt: "2026-11-21T11:18:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["gluon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fbd9b57726463cbfd9c4e2b05ee44dbab0009c09d310699683a7d9e464df693/gluon/oscq-inspector"
---

# OSCQuery Inspector

OSCQuery Inspector is a desktop application for macOS, Windows and Linux that connects to OSCQuery servers. OSCQuery is a protocol by which an application publishes its OSC address space, the list of everything it can be controlled with, as JSON over HTTP. OSCQuery Inspector finds those servers on the local network, shows their address space as a tree, shows each value and lets you change it, every change sent as an OSC message. It is meant for people who build or debug OSC setups: checking what a server really publishes, driving it by hand, and watching the messages that go out and come back.

**Download**: the [Releases page](https://github.com/gluon/oscq-inspector/releases), one file per system, free; the macOS app is signed and notarised from the version after 0.5.1, the Windows program is unsigned; [how to open it the first time](https://github.com/gluon/oscq-inspector/blob/HEAD/docs/install.md). What changed between versions: [CHANGELOG.md](https://github.com/gluon/oscq-inspector/blob/HEAD/CHANGELOG.md).
