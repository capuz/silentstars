---
repo: "spikonado/sprocket"
name: "sprocket"
description: "The best AI agent for hardware and software"
readmeQualityOk: true
url: "https://github.com/spikonado/sprocket"
homepage: "https://spikonado.com/sprocket"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [52, 44]
stars: 21
forks: 3
openIssues: 7
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-13T14:39:39Z"
lastCommitAt: "2026-10-31T15:59:12Z"
lastReleaseAt: "2026-08-03T02:04:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 45
maintainers: ["Amronos", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b72b3028730bc2ad54643b87e222d30ea1bd813f4a86d34dfb6d33f31e3b98b/spikonado/sprocket"
---

# Sprocket

The best AI agent for hardware and software.

Sprocket designs electronics, tests code end-to-end, and buys parts or subscriptions for your project when asked.

## Using Sprocket

### Desktop app

Download the installer for your OS from the [latest release](https://github.com/spikonado/sprocket/releases/latest), install it, and open Sprocket. Sign in, choose a project folder, and ask Sprocket what you'd like to build.

### Run without installing

With [Node.js](https://nodejs.org/) 20.11 or newer installed:

```sh
npx @spikonado/sprocket
```

This opens Sprocket in your browser, or in the desktop app if it's installed. Sign in and choose a project folder to get started. Add `--web` to always use your browser.

### CLI

```sh
npm install -g @spikonado/sprocket
sprocket
```

Open a project folder in the app, or force it to open in your browser:

```sh
sprocket .
sprocket --web ../my-robot
```

To run a task directly from your terminal, run these commands in your project folder:

```sh
sprocket login
sprocket run "Fix the failing tests"
```

Update your CLI installation with `sprocket update`. Run `sprocket --help` for more options.

## Troubleshooting

- If `17731` is…
