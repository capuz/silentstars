---
repo: "raviqqe/monza-editor"
name: "monza-editor"
description: "The textarea element with syntax highlight"
readmeQualityOk: true
url: "https://github.com/raviqqe/monza-editor"
homepage: "https://raviqqe.com/monza-editor/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["editor", "javascript", "lightweight", "typescript"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-15T02:35:23Z"
lastCommitAt: "2026-11-02T17:58:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["dependabot[bot]", "raviqqe"]
openGraphImageUrl: "https://opengraph.githubassets.com/390d16f9cef13ab6901db901db1dc62366d5c9176fa5faef1587859c9eaa9b25/raviqqe/monza-editor"
---

# 🏁 Monza Editor 🏎️

The `textarea` element with syntax highlight.

Its core library consists of only 1 KB JavaScript and 0.5 KB CSS!

## Install

```sh
# Preact
npm install @monza-editor/preact

# React
npm install @monza-editor/react

# Solid.js
npm install @monza-editor/solid

# Vanilla JS
npm install monza-editor
```

## Usage

### Syntax highlighting

Instead of providing the default syntax highlighter, Monza Editor lets you bring your own one.
You need to pass a `highlight` function which takes source code as a `string` and returns HTML-annotated code as a `string` on the initialization of Monza Editor.
See [examples](https://raviqqe.com/monza-editor/#examples) and their source code for more details.

### CSS styling

At the very minimum, we recommend you to set `font-size` and `font-family` to a certain monospace font at the top-level element.
You might set the other CSS properties, such as `line-height`, `background` and `border`, there.

You might also set the following CSS variables that overwrite their corresponding CSS properties.

- `--me-padding`: The padding inside a textarea.

## Alternatives

- [`webcoder49/code-input`](https://github.com/webcoder49/code-input)…
