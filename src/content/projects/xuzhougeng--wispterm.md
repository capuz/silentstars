---
repo: "xuzhougeng/wispterm"
name: "wispterm"
description: "A cross-platform terminal workspace for remote development and AI agent workflows, powered by libghostty-vt"
url: "https://github.com/xuzhougeng/wispterm"
homepage: "https://wispterm.cc-remote.app/"
language: "Zig"
languages: ["Zig"]
languagePcts: [88]
topics: ["ghostty", "terminal", "windows", "macos"]
stars: 258
forks: 16
openIssues: 9
closedIssues: 72
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-04-30T11:53:26Z"
lastCommitAt: "2026-06-24T00:23:44Z"
lastReleaseAt: "2026-05-05T08:18:41Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["hoptop", "xuzhougeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f6f3238849e88b0d9251bce433b7488d22860846f77891bc42bc7575d1b3c3f/xuzhougeng/wispterm"
discussionCount: 8
---

English | [简体中文](README.zh-CN.md)

# WispTerm

<p>
<br>
</p>

**WispTerm** is a cross-platform terminal workspace for remote development and AI agent workflows. It is written in Zig and powered by [libghostty-vt](https://github.com/ghostty-org/ghostty) for terminal emulation.

> [!NOTE]
> WispTerm ships for **Windows** and **macOS** (Apple Silicon and Intel). A
> **Linux** AppImage is published for community testing and remains
> experimental.

## Features

- **Ghostty's terminal emulation** - uses libghostty-vt for VT parsing and terminal state
- **Native font discovery** - find system fonts by name via DirectWrite, CoreText, or fontconfig, with per-glyph fallback for missing characters
- **FreeType rendering** - high-quality glyph rasterization with Ghostty-style font metrics
- **Sprite rendering** - box drawing, block elements, braille patterns, powerline symbols
- **Theme support** - Ghostty-compatible theme files, 450+ themes built in (default: Poimandres)
- **Background image and shaders** - wallpaper blending plus Ghostty-compatible GLSL post-processing
- **Splits and tabs** - vertical/horizontal splits, tab strip, focus-follows-mouse, equalize sizes
- **File Explorer and…
