---
repo: "massalabs/docs"
name: "docs"
description: "Massa Protocol Documentation"
readmeQualityOk: true
url: "https://github.com/massalabs/docs"
homepage: "https://docs.massa.net/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [62, 21]
topics: ["blockchain", "documentation", "massa"]
stars: 18
forks: 66
openIssues: 56
closedIssues: 111
watchers: 5
contributors: 33
recentReleases: 0
createdAt: "2023-04-18T06:34:02Z"
lastCommitAt: "2026-10-22T08:52:27Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 71
undervaluedScore: 70
maintainers: ["dependabot[bot]", "peterjah", "Leo-Besancon"]
openGraphImageUrl: "https://opengraph.githubassets.com/110e7e714bf3c9a1056d19aec52ce7a8b573b5bb489d762f1ff712727a10884c/massalabs/docs"
---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
