---
repo: "client9/nowandlater"
name: "nowandlater"
description: "Fast Natural Language Time and Date Parsing in Go"
readmeQualityOk: true
url: "https://github.com/client9/nowandlater"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["date", "datetime", "datetime-library", "natural-language-processing", "time"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-23T03:57:16Z"
lastCommitAt: "2026-08-12T05:15:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 16
maintainers: ["client9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e8d6d6ed1b34bf94ff90322ea1ffddc6850107aed3d26530be86fd4f745119/client9/nowandlater"
---

# nowandlater - fast natural date and time parsing

A self-contained, zero-dependency Go library for parsing natural-language
date and time strings into `time.Time` values.

🇬🇧🇪🇸🇩🇪🇫🇷🇮🇹🇵🇹🇷🇺🇯🇵🇨🇳

Announcements: [LinkedIn](https://www.linkedin.com/posts/nick-galbreath-1890794_i-built-a-golang-module-client9nowandlater-activity-7445152694492672000--XFA) [golang-nuts](https://groups.google.com/g/golang-nuts/c/b2aRJiDzAl0/m/3Rm-bv_mAwAJ)

```go
import "github.com/client9/nowandlater"
```
---

### What makes it different?

* Fast - 500ns per call
* Only uses stdlib -no regular expressions - no parser/generators
* Supports English, Spanish, French, Italian, Portuguese, Russian, Japanese, and Chinese.
* Extensible to add additional human languages - Requests and PRs welcome!
* Extensible to add new date, time, and duration expressions - PRs welcome!
* Scalable - adding languages or rules has no additional performance cost.
* MIT License - do whatever you want with it!
* Production Ready - >95% test coverage, with fuzz and performance tests
* See [FAQ](https://github.com/client9/nowandlater/blob/HEAD/docs/faq.md) for more details.

## Installation

```
go get…
