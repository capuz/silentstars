---
repo: "markup-carve/carve"
name: "carve"
description: "A post-Markdown lightweight markup language with visual mnemonics and human-centered design."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve"
homepage: "https://markup-carve.github.io/carve/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["djot", "language", "markdown", "markup", "parser", "templating", "carve", "markup-language", "specification"]
stars: 31
forks: 3
openIssues: 14
closedIssues: 961
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2026-05-13T15:06:42Z"
lastCommitAt: "2026-09-29T10:04:17Z"
lastReleaseAt: "2026-09-22T22:11:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/c30638ec8f8bf184829e49ee8f47b6b666c06a8418576f346f87a7b0735cfa74/markup-carve/carve"
discussionCount: 2
---

# Carve

Carve is a markup language for documents. Its file extension is `.crv`.

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
  1. ordered item
  - [ ] task  - [x] done

CODE AND CONTAINERS
  ```js
  const value = 1
  ```

  ::: warning
  Container content
  :::

TABLES
  |= Name |= Value |           header cells start with |=
  | One    | 1     |
  ^ Table caption

CAPTIONS AND ATTRIBUTES
  
  ^ Figure caption

  {#id .class key=value}

OTHER
  $`inline math`  [^note]  @user  #tag
  %% comment
  :name[extension content]
````

See the [complete cheat…
