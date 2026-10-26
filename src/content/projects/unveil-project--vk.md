---
repo: "unveil-project/vk"
name: "vk"
description: "Fetch GitHub account activity and analyze it for automation patterns"
readmeQualityOk: true
url: "https://github.com/unveil-project/vk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T20:01:21Z"
lastCommitAt: "2026-10-26T20:59:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 26
maintainers: ["MatteoGabriele"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b268f40accbd86459af5ac5a4974ba6af40fff2c25ae2267fcfb90bb121c361/unveil-project/vk"
---

# vk

Fetch GitHub account activity and analyze it for automation patterns

This is the batteries-included wrapper around [`@unveil/identity`](https://github.com/unveil-project/identity). Give it a username and it does the GitHub API calls for you, then hands the result to the scoring engine.

It talks to the GitHub REST API with native `fetch` and has no dependencies beyond `@unveil/identity`, so it runs the same in Node, Deno, Bun, the browser and edge runtimes.

Both packages are the logic behind [AgentScan](https://agentscan.netlify.app), a tool for analyzing GitHub account behavior to detect potential AI agents and automated activity. The results are indicators, not verdicts.

### Install

```bash
npm install @unveil/vk
```

### Usage

```js
import { analyze } from "@unveil/vk";

const { analysis, eventsCount } = await analyze("github_account_username", {
  token: process.env.GITHUB_TOKEN,
});

console.log(analysis.classification); // "organic" | "mixed" | "automation" | "insufficient-data"
console.log(analysis.score);          // 100 = human, 0 = automation
console.log(analysis.confidence);     // 0-1: how much evidence there was
console.log(eventsCount);             // how…
