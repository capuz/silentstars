---
repo: "agent-sh/tools"
name: "tools"
description: "Agent tools built for how LLMs actually call tools: read, write/edit, grep, glob, bash, webfetch, websearch, lsp, skill and batch. Each ships as its own npm package and as a Rust crate with matching behavior."
readmeQualityOk: true
url: "https://github.com/agent-sh/tools"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [60, 40]
topics: ["agents", "bash", "cargo", "fetch", "general-purpose", "glob", "grep", "harness", "llm", "lsp"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T09:21:25Z"
lastCommitAt: "2026-10-15T08:32:52Z"
lastReleaseAt: "2026-04-22T10:18:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 50
maintainers: ["avifenesh", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2533791116907beaddd80e164eece844bb8738bcf010e55d7e98284f0d11ec43/agent-sh/tools"
fundingLinks: ["GITHUB:https://github.com/agent-sh", "GITHUB:https://github.com/avifenesh"]
---

# agent-sh tools

**Agent tools built for how LLMs actually call tools:** `read`, `write`/`edit`, `grep`, `glob`, `bash`, `webfetch`, `websearch`, `lsp`, `skill` and `batch`. Each ships as its own npm package and as a Rust crate with matching behavior.

Most tool libraries are written for deterministic callers. The caller here is a model (Claude, GPT, Qwen, Gemini and others) that guesses parameter names, misremembers paths and retries on whatever the error says. So every result is a typed union instead of a thrown exception, every error carries a recovery hint, and anything that reaches outside the workspace has to pass a permission check.

```text
read({ path: "src/permisions.ts" })

kind: "error"   code: "NOT_FOUND"
File not found: src/permisions.ts

Did you mean one of these?
src/permissions.ts
```

## Contents

- [Packages](#packages)
- [Install](#install)
- [Web search and fetch in Claude Code and Codex](#web-search-and-fetch-in-claude-code-and-codex)
- [Use it in an agent loop](#use-it-in-an-agent-loop)
- [Permissions](#permissions)
- [Design principles](#design-principles)
- [Rust](#rust)
- [Repository layout](#repository-layout)
- [Development](#development)

## Packages…
