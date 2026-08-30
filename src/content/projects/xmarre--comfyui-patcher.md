---
repo: "xmarre/ComfyUI-Patcher"
name: "ComfyUI-Patcher"
description: "Desktop patch manager for ComfyUI: patch core and custom nodes from branches, commits, and PRs, sync dependencies, update tracked repos, and restart safely."
readmeQualityOk: true
url: "https://github.com/xmarre/ComfyUI-Patcher"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 24]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-03-26T13:41:33Z"
lastCommitAt: "2026-08-30T09:25:11Z"
lastReleaseAt: "2026-08-08T06:03:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 43
maintainers: ["xmarre", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51875861f0770a48cb85c0cb6bd7c911122f3784e53fcdb01392e5992b63a6c/xmarre/ComfyUI-Patcher"
---

# ComfyUI Patcher

ComfyUI Patcher is a desktop app for managing a local ComfyUI installation plus git-backed extensions around it. It can register an existing ComfyUI root, discover managed repositories, resolve GitHub URLs and raw git targets, apply them safely with checkpoints, sync dependencies, and control a saved launch profile for **Start / Stop / Restart**.

It currently manages three repository kinds:

* **core** — the main ComfyUI repository at the installation root
* **frontend** — a dedicated managed `ComfyUI_frontend` checkout outside `custom_nodes`
* **custom_node** — repositories under `custom_nodes/`

The app supports both direct revision tracking and **stacked PR overlays** on managed repositories.

---

## Architecture

### Product shape

* **Desktop shell:** Tauri 2
* **Backend:** Rust
* **Frontend:** React + TypeScript + Vite
* **Persistence:** SQLite via `rusqlite`
* **Git execution:** system `git` CLI
* **Target resolution:** GitHub REST API for PR metadata, git for actual fetch / checkout / merge
* **Process control:** local child-process management through a saved launch profile

### Backend modules

* `db.rs` — SQLite schema and CRUD for installations,…
