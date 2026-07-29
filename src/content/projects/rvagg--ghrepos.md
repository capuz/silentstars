---
repo: "rvagg/ghrepos"
name: "ghrepos"
description: "A node library to interact with the GitHub repos API"
readmeQualityOk: true
url: "https://github.com/rvagg/ghrepos"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 7
createdAt: "2015-04-11T11:24:34Z"
lastCommitAt: "2026-07-29T06:14:27Z"
lastReleaseAt: "2026-07-29T06:14:35Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 91
undervaluedScore: 58
maintainers: ["semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a88f71f6b7deacbe753b4e97bbf2093e715004d75c84983cd74fa553e0351f/rvagg/ghrepos"
---

# ghrepos

**A Node.js library to interact with the GitHub repos API**

## Requirements

- Node.js >= 20

## Example usage

```js
import * as ghrepos from 'ghrepos'

const auth = { token: 'your-github-token' }

// list all repos for a user
const repos = await ghrepos.listUser(auth, 'rvagg')
console.log(repos)

// list all repos for an org
const orgRepos = await ghrepos.listOrg(auth, 'nodejs')
console.log(orgRepos)

// get branch data
const branch = await ghrepos.getBranch(auth, 'nodejs', 'node', 'main')
console.log(branch)

// get commit comments
const comments = await ghrepos.getCommitComments(auth, 'nodejs', 'node', '75318e46b')
console.log(comments)
```

The auth data is compatible with [ghauth](https://github.com/rvagg/ghauth) so you can connect them together:

```js
import ghauth from 'ghauth'
import * as ghrepos from 'ghrepos'

const auth = await ghauth({
  configName: 'repo-lister',
  scopes: ['user']
})

const repos = await ghrepos.listUser(auth, 'rvagg')
console.log('Repos for rvagg:')
repos.forEach((r) => {
  console.log('%s: %s (fork: %s)', r.name, r.description, r.fork)
})
```

## API

All methods return Promises.

### ghrepos.listUser(auth, user, options)

List all…
