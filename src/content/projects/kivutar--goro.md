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
stars: 43
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-06-26T16:40:36Z"
lastCommitAt: "2026-08-22T04:07:05Z"
lastReleaseAt: "2026-08-19T03:59:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["kivutar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e0cf402db2a8a5edebdc64136e9796fcd60ffb2e0cbb24150104fef18eb0616/kivutar/goro"
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

## Project Goals

- Faithfully reimplement the original Ragnarok Online client.
- Focus on the pre-renewal 2008 experience first.
- Stay pure Go, without CGO, so cross-compilation and deployment stay simple on
  many platforms.
- Aim for simple, readable, hackable codebase.
- Use a modern GPU pipeline through GoGPU, including Vulkan and Wayland support.
- Deliver good performance, including support for high-refresh-rate displays.
- Provide a modernized, neat themeable UI built with `gogpu/ui`.
- Keep the engine reusable for creating new MMORPGs.
- Become a drop-in…
