---
repo: "ferzkopp/SDL2_gfx"
name: "SDL2_gfx"
description: "SDL2_gfx code: Library containing 20+ graphics primitives (line, box, circle, polygon,...) for SDL2."
readmeQualityOk: true
url: "https://github.com/ferzkopp/SDL2_gfx"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-31T21:56:35Z"
lastCommitAt: "2026-11-16T04:29:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["ferzkopp"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b4f450b39264f4d1dda39bacf2a983759b5d75dda93e0e491d860d81c78c0ae/ferzkopp/SDL2_gfx"
---

# SDL2_gfx

Graphics primitives (line, box, circle, polygon, ...), surface rotozoomer, framerate control and
image filters for [SDL2](https://github.com/libsdl-org/SDL).

## Components

| Component | Header | Description |
|---|---|---|
| Graphics primitives | `SDL2_gfxPrimitives.h` | Pixels, lines (plain, anti-aliased, thick), rectangles, rounded boxes, circles, arcs, ellipses, pies, triangles, polygons (filled, textured), Bézier curves, 8x8 bitmap font text — drawn with an `SDL_Renderer` |
| Rotozoomer | `SDL2_rotozoom.h` | Rotate, zoom, shrink and flip `SDL_Surface`s (with optional smoothing) |
| Framerate control | `SDL2_framerate.h` | Simple frame-rate limiter (`FPSmanager`) |
| Image filters | `SDL2_imageFilter.h` | Byte-buffer arithmetic and filter functions (add, mean, multiply, shift, binarize, ...) |

SDL2_gfx works with SDL 2.0 (for SDL 1.2 use [SDL_gfx](https://github.com/ferzkopp/SDL_gfx), for SDL3
use [SDL3_gfx](https://github.com/ferzkopp/SDL3_gfx)).

## Quick start

Build with CMake against an installed SDL2 (see [docs/BUILDING.md](https://github.com/ferzkopp/SDL2_gfx/blob/HEAD/docs/BUILDING.md) for the full
Windows/Linux setup, presets and VS Code integration):…
