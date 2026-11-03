---
repo: "Onslip/automation"
name: "automation"
description: "Remote-control any old Android WebView in a Playwright-inspired way"
readmeQualityOk: true
url: "https://github.com/Onslip/automation"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-03-23T05:34:24Z"
lastCommitAt: "2026-11-03T12:47:53Z"
status: "thriving"
tags: []
healthScore: 67
undervaluedScore: 39
maintainers: ["LeviticusMB", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbee305649900b33291a64310b6074f70c464000d7621df57846135cfe6e745b/Onslip/automation"
---

# The Onslip Automation Library

*Remote-control any old Android or iOS WebView in a Playwright-inspired way*

## What it is

This is a small Node.js library that helps you to E2E test/automate/remote-control Android and iOS WebViews, including
[Capacitor]- or [Cordova]-based hybrid applications.

The [Onslip Automation API](https://github.com/Onslip/automation/blob/HEAD/docs/index/README.md) is heavily inspired by the [Playwright Library] and the aim is to
provide a small but still very usable subset of that API. We strive to be as API compatible as we can for the subset
that is supported, but since this is a completely separate code base, *full* compatibility can never be guaranteed.

Now, unlike Playwright's Android support — which requires version 87 or greater of the WebView — this library works with
almost *any* version of the WebView, at least all the way down to the last [Crosswalk] release (which was based on
Chromium 53)[^1]. We use it to automate Crosswalk on Android 4.1 and 6.0 devices, the default system WebView in Android
8 as well as iOS devices running iOS 12.4 and 15.4.

Additionally, we now also provide [fixtures and…
