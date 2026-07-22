---
repo: "guidepup/guidepup-playwright"
name: "guidepup-playwright"
description: "Screen reader automation library for Playwright testing."
readmeQualityOk: true
url: "https://github.com/guidepup/guidepup-playwright"
homepage: "https://guidepup.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["playwright", "voiceover", "accessibility", "accessibility-testing", "accessibility-automation", "screen-reader-api", "a11y", "a11y-testing", "a11y-automation", "a11y-api"]
stars: 77
forks: 7
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-01-08T16:31:11Z"
lastCommitAt: "2026-07-22T06:10:10Z"
lastReleaseAt: "2022-09-18T21:25:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 36
maintainers: ["cmorten", "nmerget"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f4c2eaad6ab648f40f2c9b2c86d916b00950b014207f661c915424f93f76656/guidepup/guidepup-playwright"
fundingLinks: ["GITHUB:https://github.com/cmorten"]
discussionCount: 3
---

<h1 align="center">Guidepup for Playwright</h1>
</div>

</div>

## [Documentation](https://guidepup.dev) | [API Reference](https://www.guidepup.dev/docs/api/class-guidepup)

Guidepup is a screen reader automation library for testing.

This package provides [Guidepup](https://github.com/guidepup/guidepup) integration with [Playwright](https://playwright.dev/) to enable testing with <a href="https://www.guidepup.dev/docs/api/class-voiceover"><b>VoiceOver on MacOS</b></a> and <a href="https://www.guidepup.dev/docs/api/class-nvda"><b>NVDA on Windows</b></a>.

## Capabilities

- **Full Control** - If a screen reader has a keyboard command, then Guidepup supports it.
- **Mirrors Real User Experience** - Assert on what users really do and hear when using screen readers.

## Getting started

Set up your machine for screen reader automation:

```sh
npx @guidepup/setup setup
```

Install `@guidepup/playwright` to your project:

```sh
npm install --save-dev @guidepup/playwright @guidepup/guidepup @playwright/test
```

> [!NOTE]
> `@guidepup/guidepup` and `@playwright/test` are required as peer dependencies of this project.

Install the Guidepup screen reader assets:

```sh
npx…
