---
repo: "jrpool/testaro"
name: "testaro"
description: "A thousand web accessibility tests performed by 11 tools"
readmeQualityOk: true
url: "https://github.com/jrpool/testaro"
language: "HTML"
languages: ["HTML"]
languagePcts: [90]
stars: 5
forks: 2
openIssues: 29
closedIssues: 24
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-10-13T00:23:59Z"
lastCommitAt: "2026-08-20T04:10:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 65
maintainers: ["jrpool", "wittjeff", "MelvinAkothINGUBU"]
openGraphImageUrl: "https://opengraph.githubassets.com/00f8633c0919f8b55ef60791036952f680332cbb7290c8b1af5a472d59ef84e4/jrpool/testaro"
discussionCount: 0
---

# testaro

Ensemble testing for web accessibility

## Breaking change notices

Version 75.0.0 introduced a breaking change in the methods for making screenshots of web pages.

Version 68.0.0 introduced a breaking change in the format of reports.

## Purposes

Testaro is an application that performs ensemble testing of web pages for accessibility, usability, and conformity to HTML and CSS specifications.

The purposes of Testaro are to:

- provide programmatic access to tests defined by multiple rule engines
- standardize and integrate the reports of the rule engines

The need for ensemble testing of web accessibility, and the obstacles to it, are discussed in [Accessibility Metatesting: Comparing Nine Testing Tools](https://arxiv.org/abs/2304.07591).

Testaro is described in two papers:

- [How to run a thousand accessibility tests](https://medium.com/cvs-health-tech-blog/how-to-run-a-thousand-accessibility-tests-63692ad120c3)
- [Testaro: Efficient Ensemble Testing for Web Accessibility](https://arxiv.org/abs/2309.10167)

## Functionality

Testaro performs tasks defined by a _job_. Typically, a job identifies the URL of a web page and asks Testaro to call an ensemble of rule…
