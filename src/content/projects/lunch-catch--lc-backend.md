---
repo: "lunch-catch/lc-backend"
name: "lc-backend"
description: "Lunch Catch Backend"
originalDescription: "Lunch Catch 백엔드"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/lunch-catch/lc-backend"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 25
closedIssues: 434
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-09-21T14:38:22Z"
lastCommitAt: "2026-10-24T08:07:25Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 54
maintainers: ["yongmaru789", "devjohnpark", "gyudongjeong"]
openGraphImageUrl: "https://opengraph.githubassets.com/de8b40c0c3ccb8fad35f733182f2c851c9499d20097079a6c90705528b29bebe/lunch-catch/lc-backend"
---

# lc-backend

## Service

1. An owner (`owner`) registers a campaign (`campaign`), and an admin (`admin`) creates first-come, first-served coupon flyers from LLM-generated templates, then pays to top up points.
2. Ad coupon feeds are served (`adserving`) to members (`member`), and when a member views a coupon, points are charged (`billing`) based on that impression.
3. When a first-come, first-served coupon event starts, members receive a coupon (`coupon`), and the owner at the store (`store`) scans the dynamic QR code in the coupon box to process the coupon redemption.

## Tech Stack

* Language: Java 21 (`eclipse-temurin:21.0.9`)
* Build: Gradle 8.14.3 (wrapper)
* Framework: Spring Boot 4.0.5
* Database: MySQL 8.4, Valkey 9.0
* Data access: Spring Data JPA, QueryDSL, Flyway
* Authentication: Spring Security, OAuth2 Client, JJWT 0.12.7
* API docs: springdoc-openapi 3.0.3
* Resilience: resilience4j 2.4.0 (`spring-boot4`), 2.3.0 (`circuitbreaker`)
* Observability: Micrometer Prometheus, logstash-logback-encoder 8.0
* Testing: JUnit 5, Testcontainers, ArchUnit 1.4.1, JaCoCo 0.8.15
* Static analysis: SonarQube Gradle plugin 7.5.0.8588

## Structure

It is a three-layer structure…
