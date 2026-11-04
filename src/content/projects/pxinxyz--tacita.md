---
repo: "pxinxyz/Tacita"
name: "Tacita"
description: "tacita is an immediate-mode gui framework written in rust. no_std, renderer-agnostic, zero-alloc steady state. for in-process overlays, embedded tooling, and hosts that need full control of their rendering. public facing repo of restricted-gui."
readmeQualityOk: true
url: "https://github.com/pxinxyz/Tacita"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T21:54:31Z"
lastCommitAt: "2026-11-04T02:56:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 16
maintainers: ["pxinxyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0020eed83fea4b65875d0053566ca9da270207c81fcfd47be7f1747c836d323/pxinxyz/Tacita"
---

Tacita is an immediate mode GUI framework written in Rust.
The application declares controls each frame.
Tacita retains interaction state between frames.

The application owns its window, graphics device, and swap chain.
Tacita produces draw data for a renderer.
The core uses `no_std` with `alloc`.

The recording shows the demo controls and rendering.

https://github.com/user-attachments/assets/bd03ed00-9938-4251-9c3e-171547b80d83

## Features

- The core provides windows, tabs, menus, popups, scroll areas, and docking.
- The layout system supports rows, columns, grids, wrapping, and spanning.
- Data controls include virtualized lists, sortable tables, plots, curve editors, and gradient editors.
- The text system supports shaping, bidirectional layout, font fallback, and multiline editing.
- The input system supports keyboard navigation, shortcuts, mouse capture, and drag operations.
- The animation system provides tweens, springs, keyframes, and reduced motion settings.
- Renderers support rounded shapes, gradients, masks, blur, and rendering into textures.
- The core exposes accessibility nodes for the application.
- The Windows accessibility bridge uses Microsoft Active…
