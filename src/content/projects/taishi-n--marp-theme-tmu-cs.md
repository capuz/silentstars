---
repo: "taishi-n/marp-theme-tmu-cs"
name: "marp-theme-tmu-cs"
description: "TMU-CS Marp theme with citeproc, code annotations, math annotations, and step expansion."
readmeQualityOk: true
url: "https://github.com/taishi-n/marp-theme-tmu-cs"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-20T12:18:11Z"
lastCommitAt: "2026-08-18T04:09:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 11
maintainers: ["taishi-n"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed1aa63676b66daff79a4b93a411742043a8fff9d5c9837108318a525383b6f6/taishi-n/marp-theme-tmu-cs"
---

# marp-theme-tmu-cs

Node.js 20.19.0 or newer is required.

`marp-theme-tmu-cs` is a Marp theme package for the Department of Computer Science, Tokyo Metropolitan University. It bundles:

- the `tmu-cs` theme CSS
- a custom Marp engine
- automatic section pages and TOC slide expansion
- JS-based bibliography processing
- Shiki-based code highlighting plus step-based emphasis for supported line-comment languages
- Kroki-backed diagram rendering from fenced code blocks
- display-math annotations
- external code inclusion from Markdown

Bibliography processing is fully implemented in JavaScript with Citation.js and citeproc.

Demo slide deck:

- <https://taishi.org/marp-theme-tmu-cs/sample-slide.html>

## Getting Started

Build the bundled sample slides with the theme, custom engine, citations, code highlighting, math annotations, and external code inclusion enabled:

```bash
git clone https://github.com/tmu-cs/marp-theme-tmu-cs.git
cd marp-theme-tmu-cs
npm install
npm run build:html
```

This writes the sample deck to `examples/dist/slides.html`.

Other useful commands during local verification:

```bash
npm test
npm run check
npm run build:html:standalone
npm run build:pdf
npm run…
