---
repo: "zed-industries/embedded_gpui"
name: "embedded_gpui"
description: "An experimental UI plugin API base for Zed"
readmeQualityOk: true
url: "https://github.com/zed-industries/embedded_gpui"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 33
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-08T03:40:01Z"
lastCommitAt: "2026-09-05T07:49:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 28
maintainers: ["mikayla-maki"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7f064bc1547409de57bf9107d9e0e1dc79e9fe02d39ccb1f467e3b71938ff95/zed-industries/embedded_gpui"
---

# embedded_gpui

**Experimental.** GPUI running *inside* a Wasm component, embedded back into a
native GPUI application. A plugin is an ordinary GPUI program — entities,
elements, flexbox layout, input handlers, async tasks — compiled to
`wasm32-wasip2` and rendered by a host app that treats it as just another
element in its tree.

This is a spike exploring a possible UI-extension model for
[Zed](https://github.com/zed-industries/zed). Expect sharp edges and breaking
changes; nothing here is a supported API yet.

## What works today

- A guest-side GPUI platform: windows, retained display lists, mouse and
  keyboard input, timers/async, SVG and image rendering, text via host-side
  shaping. The WIT protocol (`wit/plugin.wit`) is pure substrate — `init`,
  `tick(inbound frames) -> turn`, and synchronous text shaping; nothing in it
  has UI meaning.
- A host runtime: loads a component with wasmtime on a background worker,
  replays its display lists as native GPUI primitives (text hits the host's
  real rasterizer), and never calls into wasm from the frame path.
- **Views are objects**: a host-homed `SurfaceApi` (a place pixels go) and a
  guest-homed `ViewApi` (the thing drawing…
