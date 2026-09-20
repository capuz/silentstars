---
repo: "servo/surfman"
name: "surfman"
description: "Accelerated offscreen graphics for WebGL"
readmeQualityOk: true
url: "https://github.com/servo/surfman"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 193
forks: 100
openIssues: 25
closedIssues: 39
watchers: 21
contributors: 75
recentReleases: 0
createdAt: "2015-04-04T05:09:44Z"
lastCommitAt: "2026-09-20T08:37:07Z"
lastReleaseAt: "2026-06-13T10:05:34Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 28
maintainers: ["mrobinson", "jdm", "mukilan"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbd08fb6b8a596e0a30926b4f0d621007d22f1fc89ac730e61e28fe9b7995282/servo/surfman"
---

# surfman [](https://github.com/servo/surfman/actions)

`surfman` is a low-level, cross-platform Rust library for managing *surfaces*, blocks of image data
in GPU memory. Using this library, you can:

* Draw to a window (perhaps created with `winit`) on the CPU.

* Render to a window (created via `winit` or otherwise) with OpenGL.

* Render to an off-screen surface with OpenGL.

* Use a surface created on one thread as an OpenGL texture on another thread.

* Draw to a surface with a platform-specific GPU API like Metal.

`surfman` forms the low-level graphics infrastructure of the [Servo](https://github.com/servo/servo)
project, where it allows for easy porting of the browser's WebGL and WebXR code to a variety of
platforms.

## What `surfman` is not

`surfman` is not a full-featured GPU rendering API. It doesn't attempt to abstract over rendering
libraries like OpenGL, Metal, and Direct3D. For that, try [gfx-rs](https://github.com/gfx-rs/gfx).

`surfman` is also not a windowing solution. It can only render to a window that is already open and
needs to be paired with a crate like [winit](https://github.com/rust-windowing/winit) to actually
open the window. 

Likewise, `surfman` is…
