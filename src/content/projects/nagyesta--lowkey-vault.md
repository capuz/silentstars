---
repo: "nagyesta/lowkey-vault"
name: "lowkey-vault"
description: "Lowkey Vault is a small test double for Azure Key Vault. Developer feedback needed, please vote here: https://github.com/nagyesta/lowkey-vault/discussions/272"
readmeQualityOk: true
url: "https://github.com/nagyesta/lowkey-vault"
language: "Java"
languages: ["Java"]
languagePcts: [90]
topics: ["azure", "keyvault", "local", "ci", "cryptography", "test-double", "fake-objects"]
stars: 109
forks: 7
openIssues: 2
closedIssues: 148
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-09-22T20:46:28Z"
lastCommitAt: "2026-07-08T05:41:58Z"
lastReleaseAt: "2022-03-14T21:40:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["renovate[bot]", "nagyesta", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/409351392/83b6291c-b815-4d1c-a8e1-99cb017dc11a"
discussionCount: 10
---

Lowkey Vault is a test double (fake object) aspiring to be compatible
with [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) REST APIs. The project aims to provide a low footprint
alternative for the cases when using a real Key Vault is not practical or impossible.

## Recommended use

> [!WARNING]  
> Lowkey Vault is NOT intended as an [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) replacement. Please do not attempt using it instead of the real service in production as it is not using any security measures to keep your secrets safe.

### Valid use-cases

I have an app using Azure Key Vault and:

- I want to be able to run my tests locally without internet connection; or
- I do not want to keep a Key Vault alive for my CI instances; or
- I do not want to figure out how to provide a new Key Vault every time my test run; or
- I do not want to worry about authentication when using Key Vault locally.

## Quick start guide

### Java

1. Either download manually the Spring Boot app from the packages or
   use [Maven Central](https://search.maven.org/search?q=com.github.nagyesta.lowkey-vault).
2. Start Lowkey Vault jar
3. Use…
