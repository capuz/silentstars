---
repo: "smsunarto/bb-plugins"
name: "bb-plugins"
description: "Monorepo for personal bb plugins: amp, notification, gh-stack, agentation, agent-proxy, etc"
readmeQualityOk: true
url: "https://github.com/smsunarto/bb-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["bb-plugin"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-06T21:55:11Z"
lastCommitAt: "2026-10-24T00:05:06Z"
lastReleaseAt: "2026-08-18T06:07:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 62
maintainers: ["smsunarto", "sms-yui", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b14be944cede92498ccd57632ec35544648081b5eefd4ad5227f5a21fdd12653/smsunarto/bb-plugins"
---

# smsunarto's bb-plugins

**Plugins for [bb](https://github.com/get-bb/bb), the agent IDE — in one GitHub repository.**

### Agent Providers

### Dev Productivity

### Utilities

### Themes

## Install

Add this repository as a marketplace once, then install by name:

```sh
bb marketplace add git:github.com/smsunarto/bb-plugins
bb plugin install gtd-sidebar
```

Adding a marketplace installs nothing — it caches the catalog, so these plugins
become findable by name in `bb plugin search` and in bb's plugin browser. `<id>`
is `agentation`, `amp`, `gh-stack`, `gtd-sidebar`, or `monokai`; if another
marketplace you have added publishes the same name, spell it
`gtd-sidebar@smsunarto`.

Every plugin ships as a git tag, and the catalog entry carries its release line.
bb resolves the newest `<id>/vX.Y.Z` tag, clones it, installs the plugin's
runtime dependencies, and builds both bundles against your bb — a plugin is
never shipped prebuilt, so it always matches the host it runs on. `bb plugin
update <id>` follows the same line.

## Build from source

This is the route for unreleased work. It puts each plugin in as a **local path source**, so bb reads the files in place: edit, rebuild,…
