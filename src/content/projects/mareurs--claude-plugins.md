---
repo: "mareurs/claude-plugins"
name: "claude-plugins"
description: "Claude Code plugin marketplace - SDD and more"
readmeQualityOk: true
url: "https://github.com/mareurs/claude-plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [55]
stars: 7
forks: 2
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-08T20:04:53Z"
lastCommitAt: "2026-11-17T12:17:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 59
maintainers: ["mareurs"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad84c1bf65afe83eb68a3b485f0392fec6ae112797c3f2c916d415768fc50658/mareurs/claude-plugins"
---

# Claude Plugins

An opinionated collection of Claude Code plugins, primarily developed for internal team use. Public so colleagues and collaborators can install directly.

These plugins reflect specific workflows and tool choices -- they may not suit every setup. Feel free to fork and adapt.

## Quick Start

Claude Code. The marketplace is registered as `sdd-misc-plugins`, the `name` in `.claude-plugin/marketplace.json`:

```
/plugin marketplace add mareurs/claude-plugins
/plugin install sdd@sdd-misc-plugins
/plugin install codescout-companion@sdd-misc-plugins
/plugin install buddy@sdd-misc-plugins
```

Codex, with `codescout` on your PATH. Install `cs-hint-codex` and not `buddy`: both emit the `[cs-hint]` advisories, and in Codex they would appear twice.

```
codex plugin marketplace add mareurs/claude-plugins
codex plugin add cs-hint-codex@sdd-misc-plugins
codex mcp add codescout -- codescout start
```

Codex never runs a plugin hook before you approve it, and installing the plugin does not approve it. The interactive `codex` asks at its next start ("Hooks need review"): choose "Review hooks" and press `t` to trust all, or choose "Trust all and continue". The same screen opens…
