---
repo: "Game-Tek/Byte-Engine"
name: "Byte-Engine"
description: "BYTΞ Engine is a Rust based game engine focused on API simplicity and modularity. https://discord.gg/cyhVG82R7w"
readmeQualityOk: true
url: "https://github.com/Game-Tek/Byte-Engine"
homepage: "https://byte-engine.0x44491229.dev/docs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["game-development", "game-engine", "renderer", "logger", "input", "api-simplicity", "vulkan", "core-audio-api", "win32", "thread-pool"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-12-12T21:27:10Z"
lastCommitAt: "2026-08-11T04:50:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 60
maintainers: ["facundo-villa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/161547200/21ed6c00-462a-11ea-8535-b47718e87774"
discussionCount: 1
---

# Byte-Engine

📚 **Docs:** <https://byte-engine.0x44491229.dev/docs>

Use Byte-Engine to build Rust applications that need graphics,
input, audio, physics, resources, networking, and retained UI in one runtime.

Start with the public `byte-engine` facade for most applications. Use the
lower-level crates when you need direct access to rendering, audio, resources,
shader processing, transport, math, or utilities. Each crate provides a small,
composable engine layer.

> [!WARNING]
> **Status:** Byte-Engine is early, so expect breaking API changes. Pin the
> package version and review the changelog before you update.

## ✨ What you can use

- 🖼️ Platform graphics paths for Vulkan/Linux, Metal/macOS, and Direct3D 12/Windows.
- 🔊 Platform audio interfaces for Linux, macOS, and Windows.
- 🎮 Action-based input that lets your application respond to intent such as
  `Move`, `Fire`, or `Confirm` instead of raw device buttons.
- 📨 Actor-style system boundaries built around compact messages, factories,
  handles, and listeners.
- 📦 Asset pipeline that separates authored assets from runtime-ready resources.
- 🛠️ `beld`, a workspace CLI for baking, listing, querying, inspecting, and…
