---
repo: "melodic-software/claude-code-plugins"
name: "claude-code-plugins"
description: "Claude Code plugin marketplace: repo-agnostic skills, hooks, agents, and MCP servers."
readmeQualityOk: true
url: "https://github.com/melodic-software/claude-code-plugins"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [50, 25]
topics: ["agents", "ai-tools", "claude-code", "marketplace", "mcp", "plugins"]
stars: 30
forks: 7
openIssues: 169
closedIssues: 5197
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T18:28:56Z"
lastCommitAt: "2026-11-09T11:52:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["melodic-automation-lanes[bot]", "kyle-sexton", "melodic-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8a75d0bfb490579da01c597d06be4ac6a38ab1fce6ed2c9c06189d45706d992/melodic-software/claude-code-plugins"
discussionCount: 0
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

### Enable plugin suggestions for an organization

Some catalog entries declare…
