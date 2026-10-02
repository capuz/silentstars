---
repo: "stella/folio"
name: "folio"
description: "Framework-neutral DOCX engine with React/Vue editors, Nuxt integration, and agent tooling"
readmeQualityOk: true
url: "https://github.com/stella/folio"
homepage: "https://stll.app/product/editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["docx", "ms-word", "ms-word-docx-file", "rich-text-editor"]
stars: 26
forks: 8
openIssues: 21
closedIssues: 116
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2026-06-30T07:02:25Z"
lastCommitAt: "2026-10-02T09:25:56Z"
lastReleaseAt: "2026-07-06T16:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["jan-kubica", "stella-provenance-updater[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5045e80c22f7099161723132c5c6fd2969ee240975b996bc0bfebcdb15531e9/stella/folio"
---

</p>

  <strong>Browser editor and framework-neutral engine for OOXML <code>.docx</code> documents.</strong>
</p>

  English &middot; <a href="./README.zh-CN.md">简体中文</a> &middot; <a href="./README.pt-BR.md">Português (Brasil)</a>
</p>

</p>

</p>

# folio

Folio is an embeddable Word-document editor for web applications. Pass it a
`.docx` as a `File`, `Blob`, `ArrayBuffer`, or `Uint8Array`; it renders editable,
paginated content in the browser and returns a `.docx` when the user saves.

Use the React, Vue, or Nuxt editor in an application, or use `folio-core`
directly for parsing, editing, layout, and document review without a UI.

</p>

## Install

```sh
bun add @stll/folio-react react react-dom use-intl
```

`@stll/folio-core` is installed with the React editor.

## React quick start

```tsx
import { useState } from "react";
import { IntlProvider } from "use-intl";
import { DocxEditor } from "@stll/folio-react";
import { getFolioMessages } from "@stll/folio-react/messages";
import "@stll/folio-react/standalone.css";

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const downloadDocx = (buffer: ArrayBuffer) => {
  const url =…
