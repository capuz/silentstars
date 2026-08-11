---
repo: "gronke/ui-components"
name: "ui-components"
description: "Web Components for TUI and Browser made with pure Rust from Lit Element"
readmeQualityOk: true
url: "https://github.com/gronke/ui-components"
homepage: "https://gronke.github.io/ui-components/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["lit", "rust", "tui", "webcomponents"]
stars: 52
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-03T16:36:03Z"
lastCommitAt: "2026-08-11T04:48:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 26
maintainers: ["gronke"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec066b7e4fc97bb65c901fa6207b42a67444395bc4f3dc3d91eb49407f27e043/gronke/ui-components"
---

# ui-components

Build a TUI from HTML.
One component definition, written in Rust, renders as an idiomatic Lit element in the browser and as a real TUI in the terminal: same properties, same events, same keyboard.

A definition carries reactive properties, a lit-flavored template (inline or `.html`), co-located `.scss` and named behavior hooks.
Two targets consume it:

- Browser: generated TypeScript web components (LitElement variant: plain class, `static properties`, light DOM, no decorators), vendored, compiled and served by [web_modules](https://github.com/gronke/web_modules).
- Terminal: a runtime interpreting the same template IR with ratatui, laid out by taffy (real CSS flexbox and block over terminal cells) and rat-widget input primitives.

The terminal host scales with the browser context a page needs.
The template runtime runs without any JavaScript.
For real JS, the scripted host (`uic_js`) runs unmodified lit modules on the Boa engine and grows browser platform APIs as cargo features: `storage`, `sqlite`, `dialogs`, `clipboard`.
[`apps/lit-demo`](https://github.com/gronke/ui-components/blob/HEAD/apps/lit-demo/README.md) is the proof: a plain, hand-written Lit todo app…
