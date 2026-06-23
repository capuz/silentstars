---
repo: "yurake/k8s-3tier-webapp"
name: "k8s-3tier-webapp"
description: "Sample web application based on k8s"
url: "https://github.com/yurake/k8s-3tier-webapp"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["kubernetes", "minikube", "openshift", "docker", "activemq", "kafka", "kind", "quarkus", "github-actions", "cicd"]
stars: 18
forks: 26
openIssues: 26
closedIssues: 1927
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2019-04-13T11:57:45Z"
lastCommitAt: "2026-06-23T06:43:52Z"
lastReleaseAt: "2022-10-06T15:52:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["renovate[bot]", "yurake"]
openGraphImageUrl: "https://opengraph.githubassets.com/83b0718616df0d3973f11e839a216dddc41da52564ece2ba712ab85eea47d558/yurake/k8s-3tier-webapp"
---

# 🦌 k8s-3tier-webapp

Sample web application based on k8s. Focus on connecting components, setting k8s resources, and aiming to microservices. The k8s-3tier-webapp service is for PoC, not production ready.

More details at [sonarcloud](SONARCLOUD.md)

* * *

| Tier |    Name    |                Description               |
| :--: | :--------: | :--------------------------------------: |
|   1  |  Frontend  | Web page, Application logic, Static file |
|   2  |   Backend  |        Database, Cache, Messaging        |
|   3  | Management |        Monitoring, CI/CD, Tracing        |

![LayardArchitecturalOverview.png](docs/LayardArchitecturalOverview.png)

## Concepts

-   Choice better architecture what you expect based on k8s
-   Help understanding k8s resources based on yaml
-   Test automation on Github Actions for free
-   Expand test automation - unit, end-to-end, performance, recovery, security
-   Keep observability for monitoring services
-   Improve application quality using public CI services that following Github

## Features

-   All docker components run on k8s
-   All application written by Java mostly Quarkus
-   k8s resources written by yaml, try not to use helm,…
