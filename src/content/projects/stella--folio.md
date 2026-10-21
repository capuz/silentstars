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
stars: 31
forks: 11
openIssues: 15
closedIssues: 390
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-30T07:02:25Z"
lastCommitAt: "2026-10-21T20:59:26Z"
lastReleaseAt: "2026-07-06T16:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["jan-kubica", "dependabot[bot]", "stella-provenance-updater[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1aca9e439756dc7a28122796fda0fdfd76bc7bbc570d594038a7f115462009ed/stella/folio"
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

## React quick start

```tsx
import { useState } from "react";
import { IntlProvider } from "use-intl";
import { DocxEditor } from "@stll/folio-react";
import { getFolioMessages } from "@stll/folio-react/messages";
import "@stll/folio-react/standalone.css";

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const downloadDocx = (buffer: ArrayBuffer) => {
  const url = URL.createObjectURL(new Blob([buffer], { type: DOCX_MIME }));
  const link = document.createElement("a");
  link.href = url;
  link.download =…
