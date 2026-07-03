---
repo: "librecaptcha/lc-core"
name: "lc-core"
description: "The LibreCaptcha framework, for self-hosted, privacy respecting CAPTCHAs"
url: "https://github.com/librecaptcha/lc-core"
language: "Scala"
languages: ["Scala", "Java"]
languagePcts: [50, 25]
topics: ["captcha", "captcha-framework", "privacy"]
stars: 428
forks: 18
openIssues: 18
closedIssues: 48
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2018-01-02T05:27:00Z"
lastCommitAt: "2026-07-03T06:24:58Z"
lastReleaseAt: "2022-10-11T05:15:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 34
maintainers: ["hrj", "scala-steward", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1df24f327d567afc90e4cdfb2d83609ecc0da05eb016451175c50b87f8cac9d/librecaptcha/lc-core"
discussionCount: 12
---

# LibreCaptcha
LibreCaptcha is a framework that allows developers to create their own [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA)s.
The framework defines the API for a CAPTCHA generator and takes care of mundane details
such as:
* An HTTP interface for serving CAPTCHAs
* Background workers to pre-compute CAPTCHAs and to store them in a database
* Managing secrets for the CAPTCHAs (tokens, expected answers, etc)
* Safe re-impressions of CAPTCHA images (by creating unique tokens for every impression)
* Garbage collection of stale CAPTCHAs
* Sandboxed plugin architecture (TBD)

Some sample CAPTCHA generators are included in the distribution (see below). We will continue adding more samples to the list. For quick
deployments the samples themselves might be sufficient. Projects with more resources might want create their own CAPTCHAs
and use the samples as inspiration. See the [CAPTCHA creation guide](https://github.com/librecaptcha/lc-core/wiki/Creating-your-own-CAPTCHA-provider).

## Current Status
The framework is stable, but since it is our first public release, we recommend using it only on small to medium scale
web apps.

The sample CAPTCHAs are also just that, samples. They…
