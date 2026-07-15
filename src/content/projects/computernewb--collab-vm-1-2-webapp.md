---
repo: "computernewb/collab-vm-1.2-webapp"
name: "collab-vm-1.2-webapp"
description: "The webapp for the CollabVM Server"
readmeQualityOk: true
url: "https://github.com/computernewb/collab-vm-1.2-webapp"
homepage: "https://computernewb.com/collab-vm/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 14
forks: 59
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 28
recentReleases: 0
createdAt: "2023-01-26T01:00:18Z"
lastCommitAt: "2026-07-15T05:53:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 83
maintainers: ["modeco80", "elijahr2411", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d68f9062027628453cfdce68716a8c8816524b3c70c720616a6c14a5767b8ac6/computernewb/collab-vm-1.2-webapp"
---

# CollabVM 1.2 Webapp 2.0
The CollabVM Web App is the viewer for the CollabVM Server.

## Building
Copy config.example.json to config.json and edit to your needs, then:

## yarn
- `yarn`
- `yarn build`

## npm
- `npm i`
- `npm run build`

The build output directory is `dist/`.

## Unit testing
This is very minimal and only tests a single standalone part at the moment:

- `yarn test`

## Serving
Just drop the contents of `dist/` somewhere into your webroot. 

For **testing or development purposes only**, you can throw up a quick test webserver with the following command:

## yarn
`yarn serve`

## npm
`npm run serve`
