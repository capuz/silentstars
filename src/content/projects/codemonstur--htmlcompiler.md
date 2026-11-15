---
repo: "codemonstur/htmlcompiler"
name: "htmlcompiler"
description: "A maven plugin for compiling of frontend code"
readmeQualityOk: true
url: "https://github.com/codemonstur/htmlcompiler"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["frontend", "compiler"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-04-29T21:30:43Z"
lastCommitAt: "2026-11-15T11:17:54Z"
lastReleaseAt: "2021-01-01T15:19:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 50
maintainers: ["codemonstur"]
openGraphImageUrl: "https://opengraph.githubassets.com/81189eddf50eaeec0ef467671e1ac614c2cc12eb2aa09c3b1e6d66e3de4c9c0d/codemonstur/htmlcompiler"
---

## HtmlCompiler

The HTML compiler is a maven plugin.
Its purpose is to provide compile time features for generating static HTML resources for a frontend project.

The idea is to make it easier to write webapps by allowing the developer to write source code and have the build system generate resources for deployment.
No more minified files everywhere. No more manually compressing resources.

### Dependencies

- To compile typescript the code calls `tsc`, have it in the PATH.
- To compile js++ the code calls `js++`, have it in the PATH.

### Supported features

- Parses HTML as Pebble templates using the Pebble template engine
- Compresses HTML (remove comments, remove whitespace)
- Inlines javascript
- Minifies javascript
- Inlines images
- Inlines stylesheets
- Minifies stylesheets (removing comments, removing whitespace)
- Generates integrity tag for remote resources
- Adds an include statement to JavaScript
- Also compresses HTML inside script tag with type text/x-jquery-tmpl or text/html
- Allow for calling htmlcompiler features through the command line
- Inlining of link tags (favico)
- SCSS and LESS compiling
- Inline link tag to stylesheet into style tag

### Planned…
