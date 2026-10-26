---
repo: "tibuntu/renovate-mcp"
name: "renovate-mcp"
description: "An MCP server for designing Renovate configurations interactively"
readmeQualityOk: true
url: "https://github.com/tibuntu/renovate-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "mcp", "mcp-server", "renovate"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 66
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T17:26:53Z"
lastCommitAt: "2026-10-26T03:02:14Z"
lastReleaseAt: "2026-04-26T07:35:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["tibuntu"]
openGraphImageUrl: "https://opengraph.githubassets.com/79359a42fcebfb52bad66fdc8bdd7349ad9b58031fdbe92e39db3d63811e684b/tibuntu/renovate-mcp"
---

# renovate-mcp

An MCP server for designing [Renovate](https://github.com/renovatebot/renovate) configurations interactively. Point it at a local repo and let an LLM help you read, validate, preview, and save `renovate.json`.

## Quick start

```bash
curl -fsSL https://raw.githubusercontent.com/tibuntu/renovate-mcp/main/install.sh | bash
```

Or add this entry manually to your client's `mcpServers` config:

```json
{
  "mcpServers": {
    "renovate": {
      "command": "npx",
      "args": ["-y", "renovate-mcp"]
    }
  }
}
```

Restart your client and try the prompt: *"List the namespaces available under `renovate://presets`."* A response listing `config`, `docker`, `npm`, … confirms the server is reachable. Long-form install options are under [Install](#install) below.

## What you can do

- **Read and explain configs** — locate the active `renovate.json*`, expand every `extends` preset offline, and trace which preset set each field.
- **Discover presets from intent** — describe what you want ("automerge patches, group dev deps") and get ranked built-in (and your own local-repo) presets, plus a draft config skeleton when nothing fits.
- **Preview custom managers** before running…
