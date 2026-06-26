---
repo: "hashgraph-online/awesome-ai-plugins"
name: "awesome-ai-plugins"
description: "A curated list of awesome plugins for AI assistants including Claude Code, OpenAI Codex, Gemini, OpenCode and More."
url: "https://github.com/hashgraph-online/awesome-ai-plugins"
homepage: "https://hol.org/registry/plugins"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-assistant", "awesome", "awesome-list", "claude-code", "codex", "extensions", "gemini-cli", "mcp", "model-context-protocol", "plugins"]
stars: 76
forks: 38
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2026-04-07T18:49:58Z"
lastCommitAt: "2026-06-26T21:32:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 31
maintainers: ["github-actions[bot]", "internet-dot", "zerocodefast"]
openGraphImageUrl: "https://opengraph.githubassets.com/26464ebdeac4107a21238000f04e2e3bef57bf0fcfac97a181443b54de06eac2/hashgraph-online/awesome-ai-plugins"
---

<br>
  <br>
</p>

<h1 align="center">Awesome Codex Plugins</h1>

  </a>
</p>

</p>

  OpenAI <a href="https://openai.com/academy/codex-plugins-and-skills/">documents plugins and skills for Codex</a>, packaging skills, MCP servers, and app integrations into shareable, installable bundles across the Codex app, CLI, and IDE extensions.
</p>

<br>

## Contents

- [Start Here](#start-here)
- [Official Plugins](#official-plugins)
- [Community Plugins](#community-plugins)
- [Plugin Development](#plugin-development)
- [Guides & Articles](#guides--articles)
- [Related Projects](#related-projects)

---

## Start Here

New plugin workflow:

1. Create with `$plugin-creator`
2. **Validate with [`plugin-scanner`](https://github.com/hashgraph-online/hol-guard)** — **Required: score ≥ 80, no high/critical findings**
3. **Gate PRs with the [HOL scanner GitHub Action](https://github.com/hashgraph-online/ai-plugin-scanner-action)** — **Required for listing**
4. Ship or submit with confidence

### Quick preflight

```bash
pipx run plugin-scanner lint .
pipx run plugin-scanner verify .
```

### Scanner Requirements (Mandatory for This List)

All plugins submitted to **Awesome Codex Plugins** must pass…
