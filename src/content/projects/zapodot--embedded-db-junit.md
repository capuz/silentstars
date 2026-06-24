---
repo: "zapodot/embedded-db-junit"
name: "embedded-db-junit"
description: "JUnit Rule for providing an embedded in-memory database for your tests"
url: "https://github.com/zapodot/embedded-db-junit"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["jdbc", "java", "junit", "sql", "liquibase", "testing", "junit-rule", "hsqldb", "flyway", "h2-database"]
stars: 63
forks: 8
openIssues: 0
closedIssues: 26
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2014-12-29T11:25:35Z"
lastCommitAt: "2026-06-24T06:42:12Z"
lastReleaseAt: "2021-10-25T09:58:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 49
maintainers: ["dependabot[bot]", "zapodot"]
openGraphImageUrl: "https://opengraph.githubassets.com/723131863fd56ca3831871a523cea662bb0c2836f0d75bb7f521d73bf81fd464/zapodot/embedded-db-junit"
---

embedded-db-junit
=================

[JUnit](http://junit.org/) Rule that provides a in-memory database (both [H2](http://www.h2database.com/) and [HyperSQL](http://hsqldb.org) are supported). It is compatible with all known JDBC access libraries such as [Spring JDBC](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/jdbc.html#jdbc-introduction), [RX-JDBC](//github.com/davidmoten/rxjava-jdbc), [sql2o](http://www.sql2o.org/), [JDBI](http://jdbi.org/) or plain old JDBC.

## Why?
* because you want to test the SQL code executed by your code without integrating with an actual DB server
* removes the need of having a database server running and available
* you are refactoring legacy code where JDBC calls is tightly coupled with your business logic and wants to start by testing the legacy code from the "outside" (as suggested by [Michael Feathers](http://www.informit.com/store/working-effectively-with-legacy-code-9780131177055?aid=15d186bd-1678-45e9-8ad3-fe53713e811b))
* you want to test your database evolutions with either they are maintened using [Liquibase](./embedded-db-junit-liquibase/) or [Flyway](./embedded-db-flyway/).

## Status
This library is…
