---
repo: "redhat-developer/vscode-extension-tester"
name: "vscode-extension-tester"
description: "ExTester: Your Essential UI Testing Companion for Visual Studio Code Extensions! Seamlessly execute UI tests with Selenium WebDriver, ensuring robustness and reliability in your extension development journey. Simplify UI testing for your VS Code extensions and elevate the quality of your user interface effortlessly."
readmeQualityOk: true
url: "https://github.com/redhat-developer/vscode-extension-tester"
homepage: "https://redhat-developer.github.io/vscode-extension-tester/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["extensions", "redhat", "selenium-webdriver", "testing", "ui", "ui-testing", "vscode", "chromedriver", "visual-studio-code"]
stars: 326
forks: 88
openIssues: 40
closedIssues: 529
watchers: 12
contributors: 148
recentReleases: 0
createdAt: "2019-02-28T09:00:19Z"
lastCommitAt: "2026-09-07T08:34:14Z"
lastReleaseAt: "2024-02-13T22:47:20Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 97
undervaluedScore: 41
maintainers: ["djelinek", "dependabot[bot]", "toinehartman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/173077433/988c099a-d620-4b0b-ae27-ce6eb0e7c294"
discussionCount: 40
---

<h1 align="center">
</h1>

  <br/>
</p>

<h2 align="center">UI testing framework for Visual Studio Code extensions</h2>

</p>

ExTester runs [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver) UI tests against a real instance of [Visual Studio Code](https://code.visualstudio.com/). It downloads VS Code and the matching ChromeDriver, installs your extension, launches the editor and runs your [Mocha](https://mochajs.org/) tests. A Page Object API covers the whole VS Code UI, so your tests never have to touch the editor's DOM.

## Features

- **Ready-made test environment** — downloads a test instance of VS Code (stable or insiders, any supported version) and the ChromeDriver build that matches it.
- **Installs your extension** into that instance, optionally together with the extensions it depends on.
- **Page Object API** for the activity bar, side bar, editors, bottom panel, status bar, title bar, dialogs, notifications, web views and more.
- **Mocha and TypeScript** — tests are ordinary Mocha suites with full type definitions.
- **Screenshots of failed tests** out of the box, and code coverage with a single flag.
- **Custom page objects and locators** to cover…
