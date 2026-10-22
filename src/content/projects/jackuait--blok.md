---
repo: "JackUait/blok"
name: "blok"
description: "AI-powered block-based rich text editor for the web, like the one in Notion"
readmeQualityOk: true
url: "https://github.com/JackUait/blok"
homepage: "https://blokeditor.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["angular", "block-editor", "contenteditable", "editor", "editorjs", "headless", "javascript", "notion", "react", "rich-text-editor"]
stars: 43
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 79
recentReleases: 0
createdAt: "2025-11-22T10:30:34Z"
lastCommitAt: "2026-10-22T08:52:20Z"
lastReleaseAt: "2026-02-19T13:02:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["JackUait"]
openGraphImageUrl: "https://opengraph.githubassets.com/b66cb1a022c2093c4b133814f5ae68884650507141bee6fb425f3e526764e626/JackUait/blok"
discussionCount: 1
---

# Blok

A block-based rich text editor for the web, like the one in Notion. Every paragraph, heading, image or list is its own block. You can drag it, nest it, or convert it into something else.

A plain `contenteditable` field hands you one HTML blob and leaves you to parse it. Blok saves typed JSON blocks instead. The same content can then go into a database column, be diffed between revisions, or be rendered on a server that never touches the DOM.

Blok is also headless. It ships the engine and the tools, not a theme, so the chrome is yours.

- **JSON in, JSON out.** `save()` returns `{ id, type, data }` blocks — no HTML parsing on your side.
- **Renders without a browser.** `@bloklabs/core/view` turns saved documents into sanitized HTML synchronously, in Node, workers, or React Server Components.
- **React, Vue and Angular adapters.** Separate packages that peer on the core, so the engine is never bundled twice. In React, `<BlokEditor data={…} onSave={…} />` is a real controlled component.
- **69 languages, RTL included.** Locales lazy-load by browser language; right-to-left scripts lay out correctly.
- **CRDT-backed undo.** History runs on Yjs: undo restores the caret, groups…
