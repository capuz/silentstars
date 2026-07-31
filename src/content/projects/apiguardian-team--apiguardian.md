---
repo: "apiguardian-team/apiguardian"
name: "apiguardian"
description: "Java annotation for documenting the @API status of types and members in Java APIs. Maintained by the JUnit team."
readmeQualityOk: true
url: "https://github.com/apiguardian-team/apiguardian"
homepage: "https://apiguardian-team.github.io/apiguardian/docs/current/api/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["api-documentation"]
stars: 211
forks: 22
openIssues: 12
closedIssues: 9
watchers: 8
contributors: 11
recentReleases: 0
createdAt: "2017-09-07T17:24:16Z"
lastCommitAt: "2026-07-31T06:29:03Z"
lastReleaseAt: "2021-06-27T12:59:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 35
maintainers: ["renovate[bot]", "marcphilipp"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c05b5c5f3541c6acd5f31bcf47e17f102f60469e9c895f18ada5c8704b3c26/apiguardian-team/apiguardian"
fundingLinks: ["CUSTOM:https://junit.org/sponsoring"]
---

# @API Guardian

Library that provides the `@API` annotation that is used to annotate public types, methods, constructors, and fields within a framework or application in order to publish their status and level of stability and to indicate how they are intended to be used by consumers of the API.

## How to use it

The @API Guardian library is deployed to Maven Central. To avoid compile-time warnings, you need to declare it as a _transitive_ compile-time dependency.

### Apache Maven

```xml
<dependency>
    <groupId>org.apiguardian</groupId>
    <artifactId>apiguardian-api</artifactId>
    <version>1.1.2</version>
</dependency>
```

### Gradle

```gradle
repositories {
    mavenCentral()
}
dependencies {    
    compileOnlyApi("org.apiguardian:apiguardian-api:1.1.2")
}
```

Using `compileOnlyApi` will include the library on the compile classpath of downstream projects but not their runtime classpath. If you want downstream projects to be able to use the `@API` annotation at runtime, you should declare it as `api` instead:

```gradle
dependencies {    
    api("org.apiguardian:apiguardian-api:1.1.2")
}
```

### Java Platform Module System

```java
module org.example {
    requires…
