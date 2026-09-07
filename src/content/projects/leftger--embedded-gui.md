---
repo: "leftger/embedded-gui"
name: "embedded-gui"
description: "Zero-allocation no_std GUI & HUD engine, 2D flex/grid layout, and widget toolkit for embedded-graphics displays"
readmeQualityOk: true
url: "https://github.com/leftger/embedded-gui"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["embedded", "embedded-graphics", "gui", "hud", "microcontroller", "no-std", "rust", "widgets"]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-05-31T03:17:34Z"
lastCommitAt: "2026-09-07T08:33:28Z"
lastReleaseAt: "2026-07-30T18:35:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["leftger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee848f8723d3b6703ef7ce1039afafb566a05983e9a280c70ad0db6ea45960cd/leftger/embedded-gui"
---

# embedded-gui

</p>

`embedded-gui` is a lightweight, deterministic, zero-allocation (`no_std`) GUI & HUD framework for microcontrollers and [`embedded-graphics`](https://crates.io/crates/embedded-graphics) displays.

Heavily inspired by modern wearable and smartwatch UI frameworks—its animation model, interaction contracts, and cinematic motion primitives draw from fluid, tactile embedded design patterns for widget composition, layout rules, and state-variant styling.

---

## Key Capabilities

- **Zero-Allocation (`no_std`)**: Built entirely on fixed-capacity data structures (`heapless`) with strict memory bounds and deterministic execution times.
- **Pure-Rust Declarative Component DSL**: Build fluid UI trees directly in Rust using the `Render` trait and `ViewContext` (`cx.column()`, `cx.row()`, `cx.button()`, `.when()`, `.when_some()`) without manual widget management.
- **Declarative KDL GUI Markup & Codegen**: Author complex UI screens in clean [KDL markup](https://kdl.dev) and compile directly into zero-allocation `#![no_std]` Rust code at build time with `include_gui!` or `gui_kdl!`.
- **2D Grid & Flex Layout Engines**: CSS-style track resolution (`"140px 1fr 2fr auto"`),…
