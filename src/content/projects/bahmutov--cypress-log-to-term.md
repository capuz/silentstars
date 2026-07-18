---
repo: "bahmutov/cypress-log-to-term"
name: "cypress-log-to-term"
description: "Overwrite the cy.log command to print to both the Command Log and to the terminal"
readmeQualityOk: true
url: "https://github.com/bahmutov/cypress-log-to-term"
homepage: "https://cypress.tips/courses/cypress-plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["cypress-example"]
stars: 8
forks: 0
openIssues: 6
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-01T15:18:54Z"
lastCommitAt: "2026-07-18T05:46:05Z"
lastReleaseAt: "2023-02-13T14:58:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 54
maintainers: ["renovate[bot]", "bahmutov"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a506350ab58a9c62e7e0cd49e715aa36cf6dc96e373f7dd752b2e7d4f76bc5e/bahmutov/cypress-log-to-term"
---

# cypress-log-to-term  [](https://github.com/bahmutov/cypress-log-to-term/actions/workflows/ci.yml)

> Overwrite the `cy.log` command to print to both the Command Log and to the terminal

## Explanation

Read the blog posts 
- [Two Simple Tricks To Make Your Cypress Tests Better](https://glebbahmutov.com/blog/two-cypress-tricks/).
- [Collect All URLs Visited During Cypress Test](https://glebbahmutov.com/blog/collect-tested-urls/)

This plugin is covered in my [Cypress Plugins course](https://cypress.tips/courses/cypress-plugins) 🎓:
- [Lesson a3: Log the messages from the test to the terminal](https://cypress.tips/courses/cypress-plugins/lessons/a3)
- [Lesson a4: Log the messages using the plugin cypress-log-to-term](https://cypress.tips/courses/cypress-plugins/lessons/a4)

## Install

Install this plugin from the NPM registry using NPM or Yarn or your favorite Node package manager.

```text
# Install using NPM
$ npm i -D cypress-log-to-term
# Install using Yarn
$ yarn add -D cypress-log-to-term
```

Include the plugin from your support or spec file

```js
// cypress/e2e/spec.cy.js
// https://github.com/bahmutov/cypress-log-to-term
import 'cypress-log-to-term/commands'
```…
