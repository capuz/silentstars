---
repo: "codaxy/cxjs"
name: "cxjs"
description: "CxJS - Advanced JavaScript UI framework for admin and dashboard applications with ready to use grid, form and chart components."
readmeQualityOk: true
url: "https://github.com/codaxy/cxjs"
homepage: "https://cxjs.io"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [41, 32]
topics: ["widgets", "themes", "charts", "react", "drag-and-drop", "ui", "form-controls", "form-validation", "grid-component"]
stars: 491
forks: 71
openIssues: 35
closedIssues: 577
watchers: 20
contributors: 40
recentReleases: 0
createdAt: "2016-09-14T08:13:08Z"
lastCommitAt: "2026-09-09T08:19:04Z"
lastReleaseAt: "2020-06-25T07:45:56Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 37
maintainers: ["mstijak", "nebojsa-peric", "milankovacevic-codaxy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/68187142/f210a900-bb74-11ea-851d-ced4ba9c9302"
discussionCount: 8
---

<br />

  </a>
</p>

</p>

<br />

CxJS is a TypeScript UI framework with 50+ widgets, data tables, charts, routing, and state management
designed for building data-intensive web applications such as portals, dashboards and admin apps.
Built on top of React, it provides everything needed to build complex front-ends out of the box.

Learn more at [cxjs.io/docs](https://cxjs.io/docs).

## Quick Start

Install the core packages:

```bash
npm install cx cx-react
```

Add a theme:

```bash
npm install cx-theme-variables
```

Configure TypeScript for CxJS JSX:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "cx"
  }
}
```

Set up the entry point:

```tsx
import { startAppLoop } from "cx/ui";
import { Store } from "cx/data";

import "cx-theme-variables/dist/widgets.css";
import { renderThemeVariables, defaultPreset } from "cx-theme-variables";

renderThemeVariables(defaultPreset);

const store = new Store();

startAppLoop(
  document.getElementById("app"),
  store,
    <h1>Welcome to CxJS</h1>
  </div>,
);
```

A simple form with two-way data binding:

```tsx
import { createModel } from "cx/ui";
import { Button, LabelsTopLayout, MsgBox, TextField } from…
