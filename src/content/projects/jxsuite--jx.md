---
repo: "jxsuite/jx"
name: "jx"
description: "JSON-based Web App Platform"
readmeQualityOk: true
url: "https://github.com/jxsuite/jx"
homepage: "http://jxsuite.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-development", "static-site-generator", "visual-builder", "web", "web-compiler", "web-components", "web-development", "web-framework"]
stars: 7
forks: 3
openIssues: 9
closedIssues: 71
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-05T02:45:58Z"
lastCommitAt: "2026-11-13T18:33:40Z"
lastReleaseAt: "2026-05-14T16:55:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["batonac", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1201689418/fe5a6fb2-3c69-4629-8d24-776be82e5f3c"
discussionCount: 0
---

A full-stack web framework with a visual editor, built on plain JSON and Markdown.<br> Sites compile to static HTML, so they are quick to serve, have almost no attack surface, and cost close to nothing to run. Pages, styles, state, data, and server logic are all declarative documents. Edit them in code, on a canvas, or with an agent.

---

## What is Jx?

A Jx project is a directory of JSON and Markdown files. Routes come from the filesystem. Components are JSON documents whose property names mirror the DOM API. Reactivity is [`@vue/reactivity`](https://github.com/vuejs/core/tree/main/packages/reactivity). State entries marked `timing: "server"` run on the server.

```json
{
  "$id": "Counter",
  "state": {
    "count": 0,
    "increment": { "$prototype": "Function", "body": "state.count++" }
  },
  "tagName": "my-counter",
  "children": [
    { "tagName": "span", "textContent": "${state.count}" },
    { "tagName": "button", "textContent": "+", "onclick": { "$ref": "#/state/increment" } }
  ]
}
```

Every document validates against a JSON Schema 2020-12 meta-schema generated from the live web platform, so the same file is legible to a person, a visual editor, and a model. The full…
