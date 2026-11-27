---
repo: "PiwiTests/piwi"
name: "piwi"
description: "Free, self-hosted Playwright dashboard with run history, failure clustering, flaky scoring, locator healing, browser extension, desktop companion app."
readmeQualityOk: true
url: "https://github.com/PiwiTests/piwi"
homepage: "https://piwitests.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["playwright", "playwright-tests", "playwright-typescript", "reporter", "failure-analysis", "playwright-reporter", "self-hosted", "test-reporting", "testing", "dashboard"]
stars: 53
forks: 4
openIssues: 19
closedIssues: 255
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-12-07T09:45:38Z"
lastCommitAt: "2026-11-27T16:30:12Z"
lastReleaseAt: "2026-07-02T20:47:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 52
maintainers: ["PhenX", "claude", "PhenX-Pro"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1111609705/3665dc87-3dab-418f-a681-9bad43cb777d"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/phenxdesign"]
discussionCount: 8
---

Free, self-hosted, zero telemetry. CI throws away every report it makes. Piwi keeps them, then groups
  the failures by root cause, scores the flaky tests, and finds the locator you should have used.

## Why

Playwright's HTML report is excellent, and it lasts exactly until the next build. The questions that
matter come later: *Has this test always been flaky? Did my fix hold? Which of these forty red tests
are the same bug?* Piwi keeps the runs so you can answer them. Everything it does serves five jobs:
