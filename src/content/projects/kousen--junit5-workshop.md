---
repo: "kousen/junit5_workshop"
name: "junit5_workshop"
description: "Demos and tests for JUnit 5 workshop"
readmeQualityOk: true
url: "https://github.com/kousen/junit5_workshop"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 129
forks: 125
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 2
recentReleases: 0
createdAt: "2018-05-14T06:29:40Z"
lastCommitAt: "2026-09-28T10:06:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 36
maintainers: ["dependabot[bot]", "kousen"]
openGraphImageUrl: "https://opengraph.githubassets.com/beba765185caf7ad3bbed4734e0eb562b94e02dc0c8990ea1c5ad67778ffe89d/kousen/junit5_workshop"
---

# JUnit 5 Workshop

A comprehensive multi-project workshop demonstrating JUnit 5 features, testing best practices, and modern Java development techniques.

## Project Structure

This is a multi-project Gradle build with three main components:

### Main Project (`/`)
- **Focus**: JUnit 5 features and modern testing patterns
- **Testing Framework**: JUnit 5.13.2 (latest)
- **Key Features**: Parameterized tests, dynamic tests, nested tests, conditional tests, custom extensions
- **Additional Libraries**: AssertJ, Mockito, jqwik (property-based testing)

### Spring Subproject (`/spring`)
- **Focus**: Spring Boot integration with JUnit 5
- **Framework**: Spring Boot 3.5.3 with Spring Test
- **Database**: H2 in-memory database with JPA
- **Testing**: Repository testing, Spring context testing, database assertions

### Vintage Subproject (`/vintage`) 
- **Focus**: JUnit 4 legacy support demonstration
- **Purpose**: Training on migration patterns and backward compatibility
- **Testing Framework**: JUnit 4 via JUnit Vintage Engine

## Requirements

- **Java**: 17+ (uses Gradle toolchain)
- **Gradle**: 8.14.2 (wrapper included)
- **IDE**: Any Java IDE with Gradle support

## Getting Started…
