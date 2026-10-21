---
repo: "GSA/federal-website-index"
name: "federal-website-index"
description: "A project to build and maintain a comprehensive listing of the public websites of the U.S. federal government."
readmeQualityOk: true
url: "https://github.com/GSA/federal-website-index"
homepage: "https://github.com/GSA/site-scanning/issues"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 60
forks: 20
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2021-04-02T18:32:31Z"
lastCommitAt: "2026-10-21T21:15:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 51
maintainers: ["luke-at-flexion", "ethangardner"]
openGraphImageUrl: "https://opengraph.githubassets.com/338c4b0bfc14f51d28289134eb00aa192b1902c17238c080156bb47327f89f6b/GSA/federal-website-index"
---

# Federal Website Index

The goal of this project is to assemble an accurate, up-to-date list of the `.gov` public websites of the federal government.  It turns out that there are a lot of sources to consider, but this repository will explain the process used and reference the source datasets. This effort is a part of the [Site Scanning program](https://digital.gov/site-scanning).    

The end product, a Federal Website Index, can be found [here](https://github.com/GSA/federal-website-index/blob/main/data/site-scanning-target-url-list.csv) and is automatically updated every week on Wednesday at 6pm ET.  It is then used by the Site Scanning program to serve as its list of Target URLs.  

## Background

Virtually all of the ~300 agencies that make up the US federal government maintain one or more websites (e.g. `www.state.gov`, `space.commerce.gov`). We know what `.gov` domains exist and which agency operates them because the `.gov` registry [makes this information public](https://github.com/cisagov/dotgov-data/blob/main/current-federal.csv), but that only tells us what domains exist (e.g. `state.gov`, `commerce.gov`). Each domain may actually have hundreds of distinct websites…
