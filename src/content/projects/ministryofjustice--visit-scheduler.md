---
repo: "ministryofjustice/visit-scheduler"
name: "visit-scheduler"
description: "A microservice for managing the schedule of prison visits"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/visit-scheduler"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["hmpps", "api"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 3
watchers: 40
contributors: 462
recentReleases: 0
createdAt: "2021-09-22T15:32:27Z"
lastCommitAt: "2026-08-28T14:21:39Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 97
undervaluedScore: 59
maintainers: ["renovate[bot]", "adaviesMOJ", "dhirajshettymoj"]
openGraphImageUrl: "https://opengraph.githubassets.com/d80561e3ba2f1bf1b0a9565b4f826e28057a5df0bb61c7faa66012f130b3241e/ministryofjustice/visit-scheduler"
---

# HMPPS Visit Scheduler API

This is a Spring Boot application, written in Kotlin, providing visit schedule information. Used by [Visits UI](https://github.com/ministryofjustice/book-a-prison-visit-staff-ui).

Posted event Specification [](https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/ministryofjustice/visit-scheduler/main/visit-scheduler-event-specification.yaml)

## Building

To build the project (without tests):
```
./gradlew clean build -x test
```

## Testing

Run:
```
./gradlew test 
```

## Running

The visit-scheduler uses the deployed dev environment to connect to most of the required services,
with an exception of the scheduler-db and local-stack.

To run the visit-scheduler, first start the required local services using docker-compose.

```
docker-compose up -d
```
Next create a .env file at the project root and add 2 secrets to it
```
SYSTEM_CLIENT_ID="get from kubernetes secrets for dev namespace"
SYSTEM_CLIENT_SECRET"get from kubernetes secrets for dev namespace"
```

Then create a Spring Boot run configuration with active profile of 'dev' and set an environments file to the 
`.env` file we just created. Run the service in your chosen IDE.

Ports…
