---
repo: "sivaprasadreddy/progen"
name: "progen"
description: "Spring Boot Project Generator CLI"
readmeQualityOk: true
url: "https://github.com/sivaprasadreddy/progen"
homepage: "https://sivaprasadreddy.github.io/progen/"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [54]
topics: ["cli", "spring-boot"]
stars: 66
forks: 10
openIssues: 2
closedIssues: 21
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-11-04T03:15:01Z"
lastCommitAt: "2026-08-26T04:15:49Z"
lastReleaseAt: "2025-10-14T05:54:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 48
maintainers: ["sivaprasadreddy"]
openGraphImageUrl: "https://opengraph.githubassets.com/48d3cdbe1d0f7e9f65c76df20939324e54583125d0b4bbe3246876ba07bfa985/sivaprasadreddy/progen"
---

# Project Generator CLI
A CLI tool for generating Spring Boot projects.

## Motivation
There are a few good project generator tools exist, such as [JHipster](https://www.jhipster.tech/), [Bootify](https://bootify.io/), [generator-springboot](https://github.com/sivaprasadreddy/generator-springboot).

The reasons for creating this new **progen** CLI tool are:
* To generate the application with minimal code and include only the most commonly used features and configurations.
* We should be able to use the tool offline to create the projects.
* We should be able to use the tool without requiring the installation of other languages SDKs.
  For example, for generating a Java application, we shouldn't need to install Node.js or Python, etc.

## features
The progen generates a Spring Boot application with the following features configured:

* [Spring Boot](https://spring.io/projects/spring-boot) project with **Maven** and **Gradle** support
* Persistence Frameworks: **Spring Data JPA**, **Spring JdbcClient**, **jOOQ** 
* Databases: **PostgreSQL**, **MySQL**, **MariaDB** databases
* Database migration Tools: [Flyway](https://www.red-gate.com/products/flyway/community/) and…
