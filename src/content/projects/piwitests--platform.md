---
repo: "PiwiTests/platform"
name: "platform"
description: "Your Playwright results, kept and explained — self-hosted run history, failure clustering, flaky scoring, locator healing."
readmeQualityOk: true
url: "https://github.com/PiwiTests/platform"
homepage: "https://piwitests.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["playwright", "playwright-tests", "playwright-typescript", "reporter", "failure-analysis", "playwright-reporter", "self-hosted", "test-reporting", "testing", "dashboard"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2025-12-07T09:45:38Z"
lastCommitAt: "2026-09-06T08:02:37Z"
lastReleaseAt: "2026-07-02T20:47:47Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["claude", "PhenX"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1111609705/c0de1009-0304-4e59-b033-ed2258a3af59"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/phenxdesign"]
discussionCount: 1
---

</p>

  <b>Your Playwright results, kept and explained.</b><br>
  CI throws away every report it makes. Piwi keeps them — every run, trace, and HTML report — then
  groups the failures by root cause, scores the flaky tests, and finds the locator you should have
  used. Self-hosted, MIT, zero telemetry.
</p>

</p>

</p>

  </a>
</p>

  <sub>A run streaming in live. The <a href="https://piwitests.dev/demo/">demo</a> is the real app on seeded data — it runs entirely in your browser, no install and no backend.</sub>
</p>

## The problem it solves

Playwright's HTML report is excellent, and it lasts exactly until the next build. So the questions that
actually matter get hard to answer: *Has this test always been flaky? Did my fix work? Which of these
forty red tests are the same bug? What did we change the day the suite started failing?*

Piwi keeps the runs so you can answer them.

- **Permanent history** — every run, trace, and report, browsable long after CI deleted its artifacts.
- **Failures grouped by cause** — an error fingerprint collapses forty red tests into the three root
  causes behind them, each triaged once.
- **Flaky tests, scored and costed** — a composite score, a…
