---
repo: "Ciuntuc-BIM-Studio/lapin"
name: "lapin"
description: "Lapin — an open-source classic BIM modeller built natively on IFC (MIT). Helpware: if it helps you, please help someone who needs it, in any way you can."
readmeQualityOk: true
url: "https://github.com/Ciuntuc-BIM-Studio/lapin"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [60, 35]
stars: 53
forks: 19
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-10-23T18:13:01Z"
lastCommitAt: "2026-11-02T13:38:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["ionuting"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ae4bbf692349667bf89ac84ce053b49b4addfbe208c48c07c0d027f74eca8a/Ciuntuc-BIM-Studio/lapin"
---

# Lapin

BIM authoring for architects and engineers.

Lapin is a desktop application and a classic modeller on the IFC schema. Its interface
(React, TypeScript, three.js) runs in a Tauri window and talks over a local WebSocket to
Lapin's engine (C#, .NET 10, `engine/`), which holds the IFC model and derives its geometry
with its own B-rep kernel (`engine/src/Geometry`) and manifold for the booleans.

> Open source under the MIT licence (see `LICENSE`), and helpware (below).
> The geometry kernel was taken from BubbleBIM Pro (the author's own engine) on
> 25.10.2026 and is Lapin's own code since, under the same licence. manifold
> (Apache-2.0) and Clipper2 (BSL-1.0) are described in `engine/native/README.md`.

## Layout

| Folder | What |
|---|---|
| `engine/` | Lapin's engine: the IFC model, the platform, the `.lapin` package, the modules, the host |
| `ui/` | Lapin's interface: ribbon, 3D view, panels (React + three.js) |
| `desktop/` | the Tauri shell: the window, native dialogs, starts the engine |
| `products/*.json` | editions: the modules a package holds |
| `ui/src/modules/` | the UI modules: core, architecture, structure, drafting, phases, cost |
| `docs/plan.md` | the…
