---
repo: "markup-carve/carve"
name: "carve"
description: "A lightweight markup language for documents and the web."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve"
homepage: "https://markup-carve.github.io/carve/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["djot", "language", "markdown", "markup", "parser", "templating", "carve", "markup-language", "specification"]
stars: 38
forks: 4
openIssues: 121
closedIssues: 1653
watchers: 1
contributors: 5
recentReleases: 8
createdAt: "2026-05-13T15:06:42Z"
lastCommitAt: "2026-10-30T11:03:12Z"
lastReleaseAt: "2026-10-14T14:44:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 48
maintainers: ["dereuromark", "Vamsi-2581"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0057da4c21c5b69ee049ef60ad701b506ee87aee9a1b826760a2026ab75653a/markup-carve/carve"
discussionCount: 2
---

# Carve

Carve is a lightweight markup language for documents and the web. Its file extension is `.crv`.

```carve
# Release notes

This has /italic/, *bold*, _underline_, ~strikethrough~, and =highlight=.

- [x] Publish the release
- [ ] Update the package

|= Package |= Version |
| carve-js | 0.1 |
^ Published packages

::: note
Carve also has fenced containers, footnotes, math, and attributes.
:::
```

## Syntax

````text
INLINE
  /italic/  *bold*  /*bold italic*/
  _underline_  ~strikethrough~  =highlight=
  {^superscript^}  {,subscript,}  `code`

HEADINGS AND LINKS
  # Heading
  [text](https://example.com)  
  [Heading][]                  link to a heading
  </#heading-id>               cross-reference with generated text

LISTS
  - unordered item
  . ordered item               auto-numbered (canonical)
  3. ordered item              explicit start number
  - [ ] open task
  - [_] open alias
  - [/] task in progress
  - [!] blocked task
  - [x] done task
  - [-] dropped task
  - [>] deferred task
  - [?] uncertain task
  - item
  +                            continuation marker: attaches the next
  > note                       block at its column to the item

CODE AND…
