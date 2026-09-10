---
repo: "smarticoai/public-api"
name: "public-api"
description: "API to build custom gamification interface based on Smartico.ai platform"
readmeQualityOk: true
url: "https://github.com/smarticoai/public-api"
homepage: "https://smartico.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["gamification", "loyalty", "smartico"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2023-01-18T11:44:18Z"
lastCommitAt: "2026-09-10T08:19:38Z"
lastReleaseAt: "2023-08-02T20:47:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 68
maintainers: ["OlehYah", "ihor-izviekov", "PlamenStamenov"]
openGraphImageUrl: "https://opengraph.githubassets.com/eae5a1ce316b2502c490ce56313470542932ff6dbc8de100a4c9d94e1d8e3da1/smarticoai/public-api"
---

# Smartico Public API
API allows you to build custom Gamification UI using smartico.ai as a backend system.

```
Please contact your Smartico account manager to get the API keys
and for terms of API usage
```

## Front-end usage

To use the API you need the smartico.js library installed and initialized on your site according to this guide https://help.smartico.ai/welcome/technical-guides/front-end-integration

As soon as the **_smartico** object is available in the global context of the browser window and the user is identified, you can call API methods to get the data or act on behalf of the logged-in user.

```javascript

_smartico.api.getLevels().then( levels => {
    console.log('There are ' + levels.length + ' levels available');
});

```

Some methods can be called with onUpdate callback, which is executed when there are changes in the underlying data.
Example:

```javascript

var miniGamesUpdates = (games) => {
    console.log('There are ' + games.length + ' games available now');
}

_smartico.api.getMiniGames( { onUpdate: miniGamesUpdates} ).then( games => {
    console.log('There are ' + games.length + ' games available');
});

```

## The `_smartico` object

Beyond…
