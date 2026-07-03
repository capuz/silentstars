---
repo: "RaspberryPiFoundation/editor-ui"
name: "editor-ui"
description: "Code Editor web component"
url: "https://github.com/RaspberryPiFoundation/editor-ui"
homepage: "https://editor-static.raspberrypi.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 37
forks: 12
openIssues: 3
closedIssues: 483
watchers: 10
contributors: 84
recentReleases: 0
createdAt: "2021-11-11T12:06:51Z"
lastCommitAt: "2026-07-03T12:40:32Z"
lastReleaseAt: "2023-01-17T16:02:41Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 61
maintainers: ["cursoragent", "zetter-rpf", "cocomarine"]
openGraphImageUrl: "https://opengraph.githubassets.com/beefd4ac83440efa4735b1d135071e86cf033f91cc6868eb46bfab44e0c7e08f/RaspberryPiFoundation/editor-ui"
---

# Getting Started

This project provides a web component containing the Raspberry Pi Code Editor for use on other sites. Although originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app), the application has been ejected so all the build scripts etc. are now in the repo.

## Install dependencies

This repository uses Yarn (see `package.json` → `packageManager`).

`@RaspberryPiFoundation/scratch-gui` is installed from [GitHub Packages](https://github.com/RaspberryPiFoundation/scratch-editor/pkgs/npm/scratch-gui). Complete the steps below, then run `yarn install`.

### Set a personal access token

If you don't already have this set up you will need it to access deps in the RPF private registry

1. On GitHub, create a **classic** personal access token: [Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens). Enable **`read:packages`** and **`repo`**. For packages tied to private repositories, `read:packages` alone can cause `yarn install` to fail with `401`/`403`.
2. If your organisation uses SAML SSO, open the token on GitHub and **Authorize** it for **RaspberryPiFoundation** (Configure SSO).
3. Add the token…
