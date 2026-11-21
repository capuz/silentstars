---
repo: "Carlos-Mero/may"
name: "may"
description: "A simple and elegant document template for multiple daily tasks."
readmeQualityOk: true
url: "https://github.com/Carlos-Mero/may"
language: "Typst"
languages: ["Typst"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-11T06:02:26Z"
lastCommitAt: "2026-11-21T11:31:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 31
maintainers: ["Carlos-Mero"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6b162048474597e5c6bceac35777efdc89bcf58820083b9b44952f2aab24b2e/Carlos-Mero/may"
---

# May

A simple and elegant document template for multiple daily tasks.

## Usage

This is my personal typst template designedfor homework, report or some other documents. You can obtain the same styles of this template by simply adding the follows two lines at the top of your document:

```typst
#import "@preview/may:0.1.4": *
#show: may-sans
// ...
// Your typst documents here
```

Inline raw code like `foo(bar)` now uses an inline decoration, while fenced raw blocks keep the full-width codeblock styling.

Alternatively you can also initialize a project with _may_ by running the following command:

```sh
typst init @preview/may
```

This will create a new folder named `may` in the current path, along with a sample file `main.typ` as the start point.

## Touying Slides Template

We also provide a touying theme that is great for presentations! You can create slides in may theme as simple as adding these lines at the top:
