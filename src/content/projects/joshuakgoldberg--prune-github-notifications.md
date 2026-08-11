---
repo: "JoshuaKGoldberg/prune-github-notifications"
name: "prune-github-notifications"
description: "Prunes GitHub notifications you don't care about, such as automated dependency bumps. 🧹"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/prune-github-notifications"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 8
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-03-02T16:46:08Z"
lastCommitAt: "2026-08-11T04:50:07Z"
lastReleaseAt: "2026-07-29T15:45:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 71
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4481ad095de167ed6035bf4022cee15836ee36382d66474ede626a692f6ae117/JoshuaKGoldberg/prune-github-notifications"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

<h1 align="center">prune-github-notifications</h1>

	Prunes GitHub notifications you don't care about, such as automated dependency bumps.
	🧹
</p>

	
	

	
</p>

## Usage

### CLI

`prune-github-notifications` can be run on the CLI with an auth token for _notifications_ access:

```shell
npx prune-github-notifications
```

#### CLI Options

| Option        | Type       | Default                                                                             | Description                                                                                             |
| ------------- | ---------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `--auth`      | `string`   | `process.env.GH_TOKEN` or executing `gh auth token`                                 | Auth token for GitHub from [`octokit-from-auth`](https://github.com/JoshuaKGoldberg/octokit-from-auth). |
| `--bandwidth` | `number`   | `6`                                                                                 | Maximum parallel requests to start at once.…
