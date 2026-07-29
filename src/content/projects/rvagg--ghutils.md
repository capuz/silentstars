---
repo: "rvagg/ghutils"
name: "ghutils"
description: "A collection of utility functions for dealing with the GitHub API"
readmeQualityOk: true
url: "https://github.com/rvagg/ghutils"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 20
forks: 8
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2015-05-24T05:15:54Z"
lastCommitAt: "2026-07-29T06:15:20Z"
lastReleaseAt: "2026-07-21T07:58:03Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 87
undervaluedScore: 54
maintainers: ["semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/818e4192aebb7d14838a22f9daceddfcebf856612e9ac964acd348d8790200b7/rvagg/ghutils"
---

# ghutils

**A collection of utility functions for dealing with the GitHub API**

Used by:

* [ghissues](https://github.com/rvagg/ghissues) - a Node.js library to interact with the GitHub Issues API
* [ghpulls](https://github.com/rvagg/ghpulls) - a Node.js library to interact with the GitHub Pull Request API
* [ghrepos](https://github.com/rvagg/ghrepos) - a Node.js library to interact with the GitHub Repos API
* [ghusers](https://github.com/rvagg/ghusers) - a Node.js library to interact with the GitHub Users API
* [ghteams](https://github.com/rvagg/ghteams) - a Node.js library to interact with the GitHub Teams API
* [ghreleases](https://github.com/ralphtheninja/ghreleases) - a Node.js library to interact with the GitHub Releases API

## Requirements

- Node.js >= 20

## Example

```js
import { ghget, lister } from 'ghutils'

const auth = { token: 'your-github-token' }

// Make a single GET request
const { data } = await ghget(auth, 'https://api.github.com/user')
console.log(data)

// List all items from a paginated endpoint
const issues = await lister(auth, 'https://api.github.com/repos/owner/repo/issues')
console.log(issues)
```

## API

All methods return Promises and use native…
