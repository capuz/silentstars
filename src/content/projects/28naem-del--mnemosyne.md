---
repo: "28naem-del/mnemosyne"
name: "mnemosyne"
description: "Auditable, local-first memory for AI agents in one SQLite file. MCP server for Claude Code, Cursor and Codex. npm: mnemosy-ai"
readmeQualityOk: true
url: "https://github.com/28naem-del/mnemosyne"
homepage: "https://mnemosy.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ai-agents", "llm", "memory", "typescript", "model-context-protocol", "sqlite", "agent-memory", "claude-code", "cursor", "llm-memory"]
stars: 154
forks: 14
openIssues: 9
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-02-24T20:33:23Z"
lastCommitAt: "2026-10-29T10:37:12Z"
lastReleaseAt: "2026-10-28T19:57:53Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 85
undervaluedScore: 35
maintainers: ["28naem-del", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166050099/87f6741f-50db-498e-bb28-cebcec12ca18"
discussionCount: 1
---

# Mnemosyne

**The next agent starts wiser.**

**Mnemosyne is local-first, long-term memory for AI agents: one SQLite file that keeps what an agent learned together with the evidence it came from, served to any host over TypeScript, MCP, CLI or HTTP.** When a source is corrected, every memory that depended on it is retired, so the next agent starts from what is still true instead of repeating a stale lesson. The local engine needs no model API key, database server or Docker.

- **Evidence on every memory.** Each record keeps its source and trust tier, and the superseded version stays inspectable after a correction.
- **Corrections that reach dependents.** A corrected requirement retires the procedures and skills recorded as depending on it; 3.0 can also propose dependencies nobody declared, for review.
- **Auditable over time (3.0 pre-release).** Past beliefs replay exactly, `bisect` names the record behind a wrong answer, and consolidation is outcome-gated and reversible.
- **Any host.** MCP for Claude Code, Cursor and Codex; a TypeScript SDK; a CLI; and authenticated HTTP with a Python client and live inspector.

**Stable: 2.0.0 (`npm install mnemosy-ai`) · Newest pre-release:…
