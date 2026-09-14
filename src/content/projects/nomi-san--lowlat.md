---
repo: "nomi-san/lowlat"
name: "lowlat"
description: "Stream your Linux desktop to any Parsec client, built for remote work and gaming."
readmeQualityOk: true
url: "https://github.com/nomi-san/lowlat"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["game-stream", "linux", "low-latency", "parsec", "parsec-cloud", "remote-desktop", "rust", "sunshine"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T12:05:29Z"
lastCommitAt: "2026-09-14T09:12:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["nomi-san"]
openGraphImageUrl: "https://opengraph.githubassets.com/798e74e9cb0d0ba0c7b97ecccbc131de165b0b9ea4c2fa0be3b95fefaaa9c293/nomi-san/lowlat"
---

# lowlat

Stream your Linux desktop to any Parsec client.

lowlat is an ultra-low-latency remote desktop host that speaks the Parsec protocol. Unmodified
Parsec clients connect to it on every platform they already run on, with no plugin, no forked
client, and no patched binary on the other end.

It targets **Linux first**. Unattended operation, headless operation, and running as a system
service are design inputs rather than afterthoughts.

## Status

**Pre-release. A Linux machine hosts, and stock clients stream from it.** Everything below has
been run against unmodified clients rather than argued for; the phase plan with each gate's
result is [docs/impl-plan.md](https://github.com/nomi-san/lowlat/blob/HEAD/docs/impl-plan.md), and the working log is
[docs/changelog.md](https://github.com/nomi-san/lowlat/blob/HEAD/docs/changelog.md).

What works today, measured on one desktop (KDE Plasma on Wayland, Debian 13):

- **Streaming** H.264 and HEVC, eight-bit and ten-bit, 4:2:0 and (where every encoder on the
  machine can) 4:4:4, from the display device below the compositor -- so the login screen and
  an unattended machine stream too. Encoders: NVENC, VA-API on AMD and Intel, and…
