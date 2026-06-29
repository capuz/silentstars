---
repo: "gatling/gatling-js-demo"
name: "gatling-js-demo"
description: "Showcase of the Gatling JavaScript and TypeScript DSL."
url: "https://github.com/gatling/gatling-js-demo"
homepage: "https://gatling.io"
language: "JavaScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 50]
topics: ["gatling", "javascript", "js", "npm", "ts", "typescript"]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2024-05-07T07:23:25Z"
lastCommitAt: "2026-06-29T07:22:56Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 56
maintainers: ["dependabot[bot]", "guilgaly", "slandelle"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c1aaebc98d60cd39633452938ad75995aae428963c8c1c18de6b5ce7ac295c/gatling/gatling-js-demo"
---

# Gatling JS - JavaScript and TypeScript demo projects

A simple showcase of JavaScript and TypeScript NPM projects using Gatling JS. Please also check out the [introduction to JavaScript scripting](https://docs.gatling.io/tutorials/scripting-intro-js/) in the Gatling documentation.

## Prerequisites

You need [Node.js](https://nodejs.org/en/download) v20 or later (LTS versions only) and npm v10 or later (included with Node.js).

## Use demo project

Run the typeScript sample:

```shell
cd typescript
npm install
npx gatling run --typescript --simulation basicSimulation # automatically download Gatling runtime, build the project, and run the basicSimulation simulation
```

Or the JavaScript sample:

```shell
cd javascript
npm install
npx gatling run --simulation basicSimulation # automatically download Gatling runtime, build the project, and run the basicSimulation simulation
```

You can also launch the [Gatling Recorder](https://docs.gatling.io/tutorials/recorder/) and use it to capture browser-based actions and help create a realistic user scenario:

```shell
npx gatling recorder
```

The `gatling` command-line tool has a built-in help function:

```shell
npx gatling --help #…
