---
repo: "ferzkopp/SDL_gfx"
name: "SDL_gfx"
description: "Copy of https://sdlgfx.svn.sourceforge.net/svnroot/sdlgfx - maybe out of date! The SVN version IS the official release."
readmeQualityOk: true
url: "https://github.com/ferzkopp/SDL_gfx"
homepage: "http://www.ferzkopp.net"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [50, 47]
stars: 56
forks: 17
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2011-06-10T02:49:12Z"
lastCommitAt: "2026-11-16T04:29:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 47
maintainers: ["ferzkopp"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd1dc997c3919621bd915dc8d2dbf7a52907896b1bbaf90cef658b0a390f1927/ferzkopp/SDL_gfx"
---

# SDL_gfx

Graphics primitives, rotozoomer, framerate control, image filters and custom blitters for
**SDL 1.2** surfaces.

|  |  |
|---|---|

SDL_gfx works with SDL 1.2 — classic [SDL-1.2](https://github.com/libsdl-org/SDL-1.2) or
[sdl12-compat](https://github.com/libsdl-org/sdl12-compat). For SDL2 use
[SDL2_gfx](https://github.com/ferzkopp/SDL2_gfx), for SDL3 use [SDL3_gfx](https://github.com/ferzkopp/SDL3_gfx).

## Components

| Component | Files | Description |
|---|---|---|
| Graphics primitives | `SDL_gfxPrimitives.h/.c` | Pixels, lines (plain, anti-aliased, thick), rectangles, rounded boxes, circles, arcs, ellipses, pies, triangles, polygons (filled, anti-aliased, textured), Bézier curves and text with a built-in or custom bitmap font |
| Built-in font | `SDL_gfxPrimitives_font.h` | 8x8 bitmap font; more fonts in `Fonts/` (load with `gfxPrimitivesSetFont`) |
| Rotozoomer | `SDL_rotozoom.h/.c` | Rotate, zoom, shrink and flip surfaces (with optional smoothing) |
| Framerate control | `SDL_framerate.h/.c` | Frame-rate limiter (`FPSmanager`) |
| Image filters | `SDL_imageFilter.h/.c` | Arithmetic and filter functions on byte buffers (add, mean, multiply, shift, binarize,…
