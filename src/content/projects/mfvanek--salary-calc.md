---
repo: "mfvanek/salary-calc"
name: "salary-calc"
description: "Demo app for salary calculation (Spring Boot)"
readmeQualityOk: true
url: "https://github.com/mfvanek/salary-calc"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["checkstyle", "jacoco", "jpa", "pmd", "postgresql", "spotbugs", "spring-boot", "swagger", "java", "maven"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-08-31T11:18:26Z"
lastCommitAt: "2026-11-11T12:12:05Z"
lastReleaseAt: "2025-12-07T17:04:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 70
maintainers: ["dependabot[bot]", "mfvanek"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad5041af1c39d7fda76ab07e5b07f35b65c3c3b89446440362f841c6f9d2e6b4/mfvanek/salary-calc"
postedAt: "2026-11-07T10:43:48.972Z"
---

# salary-calc

Demo app for salary calculation (Spring Boot)

## Requirements

- Java 25+  
- Spring Boot 4.0+

## API

### Actuator

- [Swagger UI](http://localhost:8090/actuator/swagger-ui)
- [Health](http://localhost:8090/actuator/health)

### Endpoints
```shell
curl http://localhost:8080/api/employee/dcffa631-595a-44e6-8f8c-1c077de895bf
```

```shell
curl -i -X POST -d "{\"firstName\": \"John\",\"lastName\": \"Wick\",\"standardHoursPerDay\": 8,\"salaryPerHour\": 5000}" http://localhost:8080/api/employee -H "Content-Type: application/json"
```

```shell
curl http://localhost:8080/api/employee/all
```

## Run locally

### With database from Testcontainers

```
mvn spring-boot:test-run -Dspring-boot.run.jvmArguments="-Duser.timezone=Europe/Moscow"
```

You can also run `LocalDevApplication` (in test sources) directly from your IDE.

### With external database

```
mvn spring-boot:run -Dspring-boot.run.profiles=extern -Dspring-boot.run.jvmArguments="-Duser.timezone=Europe/Moscow"
```

## Run in Docker

### Build image

```
mvn clean spring-boot:build-image -DskipTests -DskipSpotbugs=true
```

### Build native image

```
mvn clean spring-boot:build-image -DskipTests…
