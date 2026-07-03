---
repo: "fluxzero-io/fluxzero-sdk-java"
name: "fluxzero-sdk-java"
description: "Client libraries to interface with Fluxzero Runtime"
url: "https://github.com/fluxzero-io/fluxzero-sdk-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 18
forks: 2
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2025-09-05T09:41:44Z"
lastCommitAt: "2026-07-03T12:21:52Z"
lastReleaseAt: "2025-09-10T10:33:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["renedewaele", "dependabot[bot]", "jbruinink"]
openGraphImageUrl: "https://opengraph.githubassets.com/c72ffcb9c96b9c36654694e80a8977fcb4c70b65bac27e0c207bbf5e3da2b01f/fluxzero-io/fluxzero-sdk-java"
discussionCount: 0
---

</a>

# Fluxzero Java SDK

This repository contains the official Java SDK for [Fluxzero](https://fluxzero.io). For a short overview of 
functionalities, check out this [cheatsheet](docs/cheatsheet.pdf).

---

## Installation

### Maven Users

Import the [Fluxzero BOM](https://mvnrepository.com/artifact/io.fluxzero/fluxzero-bom) in your
`dependencyManagement` section to centralize version management:

```xml

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.fluxzero</groupId>
            <artifactId>fluxzero-bom</artifactId>
            <version>${fluxzero.version}</version> 
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

Then declare only the dependencies you actually need (no version required):

```xml

<dependencies>
    <dependency>
        <groupId>io.fluxzero</groupId>
        <artifactId>java-client</artifactId>
    </dependency>
    <dependency>
        <groupId>io.fluxzero</groupId>
        <artifactId>java-client</artifactId>
        <classifier>tests</classifier>
        <scope>test</scope>
    </dependency>
    <dependency>…
