---
repo: "ptrdom/scalajs-esbuild"
name: "scalajs-esbuild"
description: "Bundles Scala.js projects and their npm dependencies with esbuild"
readmeQualityOk: true
url: "https://github.com/ptrdom/scalajs-esbuild"
language: "Scala"
languages: ["Scala"]
languagePcts: [95]
topics: ["npm", "esbuild", "scala-js"]
stars: 16
forks: 3
openIssues: 5
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-02-07T18:25:51Z"
lastCommitAt: "2026-11-19T11:00:06Z"
lastReleaseAt: "2026-06-05T20:31:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 65
maintainers: ["renovate[bot]", "ptrdom-scala-steward[bot]", "ptrdom"]
openGraphImageUrl: "https://opengraph.githubassets.com/17c0ca7a2a1daefe774dda71d3e25d65dc9f363cbda242dc117528e6e7f26df8/ptrdom/scalajs-esbuild"
discussionCount: 1
---

# scalajs-esbuild

scalajs-esbuild is a module bundler for Scala.js projects that use npm packages: it bundles the .js files emitted by the
Scala.js compiler with their npm dependencies into a single .js file using [esbuild](https://esbuild.github.io/).

## Comparison to scalajs-vite

Compared to [scalajs-vite](https://github.com/ptrdom/scalajs-vite), the historical difference was build performance. Before Vite 8, [Vite](https://vitejs.dev/) used two different bundlers internally: esbuild for its dev server and [Rollup](https://rollupjs.org/) for production builds. This meant that any workflow that needed a bundle went through Rollup — which is significantly slower than esbuild. This is a problem for certain workflows, like running tests implemented with Scala testing frameworks, which are iterative and thus more sensitive to build performance. scalajs-esbuild uses esbuild for all builds, giving consistent, fast build times across every stage of the Scala.js development workflow.
