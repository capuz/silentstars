---
repo: "guardian/support-service-lambdas"
name: "support-service-lambdas"
description: "Lambdas covering supporter operations, mostly in life operations"
readmeQualityOk: true
url: "https://github.com/guardian/support-service-lambdas"
language: "TypeScript"
languages: ["TypeScript", "Scala"]
languagePcts: [51, 48]
topics: ["production"]
stars: 11
forks: 5
openIssues: 4
closedIssues: 4
watchers: 43
contributors: 83
recentReleases: 0
createdAt: "2017-02-01T14:25:47Z"
lastCommitAt: "2026-11-17T13:46:24Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 52
maintainers: ["johnduffell", "rupertbates", "andrade0"]
openGraphImageUrl: "https://opengraph.githubassets.com/963a28a72abd182db02e2da560c96094e7493dcbfeaca575b89be20aa6fd2c5c/guardian/support-service-lambdas"
---

# support-service-lambdas [](https://app.codacy.com/app/johnduffell/support-service-lambdas?utm_source=github.com&utm_medium=referral&utm_content=guardian/support-service-lambdas&utm_campaign=badger)

This is the reader revenue lambda API/orchestration layer. It is made up of lambdas, defined in the `/handlers` directory and
libraries defined in the `/libs` directory. Code in the repo is mostly Scala but for new lambdas prefer to use Typescript 
for the following reasons:
- There is a wider pool of experienced Typescript developers both within the Guardian and outside making it easier to find 
devs to work on the codebase
- It enables us to share code between server side applications, client side applications and infrastructure definitions (CDK)
- Cold start times for Typescript lambdas are typically faster than for Scala ones

Please keep all the various README in this project up to date, and improve them!
There should be one in each project and anywhere else you think it would help.

## Getting Started - Typescript

Install [mise](https://mise.jdx.dev/getting-started.html), then install the project tools from the
root of the repo:

```
$ mise install
```

Also enable…
