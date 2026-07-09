---
repo: "cardstack/boxel"
name: "boxel"
description: "A new approach to building composable software, from Cardstack."
readmeQualityOk: true
url: "https://github.com/cardstack/boxel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 23
forks: 12
openIssues: 0
closedIssues: 19
watchers: 10
contributors: 24
recentReleases: 10
createdAt: "2021-02-17T17:59:31Z"
lastCommitAt: "2026-07-09T20:44:35Z"
lastReleaseAt: "2026-05-21T02:45:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 71
maintainers: ["habdelra", "lukemelia", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1bb27bfb370900c2fa23e3450e1f6bdd91dc0ce177bc5d53324d38b9708ed31/cardstack/boxel"
---

# Boxel Runtime

For a quickstart, see [here](https://github.com/cardstack/boxel/blob/HEAD/QUICKSTART.md)

## Setup

- you will want the [Glint](https://marketplace.visualstudio.com/items?itemName=typed-ember.glint-vscode) vscode extension
- you will want the [vscode-glimmer](https://marketplace.visualstudio.com/items?itemName=chiragpat.vscode-glimmer) vscode extension
- you will want the [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) vscode extension
- this project uses [mise](https://mise.jdx.dev/) for tool version management. Install mise and run `mise install` from the repo root to get the correct Node.js and pnpm versions.
- this project uses [pnpm](https://pnpm.io/) for package management. run `pnpm install` to install the project dependencies first.
- this project uses [docker](https://docker.com). Make sure to install docker on your system.
- Ensure that node_modules/.bin is in your path. e.g. include `export PATH="./node_modules/.bin:$PATH"` in your .zshrc

## Orientation

`packages/host` is the card runtime host application

`packages/realm-server` is a node app that serves the realm as an HTTP server, as well as, it can also…
