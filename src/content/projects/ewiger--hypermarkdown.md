---
repo: "ewiger/hypermarkdown"
name: "hypermarkdown"
description: "HyperMarkDown helps building your own local wiki knowledge base"
readmeQualityOk: true
url: "https://github.com/ewiger/hypermarkdown"
homepage: "https://hypermarkdown.org/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [44, 38]
topics: ["ai-memory", "hypermarkdown", "knwoledege", "knwoledge-graphs", "markdown", "markdown-language", "vscode-extension"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-07-30T23:46:26Z"
lastCommitAt: "2026-11-22T01:58:29Z"
lastReleaseAt: "2026-10-19T12:14:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 48
maintainers: ["ewiger"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e99a6e12b978bc5b5bc2c3d60e6090d2e53cf727cb6c322ea58819ba247138e/ewiger/hypermarkdown"
---

# HyperMarkDown

**Build your own local wiki knowledge base**

📖 **[hypermarkdown.org](https://hypermarkdown.org/) — the documentation.**
What the format is, why it exists, and every construct in it. Start there.

HyperMarkDown (`.hmd`) is ordinary markdown plus wikilinks, and the cards they
connect form a knowledge graph. A card is one `.hmd` file:

- **A link names a card.** You write `[[name]]` in square brackets, and it is
  resolved to the card's file and linked for you.
- **A link can carry its own text.** In `[[foo|bar]]` the pipe separates the
  two: `foo` is the address of the card, `bar` is what the reader sees.
- **A link can point inside a card.** `[[tokens#Rotation]]` is a heading of
  `tokens`, and `[[tokens#^definition]]` is one marked block of it.
- **A card can be built out of other cards.** Put `!` in front of `[[foo]]` as in `![[foo]]` and get the target
  embedded (transclusion) rather than linked: its content appears in place, so you say a
  thing once rather than twice.
- **A linter checks the whole graph**, every link and every embed in it.
