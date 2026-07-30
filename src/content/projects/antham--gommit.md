---
repo: "antham/gommit"
name: "gommit"
description: "Enforce git message commit consistency"
readmeQualityOk: true
url: "https://github.com/antham/gommit"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["git", "commits", "commit-message", "consistency"]
stars: 117
forks: 5
openIssues: 0
closedIssues: 15
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2016-08-30T11:10:11Z"
lastCommitAt: "2026-07-30T06:07:55Z"
lastReleaseAt: "2021-02-28T17:33:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 35
maintainers: ["antham", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b59ac0f462e72c32cc6030a9197cc66ca7e940f785b9181847006ff93ee92445/antham/gommit"
---

# Gommit [](https://codecov.io/gh/antham/gommit) [](https://goreportcard.com/report/github.com/antham/gommit) []()

Gommit analyze commits messages to ensure they follow defined pattern.

## Summary

- [Setup](#setup)
- [Usage](#usage)
- [Practical Usage](#practical-usage)
- [Third Part Libraries](#third-part-libraries)

## Setup

Download from release page according to your architecture gommit binary : https://github.com/antham/gommit/releases

### Define a file .gommit.toml

Create a file `.gommit.toml` at the root of your project, for instance :

```toml
[config]
exclude-merge-commits=true
check-summary-length=true
summary-length=50

[matchers]
all="(?:ref|feat|test|fix|style)\\(.*?\\) : .*?\n(?:\n?(?:\\* |  ).*?\n)*"

[examples]
a_simple_commit="""
[feat|test|ref|fix|style](https://github.com/antham/gommit/blob/HEAD/module) : A commit message
"""
an_extended_commit="""
[feat|test|ref|fix|style](https://github.com/antham/gommit/blob/HEAD/module) : A commit message

* first line
* second line
* and so on...
"""
```

#### Config

- `exclude-merge-commits` : if set to true, will not check commit message for merge commit
- `check-summary-length` : if set to true, check commit…
