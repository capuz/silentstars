---
repo: "jferrater/opa-data-filter-spring-boot-starter"
name: "opa-data-filter-spring-boot-starter"
description: "Spring Boot library for enforcing authorization on Spring Data JPA and MongoDB by filtering data using the Open Policy Agent (OPA) partial evaluation feature."
readmeQualityOk: true
url: "https://github.com/jferrater/opa-data-filter-spring-boot-starter"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["openpolicyagent", "opa", "java", "authorization", "datafilter", "springboot", "java-library", "mongodb", "sqldb", "spring-data-jpa"]
stars: 30
forks: 4
openIssues: 4
closedIssues: 28
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2020-02-17T16:22:34Z"
lastCommitAt: "2026-11-11T11:16:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/72ff5271051e8a6e8be2ab8a3743a61901efbf4724c3914161104aa9fe20e4d5/jferrater/opa-data-filter-spring-boot-starter"
fundingLinks: ["CUSTOM:https://www.paypal.me/JFerrater"]
---

# Data Filtering for Spring Data with Open Policy Agent (OPA)

---

## Overview

**OPA Data Filter Spring Boot Starter** is a suite of enterprise authorization libraries that bring **Policy-Based Access Control (PBAC)** and **Attribute-Based Access Control (ABAC)** directly into the persistence layer of Spring Data applications using [Open Policy Agent (OPA) Partial Evaluation](https://blog.openpolicyagent.org/partial-evaluation-162750eaf422).

### Why OPA Data Filtering?
Traditional authorization frameworks enforce security after data is retrieved:
* ❌ **In-Memory Filtering**: Pulling all database records into application memory to filter them leaks unauthorized data over the network and exhausts server memory.
* ❌ **Hardcoded SQL Constraints**: Writing role checks and SQL `WHERE` clauses into repositories tightly couples business code to authorization logic and causes security policy drift.

### The Solution: Compile Policies into Database Queries
With OPA Partial Evaluation, policies remain centrally managed in Rego. When a request arrives, OPA compiles the policy against the caller's identity (user, roles, HTTP headers, request path) and returns a simplified Abstract Syntax…
