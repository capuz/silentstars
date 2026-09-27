---
repo: "problem4j/problem4j-spring"
name: "problem4j-spring"
description: "Spring integration for library implementing RFC7807 (and RFC9457)"
readmeQualityOk: true
url: "https://github.com/problem4j/problem4j-spring"
homepage: "https://problem4j.github.io"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["rfc7807", "problem-details", "spring-boot", "exception-handling", "library", "problem", "java", "rfc9457", "spring-webflux", "spring-webmvc"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-10-18T17:50:00Z"
lastCommitAt: "2026-09-21T21:11:25Z"
lastReleaseAt: "2025-11-25T18:29:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 72
maintainers: ["damianmalczewski", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a16ae5c175d20a8fd8d70aeb79d4baaf461c38ef9c9055592142e205fc530f3c/problem4j/problem4j-spring"
---

<h1 align="center">Problem4J Spring</h1>

</p>

Designing clear and consistent error responses in a REST API is often harder than it looks. Without a shared standard,
each application ends up inventing its own ad-hoc format, which quickly leads to inconsistency and confusion.
[RFC 7807 - Problem Details for HTTP APIs][rfc7807] solves this by defining a simple, extensible JSON structure for
error messages.

**Problem4J** brings this specification into the Spring ecosystem, offering a practical way to model, throw, and handle
API errors using `Problem` objects. It helps you enforce a consistent error contract across your services, while staying
flexible enough for custom exceptions and business-specific details.

> Note that [RFC 7807][rfc7807] was later extended in [RFC 9457][rfc9457], however core concepts remain the same.

## Table of Contents

- [Why bother with Problem4J](#why-bother-with-problem4j)
- [Usage](#usage)
- [Maven Dependency](#maven-dependency)
- [Repository](#repository)
- [Project Status](#project-status)
- [Problem4J Links](#problem4j-links)
- [Building from source](#building-from-source)

## Why bother with Problem4J

Even though Spring provides `ProblemDetail`…
