---
repo: "lxsmnsyc/brumate"
name: "brumate"
description: "A component language and compiler for web apps that resume instead of hydrating"
readmeQualityOk: true
url: "https://github.com/lxsmnsyc/brumate"
homepage: "https://brumate-docs.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T19:25:08Z"
lastCommitAt: "2026-11-01T10:45:19Z"
lastReleaseAt: "2026-10-22T03:38:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["lxsmnsyc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e64653d6b477e5e63f45007179eafdfc825e2626e5aa1102f9fba1756fc742a/lxsmnsyc/brumate"
fundingLinks: ["GITHUB:https://github.com/lxsmnsyc"]
---

# brumate

> A component language and compiler for resumable web apps.

`brumate` compiles single-file components into server-rendered HTML and small client chunks. The client does not hydrate. It reads the state that the server wrote into the page and loads the code for an event handler only when that event fires.

The compiler generates a server module that renders HTML with the state, and client modules that resume it. A Vite plugin compiles `.brm` files in an app.

This repository holds the compiler and its runtime, the type checker and editor support, the website, examples, benchmarks and smoke tests. brumate is at 0.x: the page format can change between versions, so the server and the client must come from the same version.

## Goals

- Ship only the client code that an interaction can reach. Markup that never changes ships as HTML and nothing else.
- Never run component code again on the client to rebuild state.
- Keep the loader, the only code that loads before the page is used, under 1 KB. It is about 2 KB after gzip today.
- Keep the syntax small: scripts, markup with `#` blocks, and a few compile-time functions.

## Example

```html
<script>
  import { $memo, $props,…
