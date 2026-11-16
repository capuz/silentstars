---
repo: "grimandgreedy/viewport-lib"
name: "viewport-lib"
description: "Viewport library for Rust"
readmeQualityOk: true
url: "https://github.com/grimandgreedy/viewport-lib"
homepage: "https://crates.io/crates/viewport-lib"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["3d", "3d-viewport", "rendering", "rust", "visualisation", "wgpu"]
stars: 8
forks: 0
openIssues: 55
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-17T12:56:49Z"
lastCommitAt: "2026-11-16T11:51:19Z"
lastReleaseAt: "2026-04-26T07:25:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 49
maintainers: ["grimandgreedy"]
openGraphImageUrl: "https://opengraph.githubassets.com/e18a79195e6c3fab1f4e38c8fe6afaea61eaf5ec0c0b0e75660fc24c2c214851/grimandgreedy/viewport-lib"
fundingLinks: ["GITHUB:https://github.com/grimandgreedy"]
---

# viewport-lib

viewport-lib is an embeddable 3D and 2D renderer for Rust. It is the rendering half of scientific and data visualisation applications, CAD and engineering tools, simulators, editors and games. It renders with your application's wgpu device and leaves the event loop to you, so a viewport happily renders in an egui, iced, Slint, Bevy or winit app like any other widget.

## Features

- **Surfaces and materials**: a full physically based material model matching glTF: textures and normal maps, glass with refraction and absorption, clear coat, sheen and brushed metal.
- **Lighting**: directional, point and spot lights in photometric units; cascaded, point-light and contact shadows; image-based lighting from HDR environments; light probes and baked lightmaps; manual, physical-camera and automatic exposure.
- **Scientific data types**: volume rendering, volume meshes, contour lines, surface LIC, vector and tensor glyphs, streamtubes and ribbons, point clouds, Gaussian splats, marching-cubes and implicit surfaces.
- **Overlays**: a 2D drawing layer the renderer draws in the same frame as the scene, for labels, annotations and HUDs: shapes, vector paths and text with solid,…
