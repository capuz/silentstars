---
repo: "seijikohara/logback-access-spring-boot-starter"
name: "logback-access-spring-boot-starter"
description: "Spring Boot 4.0+ auto-configuration for Logback Access. HTTP access logging for Tomcat/Jetty with Spring Security, TeeFilter, and profile-based configuration."
url: "https://github.com/seijikohara/logback-access-spring-boot-starter"
homepage: "https://seijikohara.github.io/logback-access-spring-boot-starter/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["access-log", "http-logging", "java", "jetty", "kotlin", "logback", "logback-access", "spring-boot", "spring-boot-starter", "tomcat"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 53
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-05T07:32:36Z"
lastCommitAt: "2026-06-23T06:41:38Z"
lastReleaseAt: "2026-06-02T05:03:46Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 63
maintainers: ["seijikohara", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccb46615a2e3f6b28ad5f795feb81acc44d46202d358ec925d1d5a7209088622/seijikohara/logback-access-spring-boot-starter"
---

# Logback Access Spring Boot Starter

</p>

Spring Boot auto-configuration for [Logback Access](https://logback.qos.ch/access.html). The starter wires HTTP access logging into Tomcat and Jetty embedded servers, integrates with Spring Security and Spring profiles, and supports request/response body capture through Logback Access's TeeFilter.

## Architecture

```mermaid
flowchart TB
    subgraph app["Spring Boot Application"]
        direction TB
        A[HTTP Request] --> B{Embedded Server}
        B -->|Tomcat| C[TomcatValve]
        B -.->|Jetty| D[JettyRequestLog]
        C -.->|after response| E[LogbackAccessContext]
        D -.->|after response| E
        E --> F[logback-access.xml]
        F --> G[Appenders]
        G -->|Console| H[Console Output]
        G -->|File| I[File Output]
        G -->|JSON| J["Logstash/ELK"]
    end

    subgraph opt["Optional Integrations"]
        K[Spring Security] -.->|Request Attribute| E
        L[TeeFilter] -.->|Body Capture| E
    end
```

## Features

| Feature | Description |
|---------|-------------|
| **Auto-configuration** | Zero-configuration setup for Tomcat and Jetty embedded servers. |
| **Spring Security** | Writes the…
