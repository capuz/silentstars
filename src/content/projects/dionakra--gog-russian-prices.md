---
repo: "Dionakra/gog-russian-prices"
name: "gog-russian-prices"
description: "Web app where you can see the differences between Spanish and Russian prices at GOG.com"
readmeQualityOk: true
url: "https://github.com/Dionakra/gog-russian-prices"
homepage: "https://gogputin.web.app"
language: "Svelte"
languages: ["Svelte", "JavaScript"]
languagePcts: [58, 39]
topics: ["gog", "svelte", "tailwindcss"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2017-08-10T08:24:19Z"
lastCommitAt: "2026-07-04T22:21:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 73
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/a52009539f6bc0b1d09765115655ed561ba69b17a3c1ffdc0927f77d23def28a/Dionakra/gog-russian-prices"
---

# GOG Russian Prices 
A WebApp where you can see the price of a given game on GOG's platform in the Spanish and Russian region, so you can compare the difference in the price and choose where to buy the game.

## How does it work?
Using GitHub actions and a cron job, it obtains the prices for all games from Spanish and Russian regions and saves them in the repo. Using that information, a simple web consumes this data to show the best deals when it comes to regional pricing between those countries

## Development workflow
``` bash
# Installation
git clone https://github.com/Dionakra/gog-russian-prices.git
cd gog-russian-prices
npm install
npm i -g firebase-cli

# Development with Hot Reloading
npm run dev

# Deploying
npm run build
firebase deploy
```

## Built with
* [Svelte](https://svelte.dev/) - Frontend Framework
* [Tailwind](https://tailwindcss.com/) - CSS Framework
