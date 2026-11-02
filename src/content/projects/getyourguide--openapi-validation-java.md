---
repo: "getyourguide/openapi-validation-java"
name: "openapi-validation-java"
description: "Java library validating live HTTP requests/responses against an OpenAPI spec"
readmeQualityOk: true
url: "https://github.com/getyourguide/openapi-validation-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "openapi", "spring-boot", "openapi-specification", "openapi-validation"]
stars: 15
forks: 2
openIssues: 3
closedIssues: 0
watchers: 4
contributors: 25
recentReleases: 0
createdAt: "2023-05-12T08:14:30Z"
lastCommitAt: "2026-11-02T13:38:11Z"
lastReleaseAt: "2023-08-28T15:53:10Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 70
undervaluedScore: 41
maintainers: ["dependabot[bot]", "midnight-clue[bot]", "catarina-correia"]
openGraphImageUrl: "https://opengraph.githubassets.com/9773c10d817d567ca408adf6514cccbce939fd1a6dcdb2d4eb88fcdae3dbe1d1/getyourguide/openapi-validation-java"
discussionCount: 21
---

# Java OpenAPI Validation Library

Build trust in your spec by validating live requests and responses against your OpenAPI spec.
Get informed through logs or metrics when violations occur.

Uses the following library for the validation: https://bitbucket.org/atlassian/swagger-request-validator

## Installation

1. [Add dependency in gradle](#gradle)
2. [Provide OpenAPI specification file](#provide-openapi-specification-file)

### Gradle
#### Spring 3
There are separate integrations for `spring-boot-starter-web` (servlet) and `spring-boot-starter-webflux` (reactive).

##### spring-boot-starter-web (servlet)
```groovy
dependencies {
    implementation "com.getyourguide.openapi.validation:spring-boot-starter-web:{latest-version}"
}
```

##### spring-boot-starter-webflux (reactive)
```groovy
dependencies {
    implementation "com.getyourguide.openapi.validation:spring-boot-starter-webflux:{latest-version}"
}
```

### Provide OpenAPI specification file
The library will require a valid OpenAPI specification file to be present in the classpath.

By default, it will look for `openapi.yaml`, `openapi.json`, `spec.yaml` or `spec.json`.

Do one of the following.
- Copy spec into…
