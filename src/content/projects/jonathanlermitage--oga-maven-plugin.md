---
repo: "jonathanlermitage/oga-maven-plugin"
name: "oga-maven-plugin"
description: ":jigsaw: Old GroupIds Alerter - A Maven plugin that checks for deprecated groupId+artifactId (e.g. did you know that graphql-spring-boot-starter moved from com.graphql-java to com.graphql-java-kickstart?)."
url: "https://github.com/jonathanlermitage/oga-maven-plugin"
homepage: "https://central.sonatype.com/search?q=biz.lermitage.oga"
language: "Java"
languages: ["Java"]
languagePcts: [79]
topics: ["maven-plugin", "dependency-analysis"]
stars: 50
forks: 6
openIssues: 7
closedIssues: 29
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2019-06-26T15:04:00Z"
lastCommitAt: "2026-06-23T23:30:02Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 71
undervaluedScore: 37
maintainers: ["jonathanlermitage", "timtebeek", "froque"]
openGraphImageUrl: "https://opengraph.githubassets.com/67af7ce1a1c5db642c5f14f81e69bcc56ba4db3f7bebc3703e4e636b328dbd2d/jonathanlermitage/oga-maven-plugin"
fundingLinks: ["CUSTOM:http://buymeacoff.ee/jlermitage"]
discussionCount: 0
---

<h1 align="center">
    Old GroupIds Alerter - Maven Plugin
</h1>

</p>

A Maven plugin that checks for deprecated *groupId + artifactId* couples, in order to reduce usage of non-maintained 3rd-party code (e.g. did you know that artifact `graphql-spring-boot-starter` moved from `from com.graphql-java` to `com.graphql-java-kickstart`?).

Works with Maven 3.3+ and JDK8+.

*Looking for a Gradle plugin? Check [oga-gradle-plugin](https://github.com/jonathanlermitage/oga-gradle-plugin).*

This project also is used by the [OpenRewrite / Find relocated dependencies recipe](https://docs.openrewrite.org/recipes/java/dependencies/relocateddependencycheck). Meanwhile, the Maven plugin offers more configuration options.

## Author

Jonathan Lermitage (<jonathan.lermitage@gmail.com>)  
Linkedin profile: [jonathan-lermitage-092711142](https://www.linkedin.com/in/jonathan-lermitage-092711142/)

## Usage

### Goal

There's one maven goal: `biz.lermitage.oga:oga-maven-plugin:check`.

Execution will produce error  message everytime a deprecated *groupId + artifactId* couple is found.  
You may see something like `[ERROR] 'com.graphql-java:graphql-spring-boot-starter' should be replaced by…
