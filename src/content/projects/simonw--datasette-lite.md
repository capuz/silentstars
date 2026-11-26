---
repo: "simonw/datasette-lite"
name: "datasette-lite"
description: "Datasette running in your browser using WebAssembly and Pyodide"
readmeQualityOk: true
url: "https://github.com/simonw/datasette-lite"
homepage: "https://lite.datasette.io"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [55, 43]
topics: ["datasette", "pyodide", "webassembly"]
stars: 419
forks: 43
openIssues: 14
closedIssues: 66
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2022-05-02T14:34:06Z"
lastCommitAt: "2026-11-26T15:26:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 80
undervaluedScore: 36
maintainers: ["simonw", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8909adf858d077e386509d000f85416c778840db23fbc5f37b84a3aa98c7b34/simonw/datasette-lite"
fundingLinks: ["GITHUB:https://github.com/simonw"]
---

# Datasette Lite

Datasette running in your browser using WebAssembly and [Pyodide](https://pyodide.org)

Live tool: https://lite.datasette.io/

More about this project:

- [Datasette Lite: a server-side Python web application running in a browser](https://simonwillison.net/2022/May/4/datasette-lite/)
- [Joining CSV files in your browser using Datasette Lite](https://simonwillison.net/2022/Jun/20/datasette-lite-csvs/)
- [Plugin support for Datasette Lite](https://simonwillison.net/2022/Aug/17/datasette-lite-plugins/)

## How this works

Datasette Lite runs the full server-side Datasette Python web application directly in your browser, using the [Pyodide](https://pyodide.org) build of Python compiled to WebAssembly.

When you launch the demo, your browser will download and start executing a full Python interpreter, install the [datasette](https://pypi.org/project/datasette/) package (and its dependencies), download one or more SQLite database files and start the application running in a browser window (actually a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) attached to that window).
