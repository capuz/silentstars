---
repo: "ardia-browser/plugins"
name: "plugins"
description: "Plugins for the Ardia browser"
readmeQualityOk: true
url: "https://github.com/ardia-browser/plugins"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [47, 47]
stars: 13
forks: 5
openIssues: 23
closedIssues: 15
watchers: 0
contributors: 9
recentReleases: 5
createdAt: "2026-11-11T16:25:35Z"
lastCommitAt: "2026-11-23T10:17:19Z"
lastReleaseAt: "2026-11-21T21:01:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 52
maintainers: ["mantrakp04"]
openGraphImageUrl: "https://opengraph.githubassets.com/c175c12909aaf155852d0a56f590539a3f272d31d165e326776c5cad233dcffb/ardia-browser/plugins"
---

# Ardia plugins

Small add-ons for [Ardia](https://ardia.dev). A plugin is a `plugin.json` whose settings go into your
`~/.config/ardia/config.json`, written by the `ardia` command. Ardia applies them at once, with no restart.

## Before you start

Install the `ardia` command: in Ardia, open **Settings**, search for **command line**, and install it.

## Plugins

| Plugin | What it does | Needs |
|---|---|---|
| [`cli`](https://github.com/ardia-browser/plugins/blob/HEAD/plugins/cli) | The `ardia` command: drive Ardia, read pages and run its commands from your terminal or an agent. Built into Ardia: install it in one click from **Settings › Plugins**. | Ardia on macOS |
| [`compact-command-bar`](https://github.com/ardia-browser/plugins/blob/HEAD/plugins/compact-command-bar/plugin.json) | ⌘T stops listing your pinned tabs and Top Apps, and shows at most 5 open tabs before you type. Typing still finds every tab. | Ardia 0.2.46-nightly.4 |

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/mantrakp04/ardia-plugins/main/install.sh | sh -s -- compact-command-bar
```

Remove it:
