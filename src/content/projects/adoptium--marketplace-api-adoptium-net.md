---
repo: "adoptium/marketplace-api.adoptium.net"
name: "marketplace-api.adoptium.net"
description: "Adoptium Marketplace API 🚀"
readmeQualityOk: true
url: "https://github.com/adoptium/marketplace-api.adoptium.net"
homepage: "https://marketplace-api.adoptium.net"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [72, 26]
topics: ["adoptium", "api", "hacktoberfest", "java", "openjdk", "restful-api", "swagger", "temurin"]
stars: 5
forks: 8
openIssues: 5
closedIssues: 7
watchers: 10
contributors: 34
recentReleases: 0
createdAt: "2023-10-19T19:18:58Z"
lastCommitAt: "2026-08-30T00:42:43Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 80
maintainers: ["dependabot[bot]", "github-actions[bot]", "karianna"]
openGraphImageUrl: "https://opengraph.githubassets.com/e84867a20ac14c133a73d7502e62b0b5b84c8307cdb73b7d3df374fc87f037bf/adoptium/marketplace-api.adoptium.net"
fundingLinks: ["GITHUB:https://github.com/adoptium", "CUSTOM:eclipse.org/donate/adoptium"]
---

# Adoptium marketplace

This repo contains:

- adoptium-marketplace-schema
    - Schema definition for vendors to advertise their binaries
- adoptium-marketplace-client
    - Client library for reading a repository with vendor data
- adoptium-marketplace-server
    - Implementation of the adoptium marketplace API
- exampleRepositories
    - Examples of a vendor repository

# Build

Build with

```shell
./mvnw clean install
```

# Testing

Tests rely on the data inside the `exampleRepositories` directory in order for tests to pass they must be signed. If you wish to modify test assets they need to be re-signed once they have been modified. The procedure would be as follows:

- Generate test keys
    - Look in the `exampleRepositories/keys` directory for scripts that detail generating keys
- Re-sign assets
    - Run `SignTestAssets` in the `adoptium-marketplace-utils` project.

# Repository validation

A repository can be validated using the `MarketplaceClient`. The client pulls a repository and validates its contents. For example:

```java
    String publicKey = "-----BEGIN PUBLIC KEY-----\n" +
    // Public key string here
    "-----END PUBLIC KEY-----";
    String repoUrl =…
