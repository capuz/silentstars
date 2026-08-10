---
repo: "janzarsky/scout-planner"
name: "scout-planner"
description: "App for planning scout events"
readmeQualityOk: true
url: "https://github.com/janzarsky/scout-planner"
homepage: "https://harmac.cz"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["planner", "planner-app", "planner-board", "planning"]
stars: 6
forks: 2
openIssues: 31
closedIssues: 66
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2020-03-27T09:29:04Z"
lastCommitAt: "2026-08-10T05:05:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 88
undervaluedScore: 78
maintainers: ["dependabot[bot]", "janzarsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee70331c227b46924df45449bd2b2266e7d409387b7ffd07ddde62201018f45/janzarsky/scout-planner"
---

# Scout planner

Scout planner is a single-page app that helps with planning scout events.

You can try it at https://harmac.cz

## Running locally for development
1) Setup Firestore emulator (see [instructions](https://cloud.google.com/firestore/docs/emulator)) and start it: `gcloud emulators firestore start --host-port 127.0.0.1:8080`.
2) Save the Firestore emulator host to `client/.env.local` file - create `client/.env.local` file with the following content:
```
FIRESTORE_EMULATOR_HOST="127.0.0.1:8080"
```
4) Install dependencies using `npm ci` command.
5) Run the app using `npm start` command.
