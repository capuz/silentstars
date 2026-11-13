---
repo: "Kevin-Liu-01/Turboslide"
name: "Turboslide"
description: "Turboslide: an agent native presentation editor for people and agents. Live at turboslide.com"
readmeQualityOk: true
url: "https://github.com/Kevin-Liu-01/Turboslide"
homepage: "https://www.turboslide.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["agent-native", "canvas-editor", "cli", "design-system", "dithering", "export", "mcp", "mcp-server", "powerpoint", "pptx"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-10T18:47:18Z"
lastCommitAt: "2026-11-13T05:39:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 50
maintainers: ["Kevin-Liu-01"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5499bf6dafd803565f203b2e69a196c85f27c39a6af1e739744ea8d3d4f836e/Kevin-Liu-01/Turboslide"
---

# Turboslide

Turboslide is a slides editor in the browser. People and agents edit the same presentation: agents run the same 203 actions over the command line, MCP and HTTP.

Use it at https://www.turboslide.com. No account is needed.

## For agents

- Command line: in a checkout, `pnpm exec turboslide <command> --json` runs an action on a presentation folder. See [The command line](https://www.turboslide.com/docs/agents/cli).
- MCP: `pnpm exec turboslide mcp --deck <dir>` serves the actions as tools over standard input and output, and a running studio serves them at `/mcp`. See [MCP](https://www.turboslide.com/docs/agents/mcp).
- HTTP: `POST /api/actions/<id>?deck=<deck>` on a running studio runs one action. See [HTTP actions](https://www.turboslide.com/docs/agents/http).

## Run it on your computer

You need Node 24 and pnpm 11.15.1. Corepack, which ships with Node 24, installs that pnpm from `package.json`.

```sh
git clone --depth 1 https://github.com/Kevin-Liu-01/Turboslide.git
cd Turboslide
corepack enable
pnpm install
pnpm exec playwright-core install --with-deps chromium
pnpm dev
```

The studio runs at http://localhost:4321 and needs no environment variables. Each…
