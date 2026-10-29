---
repo: "tuyucheng777/FastThreadPool"
name: "FastThreadPool"
description: "Custom thread pool(traditional thread & loom virtual thread)"
readmeQualityOk: true
url: "https://github.com/tuyucheng777/FastThreadPool"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "loom", "thread-pool"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-04T06:32:03Z"
lastCommitAt: "2026-10-29T05:50:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["tuyucheng777"]
openGraphImageUrl: "https://opengraph.githubassets.com/b028ba9476978872cc258aa3ac07e890ac8c7c5b1ace44d462f158a140508b6c/tuyucheng777/FastThreadPool"
---

&nbsp;FastThreadPool

A fast `ScheduledExecutorService` implementation backed by platform threads or virtual threads.

The platform-thread pool grows and shrinks its workers on demand, can interrupt tasks that exceed a
configured timeout, applies a pluggable task submission policy, and exports Micrometer metrics. The
virtual-thread pool starts one virtual thread per task and relies on the JDK scheduler. Every
submission and scheduling method returns a `CompletableFuture`, so tasks compose without blocking on
`Future.get()`.

## Requirements

- Java 27 or later
- Maven 3.9 or later when building from source

## Installation

Maven:

```xml
<dependency>
    <groupId>io.github.tuyucheng777</groupId>
    <artifactId>FastThreadPool</artifactId>
    <version>1.0.0</version>
</dependency>
```

Gradle:

```kotlin
implementation("io.github.tuyucheng777:FastThreadPool:1.0.0")
```

## Quick start

### Platform threads

```java
import io.github.tuyucheng777.fastthreadpool.ThreadPool;

import java.time.Duration;
import java.util.concurrent.CompletableFuture;

ThreadPool pool = ThreadPool.builder(16)
        .minNumWorkers(2)
        .idleTimeout(Duration.ofSeconds(60))…
