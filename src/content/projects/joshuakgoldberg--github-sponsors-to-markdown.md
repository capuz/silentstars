---
repo: "JoshuaKGoldberg/github-sponsors-to-markdown"
name: "github-sponsors-to-markdown"
description: "Creates a Markdown table summarizing your GitHub sponsors. 💰"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/github-sponsors-to-markdown"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2023-03-29T15:07:42Z"
lastCommitAt: "2026-11-24T01:59:15Z"
lastReleaseAt: "2026-11-24T01:59:25Z"
status: "thriving"
tags: ["funded"]
healthScore: 85
undervaluedScore: 62
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddd5ee62172b0204c528216c774d40b08b353619ecea99657377153eedc4234d/JoshuaKGoldberg/github-sponsors-to-markdown"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

Creates a Markdown table summarizing your GitHub sponsors.
	💰

	
	

	

## Usage

```shell
npm i github-sponsors-to-markdown
```

```ts
import { githubSponsorsToMarkdown } from "github-sponsors-to-markdown";

console.log(await githubSponsorsToMarkdown());
```

Note that you'll need a GitHub auth token.
If an `auth` option isn't provided, one will be retrieved using [`get-github-auth-token`](https://github.com/JoshuaKGoldberg/get-github-auth-token).
For example:

```shell
gh auth refresh --scopes read:user # Only necessary your first time
node build.js
```

> See this in action on [github.com/JoshuaKGoldberg](https://github.com/JoshuaKGoldberg#thanks-to-my-sponsors)! ⚡️

### Options

`githubSponsorsToMarkdown` can be optionally be provided an options object.

```ts
await githubSponsorsToMarkdown({/* ... */});
```
