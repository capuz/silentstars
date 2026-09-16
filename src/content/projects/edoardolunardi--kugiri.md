---
repo: "edoardolunardi/kugiri"
name: "kugiri"
description: "Splits text into lines, words and characters exactly where the browser already broke it."
readmeQualityOk: true
url: "https://github.com/edoardolunardi/kugiri"
homepage: "https://edoardolunardi.github.io/kugiri/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 239
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-09-03T17:06:29Z"
lastCommitAt: "2026-09-16T08:46:51Z"
lastReleaseAt: "2026-09-06T14:25:18Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 28
maintainers: ["edoardolunardi"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2fc3d524169256001b7c472a7f11cbe7500957f2886aa9a95893ee47a2c34c6/edoardolunardi/kugiri"
---

# kugiri (区切り)

Splits text into lines, words and characters exactly where the browser already broke it.

**Demo:** <https://edoardolunardi.github.io/kugiri/>

kugiri (区切り) is the point where one segment ends and the next begins. That is what this
library finds: the line boxes the browser painted, the words and graphemes inside them, and nothing
else. It cuts the DOM at those points and marks every unit so you can animate it, in CSS or in
script. It never decides where a line should break; the browser did that already.

- **Keeps the paint.** Lines are read off the text with `Range.getClientRects()`, not predicted, so
  `text-wrap: balance`, authored newlines, `<br>`, right-to-left text, scripts without spaces,
  hyphenation, `overflow-wrap`, `text-indent`, floats, multi-column layout, vertical writing and a
  target an ancestor scales all come out as painted. Words and characters are wrapped inside those
  lines under `text-wrap: nowrap`, so their boxes can never move a wrap.
- **Handles whatever is in the text.** Links and marks are cloned per line the way the spec
  defines. Block containers are split inside themselves, so lists keep their numbers. Only text is
  split: an…
