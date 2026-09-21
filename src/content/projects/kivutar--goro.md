---
repo: "kivutar/goro"
name: "goro"
description: "A recreation of Ragnarok Online client in Go with gogpu"
readmeQualityOk: true
url: "https://github.com/kivutar/goro"
homepage: "https://kivutar.github.io/goro/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["client", "ragnarok-online", "mmorpg"]
stars: 76
forks: 15
openIssues: 4
closedIssues: 11
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-06-26T16:40:36Z"
lastCommitAt: "2026-09-21T09:13:53Z"
lastReleaseAt: "2026-09-10T10:12:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 40
maintainers: ["kivutar", "jacksonbenete"]
openGraphImageUrl: "https://opengraph.githubassets.com/65c3656cbf0b9fda97d0129dae48075c9dddd5df4cd132d4db04a07810325295/kivutar/goro"
---

# goro

`goro` is an open Ragnarok Online client recreation implemented in Go.

The runtime uses GoGPU/wgpu for the window and presentation path, with a modern
GPU pipeline and Vulkan support. Built 100% in Go without CGO, it is fully statically
compiled and can be easily deployed.

This project wouldn't be possible without the existence of other open source clients
like ROBrowser Legacy and Open Midgard and their reverse engineering efforts.

Visit the [project website](https://kivutar.github.io/goro/) or see Goro in
action on this [YouTube playlist](https://www.youtube.com/watch?v=5qldvYi9v-U&list=PLQhSdCGUOBwc).

We also have an active [Discord](https://discord.gg/5fXmjXJCwa) to provide live support and news.

## Project Goals

- Faithfully reimplement the original Ragnarok Online client.
- Focus on the pre-renewal 2008 experience first.
- Stay pure Go, without CGO, so cross-compilation and deployment stay simple on
  many platforms.
- Aim for simple, readable, hackable codebase.
- Use a modern GPU pipeline through GoGPU, including Vulkan and Wayland support.
- Deliver good performance, including support for high-refresh-rate displays.
- Provide a modernized, neat themeable UI…
