---
repo: "mabartos/keycloak-quarkus-extensions"
name: "keycloak-quarkus-extensions"
description: "Easy way how to add Quarkus extensions to your Keycloak deployment"
readmeQualityOk: true
url: "https://github.com/mabartos/keycloak-quarkus-extensions"
language: "Shell"
languages: ["Shell", "Java"]
languagePcts: [69, 31]
stars: 21
forks: 1
openIssues: 2
closedIssues: 9
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-10-21T17:06:46Z"
lastCommitAt: "2026-09-06T08:04:57Z"
lastReleaseAt: "2025-12-17T13:48:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["mabartos"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/876261465/f415e4c7-fa8f-4982-b85d-f81e7e283bee"
discussionCount: 2
---

# Keycloak Quarkus Extensions

**Easily add Quarkus/Quarkiverse extension to your Keycloak distribution.**

The principle is quite basic as it mimics the process of building Keycloak distribution for the main Keycloak.
It will just include all Quarkus/Quarkiverse extensions in the distribution.

```shell
Add Quarkus/Quarkiverse extensions to your Keycloak deployment

Usage: ./kc-extension.sh <command>

Options:
  -h, --help                Display this help message.

Commands:
  add    <extension>        Add Quarkus/Quarkiverse extension.
  add    <GAV>              Manually add Quarkiverse or your own extension to the project by specifying <groupId:artifactId:version>.
  build                     Rebuild the Keycloak distribution with custom extensions.
  list                      Display all available extensions.
  start-dev                 Execute the generated Keycloak distribution in development mode.
  image                     Build extended Keycloak builder image with your custom extensions.
```

For more advanced use-cases, see the [Configuration guides](https://github.com/mabartos/keycloak-quarkus-extensions/blob/HEAD/examples/README.md#configuration).

## Supported…
