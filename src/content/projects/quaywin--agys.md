---
repo: "quaywin/agys"
name: "agys"
description: "Effortless multi-profile isolation & real-time quota tracking for Antigravity CLI in Herdr via zero-pollution sandboxing."
readmeQualityOk: true
url: "https://github.com/quaywin/agys"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agents", "antigravity", "cli", "herdr-plugin", "multi-agent", "context-window", "profile-management", "quota-monitor", "developer-tools"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-20T11:18:57Z"
lastCommitAt: "2026-09-07T08:35:11Z"
lastReleaseAt: "2026-07-20T15:51:35Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["quaywin"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee9176ea64e1c452996c8c0a15fe1b6d85c59efcd7865f79b1e852a4c9b6e1c/quaywin/agys"
---

# Antigravity Ecosystem Switcher (`agys`)

> **Zero-Collision Multi-Account Orchestration for Antigravity & Herdr — Powered by Dynamic `$HOME` Sandboxing.**

`agys` (Antigravity Switcher) is a pure Go CLI utility that isolates and orchestrates multi-account profiles across the entire Google Antigravity ecosystem — supporting **Herdr Multi-Agent Workspaces**, **Antigravity CLI (`agy`)**, **Antigravity IDE**, **Antigravity 2.0 Desktop App (GUI)**, and **Antigravity Remote Control**.

> [!NOTE]
> Each profile is strictly sandboxed under `~/.agys/profiles/<profile_name>/`. Dynamic `$HOME` routing guarantees zero auth token bleed, separate configs, isolated quota tracking, and conflict-free multi-pane agent swarms.

---

## ⚡ Herdr Multi-Agent Workspace Spotlight

`agys` provides first-class, zero-dependency integration and an official [Herdr Plugin](https://herdr.dev/docs/plugins/) designed for power developers running parallel agent swarms.

</p>

```text
┌─────────────────────────────────────────────────────────────┐
│ ● agys · davidnguyen                                        │ ◄── Workspace & Active Profile
│   5% ctx · gemini-3.8-flash                                 │ ◄──…
