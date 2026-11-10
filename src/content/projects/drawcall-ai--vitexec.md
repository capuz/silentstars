---
repo: "drawcall-ai/vitexec"
name: "vitexec"
description: "Vibe test vite apps through injected code."
readmeQualityOk: true
url: "https://github.com/drawcall-ai/vitexec"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 19
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-04-28T19:41:10Z"
lastCommitAt: "2026-11-10T14:49:04Z"
lastReleaseAt: "2026-11-10T14:50:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 29
maintainers: ["bbohlender"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc14eba9b4d8a83f65bcbb11fa45956fa2aae89ea162ccb3a663144cafcaed9b/drawcall-ai/vitexec"
---

Give AI agents a fast way to test Vite apps from the inside: inspect runtime state,
drive interactions, and capture screenshots, recordings, or performance data.

From your Vite app, install vitexec and run a check:

```sh
pnpm add -D vitexec
pnpm exec vitexec 'console.log(document.title)'
```

Install the agent skill:

```sh
npx skills add drawcall-ai/vitexec
```

See the [skill](https://github.com/drawcall-ai/vitexec/blob/HEAD/packages/vitexec/skills/vitexec/SKILL.md) for detailed usage.
