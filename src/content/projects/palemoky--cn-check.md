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
stars: 90
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T03:56:14Z"
lastCommitAt: "2026-07-21T06:11:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["palemoky", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79935c5c81d4debf66655bc3eb7e11aa54b3008dd833519fcbca99c26ed09c6b/palemoky/cn-check"
discussionCount: 0
---

# China Access Check

Check whether your browsing environment is recognized as a **Mainland China user** by websites like ChatGPT, Claude, LinkedIn, etc.

Reproduce the common detection methods used by these websites in your browser, score each item, and provide a comprehensive judgment to help you understand what signals your network environment is exposing. Hosted on Cloudflare Workers (static resources + edge API), with no data storage.

## Detection Items and Weights

| Detection Item       | Weight | Principle                                                                                                                                                                                                                             | Remarks                                   |
| -------------------- | ---:   | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| IP Location          |   21   | IP geographic location provided by Cloudflare edge (`request.cf.country`),…
