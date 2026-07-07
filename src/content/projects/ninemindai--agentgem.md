---
repo: "ninemindai/agentgem"
name: "agentgem"
description: "Own the goldmine of how you get AI to deliver. AgentGem distills your coding-agent sessions into portable, composable Gems — remix and deploy across any harness. Secrets redacted at capture."
readmeQualityOk: true
url: "https://github.com/ninemindai/agentgem"
homepage: "https://agentgem.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-config", "agentback", "claude", "coding-agent", "gem", "hermes", "mcp", "secret-redaction"]
stars: 20
forks: 0
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-23T23:09:56Z"
lastCommitAt: "2026-07-07T06:38:28Z"
lastReleaseAt: "2026-06-26T23:48:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 43
maintainers: ["raymondfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/922b98609b3ae6975471874559adc994df329b6d1a2731a1b6babec90e5eb0d3/ninemindai/agentgem"
discussionCount: 0
---

</p>

</p>

  </a>
  <br>
</p>

> A local web UI that introspects your coding-agent config, redacts secrets at
> capture, and builds a portable, composable **Gem**.
>
> **[agentgem.ninemind.ai](https://agentgem.ninemind.ai)** ·
> browse the public marketplace at **[app.agentgem.ai](https://app.agentgem.ai)**
> *(early testbed — hosted data may be reset)*

AgentGem reads your coding-agent config — skills, MCP servers, and `CLAUDE.md` —
**redacts secrets the moment they're read**, and produces a **Gem**: a manifest + lock
archive you can publish to a GitHub-backed registry, merge with other Gems, and deploy to
several targets. A browser can't read `~/.claude` (it's sandboxed), so AgentGem runs a
small server on your machine; secrets never leave your device — what crosses any boundary
is a config *shape* with `<redacted>` in place of every sensitive value.

Built on [AgentBack](https://www.npmjs.com/org/agentback), ninemind's AI-native API/MCP
framework: every operation is defined once as a Zod contract and exposed as a REST
endpoint, an MCP tool, and an OpenAPI 3.1 document — so the web page and your local agent
call exactly the same thing.

## What it provides

- **Secret-safe…
