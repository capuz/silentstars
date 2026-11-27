---
repo: "pyjs/pyjs"
name: "pyjs"
description: "The Python application platform for web, mobile, desktop, and servers. JavaScript, JVM, LLVM, WebAssembly, and WGSL targets, with Django integration."
readmeQualityOk: true
url: "https://github.com/pyjs/pyjs"
homepage: "https://pyjs.org"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-28T01:09:13Z"
lastCommitAt: "2026-11-27T16:29:20Z"
lastReleaseAt: "2026-08-23T15:59:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["eukreign"]
openGraphImageUrl: "https://opengraph.githubassets.com/898b0cfd72688ea9613c343728cff7444bc2fc704b404b86e102a50214272b67/pyjs/pyjs"
discussionCount: 0
---

# PyJS: Python to JavaScript

**Write typed Python for servers, browsers, and Android—without shipping a
Python runtime to JavaScript targets.**

PyJS statically analyzes reachable Python and emits readable, tree-shaken
JavaScript. The same component can render real HTML on the server, hydrate as a
native custom element in the browser, and share application logic with a
direct-JVM Android app.

PyJS is early-release software: complete applications and tests work today,
while APIs can still change between releases.

Browser JavaScript and direct-JVM Android are the application-facing targets.
The JVM, LLVM, and WebAssembly backends remain experimental; their APIs and
supported subsets may change rapidly.

## See it work in 30 seconds

```bash
python -m pip install "pyjs[examples]"
python -m pyjs_examples.calculator
```

Open the clickable local URL printed by the server. The Calculator is one
Python application targeting the Web, an installable PWA, and Android. Try the
[source](https://github.com/pyjs/pyjs/blob/HEAD/examples/calculator/calculator.py), then inspect its browser and
Android tests beside it.

PyJS keeps the generated result recognizable. Given:
