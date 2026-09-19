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
lastCommitAt: "2026-09-19T08:13:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["github-actions[bot]", "palemoky", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca8ab19764ed4434c49d81a7f56b31a4092f92c72a8b576669a665b237033deb/palemoky/cn-check"
discussionCount: 0
---

# China Access Check

Detect whether your browsing environment will be identified as a **mainland China user** by websites like ChatGPT, Claude, LinkedIn, etc.

Reproduce the detection methods commonly used by these websites in the browser, score each item and provide a comprehensive judgment to help you understand what signals your network environment has exposed. Hosted on Cloudflare Workers (static resources + edge API), with no data storage.

## Detection Items and Weights

| Detection Item | Weight | Principle | Remarks |
| --- | ---: | --- | --- |
| IP Geolocation | 21 | IP geolocation provided by Cloudflare edge (`request.cf.country`), and independently verified with chnroutes CIDR | Most direct signal |
| Blocked Service Accessibility | 16 | Probe whether blocked services like Google, YouTube, Facebook, X, Instagram, Wikipedia, etc. are accessible; score by the proportion of inaccessibility (only full inaccessibility gets full score, individual inaccessibility might just be service outage or ad blocking), simultaneous inaccessibility of multiple services strongly suggests being within GFW... | |
