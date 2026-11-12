---
repo: "shuv1337/rex-rune"
name: "rex-rune"
description: "Unofficial native Linux client for Rex, the terminal multiplexer from Superlogical. Written in Rust on Rune."
readmeQualityOk: true
url: "https://github.com/shuv1337/rex-rune"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 51
forks: 10
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-11-01T09:03:32Z"
lastCommitAt: "2026-11-12T10:43:27Z"
lastReleaseAt: "2026-11-10T22:24:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 41
maintainers: ["shuv1337", "ohporter"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae12e00041aed6111c54345a0d619276de19bbf0f914b168218200748cfc638e/shuv1337/rex-rune"
---

# Rex Linux

An unofficial, independent native Linux client for [Rex](https://www.superlogical.com/rex), the terminal multiplexer from Superlogical. It is not affiliated with, endorsed by or supported by Superlogical or the Rex authors.

Rex Linux attaches to an existing Rex server. Saved hosts contain sessions, each session's Rex windows become tabs, and the server defines the terminal splits. Sessions and their programs stay on the server when the app closes, so any other Rex client can attach to the same sessions.

It is written in Rust on [Rune](https://github.com/anomalyco/rune) (wgpu/winit, `rune-kit` components) with libghostty-vt for terminal emulation, and talks to the server through the [`rexrs`](https://github.com/a10y/rexrs) control SDK.

> **Status:** early. The protocol layer, workspace, terminal rendering and input are implemented and tested against real servers, but some areas (see [Current scope](#current-scope)) still need hands-on validation.

## Features

- **Settings → About** (also **About Rex Linux** in Commands) shows the app icon, version and how it was installed, the build commit and date, and for the active host, when connected, its Rex server's version,…
