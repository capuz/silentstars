---
repo: "mfoo/libyear-maven-plugin"
name: "libyear-maven-plugin"
description: "Maven implementation of the libyear dependency freshness measure"
readmeQualityOk: true
url: "https://github.com/mfoo/libyear-maven-plugin"
homepage: "https://mfoo.github.io/libyear-maven-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["dependencies", "java", "libyear", "maven-plugin", "dependency-management"]
stars: 23
forks: 6
openIssues: 11
closedIssues: 6
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-01-01T22:07:58Z"
lastCommitAt: "2026-10-25T08:39:26Z"
lastReleaseAt: "2023-01-29T17:57:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 56
maintainers: ["dependabot[bot]", "mfoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/37fbe33616536147a418bb269bd1b350189ddd7e0f05486e1e96aa01bd9b5217/mfoo/libyear-maven-plugin"
---

# libyear-maven-plugin

This Maven plugin implements the [libyear](https://libyear.com/) dependency
freshness measure, showing you how many years behind the latest version each of
your dependencies are.

When executed, you'll see an output like this for each of your modules:
```
[INFO] The following dependencies in Dependencies have newer versions:
[INFO]   io.quarkus:quarkus-arc ................................. 0.27 libyears
[INFO]   io.quarkus:quarkus-junit5 .............................. 0.27 libyears
[INFO]   io.quarkus:quarkus-junit5-mockito ...................... 0.27 libyears
[INFO]   io.quarkus:quarkus-rest-client ......................... 0.27 libyears
[INFO]   io.quarkus:quarkus-resteasy ............................ 0.27 libyears
[INFO]   io.quarkus:quarkus-resteasy-jackson .................... 0.27 libyears
[INFO]   io.rest-assured:rest-assured ........................... 0.77 libyears
[INFO]   org.mockito:mockito-all ................................ 0.00 libyears
[INFO]   org.mockito:mockito-core ............................... 0.35 libyears
[INFO] 
[INFO] This module is 2.73 libyears behind
```

The plugin requires JDK 17+. It is heavily based on the [MojoHaus…
