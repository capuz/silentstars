---
repo: "ioBroker/ioBroker.repositories"
name: "ioBroker.repositories"
description: "Repositories for ioBroker project"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.repositories"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [46, 46]
topics: ["iobroker", "repository"]
stars: 161
forks: 413
openIssues: 34
closedIssues: 146
watchers: 11
contributors: 312
recentReleases: 0
createdAt: "2017-03-08T20:29:58Z"
lastCommitAt: "2026-10-29T10:20:25Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 49
maintainers: ["GermanBluefox", "mcm1957", "sadam6752-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cb0baedecda8bc7c74bc7181a804b2471836605004d5997cb1a2c63560ee5ad/ioBroker/ioBroker.repositories"
---

# ioBroker.repositories

This is a GitHub project for storage of the latest and stable repositories.

 

## Update of the version in STABLE repository
1. Be sure that the version is tested in forum by users, or you fix the critical bug with that.
2. Delete the `versionTime`, if exists

## Add a new adapter to the BETA (latest) repository
1. Fork this repo and clone your fork
2. Run `npm i`
3. Run `npm run addToLatest -- --name <adapter-name> --type <adapter-type>`  
    (replace `<adapter-name>` with your adapter's name (without 'iobroker.' prefix) and `<adapter-type>` with the adapter type)
4. Push a commit with the changes to `sources-dist.json`
5. Create a PR

## Add a new adapter to the BETA (latest) repository (web frontend)
1. Go to [iobroker.dev](https://www.iobroker.dev/)
2. Log in with GitHub
3. Open the new adapter
4. Click on manage
5. Click on the action "ADD TO LATEST"

## Requirements for an adapter to get added to the BETA (latest) repository
*Already required for the latest repository*

1. Your GitHub repository must have the name - `ioBroker.<adaptername>`. **B** is capital in "ioBroker", but in the `package.json` the *name* must be low case, because npm does not…
