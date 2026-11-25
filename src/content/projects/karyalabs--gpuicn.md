---
repo: "karyalabs/gpuicn"
name: "gpuicn"
description: "Open-code components for GPUI, built on Base GPUI."
readmeQualityOk: true
url: "https://github.com/karyalabs/gpuicn"
homepage: "https://karyalabs.dev/gpuicn"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["gpui", "gpui-component", "shadcn-ui", "gpuicn"]
stars: 18
forks: 1
openIssues: 1
closedIssues: 100
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-08-23T17:06:08Z"
lastCommitAt: "2026-11-25T03:14:45Z"
lastReleaseAt: "2026-09-17T09:24:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["devaryakjha", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344012397/99c4b132-44f9-4c52-bc95-264b711bc661"
---

# gpuicn

gpuicn gives native [GPUI](https://www.gpui.rs/) apps 71 polished, shadcn-styled
components, from Button and Dialog to Sidebar, Resizable and Virtual List. Like
shadcn/ui, it copies the Rust source into your app, so you own every line and
can change any of it. Behavior comes from [GPUI Kit](https://github.com/longbridge/gpui-kit);
gpuicn adds the Nova styling, a themeable token system and larger desktop
components.

> **Warning**
>
> gpuicn is experimental. APIs and styling can change between releases; `gpuicn diff`
> shows exactly what an update would change in your copy.

## Quick start

```sh
cargo install gpuicn-cli --version 0.13.8 --locked
gpuicn new my-app --base-color zinc  # cargo new + pinned deps, Geist fonts, theme, Button and a starter window
cd my-app && cargo run
gpuicn add sidebar dialog
gpuicn theme set --radius 0.5rem --appearance dark
```

That's the whole setup. No Node.js is involved. In an existing app, run
`gpuicn init` from its root instead of `gpuicn new`; it keeps everything you
already have. Installing the CLI also adds `cargo gpuicn` as an alias.
