---
repo: "mendix/web-widgets"
name: "web-widgets"
description: "Mendix Platform supported widgets and modules for web"
readmeQualityOk: true
url: "https://github.com/mendix/web-widgets"
homepage: "https://marketplace.mendix.com/link/contenttype/4,1"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["low-code", "mendix", "web-widgets"]
stars: 40
forks: 86
openIssues: 12
closedIssues: 21
watchers: 10
contributors: 48
recentReleases: 0
createdAt: "2022-10-04T13:45:01Z"
lastCommitAt: "2026-10-27T09:16:52Z"
lastReleaseAt: "2022-11-23T10:17:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 63
maintainers: ["r0b1n", "leonardomendix", "yordan-st"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8e15d730f4138b5e276e4c204dead9b50907d83ed12762a4ee0cc10d020a1c8/mendix/web-widgets"
---

# Web widgets

The repository of platform-supported widgets and modules for Mendix.

**For issues and bugs related to CSS, Widgets, Atlas, JS Actions, or this repository, please contact** [Mendix Support](https://support.mendix.com)

## Prerequisites

-    version of [Node.js](https://nodejs.org/en/download)

-    version of [pnpm](https://pnpm.io/installation)

## Development

1. Clone the repo.

```sh
$ git clone https://github.com/mendix/web-widgets.git
```

2. Install the dependencies.

```sh
$ cd web-widgets
$ pnpm install
```

3. Go to the widget (package) you want to work on, set `MX_PROJECT_PATH`, and run `pnpm start`.

```sh
$ cd packages/pluggableWidgets/datagrid-web/

# Mac and Linux:
$ export MX_PROJECT_PATH="$HOME/Documents/Mendix/DataBoardApp"

# For Windows (PowerShell):
# $env:MX_PROJECT_PATH = 'C:\Users\Tom\Documents\Mendix\DataBoardApp'

$ pnpm start
```

4. Go to Mendix Studio Pro and run `App>Synchronize App Directory` to update the widget code in the project. If your app is already running, restart it.

5. Keep code clean: run `pnpm test` and `pnpm lint`.

```sh
$ pnpm lint
...
$ pnpm test
```

Note: run `pnpm test --watch` to start unit tests in watch mode.…
