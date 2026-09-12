---
repo: "jorrrak/qa-plugin"
name: "qa-plugin"
description: "qa test recorder "
readmeQualityOk: true
url: "https://github.com/jorrrak/qa-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-08-26T16:03:35Z"
lastCommitAt: "2026-09-12T08:05:05Z"
lastReleaseAt: "2026-09-09T14:59:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 24
maintainers: ["jorrrak"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e1bf1b4b527a3ab7bc33d8128058a2fca4d128b1d593f3afa63140f22e03e64/jorrrak/qa-plugin"
---

# QA Test Case Recorder

A Chrome extension for QA work: record test cases capturing **XPath and the
element's visible name**, generate **automation scripts**, and **detect bugs** as
they happen.

*An illustration of the workflow, not a screen recording — see
[Running it](#running-it) to try the real thing.*

Everything runs locally. No account, no server, no network requests: nothing you
record leaves your machine.

**License:** MIT.

## Contents

- [Running it](#running-it) · [Architecture](#architecture)
- [What gets recorded](#what-gets-recorded) — clicks, typing, keys, scrolling, iframes
- [Assertions](#assertions) — including [editing a recording](#editing-a-recording-afterwards)
  and [editing the generated script](#editing-the-generated-script)
- [Test data (variables)](#test-data-variables)
- [Exports](#playwright-for-python) — Playwright (TS + Python), Cypress, Selenium,
  Markdown, YAML, CSV, Excel, Zephyr Scale
- [Publishing](#publishing)

## Running it

```bash
npm run dev
```

WXT 0.21 no longer launches a browser itself, so load the extension once by hand:
`chrome://extensions` → enable Developer mode → **Load unpacked** →
`dist/chrome-mv3-dev`. After that every…
