---
repo: "Nostalgica-Reverie/Content-Monorepo"
name: "Content-Monorepo"
description: "Repository hosting the source for all versions of Re-Console"
readmeQualityOk: true
url: "https://github.com/Nostalgica-Reverie/Content-Monorepo"
homepage: "https://modrinth.com/modpack/legacy-minecraft"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [48, 24]
topics: ["console-edition", "minecraft", "minecraft-mod", "lce", "legacy-console", "modpack", "monorepo", "re-console"]
stars: 70
forks: 8
openIssues: 16
closedIssues: 197
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2024-04-11T00:16:08Z"
lastCommitAt: "2026-07-07T06:38:49Z"
lastReleaseAt: "2024-05-24T20:10:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["omo50", "Jab125", "NichoGamerTv"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c72b233f173f22d95a4bb0333f6738b68be060608ac6ee5de45d96d1744513a/Nostalgica-Reverie/Content-Monorepo"
discussionCount: 6
---

# Reverie Projects/monorepo
This is the repository hosting all of the different Reverie Projects modpacks, resource packs, and datapacks.

## Notice
Development is (currently) held on [git.nostalgica.net](https://git.nostalgica.net/Lasting-Legacy/Content-Monorepo), Tangled, GitHub and Codeberg are mirrors. Please go to our [GitHub Issues](https://github.com/Nostalgica-Reverie/Content-Monorepo/issues) page to report any issues.

# General
This repository hosts all the source and files for all of our resource packs, data packs, modpacks and documentation. This readme is primarily intended for internal developer usage.

## Contributing
First, please refer to the CONTRIBUTING.md file in the repository. This will tell you some basics.

### How to work on the repo
1. Install Go (1.24 or newer) from https://golang.org/dl/
2. run `cd src\packwand`
3. run `go install`

Now you have our tooling set up.

# Documentation
- Install [Node.js](https://nodejs.org/en/download) version 18 or higher
- Install VitePress through NPM in a terminal
```
npm add -D vitepress@next
```
- Start the local development server
```
npm run docs:dev
```

Any changes made in the docs segment of the repo will now…
