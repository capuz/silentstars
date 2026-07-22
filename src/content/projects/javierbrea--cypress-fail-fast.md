---
repo: "javierbrea/cypress-fail-fast"
name: "cypress-fail-fast"
description: "A Cypress plugin to skip tests on first failure."
readmeQualityOk: true
url: "https://github.com/javierbrea/cypress-fail-fast"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [79, 20]
topics: ["cypress", "cypress-plugin", "abort", "fail-fast", "failure-handling", "failure", "testing", "testing-tools", "automated-testing", "plugin"]
stars: 122
forks: 5
openIssues: 2
closedIssues: 58
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-11-28T06:42:51Z"
lastCommitAt: "2026-07-22T06:10:06Z"
lastReleaseAt: "2021-02-21T16:40:02Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 75
undervaluedScore: 25
maintainers: ["javierbrea", "google-labs-jules[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec6379c77ff10f6cea016bb7091ab700897f14c1593ac5035648d440eea79e27/javierbrea/cypress-fail-fast"
---

# Cypress Fail Fast

Skip the rest of your Cypress tests after the first failure.

With Cypress Fail Fast, you can:

- Skip all remaining tests in the current spec file, or in the entire run, depending on the configured strategy.
- Control fail-fast behavior at a per-test or per-suite level, so you can choose which failures should trigger fail-fast mode and which should not.
- Set hooks to:
  - Run when fail-fast mode is triggered, so you can perform custom actions.
  - Trigger fail-fast mode at any moment based on custom logic.
  - Example use case: Coordinate multiple parallel runs so that when fail-fast mode is triggered in one run, the others start skipping tests as well.

## Table of Contents

- [Installation](#installation)
- [How it works](#how-it-works)
- [Configuration](#configuration)
  - [Plugin options](#plugin-options)
  - [Per-test configuration](#per-test-configuration)
  - [Examples](#examples)
  - [Hooks](#hooks)
- [Limitations](#limitations)
- [Usage with TypeScript](#usage-with-typescript)
- [Compatibility](#compatibility)
- [Contributing](#contributing)
- [License](#license)

## Installation

Add the plugin to your `devDependencies`:

```bash
npm install…
