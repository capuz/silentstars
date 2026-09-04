---
repo: "akeit0/gpui-dotnet"
name: "gpui-dotnet"
description: "An experimental C# UI framework with binding Rust GPUI"
readmeQualityOk: true
url: "https://github.com/akeit0/gpui-dotnet"
language: "C#"
languages: ["C#", "Rust"]
languagePcts: [58, 41]
topics: ["dotnet", "rust", "ui"]
stars: 44
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-01T14:02:33Z"
lastCommitAt: "2026-09-04T08:09:10Z"
lastReleaseAt: "2026-09-04T02:11:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 38
maintainers: ["akeit0"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d26d2ed1a9c33d95b157076c7ce97020c6a07cd24b36306e0618e6899367694/akeit0/gpui-dotnet"
---

# GPUI.NET

GPUI.NET is an experimental C# frontend for Rust [GPUI](https://gpui.rs/). Applications keep
their state and view logic in .NET; a native Rust host validates a compact render protocol and
materializes GPUI elements, windows, controls, and retained resources.

The API is semantic rather than a direct binding of every GPUI Rust type. This keeps normal C#
code platform-neutral and lets the native implementation evolve behind a versioned C ABI.

This is a preview release: public APIs, the semantic
schema, and the native ABI may change before a stable release.

## Features at a glance

### UI features

- Semantic C# layout with stacks, spacing, padding, sizing, alignment, text, buttons, inputs,
  badges, dividers, and application-owned typed styles.
- Retained `Scroll`, virtual `List`, virtual `Table`, `Input`, `Slider`, and `Dock` controls with
  native scrolling, selection, focus, IME, measurement, and pointer state.
- `Overlay`, `Dialog`, `Sheet`, `Tooltip`, `ContextMenu`, and `PopoverMenu` layers with native
  placement, viewport clamping, focus restoration, stacking, and dismissal.
- Native image decoding/caching and vector drawing with paths, fills, strokes, curves,…
