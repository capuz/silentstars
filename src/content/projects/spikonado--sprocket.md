---
repo: "spikonado/sprocket"
name: "sprocket"
description: "The best AI agent for hardware and software"
readmeQualityOk: true
url: "https://github.com/spikonado/sprocket"
homepage: "https://usesprocket.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [47, 47]
stars: 22
forks: 3
openIssues: 14
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-13T14:39:39Z"
lastCommitAt: "2026-11-09T11:59:28Z"
lastReleaseAt: "2026-08-03T02:04:11Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 87
undervaluedScore: 42
maintainers: ["Amronos", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d89aae4f0040741c961eb433ea74ecedd063ceb0d113f4212003e5bc959acc4f/spikonado/sprocket"
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
npx usesprocket
```

This opens Sprocket in your browser, or in the desktop app if it's installed. Sign in and choose a project folder to get started. Add `--web` to always use your browser.

### CLI

```sh
npm install -g usesprocket
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

- If `17731` is already occupied,…
