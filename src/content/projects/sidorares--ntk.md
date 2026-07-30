---
repo: "sidorares/ntk"
name: "ntk"
description: "node.js desktop UI toolkit"
readmeQualityOk: true
url: "https://github.com/sidorares/ntk"
homepage: "https://sidorares.github.io/ntk/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 91
forks: 12
openIssues: 8
closedIssues: 35
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2012-12-19T14:02:59Z"
lastCommitAt: "2026-07-30T06:09:15Z"
lastReleaseAt: "2026-07-27T05:09:11Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 96
undervaluedScore: 54
maintainers: ["sidorares", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a8f5a973386ca74f2e09167e06731a0cfc595dbb597f24fbf61f6b57fe5e7eb/sidorares/ntk"
---

ntk
===

node.js desktop UI toolkit for X11

A set of wrappers around the low level [node-x11](https://github.com/sidorares/node-x11)
module to simplify X Window UI programming — window creation, DOM-style event
handling, 2d/3d graphics — using API concepts you already know from the web.

Everything, including font rasterization, is pure JavaScript: `npm install`
never compiles anything.

**Docs & live playground:** <https://sidorares.github.io/ntk/> — the
playground runs ordinary ntk code in your browser against node-x11's
in-browser pure-JS X server (XRender included) with bundled fonts. The same server also works headless in node — see
[docs/xserver.md](https://github.com/sidorares/ntk/blob/HEAD/docs/xserver.md) — so ntk apps and tests can run with no
real X server at all.

# Installation

```
npm install ntk
```

Requires Node.js >= 20.19 and an X server. Full documentation lives in
[docs/](https://github.com/sidorares/ntk/blob/HEAD/docs/README.md).

## Basic usage

```js
import { createClient } from 'ntk';

const app = await createClient();
const wnd = app.createWindow({ width: 500, height: 300, title: 'Hello' });
wnd.on('mousedown', (ev) => wnd.setTitle(`click:…
