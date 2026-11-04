---
repo: "tjakoen/grain"
name: "grain"
description: "GRAIN — an AI-interaction design system where every surface is operable by both human and AI through one shared vocabulary. Monorepo home of @tjakoen/{grain,mill,proof,crumb}."
readmeQualityOk: true
url: "https://github.com/tjakoen/grain"
homepage: "https://tjakoen.github.io/grain/"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [63, 20]
stars: 179
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T14:30:27Z"
lastCommitAt: "2026-11-04T11:28:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 29
maintainers: ["tjakoen"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3df2e4f0b99adef5f8ba37d64d147e3f1eac3b18c51f09630a3878a2ef003cd/tjakoen/grain"
---

# 🌾 GRAIN: the design-system family

This is the monorepo for the GRAIN family: one Bun workspace holding five packages. Four of them are
published layers that build on each other, from the design system up to the tools built on it. The
fifth is a workspace-only MCP server that reads what those layers export. Each layer is its own
package, so an app can adopt just the design system or the whole stack. Nothing here has a build
step, everything runs on Bun straight from TypeScript.

## The packages

| Package | What it is | Docs |
|---|---|---|
| [`@tjakoen/grain`](https://github.com/tjakoen/grain/blob/HEAD/packages/grain) | The AI-interaction design system and its default theme. Every surface is operable by a human or an AI through one shared vocabulary, with the AI's presence shown as a visible signal (grain = AI). | [grain/docs](https://tjakoen.github.io/grain/docs) |
| [`@tjakoen/mill`](https://github.com/tjakoen/grain/blob/HEAD/packages/mill) | Markdown In, Living Layouts. A Markdown to GRAIN-pages CMS: feed it markdown and images, it renders GRAIN pages. | [mill/docs](https://tjakoen.github.io/mill/docs) |
|…
