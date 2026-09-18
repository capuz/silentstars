---
repo: "ioBroker/ioBroker.repositories"
name: "ioBroker.repositories"
description: "Repositories for ioBroker project"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.repositories"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [48, 43]
topics: ["iobroker", "repository"]
stars: 160
forks: 398
openIssues: 34
closedIssues: 144
watchers: 11
contributors: 298
recentReleases: 0
createdAt: "2017-03-08T20:29:58Z"
lastCommitAt: "2026-09-18T08:27:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 49
maintainers: ["mcm1957", "simatec", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc9e1df3ef6a0c0300975a40fd1a0bf822848c62260be3682a22ee2fc2035f50/ioBroker/ioBroker.repositories"
---

# ioBroker.repositories

This is a GitHub project for storage of the latest and stable repositories.

 

## Update of the version in stable
1. Be sure that the version is tested in forum by users, or you fix the critical bug with that.
2. Delete the `versionTime`, if exists

## Add a new adapter to the latest repository
1. Fork this repo and clone your fork
2. Run `npm i`
3. Run `npm run addToLatest -- --name <adapter-name> --type <adapter-type>`  
    (replace `<adapter-name>` with your adapter's name (without 'iobroker.' prefix) and `<adapter-type>` with the adapter type)
4. Push a commit with the changes to `sources-dist.json`
5. Create a PR

## Add a new adapter to the latest repository (web frontend)
1. Go to [iobroker.dev](https://www.iobroker.dev/)
2. Log in with GitHub
3. Open the new adapter
4. Click on manage
5. Click on the action "ADD TO LATEST"

## Requirements for an adapter to get added to the latest repository
*Already required for the latest repository*

1. Your GitHub repository must have the name - `ioBroker.<adaptername>`. **B** is capital in "ioBroker", but in the `package.json` the *name* must be low case, because npm does not allow upper case letters. Your…
