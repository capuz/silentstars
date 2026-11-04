---
repo: "vite-hub/drop"
name: "drop"
description: "Review what your agent makes. Your agent publishes its plan, page, or app over MCP; you comment on the exact spot, and it publishes the next version. Built with ViteHub."
readmeQualityOk: true
url: "https://github.com/vite-hub/drop"
homepage: "https://drop.vitehub.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "Vue"]
languagePcts: [46, 29, 23]
topics: ["agents", "vitehub", "code-review", "mcp", "nuxt"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T14:06:25Z"
lastCommitAt: "2026-11-04T11:24:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["onmax", "vite-hub[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b2ce4cb99bb382a82373ff1521f93b42859edf5e1e5ac3e5eac2d22a088fad/vite-hub/drop"
---

## How it works

1. **Your agent drops its work** over MCP: a Markdown plan, an HTML page, or a small static app. It signs in through your browser once; there are no API keys.
2. **New drops start with you, or with your team.** On drop.vitehub.dev only you open a new drop until you share a public link. On a Drop a team runs for itself, new drops start shared with the team.
3. **People review it** full screen and comment on the exact spot, or edit a Markdown doc together, live.
4. **The agent reads the open comments** and drops the next version.

## Use it

1. Sign in at [drop.vitehub.dev](https://drop.vitehub.dev) with GitHub.
2. Add Drop's MCP server to your agent:

   ```sh
   claude mcp add --transport http --scope user drop https://drop.vitehub.dev/mcp
   ```

   The first time it connects, Drop opens in your browser so you can sign in. [The agents page](https://drop.vitehub.dev/agents) has the setup for Codex, Cursor, VS Code, and other clients, and `npx add-mcp https://drop.vitehub.dev/mcp` works for most.
3. Ask your agent to drop a plan. It answers with the review link.

## Host your own

Cloudflare creates the database and storage for you. Every host needs a GitHub OAuth…
