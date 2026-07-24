---
repo: "yeasy/mdPress"
name: "mdPress"
description: "Modern publishing system for books and documentations in markdown"
readmeQualityOk: true
url: "https://github.com/yeasy/mdPress"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["modernized", "book", "documentation-tool", "markdown", "tool"]
stars: 20
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T02:42:27Z"
lastCommitAt: "2026-07-24T06:03:59Z"
lastReleaseAt: "2026-03-23T16:07:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 33
maintainers: ["yeasy"]
openGraphImageUrl: "https://opengraph.githubassets.com/811e37f5a8f95ca923b9a034ad1844c2a77d2603085ab8e0fcb55b876738713a/yeasy/mdPress"
---

# mdPress

</p>

[中文说明](https://github.com/yeasy/mdPress/blob/HEAD/README_zh.md)

**Publish Markdown as a polished docs site, printable PDF, portable HTML, and ePub**.

```
$ mdpress build --format site,pdf,html,epub

  [1/5] Initializing theme system ... ✓ technical
  [2/5] Parsing chapters (4 top-level) ... ✓ 4 chapters
  [3/5] Generating cover and TOC ... ✓
  [4/5] Assembling HTML ... ✓
  [5/5] Generating output (site, pdf, html, epub) ... ✓

  ✅ Build completed (elapsed 845ms)
  ✓ Generated pdf   → /home/you/my-book/my-book.pdf
  ✓ Generated html  → /home/you/my-book/my-book.html
  ✓ Generated site  → /home/you/my-book/_book/index.html
  ✓ Generated epub  → /home/you/my-book/my-book.epub
```

Use `book.yaml` for full control, `SUMMARY.md` for GitBook-style projects, or zero-config discovery for a focused docs folder. For large repositories, point mdPress at the specific docs/book directory instead of the repo root.

## Why Teams Use mdPress

- **One source, multiple outputs**: build a docs site, a shareable HTML file, a PDF, and an ePub from the same Markdown project.
- **Fast writing loop**: `mdpress serve` gives you live preview, search, sidebar navigation, and dark mode…
