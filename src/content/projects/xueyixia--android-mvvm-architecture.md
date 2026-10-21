---
repo: "XueyiXia/android-mvvm-architecture"
name: "android-mvvm-architecture"
description: "A Kotlin version of an MVVM development framework suited to medium and large projects. It is also a currently popular framework in Android development. The MVVM framework is still being written bit by bit, so it will take a while to complete. Although the open-source market already has many excellent MVVM frameworks, I have tried to encapsulate an architecture of my own ideas, and I am doing my best to contribute to open source!!"
originalDescription: "kotlin 版本的 mvvm 开发框架,适用于中大型的项目，也是现在android 比较流行的框架,mvvm框架还在目前还在一点点编写中，所以需要一段时间才可以完成，虽然现在开源市场上有很多优秀的mvvm框架，但是自己也尝试去封装一个属于自己想法的架构，但是还是尽一份努力，为开源做一份贡献！！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XueyiXia/android-mvvm-architecture"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin", "mvvm", "mvvm-android"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-12-13T05:11:45Z"
lastCommitAt: "2026-10-21T17:32:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 46
maintainers: ["XueyiXia"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ebab1f7bc4e17c755630f7657741f552c3b2e7ffa4b1439e6d42217dc71e6/XueyiXia/android-mvvm-architecture"
---

# android-mvvm-architecture

An MVVM development framework in Kotlin, suited to medium and large projects.

As Android projects have evolved, MVVM has become one of the more mainstream architectural approaches. This repository is based on the Kotlin language and attempts to encapsulate a set of basic MVVM framework suitable for medium and large projects, focusing on the layered design of page, data, and state management, reducing duplicate code, and improving project maintainability and extensibility.

> This project is not meant to replace mature mainstream architecture frameworks. Instead, it is a basic implementation built on an understanding of MVVM ideas, suited to my own projects and team.

## Project Overview

The core idea of MVVM is to separate page display, data processing, and state management, avoiding coupling large amounts of logic into Activity / Fragment.

The advantages of this architecture include:

- A lighter UI layer; pages are only responsible for display and event handling
- More centralized business logic, making it easier to maintain and extend
- Decoupling of the data layer and page layer, making testing and refactoring easier
- Convenient unified…
