---
repo: "Hufe921/canvas-editor-plugin"
name: "canvas-editor-plugin"
description: "plugins for canvas-editor"
readmeQualityOk: true
url: "https://github.com/Hufe921/canvas-editor-plugin"
homepage: "https://hufe.club/canvas-editor-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["canvas-editor", "plugin", "barcode", "codeblock", "docx-generator", "floating-toolbar", "docx", "excel"]
stars: 125
forks: 55
openIssues: 23
closedIssues: 9
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2023-07-06T06:05:53Z"
lastCommitAt: "2026-08-28T14:34:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 44
undervaluedScore: 23
maintainers: ["Hufe921"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b19c0a8ff368fa4bc6264e4a2e70578da70533194f877a8836f4dba636b899e/Hufe921/canvas-editor-plugin"
---

<h1 align="center">canvas-editor-plugin</h1>

## plugin list

- @hufe921/canvas-editor-plugin-barcode1d

```javascript
import Editor from "@hufe921/canvas-editor"
import barcode1DPlugin from "@hufe921/canvas-editor-plugin-barcode1d"

const instance = new Editor()
instance.use(barcode1DPlugin)

instance.executeInsertBarcode1D(
  content: string,
  width: number,
  height: number,
  options?: JsBarcode.Options
)
```

- @hufe921/canvas-editor-plugin-barcode2d

```javascript
import Editor from "@hufe921/canvas-editor"
import barcode2DPlugin from "@hufe921/canvas-editor-plugin-barcode2d"

const instance = new Editor()
instance.use(barcode2DPlugin, options?: IBarcode2DOption)

instance.executeInsertBarcode2D(
  content: string,
  width: number,
  height: number,
  hints?: Map<EncodeHintType, any>
)
```

- @hufe921/canvas-editor-plugin-codeblock

```javascript
import Editor from "@hufe921/canvas-editor"
import codeblockPlugin from "@hufe921/canvas-editor-plugin-codeblock"

const instance = new Editor()
instance.use(codeblockPlugin)

instance.executeInsertCodeblock(content: string)
```

- @hufe921/canvas-editor-plugin-docx

```javascript
import Editor from '@hufe921/canvas-editor'
import…
