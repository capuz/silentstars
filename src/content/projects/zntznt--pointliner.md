---
repo: "zntznt/pointliner"
name: "pointliner"
description: "Single-file offline outliner with live generators, tables, and math."
readmeQualityOk: true
url: "https://github.com/zntznt/pointliner"
homepage: "http://zntznt.com/pointliner/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [73, 27]
stars: 5
forks: 1
openIssues: 21
closedIssues: 70
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T00:42:39Z"
lastCommitAt: "2026-07-12T06:18:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 59
maintainers: ["zntznt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d33e788a0e4fc0334162c5aa8bdb299db67f91fdd4eea330958338cc383fc45/zntznt/pointliner"
---

# Pointliner

**A single-file, offline outliner with live widgets inside.** It's an outliner with a
markdown editor, but drop a `{2d6}` into any point and it becomes a dice roll you can
click to re-roll. `{= sum(cost)}` totals your children. `{5 to 10}` is an uncertain
estimate with a little sparkline. All of it lives in one `index.html`, runs with the wifi
off, and needs nothing installed.

**[→ Try it now](https://zntznt.com/pointliner/)** · no account, no install, runs in your browser.

---

## The 30-second version

Pointliner is an outliner first: nested bullet points, markdown, collapse, zoom, to-dos,
dates, links, search. The twist is **pills**. Type something inside `{curly braces}` and,
when you click away, it turns into a small live widget:

| You type | You get |
|---|---|
| `{2d6}` | a dice roll (click to re-roll) |
| `{sword \| shield \| potion}` | a random pick from the list |
| `{= 2 * 19}` | a math result: **38** |
| `{= sum(cost)}` | the total of a `cost` property across child points |
| `{5 to 10}` | an estimate: **7.2 (5 to 10)** with a distribution sparkline |
| `{shuffle: a \| b \| c}` | a deck you draw from without replacement |

That's the whole idea: **type…
