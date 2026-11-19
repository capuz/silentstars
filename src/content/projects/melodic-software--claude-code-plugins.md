---
repo: "melodic-software/claude-code-plugins"
name: "claude-code-plugins"
description: "Claude Code plugin marketplace: repo-agnostic skills, hooks, agents, and MCP servers."
readmeQualityOk: true
url: "https://github.com/melodic-software/claude-code-plugins"
language: "Shell"
languages: ["Shell", "Python", "JavaScript"]
languagePcts: [49, 25, 20]
topics: ["agents", "ai-tools", "claude-code", "marketplace", "mcp", "plugins"]
stars: 32
forks: 7
openIssues: 154
closedIssues: 6100
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T18:28:56Z"
lastCommitAt: "2026-11-19T04:21:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 42
maintainers: ["kyle-sexton", "melodic-automation-lanes[bot]", "melodic-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f39df6d80c2cc1372609049b02ed8a203e20932eab29928a9435b21d89277fd2/melodic-software/claude-code-plugins"
---

# Melodic Software Claude Code plugins

A public [Claude Code](https://code.claude.com/docs) plugin marketplace of reusable, repo-agnostic
skills, hooks, and agents. Each plugin works in any repository, and consumers customize it without
editing the plugin itself.

## Use this marketplace

```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
```

Browse and manage plugins with `/plugin`. To refresh after updates, run
`/plugin marketplace update melodic-software`.

An install from GitHub is a copy keyed on the plugin's `version`, so a change reaches it only when a
release raises that version. A marketplace added from a local clone loads each plugin in place, so
edits apply at the next session or `/reload-plugins`. See "Same-version commit drift" in
[`docs/migration-playbook.md`](https://github.com/melodic-software/claude-code-plugins/blob/HEAD/docs/migration-playbook.md#same-version-commit-drift-copied-installs).

A plugin whose catalog entry sets `defaultEnabled: false` installs disabled. Enable it with
`/plugin enable <plugin-name>`.
