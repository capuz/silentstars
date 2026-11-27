---
repo: "bahmutov/cypress-high-resolution"
name: "cypress-high-resolution"
description: "A plugin to increase the video resolution for cypress run"
readmeQualityOk: true
url: "https://github.com/bahmutov/cypress-high-resolution"
homepage: "https://www.cypress.io/blog/2021/03/01/generate-high-resolution-videos-and-screenshots/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [71, 29]
topics: ["cypress-plugin"]
stars: 14
forks: 0
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2021-10-28T17:32:56Z"
lastCommitAt: "2026-11-27T16:29:43Z"
lastReleaseAt: "2026-09-04T18:56:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 73
maintainers: ["bahmutov", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a83bc9c4086b85acedb1b39521c48a75ff0902c7a8d0bc837a7149c9d78d97a/bahmutov/cypress-high-resolution"
---

# cypress-high-resolution [][renovate-app]  [](https://dashboard.cypress.io/projects/e44x4z/runs) [](https://github.com/bahmutov/cypress-high-resolution/actions/workflows/ci.yml)

> A plugin to increase the video resolution for cypress run

Based on the blog post [Generate High-Resolution Videos and Screenshots](https://www.cypress.io/blog/2021/03/01/generate-high-resolution-videos-and-screenshots/) and watch how to use this plugin in the video [Create High Resolution Videos And Screenshots In Cypress Using This Plugin](https://youtu.be/jAU4dLRXVIA).

## Install

Add this plugin to your project as a dev dependency

```
# install using NPM
$ npm i -D cypress-high-resolution
# or install using Yarn
$ yarn add -D cypress-high-resolution
```

### Cypress v15+

Add this plugin to your Cypress config file

```js
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-high-resolution
      return require('cypress-high-resolution')(on, config)
    },
  },
})
```

**Note:** older Cypress versions no longer supported, please use an older plugin version.
