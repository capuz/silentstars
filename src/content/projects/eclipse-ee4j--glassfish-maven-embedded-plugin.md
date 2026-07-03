---
repo: "eclipse-ee4j/glassfish-maven-embedded-plugin"
name: "glassfish-maven-embedded-plugin"
description: "Glassfish maven embedded plugin"
url: "https://github.com/eclipse-ee4j/glassfish-maven-embedded-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["cloud-native", "glassfish", "hacktoberfest", "jakarta-ee", "jakartaee", "java", "maven-plugin", "embedded-glassfish"]
stars: 5
forks: 5
openIssues: 1
closedIssues: 10
watchers: 21
contributors: 35
recentReleases: 1
createdAt: "2018-09-12T19:37:36Z"
lastCommitAt: "2026-07-03T12:22:56Z"
lastReleaseAt: "2026-05-19T16:48:45Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 64
maintainers: ["OndroMih", "dependabot[bot]", "glassfish-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fcff95dd23bde1577b8af5eb20eff771f37a7d5e7626722e811cca07505d165/eclipse-ee4j/glassfish-maven-embedded-plugin"
---

# Maven Embedded GlassFish Plugin

A Maven plugin for managing Embedded GlassFish server instances during the build lifecycle.

Supports Eclipse GlassFish 6, 7, 8, or newer.

## Quick Start

Run your project's main artifact on Embedded GlassFish directly from command line without modifying your `pom.xml`:

```bash
mvn org.glassfish.embedded:embedded-glassfish-maven-plugin:8.0:run -Dglassfish.version=8.0.1
```

Or add the plugin to your `pom.xml`:

```xml
<plugin>
    <groupId>org.glassfish.embedded</groupId>
    <artifactId>embedded-glassfish-maven-plugin</artifactId>
    <version>8.0</version>
    <configuration>
        <glassfish.version>8.0.1</glassfish.version>
    </configuration>
</plugin>
```

Start the server with your application and wait until it stops:
```bash
mvn embedded-glassfish:run
```

## Prerequisites

- JDK 11 or higher
- Maven 3.6.3 or higher

## Basic Usage

### Command Line

Start server in background:
```bash
mvn embedded-glassfish:start
```

Deploy application:
```bash
mvn embedded-glassfish:deploy
```

Stop server:
```bash
mvn embedded-glassfish:stop
```

### Integration Testing

```xml
<plugin>
    <groupId>org.glassfish.embedded</groupId>…
