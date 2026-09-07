---
repo: "mocaccinoOS/desktop"
name: "desktop"
description: ":computer: Mocaccino Desktop specs"
readmeQualityOk: true
url: "https://github.com/mocaccinoOS/desktop"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
stars: 43
forks: 11
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2020-05-26T19:25:01Z"
lastCommitAt: "2026-09-07T08:34:26Z"
lastReleaseAt: "2021-09-21T18:13:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 51
maintainers: ["joostruis", "chuckseven1"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea3af7398847446c858ecdc0d7ecba9b0ecdea5bcd34f088ccd49d814330c175/mocaccinoOS/desktop"
---

# [](https://packages.mocaccino.org/mocaccino-desktop) :computer: mocaccinoOS Desktop repository

This repository contains the package definitions used to build the MocaccinoOS Desktop distribution. Packages are organized to produce reproducible binary builds while remaining compatible with the Gentoo ecosystem.

Unlike traditional Linux distributions that expose users to hundreds of low-level packages and dependencies, MocaccinoOS groups related runtime components into **layers**. A layer represents a complete, installable software stack that provides everything required for a specific purpose.

For example, installing the KDE Plasma desktop is as simple as:

```bash
luet install layers/plasma
```

The `layers/plasma` package pulls in all required runtime components, libraries, services, and applications needed to provide a fully functional Plasma desktop. Users do not need to understand or manually manage the underlying dependency tree.

The goal is to make software installation and removal as straightforward as installing an application on Android: install a layer, use it, and remove it when it is no longer needed.

This philosophy differs significantly from the approach taken…
