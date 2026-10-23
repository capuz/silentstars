---
repo: "Bridgetek/EveApps"
name: "EveApps"
description: "EveApps contains a set of demo application and sample application for Eve based platform.    (Eve refers to the graphics controller from Bridgetek Pte Ltd, see brtchip.com for more details))"
readmeQualityOk: true
url: "https://github.com/Bridgetek/EveApps"
homepage: "https://bridgetek.github.io/EveApps/"
language: "HTML"
languages: ["HTML", "C"]
languagePcts: [57, 41]
topics: ["bt81x", "demoapp", "embedded", "eve", "ft800", "ft810", "gui", "sampleapp", "ft801"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2023-04-17T09:16:51Z"
lastCommitAt: "2026-10-23T08:46:11Z"
lastReleaseAt: "2026-10-19T08:58:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 48
undervaluedScore: 48
maintainers: ["lizzhangwei"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dd671f832900dc889a94e333fa6e9a91f1a282d6594b5d41c6204f87144d0ae/Bridgetek/EveApps"
---

# EveApps

EveApps is a collection of applications that use Eve Series chips (FT80X, FT81X, BT815/6, BT817/8) for reference purposes. The collection includes 30 demo applications and 11 sample applications, all written in ANSI C code, and the complete source code is provided.

The demo applications are designed to simulate real-world projects and are moderately complex. The sample applications are intended for instructional purposes and are simpler to understand, focusing on individual display lists or commands.

For those new to the Eve Series chips, it is recommended to start with the SampleApp project.

All the applications rely on a set of common files located under the "common" folder. Each application has a subfolder named "project," which contains the project file necessary for building the application with the toolchain.

Users are expected to be familiar with the programming guide and data sheet for the Eve Series chips.

It should be noted that certain applications are specifically developed for particular Eve Series chips or host platforms (refer to "Support platforms").



## Folder introduction
```
📂 EveApps
    ├───common                  
    │…
