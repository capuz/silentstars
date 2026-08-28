---
repo: "benyblack/NovaTerminal"
name: "NovaTerminal"
description: "Cross-platform terminal emulator for deterministic rendering, VT correctness, GPU-accelerated performance, and modern SSH workflows."
readmeQualityOk: true
url: "https://github.com/benyblack/NovaTerminal"
homepage: "https://benyblack.github.io/NovaTerminal/"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["cross-platform", "deterministic", "developer-tools", "pty", "replay-testing", "ssh", "terminal", "terminal-emulator", "vt100", "vt-compatibility"]
stars: 17
forks: 2
openIssues: 29
closedIssues: 67
watchers: 0
contributors: 6
recentReleases: 3
createdAt: "2026-01-27T17:28:34Z"
lastCommitAt: "2026-08-28T14:26:32Z"
lastReleaseAt: "2026-08-27T20:40:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["benyblack"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cff7c9d74e282cda750de30ae1b70ba0ae3260e9aae7ff221fcfd1c72f57d13/benyblack/NovaTerminal"
discussionCount: 0
---

# NovaTerminal

**NovaTerminal** is a modern, cross-platform terminal emulator focused on

**correctness, performance, and predictability**.

Built with:

- **.NET 10**
- **Avalonia UI**
- **Skia (GPU-accelerated rendering)**
- **Rust-based PTY backend**

Supported platforms: **Windows · Linux · macOS**

---

### ✨ Why NovaTerminal?

Most terminal emulators optimize for speed or features. NovaTerminal focuses on something different:

-   🧪 **Deterministic rendering**\
    Same input → same output. Always. Enables reliable testing and replay.
-   📼 **Replay-driven debugging**\
    Record terminal sessions and replay them with pixel-level consistency.
-   ✅ **VT correctness first**\
    Built with conformance and standards in mind---not best-effort rendering.
-   ⚡ **GPU-accelerated rendering**\
    Smooth, modern rendering pipeline using Skia.
-   🧩 **Extensible architecture**\
    Designed for future workflows (cloud, automation, AI-assisted tooling).
-   🤖 **Built for AI agents**\
    An opt-in MCP server lets Claude Code and other agents observe your live terminal sessions --- and, behind a separate opt-in, drive them.

> **Terminal correctness is enforced by automated…
