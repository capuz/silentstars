---
repo: "appium/appium-espresso-driver"
name: "appium-espresso-driver"
description: "Espresso integration for Appium"
url: "https://github.com/appium/appium-espresso-driver"
language: "Kotlin"
languages: ["Kotlin", "TypeScript"]
languagePcts: [69, 22]
stars: 214
forks: 72
openIssues: 79
closedIssues: 218
watchers: 22
contributors: 53
recentReleases: 0
createdAt: "2017-05-23T16:18:54Z"
lastCommitAt: "2026-06-25T02:06:43Z"
lastReleaseAt: "2022-05-07T17:39:40Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 40
maintainers: ["semantic-release-bot", "dependabot[bot]", "mykola-mokhnach"]
openGraphImageUrl: "https://opengraph.githubassets.com/e33c7b1c89b3aa183c79b55b06b57fa45efbc5c69c428676534be34f5e977509/appium/appium-espresso-driver"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/appium"]
---

# Appium Espresso Driver

Appium's Espresso Driver is a test automation server for Android that uses [Espresso](https://developer.android.com/training/testing/espresso/) as the underlying test technology. The Espresso Driver is a part of the Appium framework. The driver operates in scope of [W3C WebDriver protocol](https://www.w3.org/TR/webdriver/) with several custom extensions to cover operating-system specific scenarios.

The Espresso package consists of two main parts:
- The driver part (written in Node.js) ensures the communication between the Espresso server and Appium. Also includes several handlers that directly use ADB and/or other system tools without a need to talk to the server.
- The server part (written in Kotlin with some parts of Java), which is running on the device under test and transforms REST API calls into low-level Espresso commands.

See the [end-to-end architecture diagram](./docs/architecture.md).

> [!IMPORTANT]
> Since major version *5.0.0*, this driver is only compatible with Appium 3. Use the `appium driver install espresso`
> command to add it to your distribution.

## Comparison with UiAutomator2

The key difference between [UiAutomator2…
