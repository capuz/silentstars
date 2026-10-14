---
repo: "candrews/jumpstart"
name: "jumpstart"
description: "Clonable application intended to jumpstart new projects. Java/Postgres/Spring Boot/Typescript/React"
readmeQualityOk: true
url: "https://github.com/candrews/jumpstart"
language: "Java"
languages: ["Java"]
languagePcts: [64]
stars: 26
forks: 7
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-10-24T16:52:46Z"
lastCommitAt: "2026-10-14T08:57:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 56
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8990d21ab06dfa6e8b9d80f59f9052888ef07bb1041c9c065f7fcdb024ed922f/candrews/jumpstart"
---

# Jumpstart for Spring Boot with Postgres and React

## What is this project?

This repository contains be a clonable application intended to jumpstart new projects. Many Spring Boot project start off in the same way with similar basic requirements, such as a frontend, some security, a database, and testing. Projects also always benefit from the application of the best practices. Rather than reinvent the wheel each time a new project kicks off, this jumpstart allows new efforts to get a solid foundation easily allowing the team to get to the real work quickly.

The demonstrated application itself is a simple "Hello World" application. There is a Spring Boot based backend that connects to a Postgres database. The backend serves the frontend which is a React application. The application is horizontally scalable and fault tolerant (through Spring Session JDBC).

## Included Technologies

* Backend
  * Java 25
  * [Spring Boot](https://spring.io/projects/spring-boot)
  * [Project Lombok](https://projectlombok.org)
  * [Gradle](https://gradle.org/)
  * [Testcontainers](https://www.testcontainers.org/) (not used in production)
  * [Spring…
