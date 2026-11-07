---
repo: "hendisantika/Spring-Boot-Angular-10-User-Registration"
name: "Spring-Boot-Angular-10-User-Registration"
description: "Spring Boot 2 + Angular 10 User Registration and OAuth2 Social Login with Facebook, Google, LinkedIn and Github"
readmeQualityOk: true
url: "https://github.com/hendisantika/Spring-Boot-Angular-10-User-Registration"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [69, 22]
stars: 6
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-10-31T15:36:01Z"
lastCommitAt: "2026-11-07T22:51:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 59
maintainers: ["hendisantika", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57d38f7d53a731e737660d577319f4b391a9e491b30c2253953e1d8dd2f1752/hendisantika/Spring-Boot-Angular-10-User-Registration"
---

# Spring-Boot-Angular-10-User-Registration

Spring Boot + Angular 10 User Registration with JWT authentication and OAuth2 Social Login
(Google, Facebook, GitHub and LinkedIn).

## Tech Stack

| Layer    | Technology                                                                                  |
|----------|---------------------------------------------------------------------------------------------|
| Backend  | Java 25, Spring Boot 4.1.x, Spring Security 7 (OAuth2 Client), Spring Data JPA, jjwt 0.13   |
| Database | MySQL 8 (runtime), H2 in-memory (tests)                                                     |
| Frontend | Angular 10                                                                                  |
| Build    | Maven Wrapper (Maven 3.9.x), npm                                                            |
| CI/CD    | GitHub Actions (build & test on JDK 25, dependency graph submission), Dependabot            |

## Project Structure

```
.
├── backend/                  # Spring Boot REST API (user-service)
├── angular-10-social-login/  # Angular 10 frontend
└── .github/
    ├── workflows/maven.yml   # CI: build & test backend with JDK 25
    └── dependabot.yml…
