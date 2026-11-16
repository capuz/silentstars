---
repo: "alantriesagain/lightstart"
name: "lightstart"
description: "WebComponents made simple"
readmeQualityOk: true
url: "https://github.com/alantriesagain/lightstart"
homepage: "https://lightstart.dev"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 29]
topics: ["frontend-framework", "webcomponents"]
stars: 8
forks: 2
openIssues: 3
closedIssues: 25
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T13:53:34Z"
lastCommitAt: "2026-11-16T04:21:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["alantriesagain", "ul0gic"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba3d3951e4277d5c704052efc8f9cd380a7b3c76668828ab4f7a0962b32e899e/alantriesagain/lightstart"
---

# light

Light is an engine for user interfaces on the web, in the terminal and on the desktop. A view is a standard custom element rendered into the light DOM, built from signals and a tagged-template renderer. Models hold data, controllers hold shared state, and a theme supplies tokens and utility classes. The same view code runs in a browser, under prerendering, and natively through [scriptc](https://github.com/vercel-labs/scriptc), which compiles the terminal and desktop hosts to binaries with no JavaScript engine inside.

The idea is one engine across hosts, in small parts: the engine, then packages beside it for components, routing, serving, building. The engine has no runtime dependencies and no virtual DOM.

## Start a project

```bash
light new web my-app
cd my-app
pnpm dev
```

| Kind | What it starts |
|---|---|
| `web` | A web app on `@lightstart/app`: views, a model, a controller and routes |
| `tui` | A terminal app on `@lightstart/app`, compiled by `scriptc` |
| `desktop` | A light page in a desktop shell, with a native backend |
| `package` | A light package, with modules, tests and a README |

The first script is `pnpm dev` for a web, tui or desktop project, and…
