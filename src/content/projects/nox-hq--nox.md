---
repo: "Nox-HQ/nox"
name: "nox"
description: "Open-source security scanner with first-class AI app security (prompt injection, embedding leakage, agent over-privilege, MCP hardening). Polyglot AIBOM, SARIF, SBOM. Cosign-signed plugin marketplace. Offline-first, agent-native via MCP."
readmeQualityOk: true
url: "https://github.com/Nox-HQ/nox"
homepage: "https://nox-hq.dev"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai-security", "cli", "devsecops", "golang", "mcp", "sarif", "sbom", "scanner", "security", "static-analysis"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 57
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T21:10:43Z"
lastCommitAt: "2026-09-03T08:13:56Z"
lastReleaseAt: "2026-02-24T17:02:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["felixgeelhaar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f6a1b50be1fb0647671153cc4cdf6dd9e794acb5b2d4ac65bf6d2112481b0b7/Nox-HQ/nox"
discussionCount: 0
---

</p>

<h1 align="center">Nox</h1>

</p>

**The security scanner for AI application developers.** Open source, offline-first, no SaaS.

If you're shipping LLM features — `chat.completions.create`, RAG ingest into a vector DB, agents with tool calls, MCP servers — nox is the static analyzer that knows how those break. Plus the boring stuff: secrets, dep CVEs, IaC, container scans.

**What nox catches that other scanners don't:**

- **Prompt injection** at the call site (AI-PI-*, OWASP LLM01)
- **Embedding leakage** when secrets / PII land in vector stores (AI-EMBED-*, LLM06)
- **Agent over-privilege** when `file_read` + `http_request` live in the same agent context (AI-AGENT-*, LLM07)
- **Agent-config execution surface** (AGENT-001..006) — the files that steer a coding agent are code: injection directives in `.cursorrules`/`CLAUDE.md`/skills, permission-bypass (`bypassPermissions`, `--dangerously-skip-permissions`), wildcard tool grants (`"Bash(*)"`), exfiltration directives in `.claude/settings.json`, unauthenticated **A2A agent cards** (`agent.json` with an empty/`none` security scheme, ASI07), and **DXT desktop-extension** manifests that interpolate `${user_config.*}` into a…
