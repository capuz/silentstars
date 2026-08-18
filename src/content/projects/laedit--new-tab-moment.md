---
repo: "laedit/new-tab-moment"
name: "new-tab-moment"
description: "New tab Moment - Firefox addon"
readmeQualityOk: true
url: "https://github.com/laedit/new-tab-moment"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [64, 25]
topics: ["firefox-webextension", "firefox-extension", "typescript", "weather"]
stars: 10
forks: 5
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2017-10-28T08:30:33Z"
lastCommitAt: "2026-08-18T04:09:33Z"
lastReleaseAt: "2026-07-05T07:16:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 68
maintainers: ["dependabot[bot]", "laedit"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d4caca22c7dcc3fb9ce8163229982e46eed1fde9e484209b6a6448af430306/laedit/new-tab-moment"
---

# New tab Moment

Minimalist clock and weather on the new tab page, based on [Moment](https://github.com/alfredxing/moment) from [Alfred Xing](https://alfredxing.com/).

## Screenshots

### Light theme

### Light theme with icon

### Dark theme

### Dark theme with icon

### Custom CSS

### Options page

### Weather info

### Additional clocks

## Contribute

All contributions are welcome :)

Require `yarn`.

### Install

Clone the repo and run `yarn install`.

## Build

run `yarn build`.

## Test

run `yarn test`.

By default it's Firefox Developer Edition which is used, you can change that in the `web-ext:run` scripts in `package.json`.

If necessary you can create a free account on [OpenWeatherMap](https://openweathermap.org/) and generate two api keys: one for current weather and the second for the geocoding and add them in the `secrets.ts`.

## Deploy

Make sure that [CHANGELOG.md](https://github.com/laedit/new-tab-moment/blob/HEAD/CHANGELOG.md) and the version number in the manifest are up to date.  
Tag the branch with the same version.  
That will create a github release and publish the addon to firefox.  
The edge draft is created but [publication must be done…
