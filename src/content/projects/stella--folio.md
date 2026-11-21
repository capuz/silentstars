---
repo: "stella/folio"
name: "folio"
description: "Framework-neutral DOCX engine with React/Vue editors, Nuxt integration, and agent tooling"
readmeQualityOk: true
url: "https://github.com/stella/folio"
homepage: "https://stll.app/product/editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["docx", "ms-word", "ms-word-docx-file", "rich-text-editor"]
stars: 34
forks: 10
openIssues: 24
closedIssues: 523
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-30T07:02:25Z"
lastCommitAt: "2026-11-21T11:23:40Z"
lastReleaseAt: "2026-07-06T16:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["jan-kubica", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c598873a4d16059b3d0cc8be1e0f0824a8b99ad08680beff63df239358a528/stella/folio"
---

English &middot; <a href="./README.zh-CN.md">简体中文</a> &middot; <a href="./README.pt-BR.md">Português (Brasil)</a>

# folio

Folio is an embeddable Word-document editor for web applications. Pass it a
`.docx` as a `File`, `Blob`, `ArrayBuffer`, or `Uint8Array`; it renders editable,
paginated content in the browser and returns a `.docx` when the user saves.

Use the React, Vue, or Nuxt editor in an application, or use `folio-core`
directly for parsing, editing, layout, and document review without a UI.

## Install

```sh
bun add @stll/folio-react react react-dom use-intl
```

`@stll/folio-core` is installed with the React editor.
