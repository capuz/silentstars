---
repo: "UKHomeOfficeForms/hof"
name: "hof"
description: "Bootstrap a HOF project"
readmeQualityOk: true
url: "https://github.com/UKHomeOfficeForms/hof"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
topics: ["hof-dep-scanner"]
stars: 18
forks: 22
openIssues: 14
closedIssues: 32
watchers: 13
contributors: 45
recentReleases: 0
createdAt: "2016-05-04T14:05:07Z"
lastCommitAt: "2026-11-06T11:23:11Z"
lastReleaseAt: "2021-07-09T20:11:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 68
maintainers: ["gregwolversonHO", "vivekkumar-ho", "MikeMaratheftis"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f81ed6f34142b92e7382e403edb69ecf76226aa91023a37cfc4cd84fbf94b0f/UKHomeOfficeForms/hof"
---

# HOF (Home Office Forms)

> **WARNING - Breaking change from v24.0.0:** HOF no longer includes built-in email functionality and no longer depends on `nodemailer`.
> Services must provide and maintain their own email sending implementation using [GOV.UK Notify](https://docs.notifications.service.gov.uk/node.html).

HOF (Home Office Forms) is a framework designed to assist developers in creating form-based workflows in a rapid, repeatable and secure way. It aims to reduce simple applications as much as possible to being configuration-only.

## Server Settings

In your `hof.settings.json` file you can add `getTerms: false` and `getCookies: false` to turn off the default cookies, and terms and conditions information provided by the HOF framework. This is if you want to provide more specific material at the service level in regards to these subject matter otherwise the defaults should suffice.

Also you can set `getAccessibility: true` to get the default accessibility document for this framework if one is not provided at the service level. It is assumed there should have been an accessibility audit carried out for a service already hence why the default setting for this is set to…
