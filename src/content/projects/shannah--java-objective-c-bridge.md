---
repo: "shannah/Java-Objective-C-Bridge"
name: "Java-Objective-C-Bridge"
description: "A thin bridge that allows for two-way communication from Java to Objective-C."
readmeQualityOk: true
url: "https://github.com/shannah/Java-Objective-C-Bridge"
language: "Java"
languages: ["Java", "C++"]
languagePcts: [57, 20]
stars: 132
forks: 27
openIssues: 15
closedIssues: 20
watchers: 14
contributors: 7
recentReleases: 0
createdAt: "2012-10-29T18:16:18Z"
lastCommitAt: "2026-11-11T19:48:03Z"
lastReleaseAt: "2022-01-24T18:36:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 23
maintainers: ["shannah", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f21e85b929d77ba925aed4f90d715347fa7cc424c488896ecb5a3b9340870748/shannah/Java-Objective-C-Bridge"
---

# Java-Objective-C-Bridge

## Synopsis

A thin bridge that allows for two-way communication from Java to Objective-C.

## License

[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.html)

## Requirements

1. Java 11 or Higher on OS X
2. JNA

## Getting Started

Add the following dependency to your pom.xml:
```xml
    <dependency>
        <groupId>ca.weblite</groupId>
        <artifactId>java-objc-bridge</artifactId>
        <version>1.2</version>
    </dependency>
```

### Working with Sources

1. Check out the project and use `mvn clean install` (for debug builds) or `mvn clean install -Drelease=true` (for release builds) to build it
2. Include it as a Maven depencency in your project:
    ```xml
    <dependency>
        <groupId>ca.weblite</groupId>
        <artifactId>java-objc-bridge</artifactId>
        <version>1.3-SNAPSHOT</version>
    </dependency>
    ```

### Releasing

Releases are published to Maven Central by `.github/workflows/release.yml` when a `v*` tag is pushed:

```
git tag v1.3
git push origin v1.3
```

The version is the tag without the `v`. The workflow builds the universal Release `libjcocoa`, runs the tests against it, signs the artifacts,…
