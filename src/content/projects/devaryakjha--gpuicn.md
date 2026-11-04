---
repo: "devaryakjha/gpuicn"
name: "gpuicn"
description: "Open-code components for GPUI, built on Base GPUI."
readmeQualityOk: true
url: "https://github.com/devaryakjha/gpuicn"
homepage: "https://ui.jha.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["gpui", "gpui-component", "shadcn-ui", "gpuicn"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 54
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-23T17:06:08Z"
lastCommitAt: "2026-11-04T11:27:52Z"
lastReleaseAt: "2026-09-17T09:24:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["devaryakjha", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344012397/99c4b132-44f9-4c52-bc95-264b711bc661"
---

# gpuicn

gpuicn gives native [GPUI](https://www.gpui.rs/) apps 45 polished, shadcn-styled
components, from Button and Dialog to Sidebar, Resizable and Virtual List. Like
shadcn/ui, it copies the Rust source into your app, so you own every line and
can change any of it. Behavior comes from [GPUI Kit](https://github.com/longbridge/gpui-kit);
gpuicn adds the Nova styling, a themeable token system and larger desktop
components.

> [!WARNING]
> gpuicn is experimental. APIs and styling can change between releases; `gpuicn diff`
> shows exactly what an update would change in your copy.

## Quick start

```sh
cargo install gpuicn-cli --version 0.9.2 --locked
gpuicn new my-app --base-color zinc  # cargo new + pinned deps, Geist fonts, theme, Button and a starter window
cd my-app && cargo run
gpuicn add sidebar dialog
gpuicn theme set --radius 0.5rem --appearance dark
```

That's the whole setup. No Node.js is involved. In an existing app, run
`gpuicn init` from its root instead of `gpuicn new`; it keeps everything you
already have. Installing the CLI also adds `cargo gpuicn` as an alias.

The starter `main.rs` is one call: `ui::app::run` opens the window with the
Lucide icons, the Geist…
