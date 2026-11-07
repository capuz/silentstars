---
repo: "SmileLee-lyx/ne-rewritten"
name: "ne-rewritten"
description: "Rewrite of notation explorer in TypeScript, adding new features and optimizing the UI. This project uses AI-assisted programming."
originalDescription: "使用 typescript 重写 notation explorer, 以新增功能并优化 UI. 项目使用了 AI 编程."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SmileLee-lyx/ne-rewritten"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 6
forks: 6
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T21:35:38Z"
lastCommitAt: "2026-11-07T16:10:13Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 61
maintainers: ["hzyhhzy", "SmileLee-lyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/abbee8747e1d08885223fd0d5c3ad37bfbeed60172372befb7838646475c3642/SmileLee-lyx/ne-rewritten"
---

# Notation Explorer Rewritten

An expander refactored in TypeScript based on [notation-explorer](https://github.com/hypcos/notation-explorer).

While keeping the basic form of the original project's expansion tree, it adds several features that make analysis easier, such as an analysis input box (with pure-keyboard analysis shortcuts), graph drawing (mountain range diagrams, DEN diagrams, etc.), and multiple equivalent representations.

Building on the original project, it adds some notations that already have definitions in the community but previously had no expander, as well as some new notations.

This project uses AI-assisted programming.

## Online Use

<https://smilelee-lyx.github.io/ne-rewritten/>

## Local Development

Requires Node 24 (consistent with CI).

```bash
npm install
npm run dev        # local development
npm run build      # build to dist/
npm run preview    # preview the build output
```

Other scripts:

- `npm run build:compat`: build a compatibility version for older browsers into `dist-compat/`.
- `npm run build:singlefile`: build as a single file, `dist/NE-rewritten.html`.
- `npm run typecheck`: type checking.

## Custom Notations

The project supports…
