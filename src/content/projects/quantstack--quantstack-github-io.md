---
repo: "QuantStack/quantstack.github.io"
name: "quantstack.github.io"
description: "QuantStack website"
readmeQualityOk: true
url: "https://github.com/QuantStack/quantstack.github.io"
homepage: "https://quantstack.net"
language: "CSS"
languages: ["CSS", "TypeScript"]
languagePcts: [45, 30]
stars: 16
forks: 52
openIssues: 3
closedIssues: 22
watchers: 2
contributors: 51
recentReleases: 0
createdAt: "2016-05-28T21:38:09Z"
lastCommitAt: "2026-09-03T08:13:38Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 81
maintainers: ["MMesch", "SylvainCorlay", "HaudinFlorence"]
openGraphImageUrl: "https://opengraph.githubassets.com/31436972f2fd2cfc315f2de90edd52633bd512e5efc038d846daa615f151a496/QuantStack/quantstack.github.io"
---

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

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

### Pre-commit Hook Setup

To ensure code quality and consistency, we use `pre-commit` hooks. Here's how to set up and run the pre-commit hook locally:

1. **Install pre-commit:**

   If `pre-commit` isn't already installed, you can install it using `pip`:

   ```bash
   $ pip install pre-commit
   ```
2. **Install the pre-commit hooks:**

   Once `pre-commit` is installed, set up the hooks for the repository by running:…
