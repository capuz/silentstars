---
repo: "dolthub/dolthub-cypress"
name: "dolthub-cypress"
description: "A suite of Cypress tests that runs against DoltHub (dolthub.com)"
readmeQualityOk: true
url: "https://github.com/dolthub/dolthub-cypress"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 16
forks: 4
openIssues: 5
closedIssues: 16
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2020-08-11T23:20:10Z"
lastCommitAt: "2026-10-21T23:36:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 63
maintainers: ["tbantle22", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee7033a44dafa2b1747e1fc33a40cb0f0152467032f1cac3492c77a841f52024/dolthub/dolthub-cypress"
---

# dolthub-cypress

A suite of [Cypress.io](https://docs.cypress.io/) tests written in Typescript to UI test [DoltHub](https://www.dolthub.com) and [DoltLab](http://doltlab.dolthub.com/).

## Installation

```bash
$ yarn && yarn compile
```

> Note: If you're running the Cypress tests on the [Apple M1 ARM Architecture](https://www.cypress.io/blog/2021/01/20/running-cypress-on-the-apple-m1-silicon-arm-architecture-using-rosetta-2), you may need to install Rosetta before running the tests:

```bash
$ softwareupdate --install-rosetta --agree-to-license
```

## Running the tests

You can either run our Cypress suite against our deployed production (dolthub.com) or against the local webserver (`localhost:3000`).

To run the tests against production, you can simply run these commands:

```bash
# runs tests using the full UI in Chrome against prod (recommended)
$ yarn cy-open

# runs tests against prod (default browser is Electron)
$ yarn cy-run

# runs tests headless against prod (using Chrome)
$ yarn cy-chrome
```

To run the tests against the local webserver, make sure you have the server running. _(Please note: this option is only currently available for our DoltHub devs. If you want…
