---
repo: "oddbird/oddleventy"
name: "oddleventy"
description: "Official OddBird Site"
url: "https://github.com/oddbird/oddleventy"
homepage: "https://www.oddbird.net"
language: "Nunjucks"
languages: ["Nunjucks", "JavaScript", "SCSS"]
languagePcts: [38, 33, 29]
stars: 10
forks: 3
openIssues: 17
closedIssues: 110
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2018-11-21T19:20:57Z"
lastCommitAt: "2026-06-26T21:32:10Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 77
maintainers: ["jgerigmeyer", "SondraE", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b41e90b0afb7a93efa9d1988a4c66c59445d98d9889a37dd0a4349ab343f1c/oddbird/oddleventy"
fundingLinks: ["GITHUB:https://github.com/oddbird", "OPEN_COLLECTIVE:https://opencollective.com/oddbird-open-source"]
---

# OddSite

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- [Eleventy](https://www.11ty.dev/) JS w/ Markdown & Nunjucks
- Sass w/ OddBird's [Accoutrement](https://www.oddbird.net/accoutrement/) &
  [Herman](https://www.oddbird.net/herman/)
- [Netlify](https://www.netlify.com/) for deployment
- A lot of ideas from a lot of cool people

## Develop:

### Install Node and Yarn

We recommend using [nvm](https://github.com/nvm-sh/nvm) for Node version
management. [Install it](https://github.com/nvm-sh/nvm#installation-and-update)
if necessary, then run `nvm install` (once per active shell) to use the correct
version of Node for OddSite development.

The correct [Yarn](https://yarnpkg.com/) version is included with Node, and will
be used automatically for any `yarn` command. To activate it, run
`corepack enable` (once per local Node installation).

To upgrade the Node version used by OddSite, update the version number in these
places and then run `nvm install` to upgrade:

- `package.json` (`engines.node` field)
- `.nvmrc`

To upgrade the yarn version used by OddSite, run `yarn set version latest` and
then update the version range in `package.json`…
