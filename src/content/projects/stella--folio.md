---
repo: "stella/folio"
name: "folio"
description: "Framework-neutral DOCX engine with React/Vue editors, Nuxt integration, and agent tooling"
readmeQualityOk: true
url: "https://github.com/stella/folio"
homepage: "https://stll.app/product/editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["docx", "ms-word", "ms-word-docx-file", "rich-text-editor"]
stars: 21
forks: 8
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-30T07:02:25Z"
lastCommitAt: "2026-09-19T08:14:33Z"
lastReleaseAt: "2026-07-06T16:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["jan-kubica", "stella-provenance-updater[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c88cc0f1a96a137cec68353f2af10622a01a85dcdc40b4df8f597183fea7696/stella/folio"
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
