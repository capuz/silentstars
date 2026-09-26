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
lastCommitAt: "2026-09-26T08:46:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["github-actions[bot]", "palemoky", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54fd280947edfffb06e5ee403986ae716e798a03551fb97ee3cfa1833d3f0f62/palemoky/cn-check"
discussionCount: 0
---

# China Access Check

Detect whether your browsing environment will be identified as a **mainland China user** by websites like ChatGPT, Claude, LinkedIn, etc.

Reproduce the detection methods commonly used by these websites in the browser, score each item and provide a comprehensive judgment, helping you understand what signals your network environment has exposed. Hosted on Cloudflare Workers (static resources + edge API), with no data storage.

## Detection Items and Weights

| Detection Item | Weight | Principle | Remarks |
| --- | ---: | --- | --- |
| IP Location | 21 | IP geolocation provided by Cloudflare edge (`request.cf.country`), independently verified with chnroutes CIDR | Most direct signal |
| Blocked Service Reachability | 16 | Probe whether blocked services like Google, YouTube, Facebook, X, Instagram, Wikipedia, etc. are reachable; score by level based on reachability ratio (full inaccessibility gets full score, partial inaccessibility may just be service outage or ad blocking), simultaneous inaccessibility of multiple services strongly suggests being inside the GFW… | 
