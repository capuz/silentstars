---
repo: "jstachio/rainbowgum"
name: "rainbowgum"
description: "Fast, Small, JDK 21+, GraalVM native friendly SLF4J logging framework"
readmeQualityOk: true
url: "https://github.com/jstachio/rainbowgum"
homepage: "https://jstach.io/rainbowgum/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["graalvm-native-image", "java", "logging", "slf4j", "helidon", "jboss-log", "jcl", "log4j2", "micronaut", "spring-boot"]
stars: 122
forks: 7
openIssues: 1
closedIssues: 25
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2023-09-14T21:15:37Z"
lastCommitAt: "2026-11-06T11:24:09Z"
lastReleaseAt: "2024-09-05T13:43:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 47
maintainers: ["agentgt"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e2496ed773d4b842d6f78ab8543bedf3742e2cd5a335f6d7f67ae2e7fc09e8/jstachio/rainbowgum"
discussionCount: 7
---

# Rainbow Gum

A modern modular JDK 21+ logging framework that offers implementations for multiple facades
like SLF4J / System.Logger and does mostly what you want out of the box.

It is called **rainbow gum** after 
[Eucalyptus Deglupta](https://en.wikipedia.org/wiki/Eucalyptus_deglupta) a beautiful tree native
to Hawaii that has colorful bark ([*colorful logs*](#colorful-logs)).

In Rainbow Gum you can: 

* Leverage your existing configuration/application framework (like [avaje-config](https://avaje.io/config/) or Spring Boot `Environment`). 
* Do all your logging configuration in Java with a discoverable API of builders
* Only use System Properties and no loading of resources for a ultimate minimal experience
* Or various combinations of the above

Because Rainbow Gum is very modular it can provide a more "choose your own" experience where you can scale down and only use the JDK `System.Logger`
with minimal dependencies or scale up with fully loaded ANSI SLF4J experience. 
In some cases just adding modules will provide automatic configuration.

Rainbow Gum's default property configuration follows Spring Boot's patterns so if you are familiar with `logging.level...`
than you…
