---
repo: "MafiaHub/Framework"
name: "Framework"
description: "Opinionated modding framework for multiplayer modifications and overall game modding"
readmeQualityOk: true
url: "https://github.com/MafiaHub/Framework"
homepage: "https://mafiahub.dev"
language: "C++"
languages: ["C++", "C"]
languagePcts: [70, 27]
topics: ["modding", "multiplayer", "framework", "cpp", "networking", "nodejs", "v8"]
stars: 58
forks: 18
openIssues: 4
closedIssues: 82
watchers: 10
contributors: 20
recentReleases: 0
createdAt: "2021-08-20T09:47:02Z"
lastCommitAt: "2026-07-05T20:43:08Z"
lastReleaseAt: "2024-01-28T23:03:20Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 56
maintainers: ["Segfaultd", "mafiahub-ci", "Kheartz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ae591393d09df7c113ed424413120944842d4ec7675d4789e1b1127d287333e/MafiaHub/Framework"
---

</div>

</div>

<br />
  Opinionated suite of tools and libraries to accelerate build multi-player modifications for AAA games.
</div>

  <sub>
    Brought to you by <a href="https://github.com/Segfaultd">@Segfault</a>,
    and other <a href="https://github.com/MafiaHub/Framework/graphs/contributors">contributors</a>!
  </sub>
</div>
<hr/>

## Introduction

This codebase provides a suite of tools and libraries to simplify the development of multi-player modifications and ensure consistency across all of them. The primary goal is to provide a common foundation and interface with shared functionality and data. It covers many fields we found necessary during the development of multi-player mods, such as:
* **Networking**: The core of the framework provides all the necessary tools to synchronize data between players.
* **ECS**: Backed by a robust ECS framework that simplifies entity management and world streaming, it is also easily extensible.
* **Scripting**: The **JavaScript/TypeScript** scripting layer provides an easy way to create and manage game modes used on game servers (powered by Node.js on server, V8 on client).
* **Logging**: It is always vital to log actions and errors,…
