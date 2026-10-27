---
repo: "xianyu-sheng/Xenon"
name: "Xenon"
description: "Verifiable AI coding agent harness / Verifiable AI coding agent: evidence hash-chain · hollow-answer gate · manual verification checklist · 6 engines + MCP · multi-model · Windows/CJK · listed in awesome-opensource-ai & Collabnix awesome-mcp-lists"
originalDescription: "Verifiable AI coding agent harness / 可验证的 AI 编码代理：evidence hash-chain · hollow-answer gate · manual verification checklist · 6 engines + MCP · multi-model · Windows/CJK · listed in awesome-opensource-ai & Collabnix awesome-mcp-lists"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xianyu-sheng/Xenon"
homepage: "https://github.com/xianyu-sheng/Xenon#readme"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "ai-coding-assistant", "cli", "coding-agent", "deepseek", "developer-tools", "llm", "mcp", "multi-model", "openai-compatible"]
stars: 56
forks: 12
openIssues: 44
closedIssues: 99
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-06-03T08:37:05Z"
lastCommitAt: "2026-10-27T09:17:11Z"
lastReleaseAt: "2026-07-17T11:39:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["xianyu-sheng"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1258057851/aa0a0db1-2e98-4ce7-8e91-186f623c5cc8"
discussionCount: 3
---

# Xenon

> [!TIP]
> **The machine is only accountable for the process; semantic judgment is returned to you.** Tool calls enter the execution ledger (L0); `/evidence` currently displays the session audit chain, while the unified execution view for claim/plan/delivery is still converging (see #177). At the turn level there is only one blocking structural validation (L1); semantic issues do not block delivery, but are organized into a "manual verification checklist" delivered alongside the answer (L2).

## Quick Start

```bash
# Install from GitHub Releases (does not depend on PyPI)
pip install https://github.com/xianyu-sheng/Xenon/releases/download/v0.9.4/xenon_harness-0.9.4-py3-none-any.whl

xenon   # On first run, a setup wizard guides configuration (API key, model, reasoning engine)
```

> **Windows:** If you see `'xenon' 不是内部或外部命令` (the Chinese-locale Windows message meaning "'xenon' is not recognized as an internal or external command"), add the Scripts path printed by pip to PATH, or use `python -m xenon` directly (provided with release artifacts since v0.9.4). If mixing conda and a standalone Python, a dedicated venv is recommended: `python -m venv .venv`.

For more…
