---
repo: "melodic-software/claude-code-plugins"
name: "claude-code-plugins"
description: "Claude Code plugin marketplace: repo-agnostic skills, hooks, agents, and MCP servers."
readmeQualityOk: true
url: "https://github.com/melodic-software/claude-code-plugins"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [51, 26]
topics: ["agents", "ai-tools", "claude-code", "marketplace", "mcp", "plugins"]
stars: 28
forks: 5
openIssues: 513
closedIssues: 3863
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T18:28:56Z"
lastCommitAt: "2026-10-29T10:11:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["melodic-automation-lanes[bot]", "kyle-sexton", "melodic-plugin-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b6fc0647380ff8839ad239e3d2eb2967a80ac146f87a99ac0f748c8e43bd97d/melodic-software/claude-code-plugins"
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

An install from GitHub is a copy keyed on the plugin's semver `version`, not the commit, so a change
reaches it only when a release raises that version; until then `plugin update` reports "already at
the latest version". A marketplace added from a local clone loads each plugin in place, so edits
apply at the next session or `/reload-plugins`. See
[`docs/migration-playbook.md`](https://github.com/melodic-software/claude-code-plugins/blob/HEAD/docs/migration-playbook.md) ("Same-version commit drift").

### Enable plugin suggestions for an organization

Some catalog entries declare `relevance` signals so Claude Code can suggest the plugin when a…
