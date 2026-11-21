---
repo: "akiyosi/zonvie"
name: "zonvie"
description: "🧟 Zonvie is a Fast, feature-rich Neovim GUI built with Zig, native on macOS and Windows."
readmeQualityOk: true
url: "https://github.com/akiyosi/zonvie"
homepage: "https://zonvie.dev"
language: "Zig"
languages: ["Zig", "Swift"]
languagePcts: [70, 20]
topics: ["neovim", "neovim-guis", "text-editor", "zig"]
stars: 176
forks: 9
openIssues: 2
closedIssues: 12
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-31T18:46:32Z"
lastCommitAt: "2026-11-21T11:34:34Z"
lastReleaseAt: "2026-03-03T13:16:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 37
maintainers: ["akiyosi"]
openGraphImageUrl: "https://opengraph.githubassets.com/87d135a43e2e096472598d29e3f8ce2809ec49889659dc606bf463f13630899e/akiyosi/zonvie"
---

# Zonvie

Zonvie is a Fast, feature-rich Neovim GUI built with Zig, native on macOS, Windows and Linux.

## Features

- **Native Performance**: Zig core with Metal (macOS), D3D11 (Windows) and OpenGL (Linux) rendering
- **Zero-allocation Hot Paths**: Optimized for minimal latency during redraw/flush
- **Full Neovim UI API Compliance**: Supports ext_cmdline, ext_popupmenu, ext_messages, ext_tabline
- **Remote Development**:
  - SSH connection to remote hosts
  - Devcontainer support for containerized development environments
- **Per-window Fonts**: give any window or float its own `guifont` / scale (`zonvie.set_window_font`)
- **Smooth Scrolling**: wheel and trackpad scrolls eased per grid, on the main window and external windows
- **Custom Shaders**: Shadertoy / Ghostty GLSL post-process chains, plus edit-effect inputs (`iCellAge`, `iPrevFrame`) for Thymer-style effects
- **Customizable**: TOML configuration file
