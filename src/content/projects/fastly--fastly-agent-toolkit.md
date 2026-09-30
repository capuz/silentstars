---
repo: "fastly/fastly-agent-toolkit"
name: "fastly-agent-toolkit"
description: "Fastly skills for AI Agents."
readmeQualityOk: true
url: "https://github.com/fastly/fastly-agent-toolkit"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ai", "fastly", "skills"]
stars: 34
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 158
recentReleases: 0
createdAt: "2026-03-10T20:55:12Z"
lastCommitAt: "2026-09-15T15:24:37Z"
status: "quiet"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["jedisct1", "aspires", "acme"]
openGraphImageUrl: "https://opengraph.githubassets.com/423147eb171477840b0b73b7da0a1b077a650fbb86285d0e30d582859f397835/fastly/fastly-agent-toolkit"
---

# Fastly Agent Toolkit

A collection of skills for AI coding agents to work with the Fastly platform and edge computing tools.

- [Fastly Agent Toolkit](#fastly-agent-toolkit)
  - [Agent Plugins](#agent-plugins)
  - [Available skills](#available-skills)
  - [Usage](#usage)
    - [Using the `skills` CLI](#using-the-skills-cli)
    - [Manual copy](#manual-copy)
    - [Claude Code](#claude-code)
      - [Plugin Marketplace](#plugin-marketplace)
      - [Manual](#manual)
    - [Codex](#codex)
    - [Swival](#swival)
    - [Qwen Code](#qwen-code)
    - [Gemini CLI](#gemini-cli)
  - [Skill format](#skill-format)
  - [Contributing new skills](#contributing-new-skills)

## Agent Plugins

This repository is a portable [Agent Plugin](https://agent-plugins.org/specification).
Clients load the root [`plugin.json`](https://github.com/fastly/fastly-agent-toolkit/blob/HEAD/plugin.json) manifest and discover the skills in `skills/`.

## Available skills

- `fastly`: Working with the Fastly platform, including services, caching, VCL, WAF, TLS, DDoS protection, purging, and API usage.
- `fastly-cli`: Using the [Fastly CLI](https://www.fastly.com/documentation/reference/cli/) to manage services,…
