---
repo: "Innei/haklex"
name: "haklex"
description: "AI-native Lexical rich text editor. Edit, render, SSR, and AI agent protocol (LiteXML) — all from one schema. React 19, TypeScript, Vanilla Extract, ESM."
url: "https://github.com/Innei/haklex"
homepage: "https://haklex.innei.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["editor", "lexical", "monorepo", "react", "rich-text-editor", "typescript", "vanilla-extract", "haklex", "ai", "ai-agent"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-03-07T07:00:10Z"
lastCommitAt: "2026-06-25T06:40:58Z"
lastReleaseAt: "2026-05-20T11:09:14Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 76
undervaluedScore: 46
maintainers: ["Innei"]
openGraphImageUrl: "https://opengraph.githubassets.com/0795dab40d6b7e3ed80fed36facd353fdcbe6fc18171f6ac7f1016ae0eaac144/Innei/haklex"
fundingLinks: ["GITHUB:https://github.com/Innei", "CUSTOM:https://afdian.com/@Innei"]
---

<h1>Haklex</h1>
  <p>An AI-agent-native rich text editor ecosystem built on <a href="https://lexical.dev/">Lexical</a>.</p>
  <p>AI writing assistance, structured editing, static rendering, and server-side parsing — all from a single schema.</p>
</div>

---

## Key Features

- **AI Agent Integration** — Built-in AI writing agent with LiteXML serialization, diff review overlay, selection-aware context capture, and streaming document edits — the editor is designed as a human–AI collaborative surface
- **LiteXML Bridge** — Bidirectional Lexical JSON ↔ XML serialization (`@haklex/rich-litexml`) enables LLMs to read and write structured documents through a compact, token-efficient XML format
- **Rich Block Types** — Images, videos, code blocks, Mermaid diagrams, KaTeX math, Excalidraw whiteboards, embeds, galleries, link cards, mentions, and more
- **Static / Edit Split** — Separate node and renderer trees for read-only display vs. full editing, enabling aggressive tree-shaking
- **SSR-Ready** — `RichRenderer` renders Lexical JSON to React without loading the editor runtime
- **Server-Side Parsing** — `@haklex/rich-headless` provides a zero-React node registry for backend use (Lexical…
