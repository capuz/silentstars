---
repo: "vekexasia/pi-extensible-workflows"
name: "pi-extensible-workflows"
description: "Deterministic multi-agent workflow orchestration and codemode scripts for Pi"
readmeQualityOk: true
url: "https://github.com/vekexasia/pi-extensible-workflows"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["herdr-plugin", "pi", "workflow", "workflows", "codemode"]
stars: 246
forks: 27
openIssues: 5
closedIssues: 258
watchers: 1
contributors: 7
recentReleases: 9
createdAt: "2026-07-12T20:45:52Z"
lastCommitAt: "2026-10-14T08:58:27Z"
lastReleaseAt: "2026-08-12T11:22:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["vekexasia", "jgautheron", "marcoscale98"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d703b43363278dd5940e6b8c93d4dacb243b92447f7a408a2cf47a796c3611/vekexasia/pi-extensible-workflows"
---

# pi-extensible-workflows

Deterministic, resumable multi-agent workflow orchestration for Pi.

[Documentation](https://vekexasia.github.io/pi-extensible-workflows/) | [Developer guide](https://vekexasia.github.io/pi-extensible-workflows/developers.html) | [Subagents](https://vekexasia.github.io/pi-extensible-workflows/subagents.html) | [Herdr](https://vekexasia.github.io/pi-extensible-workflows/herdr.html) | [Roles](https://vekexasia.github.io/pi-extensible-workflows/roles.html) | [Extension authoring](https://vekexasia.github.io/pi-extensible-workflows/extensions.html)

Requires Node.js 22.19 or newer. This is trusted Pi host code with the same filesystem and process access as Pi. Install only code you trust.

## See it

## Install

```sh
pi install npm:pi-extensible-workflows
```

For source installation and local development, see the [installation guide](https://vekexasia.github.io/pi-extensible-workflows/developers.html#installation).

## Quick start

Ask Pi to run a workflow. The main agent writes the script for the current task.

```js
const reports = await parallel("review", {
  api: () => agent("Review the API."),
  tests: () => agent("Review the tests."),
});

return…
