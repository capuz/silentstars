---
repo: "mlkgrnt/dsh-junimo"
name: "dsh-junimo"
description: "DeepSeek Harness bundle for Stardew Valley: bridges Junimo-MCP's 37 tools into dsh and adds doctor, game lifecycle and prompt discipline"
originalDescription: "DeepSeek Harness bundle for Stardew Valley: bridges Junimo-MCP's 37 tools into dsh and adds doctor, game lifecycle and prompt discipline"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mlkgrnt/dsh-junimo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-bundle", "dsh-plugin", "dsh-plugin-market", "dsh-plugins", "mcp-client", "mcp-server", "mcp-tools", "smapi", "stardew-valley"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-24T15:55:36Z"
lastCommitAt: "2026-11-03T19:05:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["mlkgrnt"]
openGraphImageUrl: "https://opengraph.githubassets.com/26b90deaa66b53806d0b150424e01c07d6f36db6de0c70a79c392e107a6cfa6a/mlkgrnt/dsh-junimo"
---

# dsh-junimo

**Simplified Chinese** · [Traditional Chinese](https://github.com/mlkgrnt/dsh-junimo/blob/HEAD/README.zh-Hant.md) · [English](https://github.com/mlkgrnt/dsh-junimo/blob/HEAD/README.en-US.md) · [Español](https://github.com/mlkgrnt/dsh-junimo/blob/HEAD/README.es-ES.md)

DeepSeek Harness plugin that provides 37 control tools for Stardew Valley, and adds deployment self-checks and game lifecycle management that the MCP layer cannot cover.

## Overview

This repository is a **dsh bundle** that operates on the profile layer of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Game logic is not implemented here. All 37 tools are provided by `junimo-mcp.exe` (OCaml, single file) from [Junimo-MCP](https://github.com/mlkgrnt/Junimo-MCP). They are bridged over the stdio MCP protocol by the official `@deepseek-ai/dsh-mcp-client`, and appear to the model as `mcp__junimo__<tool name>`. **This repository does not modify any code in Junimo-MCP.**

The plugin itself has four responsibilities:

1. Assemble the MCP bridge, and provide the `junimoPaths` service as the single source of truth for the exe and skill directories
2. Inject Stardew Valley operating…
