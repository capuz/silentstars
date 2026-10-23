---
repo: "ArnaudBuchholz/ui5-test-runner"
name: "ui5-test-runner"
description: "A test runner for UI5 applications enabling parallel execution of tests."
readmeQualityOk: true
url: "https://github.com/ArnaudBuchholz/ui5-test-runner"
homepage: "https://arnaudbuchholz.github.io/ui5-test-runner/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["automation", "test-automation", "testing-tool", "ui5", "sapui5"]
stars: 33
forks: 16
openIssues: 4
closedIssues: 151
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-03-02T19:38:54Z"
lastCommitAt: "2026-10-23T12:04:09Z"
lastReleaseAt: "2021-10-27T20:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 66
maintainers: ["ArnaudBuchholz"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e51b024673c6a9820d10d4c856df2fa5434fa5012581ec472b9c390f475a3e3/ArnaudBuchholz/ui5-test-runner"
---

# UI5 Test runner

A self-sufficient test runner for [UI5 applications](https://ui5.sap.com/) enabling parallel execution of tests.

> To put it in a nutshell, some [UI5 applications](https://ui5.sap.com/) have so many tests that when you run them in a browser, it ends up **crashing**. The main reason is **memory consumption** : the browser process goes up to 2 GB and it blows up. JavaScript is based on garbage collecting but it needs time to operate and the stress caused by executing the tests as well as the use of iframes do not let enough bandwidth for the browser to free up the memory.

> This tool is designed and built as a **substitute** of the [UI5 karma runner](https://github.com/SAP/karma-ui5). It executes all the tests in **parallel** thanks to several browser tabs *(which also **reduces the total execution time**)*.

## 💿 How to install

* Works with [Node.js](https://nodejs.org/en/download/) >= 24.11.1
* Local installation
  * `npm install --save-dev ui5-test-runner@6`
  * Trigger either with `npx ui5-test-runner` or through an npm script invoking `ui5-test-runner`
* Global installation
  * `npm install --global ui5-test-runner@6`
  * Trigger with `ui5-test-runner`…
