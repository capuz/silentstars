---
repo: "soypat/goldmark-latex"
name: "goldmark-latex"
description: "A LaTeX renderer for Goldmark. Produce .tex files from markdown."
url: "https://github.com/soypat/goldmark-latex"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["commonmark", "go", "golang", "goldmark", "latex", "markdown", "document", "math", "tex"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2022-09-04T05:29:04Z"
lastCommitAt: "2026-06-27T00:48:50Z"
lastReleaseAt: "2026-06-27T00:49:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["soypat"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c33ad47243b8a7567b95610354170628a02c90a1a809fa195034a416351041/soypat/goldmark-latex"
---

# goldmark-latex
A LaTeX renderer for [Goldmark](https://github.com/yuin/goldmark). Produce `.tex` files from markdown.

This renderer seeks to be as extensible as Goldmark itself. Please file an issue if it does not meet your requirements.

## Results
So far this implementation renders the CommonMark specification with the exception of embedded HTML. It does have some bugs related to undefined ASCII sequences. Any help is appreciated.

## Extensions

### Inline Math

`$...$` expressions are passed through as LaTeX inline math. The closing `$` must appear on the same line. An unmatched `$` is escaped to `\$` as usual.

| Markdown | LaTeX |
|---|---|
| `$x + y$` | `$x + y$` |
| `See $E=mc^2$.` | `See $E=mc^2$.` |
| `cost is $5` | `cost is \$5` |

Register `InlineMathParser` to enable this feature.

### GFM Tables

Pipe tables are rendered as `tabular` environments. Column alignment from the delimiter row (`:---`, `:---:`, `---:`) maps to `l`, `c`, `r` in the column spec.

Input:

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
| a    | b      | c     |
```

Output:

```latex
\begin{tabular}{lcr}
\hline
Left & Center & Right \\
\hline
a & b & c \\
\hline…
