---
repo: "Klemmbaustein/Klemmgine2"
name: "Klemmgine2"
description: "A lightweight 3D game engine featuring a custom scripting language"
readmeQualityOk: true
url: "https://github.com/Klemmbaustein/Klemmgine2"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["3d-engine", "cpp", "scripting-language", "wip"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2024-11-07T16:04:42Z"
lastCommitAt: "2026-10-09T10:53:41Z"
lastReleaseAt: "2026-10-06T21:05:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 85
maintainers: ["Klemmbaustein", "nconder"]
openGraphImageUrl: "https://opengraph.githubassets.com/295a2b4fc7983b4fd9fc10bf498b23892ebc7b380b6fca7a72e1993386fab22e/Klemmbaustein/Klemmgine2"
---

# Klemmgine 2

> [!WARNING]
> The engine is still in development. It isn't stable yet.

A full rewrite of my game "Klemmgine" game engine.
A very lightweight (the editor executable is 10MB, a non editor one is 4MB) 3D game engine
written in C++ using OpenGL for rendering. It currently runs on Windows
and Linux.

## Features:

### High level

- Pretty fast rendering (can easily maintain 1000+ frames per second on a RTX 3060 TI GPU)
  and editor (Starting the editor and opening a project usually takes around 100ms)
- A customizable graphical editor to edit 3d scenes, assets and projects.
- A custom scripting language inspired mostly by C#, integrated with the UI definition
  language [from my UI library](https://github.com/Klemmbaustein/KlemmUI)
  and a script editor for this built into the editor, including a debugger with breakpoints.
- Custom shader system and a material system that control uniforms for these shaders.
- Built in graphical effects like real time shadows, bloom,
  ambient occlusion, anti aliasing and a robust post processing system that
  can easily support more post process effects.
- A physics/collision system powered by Jolt Physics.
- Audio using OpenAL.

####…
