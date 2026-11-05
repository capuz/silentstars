---
repo: "aistomin/maven-browser"
name: "maven-browser"
description: "Java library that allows to search and browse the Maven artifacts"
readmeQualityOk: true
url: "https://github.com/aistomin/maven-browser"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["maven", "maven-plugin", "maven-pom", "maven-dependency-reporting", "maven-repository", "maven-dependency-updates"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 272
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-06-12T05:38:37Z"
lastCommitAt: "2026-11-05T08:04:42Z"
lastReleaseAt: "2022-05-24T01:45:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 73
maintainers: ["aistomin", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e60b514d03f1858d812df46a01667951b5eddbffe68aea8d4a646567db51fa1f/aistomin/maven-browser"
---

# maven-browser

This Java library allows you to search and browse Maven Central. It uses the
[Maven Central Search API](https://central.sonatype.org/search/rest-api-guide/)
for artifact lookup and the standard Maven repository layout at
[repo1.maven.org](https://repo1.maven.org/maven2/) (`maven-metadata.xml`) for
version information. The library can be useful for developers who create CI
scripts or other tools that need to read information from Maven Central.

## Getting Started

### System Requirements

- JDK 25 or higher.
- Apache Maven 3.8.3 or higher.

### Add Maven Dependency

If you use Maven, add the following configuration to your project's `pom.xml`:

```maven
<dependencies>
    
    <dependency>
        <groupId>com.github.aistomin</groupId>
        <artifactId>maven-browser</artifactId>
        <version>6.0</version>
    </dependency>
    
</dependencies>
```

or, if you use Gradle, add the following line to your build file:

```gradle
implementation 'com.github.aistomin:maven-browser:6.0'
```

### Read Data from Maven Central

We created some Groovy examples of how the library can be used. Please take a
look at the [examples…
