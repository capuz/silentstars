---
repo: "melodic-software/claude-code-plugins"
name: "claude-code-plugins"
description: "Claude Code plugin marketplace: repo-agnostic skills, hooks, agents, and MCP servers."
readmeQualityOk: true
url: "https://github.com/melodic-software/claude-code-plugins"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [60, 23]
topics: ["agents", "ai-tools", "claude-code", "marketplace", "mcp", "plugins"]
stars: 21
forks: 2
openIssues: 201
closedIssues: 2368
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T18:28:56Z"
lastCommitAt: "2026-10-04T08:55:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["kyle-sexton", "melodic-standards-sync[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b71950d538fe0fce37ccd1720c056ea3630199391f902869b1125c712a97991/melodic-software/claude-code-plugins"
discussionCount: 0
---

# Melodic Software. Claude Code plugins

A public [Claude Code](https://code.claude.com/docs) plugin marketplace of reusable, repo-agnostic
skills, hooks, and agents. Each plugin is designed to work in any repository and to be customized by
consumers without editing the plugin itself.

## Use this marketplace

```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
```

Browse and manage with `/plugin`. To refresh after updates: `/plugin marketplace update melodic-software`.

When you consume this repo from a local `directory` source, the install cache keys on semver
`version`, not commit, so several commits under one version leave early installs on a stale
snapshot and `plugin update` can report "already at the latest version" while SHA lags. See
[`docs/migration-playbook.md`](https://github.com/melodic-software/claude-code-plugins/blob/HEAD/docs/migration-playbook.md) ("Same-version commit drift") and
[#2061](https://github.com/melodic-software/claude-code-plugins/issues/2061).

### Enable plugin suggestions for an organization

Some catalog entries declare `relevance` signals so Claude Code can suggest the plugin when…
