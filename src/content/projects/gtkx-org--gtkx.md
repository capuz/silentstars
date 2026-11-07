---
repo: "gtkx-org/gtkx"
name: "gtkx"
description: "The React framework for Linux. Build native apps with React, TypeScript, and Adwaita widgets."
readmeQualityOk: true
url: "https://github.com/gtkx-org/gtkx"
homepage: "https://gtkx.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["gtk4", "linux", "native", "nodejs", "react", "typescript", "libadwaita"]
stars: 491
forks: 13
openIssues: 0
closedIssues: 47
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-17T16:10:30Z"
lastCommitAt: "2026-11-07T13:55:30Z"
lastReleaseAt: "2025-11-28T06:58:19Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["dependabot[bot]", "eugeniodepalo", "gtkx-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b470394e8de7ddb0d78d991803d5c1238936e70cbdb3409f22a1ed634394658e/gtkx-org/gtkx"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/gtkx"]
discussionCount: 6
---

The React framework for Linux<br />
  Adwaita and GTK4 widgets, TypeScript, and Node.js.

## Start an app

This branch develops **GTKX 2.0**, currently in beta. The stable release is scheduled for **1 December 2026**. For the current stable release, use the [1.x documentation](https://gtkx.dev/guide/getting-started).

GTKX 2.0 requires Linux, Node.js 26.7 or later, GTK 4.20 or later, libadwaita 1.8 or later, and native development libraries. Follow [Getting Started](https://gtkx.dev/v2/guide/getting-started) to install and check them before scaffolding:

```sh
npm create gtkx@beta my-app
cd my-app
npm run dev
```

The native addon ships prebuilt for x64 and arm64 glibc Linux. Building it from source requires Rust and the [workspace prerequisites](https://gtkx.dev/contributing/development).

## Build with React

GTKX renders native Adwaita and GTK widgets. Use React state and events to update them, Node.js for filesystem and network access, and npm packages that do not require a browser DOM.

This is a complete entry point in a scaffolded app:

```tsx
import {
  AdwApplication, AdwApplicationWindow,
  AdwHeaderBar, AdwToolbarView,
} from "@gtkx/jsx/adw";
import { GtkLabel } from…
