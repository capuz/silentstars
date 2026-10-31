---
repo: "borb-sh/quillmark"
name: "quillmark"
description: "Open-source document framework"
readmeQualityOk: true
url: "https://github.com/borb-sh/quillmark"
homepage: "https://quillmark.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["documents", "formatting", "pdf", "typst"]
stars: 15
forks: 0
openIssues: 46
closedIssues: 804
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-27T00:26:28Z"
lastCommitAt: "2026-10-31T02:01:20Z"
lastReleaseAt: "2026-04-25T23:31:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["claude", "nibsbin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b140e9b68c3bb8cd4b69749a7c8572a8dc77c55ef06b03819b73d6893bbd0228/borb-sh/quillmark"
discussionCount: 0
---

# Quillmark

Quillmark is a schema-driven document framework. You define a document format once, as a **quill**: a schema for its fields and a layout for its pages, either a Typst plate or an existing PDF form. Authors then write plain Markdown, and Quillmark validates each document against its quill and renders it to PDF, SVG, or PNG.

Both pages come from one Markdown file, rendered through the [`usaf_memo`](https://github.com/borb-sh/quillmark/tree/main/crates/fixtures/resources/quills/usaf_memo/0.2.0) quill. Its main card, abridged ([full file](https://github.com/borb-sh/quillmark/blob/main/docs/assets/gallery/memo.md)):

```markdown
~~~
$quill: usaf_memo
letterhead_title: NORTHWIND REGIONAL AUTHORITY
letterhead_seal: ""
memo_for:
  - ALL DIVISION CHIEFS
subject: Transition to the Records Portal (Suspense 15 Mar 26)
signature_block:
  - JANE Q. DOE
  - Chief, Records Management
date: 2026-02-02
~~~

The Records Portal replaces the shared drive for official records on 1 April 2026.
```

- **One implementation, four surfaces**: a Rust crate, a Python package, an npm package (WebAssembly, with a live canvas preview), and a CLI.
- **Two backends**: Typst typesets new pages;…
