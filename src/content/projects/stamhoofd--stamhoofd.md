---
repo: "stamhoofd/stamhoofd"
name: "stamhoofd"
description: "User friendly software for associations and non-profits"
readmeQualityOk: true
url: "https://github.com/stamhoofd/stamhoofd"
homepage: "https://www.stamhoofd.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [74, 24]
topics: ["nonprofit-organizations", "monorepo"]
stars: 77
forks: 19
openIssues: 1
closedIssues: 55
watchers: 3
contributors: 14
recentReleases: 10
createdAt: "2019-12-12T20:00:08Z"
lastCommitAt: "2026-09-09T08:19:56Z"
lastReleaseAt: "2026-06-30T14:42:23Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["SimonBackx", "bdeletter", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/64fa0b1c7aeee43c5f40c5cb34a434c45ee2c1c99439162d8d3fd3b69f5a5d20/stamhoofd/stamhoofd"
---

Supporting clubs and non-profits with great software
</p>

# Folder structure

We use monorepo to make it easier for new contributors to make changes without having to work in different repositories and creating multiple pull requests.

## Frontend

For everything frontend related, you can take a look at the readme in the frontend folder. We have two SPA, written with Vue + TypeScript. The frontend is build on a custom (open-source) framework 'vue-app-navigation' that makes handing responsive and app-like views/navigation/animations easy. You'll see that it is easy to learn and understand.

## Backend

Documentation and code is located in the backend folder.

## Shared

We have some packages that are shared between the frontend and backend. The most important one is `structures`. This package contains all the data structures (communication in the API, stored in the backend, in an encrytped blob or in localstorage) and how they should be encoded and decoded. The data structures are versioned: when an old client communicates with an updated backend, everything will work as usual. If you need to add some new data, you'll probably need to make some changes in this package. Read the…
