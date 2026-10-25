---
repo: "bunnyxt/lcid"
name: "lcid"
description: "Access LeetCode problems via id"
readmeQualityOk: true
url: "https://github.com/bunnyxt/lcid"
homepage: "https://lcid.cc"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [65, 21]
topics: ["leetcode", "python", "python3", "flask", "github-actions", "react", "vercel"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-01T05:21:10Z"
lastCommitAt: "2026-10-25T02:46:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["bunnyxt"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb986d39fedf0a370360bcb5d27a12cfca4ba43d89701214679281163d85945/bunnyxt/lcid"
---

# LCid - access LeetCode problems via id

## Introduction

As a world's leading online programming learning platform, [LeetCode](https://leetcode.com) is quite popular among programmers. Since each problem has a unique number id, users tend to share problems via id. However, it is not convenient to visit problem page **directly via id**. People have to visit [LeetCode Problems](https://leetcode.com/problemset/all/) firstly, then enter that number id in the 'Search questions' input box, press 'enter', click the problem title link, finally comes to the problem page. What a hard work!

This simple project, called LCid, provides directly access to LeetCode problems via id. Features:

- Fetch all LeetCode problems via crawler.
- Redirect to LeetCode problem page with problem id in the URL path via backend.
- Support both LeetCode [global site](https://leetcode.com/problemset/all/) and [China site](https://leetcode.cn/problemset/all/) redirect.
- CI/CD, fetch all LeetCode problems daily and commit back to the repository via GitHub Actions, then deploy the latest snapshot.

LCid is now available at [lcid.cc](https://lcid.cc). Just add `/<problem-id>` at the end of `lcid.cc` (e.g.…
