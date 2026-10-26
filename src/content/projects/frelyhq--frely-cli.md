---
repo: "FrelyHQ/frely-cli"
name: "frely-cli"
description: "Frely account CLI and local MCP runtime"
readmeQualityOk: true
url: "https://github.com/FrelyHQ/frely-cli"
homepage: "https://cli.frely.cloud/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["mcp", "mcp-client", "mcp-server", "frely", "remote-mcp", "frely-cli", "frelymcp"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-11T18:00:58Z"
lastCommitAt: "2026-10-26T09:17:15Z"
lastReleaseAt: "2026-09-30T15:51:50Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["claude", "Hu-Wentao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9079cec8482b818307035c577d296db6f5f04aff6c472702b848335dd78df13/FrelyHQ/frely-cli"
---

# Frely CLI

[Website](https://cli.frely.cloud/) · [Docs](https://cli.frely.cloud/docs/) · [Frely](https://frely.cloud/) · [English](https://github.com/FrelyHQ/frely-cli/blob/HEAD/README.md) · [简体中文](https://github.com/FrelyHQ/frely-cli/blob/HEAD/README.zh-CN.md)

Frely CLI (`frely-cli`) connects a computer you choose to **FrelyMCP**, so ChatGPT, Claude, Codex and other MCP clients can work on it from anywhere. They use the files, shell commands and processes in the folders you allow. The computer connects out to Frely, so you open no ports.

It is also the command line for your Frely account:

- **Device MCP**: let remote AI clients work on this computer.
- **Local MCP servers**: pass MCP servers that only run on this computer (for example on `127.0.0.1`) through to remote clients.
- **Agents, Prompts and Skills**: install a published Frely Agent as a local Skill, or install Prompts and Skills you bought.
- **Local model sharing**: publish a local Ollama or OpenAI-compatible runtime as your own Frely Provider.

## Install

### A server, with a Frely account (no browser)

Get a one-time install command on the Frely website (**My Devices → Add a computer → Create install…
