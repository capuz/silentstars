---
repo: "alexmi256/rea-agent-docker"
name: "rea-agent-docker"
description: "REA (Reverse Engineer Anything) in Docker: one image per analysis engine (Ghidra / Hopper / IDA) with a full reverse-engineering toolchain, MCP-ready for Hermes and other agents."
readmeQualityOk: true
url: "https://github.com/alexmi256/rea-agent-docker"
language: "Shell"
languages: ["Shell", "Python", "Dockerfile"]
languagePcts: [46, 26, 21]
topics: ["agent-skills", "ai-agents", "decompilation", "mcp", "mcp-server", "rea", "reverse-engineer", "reverse-engineering", "static-analysis", "docker"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-13T21:30:08Z"
lastCommitAt: "2026-10-31T09:53:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/489c1242c2b027252c7e74f753018c794c3315856c9bee305aeec49d9e8afa96/alexmi256/rea-agent-docker"
---

# rea-agent — Reverse Engineer Anything in a container, MCP-ready

A Docker image + Compose stack that runs **[REA](https://rea.tools/)
(`rea-agents`, the "Reverse Engineer Anything" MCP server)** together with every
analysis engine and helper it can drive, so an MCP client — Hermes Agent,
Claude Code, Codex, Cursor, anything that speaks MCP — can do reverse
engineering without installing a single tool on the host.

* **Target:** `linux/amd64` only (deliberate scope; see
  [docs/MULTIARCH.md](https://github.com/alexmi256/rea-agent-docker/blob/HEAD/docs/MULTIARCH.md) — the *analysed* targets can be any
  architecture).
* **Base:** `ubuntu:24.04` — the distribution REA's Hopper installer and
  Ghidra/JDK bindings are verified against, and the one that resolves every
  pinned helper version from apt.
* **Engines:** Ghidra 12.1.4 (multi-architecture, the default), Hopper 6.6.1
  (public demo, headless via Xvfb), IDA Pro/Home/Free (bring your own licence).
* **Four images, one per engine:** `rea-agent` (Ghidra + Hopper), `rea-agent-ghidra`,
  `rea-agent-hopper`, `rea-agent-ida` (no bundled engine). Same auxiliary
  toolchain in all four — pick the disassembler you actually use:…
