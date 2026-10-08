---
repo: "dvelasquez/lighthouse-plugin-crux"
name: "lighthouse-plugin-crux"
description: "A Lighthouse plugin that gathers field data from the Chrome User eXperience Report"
readmeQualityOk: true
url: "https://github.com/dvelasquez/lighthouse-plugin-crux"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["lighthouse-plugin", "score", "lighthouse", "typescript", "real-user-monitoring", "crux"]
stars: 23
forks: 1
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-12-18T07:07:00Z"
lastCommitAt: "2026-10-08T10:51:12Z"
lastReleaseAt: "2020-12-22T16:36:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 51
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7730e65652c7d0d7745ca8306b461e6af535344278b14c745e6ba6540a55d72/dvelasquez/lighthouse-plugin-crux"
---

# lighthouse-plugin-crux

> A Lighthouse plugin that displays the field performance of your page.
> It uses real-world data from Chrome UX Report and Core Web Vitals to estimate the score.

[An example report for github.com/GoogleChrome/lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=cb20232dcc7a8b4e93d63ae3b09ac47e):

This plugin adds Core Web Vitals values to your Lighthouse report. The CrUX Performance category includes real-user data
provided by [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report/). It's similar to 
the field section in [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) but it uses the Chrome
User Experience Report API instead of the PageSpeed Insights API. This API is faster than the PSI API since it doesn't 
need run a full lighthouse run to give the results.

The scoring algorithm weighs values for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout 
Shift (CLS) and picks a **minimum score**. It uses Core Web Vitals assessment that expects all its metrics to pass 
thresholds. For example, https://edition.cnn.com/ has LCP 5.9 s (15), FID 20 ms (100),…
