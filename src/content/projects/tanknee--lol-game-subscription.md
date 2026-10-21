---
repo: "TankNee/LOL_Game_Subscription"
name: "LOL_Game_Subscription"
description: "lpl,ldl professional match calendar subscription!"
originalDescription: "lpl,ldl professional match calendar subscription!"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TankNee/LOL_Game_Subscription"
homepage: "https://tanknee.github.io/LOL_Game_Subscription/#/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 86
forks: 7
openIssues: 3
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-03-19T11:56:29Z"
lastCommitAt: "2026-10-21T20:00:46Z"
lastReleaseAt: "2021-03-20T01:17:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 47
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/888ce7c08f750e88c407533eb158c0af98cfb824f870b6fa7e1dc50abdbfdd1c/TankNee/LOL_Game_Subscription"
---

Using the automation features provided by GitHub, LPL and LDL match data is scraped automatically every day, and webcal links are served through a CDN, which provides an automated calendar.
Some calendar apps may not support importing by link. You can use third-party software to subscribe to the calendar link instead.

The following data is currently available:

- LPL
  - All schedules available for LPL
  - Schedules for each team
- LDL
  - All schedules available for LDL
  - Schedules for each team

How to get the subscription calendar link:

You can now use the website to quickly set up a match subscription: https://tanknee.github.io/LOL_Game_Subscription

### Web Page

### Mobile

Full schedule link:

```
https://cdn.jsdelivr.net/gh/TankNee/LOL_Game_Subscription/${gameType}/${gameType}.ics
```

- Valid values for gameType are 2021_ldl and 2021_lpl.

Example: https://cdn.jsdelivr.net/gh/TankNee/LOL_Game_Subscription/2021_lpl/2021_lpl.ics

Links for each team:

```
https://cdn.jsdelivr.net/gh/TankNee/LOL_Game_Subscription/${gameType}/team/${teamName}.ics
```

- Valid values for gameType include 2021_ldl, 2021_lpl, 2021_msi, and so on.
- teamName is the team name, such as RNG, WE,…
