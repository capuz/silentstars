---
repo: "dcc-mcp/dcc-mcp-blender"
name: "dcc-mcp-blender"
description: "Blender addon for the DCC Model Context Protocol (MCP) ecosystem — embeds a Streamable HTTP MCP server directly inside Blender"
readmeQualityOk: true
url: "https://github.com/dcc-mcp/dcc-mcp-blender"
homepage: "https://pypi.org/project/dcc-mcp-blender/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["3d", "ai", "blender", "blender-addon", "dcc", "llm", "mcp", "model-context-protocol", "python", "dcc-mcp"]
stars: 28
forks: 5
openIssues: 3
closedIssues: 37
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-12T14:06:00Z"
lastCommitAt: "2026-09-06T08:03:08Z"
lastReleaseAt: "2026-06-07T12:53:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 46
maintainers: ["loonghao", "renovate[bot]", "Arashi100-pipeline"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4ed974e39a0336044e71b67816d3ec81983851b714219c2a7b9e4e8b904b040/dcc-mcp/dcc-mcp-blender"
---

# dcc-mcp-blender

</p>

## Agent workflow

AI agents should use the shared gateway through `dcc-mcp-cli`; IDE users may
continue to use the MCP endpoint. Prefer typed skills and tools over raw scripts.

### Install or update the CLI

`dcc-mcp-cli` is the preferred control path for every shell-capable agent. If
it is missing, ask the user before installing the latest official release:

```bash
# Linux/macOS
curl -fsSL https://raw.githubusercontent.com/dcc-mcp/dcc-mcp-core/main/scripts/install-cli.sh | sh

# Windows PowerShell
powershell -ExecutionPolicy Bypass -c "irm https://raw.githubusercontent.com/dcc-mcp/dcc-mcp-core/main/scripts/install-cli.ps1 | iex"
```

Keep an official build current through the release manifest:

```bash
dcc-mcp-cli update check
dcc-mcp-cli update apply
```

`update apply` downloads and stages the latest CLI for the next launch. It
does not update a running `dcc-mcp-server`; update that server in its own
environment.

```bash
dcc-mcp-cli dcc-types
dcc-mcp-cli list
dcc-mcp-cli search --query "<task>" --dcc-type blender
dcc-mcp-cli describe <tool-slug>
dcc-mcp-cli call <tool-slug> --json '{"key":"value"}'
```

`dcc-types` reports release-catalog support;…
