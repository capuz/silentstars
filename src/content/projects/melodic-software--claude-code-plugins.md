---
repo: "melodic-software/claude-code-plugins"
name: "claude-code-plugins"
description: "Melodic Software — Claude Code plugin marketplace: reusable, repo-agnostic skills, hooks, agents, and MCP servers."
readmeQualityOk: true
url: "https://github.com/melodic-software/claude-code-plugins"
language: "Shell"
languages: ["Shell"]
languagePcts: [66]
topics: ["agents", "ai-tools", "claude-code", "marketplace", "mcp", "plugins"]
stars: 6
forks: 1
openIssues: 371
closedIssues: 697
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T18:28:56Z"
lastCommitAt: "2026-08-12T05:15:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["kyle-sexton", "melodic-standards-sync[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e545e20d806ac1cdf817f12e64c27d65c448bc94a9e070e2eaa3fa44a514a569/melodic-software/claude-code-plugins"
discussionCount: 0
---

# Melodic Software — Claude Code plugins

A public [Claude Code](https://code.claude.com/docs) plugin marketplace of reusable, repo-agnostic
skills, hooks, and agents. Each plugin is designed to work in any repository and to be customized by
consumers without editing the plugin itself.

## Use this marketplace

```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
```

Browse and manage with `/plugin`. To refresh after updates: `/plugin marketplace update melodic-software`.

### Enable plugin suggestions for an organization

Some catalog entries declare `relevance` signals so Claude Code can suggest the plugin when a
session's work matches (matching runs locally; nothing is reported anywhere). Suggestions are
opt-in per marketplace: they surface only after an administrator allowlists the marketplace in
[managed settings](https://code.claude.com/docs/en/settings#settings-files) — declare the
marketplace source AND allowlist its name in the same file:

```json
{
  "extraKnownMarketplaces": {
    "melodic-software": {
      "source": {
        "source": "github",
        "repo": "melodic-software/claude-code-plugins"…
