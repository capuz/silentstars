---
repo: "gtiwari333/spring-boot-blog-app"
name: "spring-boot-blog-app"
description: "Application to demonstrate several features of Spring Boot"
readmeQualityOk: true
url: "https://github.com/gtiwari333/spring-boot-blog-app"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [46, 36]
topics: ["spring", "spring-boot", "java", "groovy", "hibernate", "maven", "spock-framework", "spring-mvc", "spring-security", "thymeleaf"]
stars: 89
forks: 29
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-09-26T01:15:41Z"
lastCommitAt: "2026-07-04T22:19:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 30
maintainers: ["gtiwari333"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e1bc2692f52cb3bafefc7680ad54fd17055c2ed38311a840d24fa150adb1c9e/gtiwari333/spring-boot-blog-app"
---

# A BlogApp with Spring Boot

#### More complex version is here: https://github.com/gtiwari333/spring-boot-web-application-seed

### Intro

This is a simple micro blogging application where you can post a note/blog with attachments and other can view it.

The default username/passwords are listed on : gt.app.Application.initData, which are:

- system/pass
- user1/pass
- user2/pass

### Requirements

- JDK 21+
- Lombok configured on IDE
    - http://ganeshtiwaridotcomdotnp.blogspot.com/2016/03/configuring-lombok-on-intellij.html
    - For eclipse, download the lombok jar, run it, and point to eclipse installation
- Maven (optional)
- Docker
- Chrome browser for e2e test

### How to Run

- Clone/Download and Import project into your IDE, compile and run Application.java
- Update run configuration to run maven goal `wro4j:run` Before Launch. It should be after 'Build'
  OR

- ./mvnw compile spring-boot:run //if you don't have maven installed in your PC

OR

- ./mvnw compile spring-boot:run //if you have maven installed in your PC

And open   `http://localhost:8080` on your browser

Optionally, you can start the docker containers yourself using:

`docker-compose --profile mailHog up`…
