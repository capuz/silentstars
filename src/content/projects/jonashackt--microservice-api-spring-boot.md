---
repo: "jonashackt/microservice-api-spring-boot"
name: "microservice-api-spring-boot"
description: "Example project showing how to interact with a Nuxt.js / Vue.js based frontend building a Spring Boot microservice "
readmeQualityOk: true
url: "https://github.com/jonashackt/microservice-api-spring-boot"
language: "Java"
languages: ["Java"]
languagePcts: [86]
stars: 21
forks: 7
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-04-28T07:45:15Z"
lastCommitAt: "2026-10-21T19:41:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 50
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/249e42452759494b92db38513c0b2d82bc49df6a77fc8d217d0fd6a71772c3e0/jonashackt/microservice-api-spring-boot"
---

# microservice-api-spring-boot

Example project showing how to interact with a Nuxt.js / Vue.js based frontend (https://github.com/jonashackt/microservice-ui-nuxt-js) building a Spring Boot microservice
```shell
┌────────────────────────────────┐
│                                │
│                                │
│    microservice-ui-nuxt-js     │
│                                │
│                                │
└───────────────┬────────────────┘
                │
                │
┌───────────────▼────────────────┐
│                                │
│                                │
│  microservice-api-spring-boot  │
│                                │
│                                │
└────────────────────────────────┘
```

Most of the source is simply copied from my project https://github.com/jonashackt/spring-boot-vuejs/tree/master/backend

## Acting as API backend for Nuxt.js frontend

We have a slightly different deployment than the single one in https://github.com/jonashackt/spring-boot-vuejs here, where we deployed everything (including the frontend) into a Spring Boot embedded Tomcat.

Now we deploy the frontend separately from the backend - which also has some…
