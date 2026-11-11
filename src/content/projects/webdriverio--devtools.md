---
repo: "webdriverio/devtools"
name: "devtools"
description: "Debugging WebDriver tests in real-time with support for WebdriverIO, Selenium WebDriver and Nightwatch JS"
readmeQualityOk: true
url: "https://github.com/webdriverio/devtools"
homepage: "https://webdriver.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 10
forks: 4
openIssues: 4
closedIssues: 97
watchers: 4
contributors: 40
recentReleases: 0
createdAt: "2023-10-20T21:18:04Z"
lastCommitAt: "2026-11-11T19:47:31Z"
lastReleaseAt: "2026-06-08T11:10:07Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 78
maintainers: ["vishnuv688", "dependabot[bot]", "wdio-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/57faf359e650af047cc3814534e2ddb5acc652501cecc743a4adb27eed58e0ed/webdriverio/devtools"
fundingLinks: ["TIDELIFT:https://tidelift.com/funding/github/npm/webdriverio", "OPEN_COLLECTIVE:https://opencollective.com/webdriverio"]
---

# WebdriverIO DevTools

A powerful browser devtools extension for debugging, visualizing, and controlling test executions in real-time.

Works with **WebdriverIO**, **[Nightwatch.js](https://github.com/webdriverio/devtools/blob/HEAD/packages/nightwatch-devtools/README.md)**, **[Selenium WebDriver](https://github.com/webdriverio/devtools/blob/HEAD/packages/selenium-devtools/README.md)** (any test runner), and **[Python Selenium](https://github.com/webdriverio/devtools/blob/HEAD/packages/selenium-devtools-py/README.md)** — same backend, same UI, same capture infrastructure.

It runs in two modes: **live** — an interactive dashboard that opens as your tests run — and **trace** — a portable `trace.zip` artifact for offline replay, CI, and AI-agent diffing.

## Quick Start

Install the adapter for your framework, add it to your config, and run — the DevTools dashboard opens automatically.

```bash
npm install @wdio/devtools-service --save-dev   # WebdriverIO (Nightwatch / Selenium below)
```

```js
// wdio.conf.js
export const config = {
  services: ['devtools'] // live mode — opens the dashboard on run
}
```

```bash
npx wdio run wdio.conf.js
```

Want a portable artifact instead of a…
