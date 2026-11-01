---
repo: "uhafner/codingstyle"
name: "codingstyle"
description: "Java coding style and template project used at Munich university of applied sciences "
readmeQualityOk: true
url: "https://github.com/uhafner/codingstyle"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["java", "java-style", "coding-style", "coding-standards"]
stars: 34
forks: 60
openIssues: 9
closedIssues: 6
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2014-10-16T21:56:27Z"
lastCommitAt: "2026-11-01T22:58:25Z"
lastReleaseAt: "2020-08-19T22:11:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["uhafner", "renovate[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ec20a455c325d72bf5a32c56a83847e59428b570d3e71e72908e84ae2fb703e/uhafner/codingstyle"
---

Each Java project should follow a consistent coding style.
All contributions should follow the same formatting rules, design principles, code patterns, and idioms.
This coding style provides the set of rules that I am using in my lectures about software development at Munich University of Applied Sciences.

This project describes the coding style in detail (currently only available in German) and serves as a template project.
It provides all necessary resources for a Java project to enforce this coding style using the following static analysis tools via Maven (and partly in IntelliJ):
- [Checkstyle](https://checkstyle.org)
- [Error Prone](https://errorprone.info)
- [PMD](https://pmd.github.io/)
- [SpotBugs](https://spotbugs.github.io)
- [Spotless](https://github.com/diffplug/spotless)

❗This project requires a JDK version of 21 or higher.❗

Moreover, this project provides some sample classes that already use this style guide.
These classes can be used as such but are not required in this project.
These classes also use some additional libraries that are included using the Maven dependency mechanism.
If the sample classes are deleted, then the dependencies can be safely deleted,…
