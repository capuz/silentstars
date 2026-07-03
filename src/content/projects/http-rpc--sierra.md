---
repo: "HTTP-RPC/Sierra"
name: "Sierra"
description: "Declarative UI for Java"
url: "https://github.com/HTTP-RPC/Sierra"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["declarative-ui", "java", "swing", "xml", "gui", "charts"]
stars: 146
forks: 11
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 1
createdAt: "2022-07-18T16:51:23Z"
lastCommitAt: "2026-07-03T12:21:27Z"
lastReleaseAt: "2026-06-22T19:04:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 31
maintainers: ["gk-brown"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e8611572b2d850cdfa4c5a90670d6756f2ae96d0097585c3647e99020196716/HTTP-RPC/Sierra"
discussionCount: 19
---

# Introduction
Sierra is an open-source framework for simplifying development of Java Swing applications. It is extremely lightweight and has minimal external dependencies. The project's name comes from the nautical _S_ or _Sierra_ flag, representing the first letter in "Swing":

This guide introduces the Sierra framework and provides an overview of its key features.

# Getting Sierra
Sierra is distributed via Maven Central at [org.httprpc:sierra](https://central.sonatype.com/artifact/org.httprpc/sierra/versions). Java 21 or later is required. [FlatLaf](https://www.formdev.com/flatlaf/) is recommended.

A [DTD](sierra.dtd) is provided to assist with editing. It is not used for validation and is not required. 

A custom DTD can be generated using the [DTD encoder](sierra-tools/dtd-encoder) tool. An interactive [previewer](sierra-tools/previewer) tool is also available. Both can be downloaded [here](https://github.com/HTTP-RPC/Sierra/releases).

# Sierra Classes
Sierra provides the `UILoader` class, which can be used in conjunction with the following types to declaratively establish a hierarchy of user interface elements:

* `RowPanel` - arranges sub-components in a horizontal line,…
