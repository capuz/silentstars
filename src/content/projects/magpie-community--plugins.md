---
repo: "magpie-community/plugins"
name: "plugins"
description: "Community-maintained OpenCode provider plugins for coding-plan subscriptions (work in OpenCode and magpie)"
readmeQualityOk: true
url: "https://github.com/magpie-community/plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 254
forks: 390
openIssues: 251
closedIssues: 220
watchers: 0
contributors: 196
recentReleases: 0
createdAt: "2026-09-30T08:56:35Z"
lastCommitAt: "2026-11-14T10:37:07Z"
status: "newborn"
tags: ["fork_magnet"]
healthScore: 86
undervaluedScore: 31
maintainers: ["yetone", "tungloong", "yetihan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e462f60025adb8784f0e687c31892e74bb717604bf0b8b0ff675f71572a92e8/magpie-community/plugins"
---

# magpie-community plugins

[OpenCode](https://opencode.ai) provider plugins for coding-plan
subscriptions and decision APIs, and [gateway middleware](#gateway-middleware),
[gateway hooks](#gateway-hooks), [routing strategies](#routing-strategies), [tools for every
agent](#tools-for-every-agent), [pages](#pages) and [agents](#agents) for
magpie, maintained by the community. To make one, see
[Write your own](#write-your-own). Each provider package signs in to its
vendor service and makes its requests. The packages work in OpenCode and in
[magpie](https://usemagpie.ai), which runs OpenCode's provider plugins.

| Package | Signs in to | Provider id |
|---|---|---|
| [agnes](https://github.com/magpie-community/plugins/blob/HEAD/packages/agnes) | Agnes AI international (agnes-ai.com), with Chrome browser sign-in, live text models, plan usage and USD balance | `agnes` |
| [agnes-code](https://github.com/magpie-community/plugins/blob/HEAD/packages/agnes-code) | Agnes AI's Agnes Code desktop, with the desktop's saved session (Windows) or a pasted access token: live models, daily credit check-in and points balance (unofficial) | `agnes-code` |
|…
