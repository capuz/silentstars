---
repo: "epam/TimeBase-Agent-Plugins"
name: "TimeBase-Agent-Plugins"
description: "AI Agent plugins for TimeBase"
readmeQualityOk: true
url: "https://github.com/epam/TimeBase-Agent-Plugins"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["timebase", "deltix", "ai", "ai-plugin", "claude", "codex", "cursor", "github-copilot", "gemini-cli-extension"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-05-19T14:28:40Z"
lastCommitAt: "2026-09-23T08:46:50Z"
lastReleaseAt: "2026-09-04T07:41:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 44
maintainers: ["TyomaVader", "andymalakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/fff8c7a88d7c0486cb960fc3b9943793f587ce18b8cbd8153f72209f00ddda8d/epam/TimeBase-Agent-Plugins"
---

# TimeBase Agent Plugins

TimeBase plugins for Cursor, VSCode, Claude Code, OpenAI Codex, Gemini CLI, Antigravity CLI, and any tool supporting the Open Plugin standard.

If you only need skills, jump to [Skills](#skills).

## Quickstart

### 1. Install uv

Install [uv](https://docs.astral.sh/uv/getting-started/installation/) if `uvx` is not available.

Check that `uvx` is available in your shell:

```bash
uvx -V
```

### 2. Install plugin in your tool

<details>
<summary>Cursor</summary>

Clone this repository as a local plugin.

macOS/Linux:

```bash
git clone https://github.com/epam/TimeBase-Agent-Plugins.git ~/.cursor/plugins/local/timebase
```

Windows:

```bash
git clone https://github.com/epam/TimeBase-Agent-Plugins.git %USERPROFILE%\.cursor\plugins\local\timebase
```

Open `Cursor Settings > Plugins > TimeBase Plugin > TimeBase MCP` to edit configuration.  
Available options: [MCP configuration](https://github.com/epam/TimeBase-MCP/blob/main/docs/reference/environment-variables.md).

</details>

<details>
<summary>VSCode</summary>

Search for `@agentPlugins timebase` in the Extensions tab to install.

For adjusting the settings open the chat panel, click `Configure Tools`,…
