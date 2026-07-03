---
repo: "kage-core/Kage"
name: "Kage"
description: "Persistent, verified memory for coding agents — so they stop re-explaining your codebase and never act on stale knowledge. Every memory is checked against your actual code; lives in your repo as plain files, shared via git. No account, no DB. Install: npx -y @kage-core/kage-graph-mcp install"
url: "https://github.com/kage-core/Kage"
homepage: "https://kage-core.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["agent-memory", "ai-agents", "claude-code", "code-graph", "codex", "cursor", "developer-tools", "knowledge-graph", "mcp", "mcp-server"]
stars: 19
forks: 1
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-07-19T09:40:15Z"
lastCommitAt: "2026-07-03T12:43:37Z"
lastReleaseAt: "2026-06-22T07:58:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 58
maintainers: ["Kage18", "Kage-Bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b0a983ae050331fd887c2e89c4a27ffa48d372ed9be11ea232b96223eabb374/kage-core/Kage"
discussionCount: 3
---

### Google shipped OKF. Kage keeps it true.

<sub>`kage viewer`: your team's decisions, runbooks, and bug fixes (purple), kept in the repo and linked to the code they are about (blue).</sub>

In June 2026 Google shipped [**OKF (Open Knowledge Format)**](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf):
a standard for keeping knowledge as plain Markdown concept files in your repo, vendor-neutral, no
lock-in. It standardizes the store and stops there. Verification, freshness, and staleness are
explicitly *out of scope* for v0.1. **Kage is the framework that maintains it.** It captures what
your coding agents learn as a conformant OKF bundle in git, then keeps every concept honest against
your real code: a memory whose cited code no longer exists is rejected at write time, and one that
drifts when the code changes is flagged and withheld until it is re-verified. Deterministic, no LLM
on the verdict path. No account, no database, no API key.

```bash
npx -y @kage-core/kage-graph-mcp install
```

<p>
</p>

<p>
</p>

**Works with** Claude Code · Codex · Cursor · Windsurf · Gemini CLI · Cline · Goose ·
Roo Code · Kilo Code · OpenCode · Aider · Claude Desktop ·…
