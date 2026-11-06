---
repo: "nomi-san/lowlat"
name: "lowlat"
description: "Stream your Linux desktop to any Parsec client, built for remote work and gaming."
readmeQualityOk: true
url: "https://github.com/nomi-san/lowlat"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["game-stream", "linux", "low-latency", "parsec", "parsec-cloud", "remote-desktop", "rust", "sunshine"]
stars: 24
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-08-15T12:05:29Z"
lastCommitAt: "2026-11-04T11:14:57Z"
lastReleaseAt: "2026-09-24T13:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["nomi-san", "Talhasarac"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae059c87b774a476666782f38083d2dfb1aa7c288a016397aec7342c78db7b70/nomi-san/lowlat"
---

# lowlat

Stream your Linux desktop to any Parsec client.

lowlat is an ultra-low-latency remote desktop host that speaks the Parsec protocol. Unmodified
Parsec clients connect to it on every platform they already run on, with no plugin, no forked
client, and no patched binary on the other end.

It targets **Linux first**. Unattended operation, headless operation, and running as a system
service are design inputs rather than afterthoughts. The same library carries **a client** as
its other half, on Linux and Windows, which streams from established hosts and from its own.

## Status

**Pre-release. A Linux machine hosts, and stock clients stream from it; the same library's
other half is a client, and it streams from established hosts.** Everything below has been
run against unmodified peers rather than argued for; the phase plans with each gate's result
are [docs/impl-plan.md](https://github.com/nomi-san/lowlat/blob/HEAD/docs/impl-plan.md) and [docs/impl-plan-client.md](https://github.com/nomi-san/lowlat/blob/HEAD/docs/impl-plan-client.md),
and the working log is [docs/changelog.md](https://github.com/nomi-san/lowlat/blob/HEAD/docs/changelog.md).

What works today, measured on one…
