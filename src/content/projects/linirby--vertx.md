---
repo: "Linirby/VertX"
name: "VertX"
description: "A lightweight, C++ engine/library designed to help  2D games creation! :3"
readmeQualityOk: true
url: "https://github.com/Linirby/VertX"
homepage: "https://linirby.github.io/VertX/"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["2d-game", "cpp20", "lib", "lightweight", "cpp", "cpp-library", "game-engine"]
stars: 8
forks: 0
openIssues: 6
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-20T12:48:31Z"
lastCommitAt: "2026-11-11T23:57:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 43
maintainers: ["Linirby"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d182e22cf2dc3f6582b0c7b31eae4978b72a35a3caf8e03ccfee2f022b7c381/Linirby/VertX"
fundingLinks: ["KO_FI:https://ko-fi.com/liliowo"]
---

# Lili2D

   [](https://github.com/Linirby/Lili2D/actions/workflows/ci.yml)

Lili2D is a lightweight 2D game engine written in C++20, built on top of **SDL3** and **SDL_GPU**.

I created this project to learn modern engine architecture and have a fast, clean framework for 2D games and game jams. :3

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Building](#building)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [Documentation](#documentation)
- [Community & Support](#community--support)

## Features

- **SDL_GPU Renderer**: Hardware-accelerated 2D rendering with automatic sorting and batching (`Render2DSystem`, `DynamicBatch`, `StaticBatch`) for sprites, primitives (rectangles, circles, lines), and bitmap text.
- **Entity Component System (ECS)**: Contiguous sparse-set component pools with multi-component queries (`ECSView`), entity prefabs (`createSprite`, `createRect`, `createCircle`, `createLine`, `createText`, `createAnimatedSprite`), and a deferred command buffer.
- **Zero-Allocation Text & Materials**: Contiguous `StringArena` for text components and ID-based `MaterialRegistry` for custom shaders and uniform buffers.
- **Fixed…
