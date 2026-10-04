---
repo: "pdugan20/claudelint"
name: "claudelint"
description: "A linter for Claude Code projects. Validates CLAUDE.md files, skills, settings, hooks, MCP servers, and plugins."
readmeQualityOk: true
url: "https://github.com/pdugan20/claudelint"
homepage: "https://www.claudelint.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["claude-code", "linter", "claude-code-plugin", "cli", "npm", "typescript"]
stars: 12
forks: 4
openIssues: 8
closedIssues: 37
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-08T05:05:00Z"
lastCommitAt: "2026-10-04T10:01:39Z"
lastReleaseAt: "2026-03-23T20:21:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 60
maintainers: ["pdugan20", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7760114d23b11fee37cfd8c86550ec5ede054a89d824fec3c4d52ff0d8c4adb3/pdugan20/claudelint"
discussionCount: 0
---

# claudelint

A linter for Claude Code projects. Validates CLAUDE.md files, skills, settings, hooks, MCP servers, plugins, and more.

## Quick Start

### Install

```bash
npm install -g claude-code-lint
claudelint init       # Creates .claudelintrc.json and .claudelintignore
claudelint check-all  # Validate your project
```

Or install as a project dependency:

```bash
npm install --save-dev claude-code-lint
npx claudelint init
npx claudelint check-all
```

### Claude Code Plugin

Use claudelint as a Claude Code plugin for interactive validation via slash commands.

Inside Claude Code, add the marketplace and install the plugin:

```text
/plugin marketplace add pdugan20/plugins
/plugin install claudelint@patrick-plugins
```

Or run `claudelint install-plugin` for guided setup.

To trial the plugin for a single session without registering the marketplace:

```bash
claude --plugin-url https://github.com/pdugan20/claudelint/releases/latest/download/claudelint-plugin.zip
```

The plugin's skills run the `claudelint` CLI, so install the npm package first either way.

See the [Plugin Guide](https://claudelint.com/integrations/claude-code-plugin) for team setup, plugin scopes, and…
