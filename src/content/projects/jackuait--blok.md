---
repo: "JackUait/blok"
name: "blok"
description: "A block-based rich text editor for the web, like the one in Notion"
readmeQualityOk: true
url: "https://github.com/JackUait/blok"
homepage: "https://blokeditor.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["angular", "block-editor", "contenteditable", "editor", "editorjs", "headless", "javascript", "notion", "react", "rich-text-editor"]
stars: 34
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 79
recentReleases: 0
createdAt: "2025-11-22T10:30:34Z"
lastCommitAt: "2026-08-31T09:59:45Z"
lastReleaseAt: "2026-02-19T13:02:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["JackUait", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/413df41e9fa6f2578022788c2b6384eaa4bb6a65789b04ecf5890a3fbb1bd505/JackUait/blok"
discussionCount: 1
---

</a>
</p>

# Blok

A block-based rich text editor for the web, like the one in Notion: every paragraph, heading, image or list is its own block you can drag, nest, and convert into something else.

The difference from a plain `contenteditable` field is what you get back. `contenteditable` hands you one HTML blob and leaves you to parse it; Blok saves typed JSON blocks, so the same content can go into a database column, be diffed between revisions, or be rendered on a server that never touches the DOM. And it's headless: Blok ships the engine and the tools, not a theme, so the chrome is yours.

- **JSON in, JSON out.** `save()` returns `{ id, type, data }` blocks — no HTML parsing on your side.
- **Renders without a browser.** `@bloklabs/core/view` turns saved documents into sanitized HTML synchronously, in Node, workers, or React Server Components.
- **React, Vue and Angular adapters.** Separate packages that peer on the core, so the engine is never bundled twice. In React, `<BlokEditor data={…} onSave={…} />` is a real controlled component.
- **69 languages, RTL included.** Locales lazy-load by browser language; right-to-left scripts lay out correctly.
- **CRDT-backed undo.**…
