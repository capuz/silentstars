---
repo: "nic-vdwalt/ingot"
name: "ingot"
description: "The app framework for Odin - polished, fast, native + web desktop apps on wgpu, without Electron."
readmeQualityOk: true
url: "https://github.com/nic-vdwalt/ingot"
language: "Odin"
languages: ["Odin"]
languagePcts: [84]
topics: ["cross-platform", "gui-framework", "immediate-mode-gui", "odin", "wasm", "webgpu", "wgpu"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-17T17:23:03Z"
lastCommitAt: "2026-08-29T10:21:13Z"
lastReleaseAt: "2026-08-23T11:00:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["nic-vdwalt"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3fa8d82871bb472dea1220db9637ab3a68c5229036d27a3f8576bf04c8ec305/nic-vdwalt/ingot"
---

</p>

  <strong>The Odin app framework for polished native and web desktop tools—without Electron.</strong>
</p>

</p>

</p>

</p>

</p>

Ingot is a self-contained immediate-mode framework built on Odin's bundled
`vendor:wgpu`. One renderer targets macOS/Metal, Windows/D3D12, Linux/Vulkan,
and browser WASM/WebGPU.

- Native and web builds from one source
- Immediate-mode UI for desktop tools
- Bounded named commands and contextual keyboard shortcuts
- Bounded raw mouse, touch, and pen events with caller-owned behavior
- Batched 2D graphics, input, audio, networking, accessibility, and terminals
- Event-driven rendering with near-zero idle work
- Deterministic, bounded test harnesses

> [!IMPORTANT] > `0.1.7` is the latest source tag for a young `0.x` API. Pin an exact revision
> and validate every platform your application ships on.

## The experiment

Ingot explores whether deterministic simulation testing can shape an application
framework from the start. Explicit state, bounded work, and compile-gated seams
let seeded harnesses exercise production code without requiring a window, GPU,
network, shell, or assistive technology. This is an engineering experiment—not
a claim of…
