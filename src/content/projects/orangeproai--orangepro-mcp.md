---
repo: "OrangeproAI/orangepro-mcp"
name: "orangepro-mcp"
description: "OrangePro local-first CLI + MCP server for behavior mapping, grounded test generation, and dynamic proof."
readmeQualityOk: true
url: "https://github.com/OrangeproAI/orangepro-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-07T04:31:15Z"
lastCommitAt: "2026-07-22T06:11:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["coolvibh", "mas213"]
openGraphImageUrl: "https://opengraph.githubassets.com/db33ed13dd98445affc7bd1d57b94107a55a36a96495dde92a4c1de063587216/OrangeproAI/orangepro-mcp"
---

# OrangePro

**Find the behaviors your tests miss. Generate grounded tests that actually run.**

`opro` builds a knowledge graph from your local checkout, maps every behavior in your code, shows which ones are tested and which aren't, and generates integration-level tests grounded in real symbols — not hallucinated imports. It runs as a CLI and a local stdio MCP server.

Install the target repository's dependencies first, then run OrangePro from that repository:

```bash
cd /path/to/your/repo
npm install # or pnpm install / bun install / the repository's package manager

# Optional: enables AI candidate links, candidate flows, and test generation.
export ANTHROPIC_API_KEY="..." # or OPENAI_API_KEY / OLLAMA_BASE_URL

npx -y @orangepro/mcp-server@latest start . --prompt-version v5
open .orangepro/behavior-coverage.html
```

With no model key, the same command still performs deterministic analysis, renders the report, and dynamically proves eligible behaviors using existing tests. With a key, it also discovers AI candidate flows and drafts grounded tests for the highest-risk gaps. AI output never changes evidence tiers; only the mutation-kill oracle can mint **Dynamically Proven**.…
