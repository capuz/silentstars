---
repo: "chris-ritsen/network-audio-controller"
name: "network-audio-controller"
description: "Unofficial Dante Controller alternative for iOS/iPadOS, Linux, macOS, Windows, and the web. Discover, route, configure, meter, and monitor Dante audio devices with a native iPhone/iPad app, CLI, browser interface, daemon, and API."
readmeQualityOk: true
url: "https://github.com/chris-ritsen/network-audio-controller"
homepage: "https://netaudio.app"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [51, 29]
topics: ["dante", "audinate", "aes67", "network", "audio", "linux", "cli", "aoip", "audio-over-ip", "python"]
stars: 393
forks: 50
openIssues: 27
closedIssues: 18
watchers: 25
contributors: 12
recentReleases: 1
createdAt: "2022-01-26T21:16:19Z"
lastCommitAt: "2026-11-07T13:51:30Z"
lastReleaseAt: "2026-09-09T14:31:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 36
maintainers: ["chris-ritsen", "AchilleD", "stakach"]
openGraphImageUrl: "https://opengraph.githubassets.com/c349d1329d0805cefcbd66c201066fad91ff4eecd897c7c6ebdd955b86ba9f7f/chris-ritsen/network-audio-controller"
discussionCount: 5
---

# NetAudio — unofficial Dante Controller alternative

NetAudio is an unofficial Dante Controller alternative for discovering,
routing, configuring, and monitoring Dante network audio devices. The project
provides open-source command-line tools, a web interface, a persistent daemon,
and a protocol library for Linux, macOS, and Windows.

NetAudio is a native Dante Controller alternative for iOS and iPadOS,
available now for iPhone and iPad through
[TestFlight](https://testflight.apple.com/join/GcuDerST). The app communicates
directly with Dante devices for live discovery, audio subscription routing,
device and channel configuration, live device metering, clock and status
monitoring, and diagnostics. Local direct-device control runs on the
phone or tablet without a separate computer, remote desktop session, or NetAudio
daemon. The app also supports Dante Domain Manager (DDM) networks and connections
to a NetAudio daemon.

[Website and iOS app](https://netaudio.app/) ·
[Install the CLI and web interface](#installation) ·
[Quick start](#quick-start)

## Interfaces and architecture

NetAudio serves both interactive device control and software automation. A
shared Rust protocol core…
