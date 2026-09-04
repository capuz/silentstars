---
repo: "dinglebear-ai/labby"
name: "labby"
description: "Rust homelab control plane and Labby MCP gateway for agents, plugins, registries, stash workspaces, setup, logs, fleet operations, CLI/API/web UI."
readmeQualityOk: true
url: "https://github.com/dinglebear-ai/labby"
homepage: "https://www.npmjs.com/package/labby-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["agent-client-protocol", "ai-agents", "automation", "cli", "code-mode", "fleet-management", "homelab", "http-api", "lab", "local-first"]
stars: 5
forks: 2
openIssues: 17
closedIssues: 28
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-08T01:28:40Z"
lastCommitAt: "2026-09-04T08:09:18Z"
lastReleaseAt: "2026-07-14T17:45:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 68
maintainers: ["jmagar", "elibosley", "ljm42"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1204404948/814ff519-3e1f-4ef9-8c61-208f9ba59ec5"
---

<!-- Absolute raw URL, not relative: unraid/ca/labby.xml points Community Applications at this file's raw URL, and CA renders the markdown outside any repo context where a relative path would 404. Markdown image syntax, not <img>: the fleet repository contract's readme_lead() skips lines starting with '

# Labby

Rust MCP gateway with Code Mode, authentication, setup, logs, CLI, HTTP API, and operator web UI.

Canonical remote: `git@github.com:dinglebear-ai/labby.git`.

The root README is the public entrypoint. The topic docs in
[docs/](https://github.com/dinglebear-ai/labby/blob/HEAD/docs/README.md) own the detailed contracts; when this file and a topic
doc disagree, fix the topic doc first and then refresh this summary.

## Contents

- [What Labby Does](#what-labby-does)
- [Quick Start](#quick-start)
- [Core Workflows](#core-workflows)
- [Runtime Surfaces](#runtime-surfaces)
- [Configuration](#configuration)
- [Current Catalogs](#current-catalogs)
- [Architecture](#architecture)
- [Development](#development)
- [Documentation](#documentation)

## What Labby Does

Labby is centered on the current gateway/operator surface:

- **MCP gateway** - connect HTTP and stdio upstream MCP…
