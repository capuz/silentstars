---
repo: "hiroppy/mf-dashboard"
name: "mf-dashboard"
description: "Automate Money Forward ME and visualize your assets"
originalDescription: "マネーフォワードMeを自動化、保有資産の可視化を行います"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/hiroppy/mf-dashboard"
homepage: "https://mf-dashboard-demo.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 418
forks: 52
openIssues: 3
closedIssues: 10
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-02-02T11:34:14Z"
lastCommitAt: "2026-10-04T10:02:07Z"
lastReleaseAt: "2026-08-09T11:31:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 33
maintainers: ["renovate[bot]", "hiroppy", "sakairuh"]
openGraphImageUrl: "https://opengraph.githubassets.com/788170baba42ba70f690de8026a4943565d19097398945f1eb4739b081495a32/hiroppy/mf-dashboard"
---

Regularly retrieve household, asset, and investment data from Money Forward ME and view it on a web dashboard. Supports notifications of update results, automatic determination of transaction categories, and data inquiries from AI assistants.

[View demo](https://mf-dashboard-demo.vercel.app/) · [Set up production environment](https://github.com/hiroppy/mf-dashboard/blob/HEAD/docs/setup.md)

## Key Features

### Automatically Update Financial Institution Information

Supercronic within the crawler container regularly executes "bulk update" for registered financial institutions and monitors completion. The default execution times are 6:30 and 15:30 daily.

### Notify update results to Slack or Discord

By setting the notification destination, you can post update results and differences from the previous day to Slack or Discord.

### Visualize household and asset information

You can view the dashboard display excluding the budget feature in the [public demo](https://mf-dashboard-demo.vercel.app/).

| Monthly Screen | Dashboard |
| ---------------------------------------------------------------------------- |…
