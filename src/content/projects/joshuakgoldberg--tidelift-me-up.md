---
repo: "JoshuaKGoldberg/tidelift-me-up"
name: "tidelift-me-up"
description: "CLI that checks if your npm packages are eligible for Tidelift funding. 💸"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/tidelift-me-up"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 8
forks: 2
openIssues: 2
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-06-13T16:29:54Z"
lastCommitAt: "2026-11-24T02:01:23Z"
lastReleaseAt: "2023-06-27T17:45:47Z"
status: "thriving"
tags: ["funded"]
healthScore: 84
undervaluedScore: 55
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/148bf3d7d8edb806bcdfdd5c3edc3cf3f605bc12dd194de7da12f0e1455cb15b/JoshuaKGoldberg/tidelift-me-up"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

CLI that checks if your npm packages are eligible for Tidelift funding.
	💸

	
	

	

## What?

[Tidelift](https://tidelift.com) is a service for companies to sponsor their open source dependencies.
Through Tidelift, companies contribute to a fund that is distributed monthly to maintainers of eligible open-source packages in a process called "lifting".

Unfortunately, there's no easy way on the Tidelift website to search for which packages under a particular open source maintainer are eligible for lifting or currently being lifted.
This CLI does that!

> See it in action online at [tidelift-me-up-site.vercel.app](https://tidelift-me-up-site.vercel.app)!

## Usage

Run this with `npx`:

```shell
npx tidelift-me-up
```

...and your list of packages will log to the console:

```plaintext
👉 abc-def is not yet lifted, but is estimated for $25.0/mo.
✅ ghi-jkl is already lifted for $50.0/mo.
```

> Tip: add `| grep yet` to filter to only packages that are not yet lifted.
>
> ```shell
> npx tidelift-me-up | grep yet
> ```
