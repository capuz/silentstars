---
repo: "dannil/scb-java-client"
name: "scb-java-client"
description: "Java client for the Statistiska centralbyrån (Statistics Sweden) API"
readmeQualityOk: true
url: "https://github.com/dannil/scb-java-client"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["scb", "statistics-sweden", "statistiska-centralbyran", "statisticssweden", "statistiskacentralbyran"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 22
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2015-02-26T22:47:21Z"
lastCommitAt: "2026-07-18T05:49:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 70
maintainers: ["dependabot[bot]", "dannil"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed9308f1604dfae034769a4cd6e47e804696f90c29f09f4113d76785fe7927a5/dannil/scb-java-client"
---

# scb-java-client

Java client for the SCB (Swedish: [Statistiska centralbyrån](http://www.scb.se/sv_/), English: [Statistics Sweden](http://www.scb.se/en_/)) API. 
The goal of this project is to provide an easy and intuitive way for developers to interface their applications with the SCB API without having to 
know the intricate workings or writing own logic to handle the process. 

If you have an improvement, feel free to make a pull request or start an issue if you'd like feedback.

## Requirements

| Release       | Java version |
|---------------|--------------|
| 1.x.x - 3.x.x | 11           |
| SNAPSHOT      | 21           |

## Installation

### Maven

```xml
<dependency>
  <groupId>com.github.dannil</groupId>
  <artifactId>scb-java-client</artifactId>
  <version>3.0.0</version>
</dependency>
```

### Gradle
```xml
compile 'com.github.dannil:scb-java-client:3.0.0'
```

### SBT
```xml
libraryDependencies += "com.github.dannil" % "scb-java-client" % "3.0.0"
```

## Usage

This demonstrates the typical usage of the client.

```java
// Create the client
SCBClient client = new SCBClient();

// Retrieve some client(s) matching the table(s) you want to fetch information from…
