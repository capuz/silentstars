---
repo: "WFCD/warframe-patchlogs"
name: "warframe-patchlogs"
description: "📃 All warframe patchlogs parsed to more usable JSON. Also lets you find all patchlogs for a specific item."
url: "https://github.com/WFCD/warframe-patchlogs"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["warframe-patchlogs", "warframe"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 10
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2018-05-26T16:51:05Z"
lastCommitAt: "2026-06-27T00:37:08Z"
lastReleaseAt: "2018-06-03T18:23:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 73
maintainers: ["wfcd-bot-boi", "dependabot[bot]", "TobiTenno"]
openGraphImageUrl: "https://opengraph.githubassets.com/c09a747ae25c6f8c1b9a91e5df6e10addb3678ed621ed623a10a6474a44734f1/WFCD/warframe-patchlogs"
---

## warframe-patchlogs

<br>

All warframe patchlogs parsed to more usable JSON. Also lets you find all
patchlogs for a specific item. This package has primarily been built for
[warframe-items](https://github.com/WFCD/warframe-items), so opinionated
decisions are based on the needs of that repository. If you're looking for
patchlogs on *all* items, you can find pre-compiled files there too.

<br>

### Installation
```
npm install warframe-patchlogs
```

<br>

### Usage
```js
const patchlogs = require('warframe-patchlogs')

// Have your terminal flooded with patch notes.
for (let post of patchlogs.posts) {
  console.log(post)
}

// Get all logs for Ash Prime (returns an array of logs)
patchlogs.getItemChanges({ name: 'Ash Prime', type: 'Warframe' })
```

<br>

### Log Format
Log objects inside `patchlogs.posts` look like this:
```js
{
  name: 'Beasts of the Sanctuary: Hotfix 22.20.6',
  url: 'https://forums.warframe.com/topic/960140-beasts-of-the-sanctuary-hotfix-22206/',
  date: '2018-05-24T22:00:50Z',
  imgUrl: 'https://i.imgur.com/6ymAONO.jpg',
  description: 'The Orokin Decoration costs/refunds mentioned in Hotfix 22.20.3 are close to being complete. The plan is to cut the…
