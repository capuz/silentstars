---
repo: "ShaftHQ/SHAFT_ENGINE"
name: "SHAFT_ENGINE"
description: "Java test automation framework for web, mobile, API, CLI, database, and desktop E2E testing with a fluent API and built-in reporting."
readmeQualityOk: true
url: "https://github.com/ShaftHQ/SHAFT_ENGINE"
homepage: "https://shafthq.github.io/"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [63, 36]
topics: ["automation-engine", "test-automation-framework", "testing-tools", "automation", "java", "test-automation", "e2e-testing", "end-to-end-testing", "testing-framework", "mcp-server"]
stars: 421
forks: 156
openIssues: 8
closedIssues: 3219
watchers: 34
contributors: 58
recentReleases: 0
createdAt: "2018-07-15T07:02:02Z"
lastCommitAt: "2026-11-14T10:41:20Z"
lastReleaseAt: "2020-02-24T09:43:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 40
maintainers: ["MohabMohie", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/141005802/61c7f9fe-3aed-4112-a651-ff7b92992105"
fundingLinks: ["GITHUB:https://github.com/MohabMohie"]
---

# Write the test. SHAFT does the rest.

One Java engine for web, mobile, API, CLI, database, and desktop.<br>
Drivers, waits, and evidence are handled. Every run ends in an Allure report.

&nbsp;

## Why SHAFT

- **No plumbing.** Managed Selenium and Appium drivers, synchronized actions, and smart waits.
- **One fluent API.** Web, mobile, REST/GraphQL, database, CLI, and desktop in the same test.
- **Evidence by default.** Steps, screenshots, and logs land in an Allure report on every run.
- **Scale by configuration.** Local, Grid, BrowserStack, or LambdaTest; TestNG, JUnit, or Cucumber.
- **Open and trusted.** MIT licensed, on Maven Central, with public coverage.

## How it works

Test intent and configuration enter SHAFT's orchestration layer, fan out across the execution surfaces you need, and come back as unified evidence.

```mermaid
flowchart LR
    accTitle: SHAFT execution and evidence workflow
    accDescr: Test intent and configuration enter SHAFT orchestration, run across Web, Mobile, API, and Native execution surfaces, and produce unified evidence.
    I[Test intent] --> S[SHAFT orchestration]
    C[Configuration] --> S
    S --> W[Web]
    S --> M[Mobile]
    S -->…
