---
repo: "mjff-eng/asap-hub"
name: "asap-hub"
description: "The monorepo for the backend, frontend, and infrastructure of the ASAP hub."
readmeQualityOk: true
url: "https://github.com/mjff-eng/asap-hub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 18
forks: 4
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 32
recentReleases: 0
createdAt: "2020-04-16T14:07:34Z"
lastCommitAt: "2026-09-15T08:54:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 61
maintainers: ["AimeurAmin", "gabiayako", "diegonvs"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc0de9bb339b311c320ae23d58cd19b2fe53ff264c83ebb594879f8b22593c35/mjff-eng/asap-hub"
---

# asap-hub

> The monorepo for the backend, frontend, and infrastructure of the [ASAP](https://parkinsonsroadmap.org/) hub

## Authentication

This project uses [Auth0](https://auth0.com/) for authentication in both the CRN and GP2 apps. User accounts are managed through Contentful — each user in the app corresponds to a `User` content entry in Contentful, and Auth0 handles the actual login flow. See [Setting up your development environment](#setting-up-your-development-environment) for how to create a local user.

## Requirements

### Node.js

To work on this repository, you need to have [Node.js](https://nodejs.org/) installed. We are using the version specified in the [`.nvmrc`](https://github.com/mjff-eng/asap-hub/blob/HEAD/.nvmrc) file. If you use [NVM](https://github.com/nvm-sh/nvm), running `nvm use` in the repo root will switch to the right version automatically. If you use [ASDF](https://asdf-vm.com/) set up with the `nodejs` module, running `asdf install` will do the same.

### Yarn

You need to have [Yarn](https://yarnpkg.com/) installed. Any recent version (>=1.22) will automatically detect our local Yarn version and use that, so your exact version does not matter.
The…
