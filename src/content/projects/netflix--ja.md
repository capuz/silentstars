---
repo: "Netflix/ja"
name: "ja"
description: "Terminal development environment for Java"
readmeQualityOk: true
url: "https://github.com/Netflix/ja"
language: "Java"
languages: ["Java"]
languagePcts: [90]
topics: ["java", "jdk"]
stars: 75
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 34
recentReleases: 10
createdAt: "2026-09-04T02:43:09Z"
lastCommitAt: "2026-10-31T02:00:44Z"
lastReleaseAt: "2026-09-17T22:44:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 35
maintainers: ["DanielThomas"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5430cae1c78f03ec122a69b4cbdec5c298c908fd5f19559c2aef9b0fded9185/Netflix/ja"
discussionCount: 11
---

# ja

Java developers have long been exceptionally well served by IDEs. Formatting source, navigating declarations and usages, reading API documentation, and exploring dependency sources and references are all part of the experience. In the terminal, those same tasks often mean searching dependency caches, locating source archives, and assembling tool arguments by hand. Coding agents encounter these gaps constantly.

`ja` is a terminal development environment for Java, bringing those capabilities to the command line through small, composable tools. The goal is to make common Java development tasks as accessible to terminal users and coding agents as they are to someone working in an IDE.

It works with module, Maven, and Gradle projects. Your working directory selects the project, and each tool gets the sources, dependencies, and Java options it needs automatically. That includes standard JDK tools such as `javac`, `jdeps`, `jlink`, and `jshell`.

For module projects, the environment also supports building, testing, and distributing applications directly from `module-info.java`. A simple program can grow into one module with dependencies, then multiple modules, without introducing…
