---
repo: "ifeilong/feilong"
name: "feilong"
description: "A utility library that makes Java development easier"
originalDescription: "让Java开发更简便的工具库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ifeilong/feilong"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java-library", "java8", "httpclient", "xml-parser", "json-parser", "zip", "security", "md5", "aes", "velocity"]
stars: 138
forks: 31
openIssues: 76
closedIssues: 788
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-04-03T15:14:35Z"
lastCommitAt: "2026-10-24T08:20:34Z"
lastReleaseAt: "2020-07-28T07:20:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 87
undervaluedScore: 45
maintainers: ["venusdrogon"]
openGraphImageUrl: "https://opengraph.githubassets.com/1841f3a4b28652935e82809bf57e6e8267ecf45ba112f1842a5e66fbf962836c/ifeilong/feilong"
discussionCount: 4
---

feilong: a utility library that makes Java development easier
================

[English](https://github.com/ifeilong/feilong/blob/HEAD/README.en.md) | **Simplified Chinese**

Reduce development, Release ideas (inspiration freed from repetitive, simple code)

## Overview in 30 Seconds

- **20+ modules covering the full range of everyday Java development**: dates, collections/Map, strings, IO, JSON, XML, HTTP, FTP/SFTP, email, DingTalk/WeCom bots, encryption, CSV/Excel/ZIP, pagination tags, Spring integration...
- **Static utility classes + Chinese javadoc**: every method documents what it returns in each case and what exception it throws in each case, so the examples can be copied directly.
- **One dependency declaration**: the central repository publishes only the aggregate artifact `com.github.ifeilong:feilong` (an all-in-one jar packaged by `maven-shade-plugin`). Adding it once gives you all module functionality; the individual submodules **are not published as separate coordinates**.
- **Runtime exceptions with unified validation semantics**: the NPE and IllegalArgumentException behavior of `Validate` is fixed, so you no longer need to write `try/catch` and null checks…
