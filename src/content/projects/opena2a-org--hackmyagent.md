---
repo: "opena2a-org/hackmyagent"
name: "hackmyagent"
description: "Metasploit for AI agents: scan, attack, and fix AI agents and MCP servers. Open source security toolkit."
readmeQualityOk: true
url: "https://github.com/opena2a-org/hackmyagent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["tool", "agent-security", "ai-agents", "ai-security", "llm-security", "mcp", "mcp-security", "penetration-testing", "prompt-injection", "red-team"]
stars: 38
forks: 3
openIssues: 166
closedIssues: 164
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-30T05:17:53Z"
lastCommitAt: "2026-08-26T04:17:03Z"
lastReleaseAt: "2026-03-18T15:59:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["thebenignhacker"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5cead6de2c2251e2b6668d06caf35017ca86f3a225b32e44319a9c327c6d449/opena2a-org/hackmyagent"
---

# HackMyAgent

> **[OpenA2A](https://github.com/opena2a-org/opena2a)**: [CLI](https://github.com/opena2a-org/opena2a) · [HackMyAgent](https://github.com/opena2a-org/hackmyagent) · [Secretless](https://github.com/opena2a-org/secretless-ai) · [AIM](https://github.com/opena2a-org/agent-identity-management) · [Browser Guard](https://github.com/opena2a-org/AI-BrowserGuard) · [DVAA](https://github.com/opena2a-org/damn-vulnerable-ai-agent)

Security scanner, red-team toolkit, and behavioural simulator for AI agents. Apache 2.0.

[Website](https://hackmyagent.com) · [Demos](https://opena2a.org/demos) · [Discord](https://discord.gg/uRZa3KXgEn)

## Quick start

```bash
npx hackmyagent secure
```

```
  my-project  v1.0.0 · library · 47 files analyzed
  3 critical issues found

  Security  ━━━━━━━━━━━━━━━━━━━━ 42/100

  ── Observations ────────────────────────────────────────────
  Surfaces    library · 47 files
  Checks      311 static · 12 semantic (NanoMind AST) · 0 skipped
  Categories  credentials (3 critical) · MCP (2 high) · 18 others clear
  Verdict     Not safe to ship. Fix 3 critical issues before using this in production.

  ── Findings…
