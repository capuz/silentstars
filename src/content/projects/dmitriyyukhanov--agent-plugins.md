---
repo: "DmitriyYukhanov/agent-plugins"
name: "agent-plugins"
description: "Reusable skills and plugins for AI agents: development workflows, writing, and automation."
readmeQualityOk: true
url: "https://github.com/DmitriyYukhanov/agent-plugins"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [47, 37]
topics: ["ai", "anthropic", "claude", "claude-code", "claude-code-marketplace", "claude-code-plugin", "developer-tools", "llm", "plugins", "skills"]
stars: 8
forks: 0
openIssues: 11
closedIssues: 66
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T12:13:00Z"
lastCommitAt: "2026-11-01T22:59:19Z"
lastReleaseAt: "2026-04-24T11:35:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 57
maintainers: ["DmitriyYukhanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/898a0e41cb9aa1be98f59467075fc7f0b22b0cf901c8207e8d4ad4a14fda5fe8/DmitriyYukhanov/agent-plugins"
---

# Plugins and skills for AI agents

Reusable skills and plugins for software development, writing, and automation.
Shared skills follow one workflow and use the tools available in the current
agent. The collection also includes integrations for particular hosts; their
requirements are listed below.

Claude Code and Codex use the same marketplace. Other agents that support
[Agent Skills](https://agentskills.io/specification) can use individual shared
skills. Compatibility of a file format does not establish that every workflow,
hook, or agent adapter works in every host. See the
[compatibility audit](https://github.com/DmitriyYukhanov/agent-plugins/blob/HEAD/docs/plugin-compatibility.md) for evidence and limits.

## Install

### Claude Code

```sh
/plugin marketplace add DmitriyYukhanov/agent-plugins
/plugin install humanizer@dmitriy-claude-plugins
/plugin install issue-to-pr@dmitriy-claude-plugins
/plugin install python-dev@dmitriy-claude-plugins
```

Use `/plugin` to browse the catalog and manage plugins. To enable updates, open
Marketplaces, select this marketplace, and choose Enable auto-update.

### Codex

```sh
codex plugin marketplace add DmitriyYukhanov/agent-plugins
codex…
