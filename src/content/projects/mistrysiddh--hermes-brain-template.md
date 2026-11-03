---
repo: "mistrysiddh/hermes-brain-template"
name: "hermes-brain-template"
description: "Hermes Second Brain 🧠. Obsidian second-brain vault template for a Hermes AI agent — session archive + memory review pipeline, Kanban boards, templates, Canvas pipeline map, Dataview queries, and cross-platform (Windows/Linux/macOS) install scripts."
readmeQualityOk: true
url: "https://github.com/mistrysiddh/hermes-brain-template"
homepage: "https://hermes-second-brain.mistrysiddh.in/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [64, 27]
topics: ["ai-agent", "automation", "hermes", "knowledge-management", "llm-memory", "obsidian", "obsidian-plugin", "pkm", "second-brain", "ai-memory"]
stars: 9
forks: 0
openIssues: 9
closedIssues: 20
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-06T18:38:06Z"
lastCommitAt: "2026-11-03T10:51:46Z"
lastReleaseAt: "2026-09-11T09:00:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 84
undervaluedScore: 58
maintainers: ["mistrysiddh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1359420368/a0813c7d-1bbf-497e-96ec-aee88e5cc8a1"
fundingLinks: ["GITHUB:https://github.com/mistrysiddh"]
discussionCount: 2
---

---
title: Readme
created: 2026-11-03
type: stub
status: auto-remediated
---

# Hermes Second Brain 🧠 — Obsidian Vault Template for Hermes Agent (including OpenClaw)

**Give your Hermes/OpenClaw agent a memory it can't forget — and you can actually read.**

Every session your agent runs gets archived as plain markdown, deduped and
secret-scrubbed automatically, and staged for you to review before anything
becomes permanent. No black box, no vendor lock-in — it's just an Obsidian
vault, so you can search it, link it, graph it, and back it up like any
other notes.

## 🚀 Try it in 60 Seconds (Verifiable)

```bash
# 1. Clone the template
git clone https://github.com/mistrysiddh/hermes-brain-template.git my-second-brain
cd my-second-brain

# 2. Run the installer (choose your OS)
#    Linux/macOS:        ./_System/Scripts/Installers/install.sh
#    Windows PowerShell: powershell -ExecutionPolicy Bypass -File .\_System\Scripts\Installers\install.ps1

# 3. Self-test the bundled MCP server (vault_search, read_note, stage_memory_candidate, ...)
python _System/Scripts/hermes_brain_mcp.py --test

# 4. List pending memory candidates (prints [] on a fresh vault)
python…
