---
repo: "agent-sh/computer-use-linux"
name: "computer-use-linux"
description: "Linux desktop control over MCP — AT-SPI, GNOME Shell, Wayland portals, ydotool"
readmeQualityOk: true
url: "https://github.com/agent-sh/computer-use-linux"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["agent", "ai", "claude", "codex", "computer-use", "gnome", "hermes", "linux", "llm", "mcp"]
stars: 420
forks: 43
openIssues: 1
closedIssues: 51
watchers: 4
contributors: 10
recentReleases: 5
createdAt: "2026-05-13T20:56:23Z"
lastCommitAt: "2026-08-22T04:05:46Z"
lastReleaseAt: "2026-06-16T21:33:58Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 29
maintainers: ["avifenesh", "dependabot[bot]", "nisavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b1a17972731c5faa731b3d0cde1dd3f6c37ffc7119b8b533407fc563fed3f32/agent-sh/computer-use-linux"
fundingLinks: ["GITHUB:https://github.com/agent-sh", "GITHUB:https://github.com/avifenesh"]
discussionCount: 2
---

<h1>computer-use-linux</h1>
  <p><strong>Control a real Linux desktop from any MCP host.</strong></p>
  <p>
  </p>
</div>

`computer-use-linux` reads accessibility trees, takes screenshots, and drives clicks, scrolls, and keystrokes across GNOME, KDE/KWin, Hyprland, i3, and COSMIC — Wayland-first, X11 best-effort.

```bash
npm install -g @agent-sh/computer-use-linux
computer-use-linux doctor | jq .readiness
```

The Rust crate is published as [`computer-use-linux`](https://crates.io/crates/computer-use-linux) and the npm wrapper as [`@agent-sh/computer-use-linux`](https://www.npmjs.com/package/@agent-sh/computer-use-linux). Prebuilt binaries ship with the [latest release](https://github.com/agent-sh/computer-use-linux/releases/latest).

## What this is

`computer-use-linux` is a Rust MCP server and CLI for Linux desktop control. The crate ships the main `computer-use-linux` binary plus a small `computer-use-linux-cosmic` helper used only for COSMIC Wayland window management. Any MCP host — Codex Desktop's Linux build, Claude Desktop, [Hermes Agent](https://github.com/NousResearch/hermes-agent), or your own client — can spawn it and gain full control of the local Linux desktop:…
