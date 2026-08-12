---
repo: "MySetsuna/ridge"
name: "ridge"
description: "分屏终端工作台 — split panes, embedded editor, Git graph, Claude Code agent collaboration. Tauri + Svelte + Rust."
readmeQualityOk: true
url: "https://github.com/MySetsuna/ridge"
homepage: "https://mysetsuna.github.io/ridge/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 31]
topics: ["claude-code", "desktop-app", "git-visualization", "monaco", "rust", "svelte", "tauri", "terminal", "xterm"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-13T10:52:19Z"
lastCommitAt: "2026-08-12T05:13:36Z"
lastReleaseAt: "2026-06-25T01:22:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["moon-catcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/15dd6a940150f96ba6206a068532defe53c53a1b397863d497a37b17c5e9d0ac/MySetsuna/ridge"
---

</p>

# Ridge

  <i>Like the ridges between rice paddies, split your work into plots — each field bearing its own harvest.</i>
</p>

</p>

---

  </a>
</p>

  <b>💛 Special Thanks · 特别鸣谢</b><br/>
  Heartfelt thanks to <a href="https://github.com/Pooowu"><b>@Pooowu</b></a> for sponsoring Ridge.<br/>
  <sub>衷心感谢赞助者 <a href="https://github.com/Pooowu">@Pooowu</a> 对 Ridge 的支持 🙏</sub>
</p>

---

## Architecture

Ridge is a **native terminal workbench** built on Tauri v2 (Rust backend + Svelte 5 frontend). Every pane hosts an independent PTY session; the layout engine supports unlimited recursive horizontal/vertical splits. A WebWorker-hosted terminal renderer (Rust → WASM) drives the grid, with WebGPU as the primary backend and Canvas2D as the universal fallback.

```
┌─ Tauri v2 (Rust) ─────────────────────────────────────────┐
│  ┌─ commands/ ──┐  ┌─ engine/ ──────────┐  ┌─ remote/ ─┐ │
│  │ git · pane    │  │ pane_tree · pty    │  │ auth.rs   │ │
│  │ terminal      │  │ parser · cwd       │  │ mDNS      │ │
│  │ workspace     │  │ title · delta      │  │ WebSocket │ │
│  │ project       │  └────────────────────┘  └───────────┘ │
│  └───────────────┘…
