---
repo: "CrimsonGlory/wairz"
name: "wairz"
description: "A free (as in freedom) AI assisted firmware analysis tool"
readmeQualityOk: true
url: "https://github.com/CrimsonGlory/wairz"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-05T06:44:01Z"
lastCommitAt: "2026-11-06T02:44:28Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 40
maintainers: ["CrimsonGlory", "dependabot[bot]", "eastmadc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f51f273fa99bf88f2be404185ab60025f867a5fafa712d6d12af25f3891c7f4d/CrimsonGlory/wairz"
---

---

Upload firmware images, unpack them, explore the filesystem, analyze binaries, and conduct security assessments — all powered by AI analysis via [Model Context Protocol (MCP)](https://modelcontextprotocol.io/).

Connect any MCP-compatible AI agent to Wairz's 383 analysis tools — [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Claude Desktop](https://claude.ai/download), [OpenCode](https://opencode.ai/), [Codex](https://github.com/openai/codex), [Cursor](https://cursor.com/), [VS Code + Copilot](https://code.visualstudio.com/docs/copilot/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), [Windsurf](https://windsurf.com/), and more.

[Watch the demo video](https://www.youtube.com/watch?v=gDLhtMFMmMM)

## Features

- **Firmware Unpacking** — Automatic extraction of SquashFS, JFFS2, UBIFS, CramFS, ext, CPIO, and Intel HEX filesystems via binwalk3 and unblob, with multi-partition support
- **RTOS Support** — Auto-classifies firmware as `linux | rtos | unknown` on unpack (FreeRTOS / Zephyr / baremetal Cortex-M), with manual override. RTOS projects get a dedicated tool category for vector-table parsing, task enumeration, base-address recovery, and…
