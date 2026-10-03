---
repo: "palemoky/cn-check"
name: "cn-check"
description: "🐾 Are you from China?"
originalDescription: "🐾 Are you from China?"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/palemoky/cn-check"
homepage: "https://cn-check.palemoky.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 27]
stars: 95
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T03:56:14Z"
lastCommitAt: "2026-10-03T09:21:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 31
maintainers: ["github-actions[bot]", "palemoky", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6ddae9204034cc71a01ba49b13730ddf515e7ca3b837be12d0e89da48e9184a/palemoky/cn-check"
discussionCount: 0
---

# China Access Check

Detect whether your browsing environment will be identified as a **China mainland user** by websites like ChatGPT, Claude, LinkedIn, etc.

Reproduce the detection methods commonly used by these websites in the browser, score each item and provide a comprehensive judgment to help you understand what signals your network environment exposes. Hosted on Cloudflare Workers (static resources + edge API), with no data storage.

## Detection Items and Weights

| Detection Item | Weight | Principle | Notes |
| --- | ---: | --- | --- |
| IP Location | 21 | IP geolocation provided by Cloudflare edge (`request.cf.country`), independently verified with chnroutes CIDR | Most direct signal |
| Blocked Service Accessibility | 16 | Probe whether blocked services such as Google, YouTube, Facebook, X, Instagram, Wikipedia, etc. are accessible; grade scoring by unavailability ratio (full score only if all unavailable, partial unavailability may just be service failure or ad blocking), simultaneous unavailability of multiple services strongly suggests being within GFW… | |
