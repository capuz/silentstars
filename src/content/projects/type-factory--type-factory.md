---
repo: "type-factory/type-factory"
name: "type-factory"
description: "Small Java library to enable the creation of custom data types."
readmeQualityOk: true
url: "https://github.com/type-factory/type-factory"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 14
closedIssues: 28
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-05-21T06:14:16Z"
lastCommitAt: "2026-08-29T10:20:37Z"
lastReleaseAt: "2025-01-12T08:13:00Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 73
undervaluedScore: 51
maintainers: ["dependabot[bot]", "evantoli"]
openGraphImageUrl: "https://opengraph.githubassets.com/e10ccf7ea13ac99db3904b6c511182841d1d3806e943f3003f21079bfa6aa3cf/type-factory/type-factory"
discussionCount: 0
---

<br/>

Type Factory
============

Easily create custom data types and remove cruft and boilerplate from your code.

<picture>
  <source srcset="docs/intro-video-dark.gif" media="(prefers-color-scheme: dark)"/>
</picture>

Latest release
==============

Type Factory requires that you are using Java 17 or later. 

Consider importing the Type Factory bill-of-materials (bom) into your Maven dependency management section and then add the core and language modules as needed to your Maven dependencies section.

```xml

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.typefactory</groupId>
      <artifactId>type-factory-bom</artifactId>
      <version>1.0.1</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

 
<dependencies>
  <dependency>
    <groupId>org.typefactory</groupId>
    <artifactId>type-factory-core</artifactId>
  </dependency>
  <dependency>
    <groupId>org.typefactory</groupId>
    <artifactId>type-factory-language</artifactId>
  </dependency>
</dependencies>
```

[<img alt="Maven Central"…
