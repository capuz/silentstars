---
repo: "SlashNephy/arm-supplementary"
name: "arm-supplementary"
description: "💊 Supplemental database for kawaiioverflow/arm"
readmeQualityOk: true
url: "https://github.com/SlashNephy/arm-supplementary"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["anilist", "anime", "annict", "myanimelist", "syobocal", "syoboi-calendar"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-10-23T12:15:31Z"
lastCommitAt: "2026-10-31T19:02:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3250272f14c4929bdb83615e92d72734e91eedbb644c815636a548bc986455b9/SlashNephy/arm-supplementary"
---

# arm-supplementary

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

The database is updated once an hour by GitHub Actions.

## Usage

Fetch arm.json from the following URL.

- https\://raw\.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json

In TypeScript, you can use arm-supplementary from the following code.

```typescript
export type ArmEntry = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number

  // extended
  anidb_id?: number
  animeplanet_id?: string
  anisearch_id?: number
  kitsu_id?: number
  livechart_id?: number
  notify_id?: string
}

export const fetchArmEntries = async (): Promise<ArmEntry[]> => {
  const response = await fetch('https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json')
  return await response.json()
}
```

## Statistics

Currently, arm-supplementary has 48642 entries (+11508).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17794…
