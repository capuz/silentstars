---
repo: "eyalamirmusic/eacp"
name: "eacp"
description: "C++ Cross platform graphics, networking, windowing and other utilities"
readmeQualityOk: true
url: "https://github.com/eyalamirmusic/eacp"
homepage: "https://eacp.eyalamir.org"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 25
forks: 7
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-12-29T03:30:47Z"
lastCommitAt: "2026-10-26T21:00:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["eyalamirmusic", "jamierpond"]
openGraphImageUrl: "https://opengraph.githubassets.com/3653f35891314c9a1ed98c066159127c91dfa984c02ef8b137049c92249362ee/eyalamirmusic/eacp"
---

# eacp

A cross-platform C++20 framework that abstracts native OS primitives behind a
single, modern API. Write a desktop or mobile app once and have it use the
platform's own windows, views, input, networking and GPU directly: there is no
bundled renderer, no bundled widget toolkit and no VM. That reaches the GPU
too: a shader is a C++ struct, emitted as Metal, HLSL and GLSL from one source,
and the pipeline around it is one API over all three backends.

## Graphics

Windows, views and input are the platform's own — Cocoa, Win32, UIKit,
Android's NativeActivity, and Wayland or X11 on Linux — so an eacp window
looks, moves and resizes like every other window on the desk.

- **Windows** — the usual options: transparent backgrounds, always-on-top,
  click-through, size and aspect-ratio constraints, fullscreen, rounded
  corners, a drawn application icon, an initial position, and mouse lock for
  a first-person camera. The primary display's frame and work area are a call
  away.
- **Views and 2D drawing** — native views with paint and event callbacks. On
  Apple platforms and Windows there is a 2D drawing context over Core Graphics
  and Direct2D, with paths, fonts and text layout,…
