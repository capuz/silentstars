---
repo: "Mindera/Alfie-Android"
name: "Alfie-Android"
description: "This repo is part of Alfie: a project to boostrap eCommerce Projects (Front-end mobile/web and BE and Graph APIs)"
readmeQualityOk: true
url: "https://github.com/Mindera/Alfie-Android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["android", "kotlin"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 14
recentReleases: 0
createdAt: "2024-07-10T13:58:19Z"
lastCommitAt: "2026-11-04T08:03:42Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 84
undervaluedScore: 52
maintainers: ["hoangnhatdrk", "dependabot[bot]", "nhathoang-mindera"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d35deb0450dd6d03b02b249edf36f5abc37208b1d08fea2f1b5decea762b6e2/Mindera/Alfie-Android"
---

[Stub_local_IP.patch](https://github.com/user-attachments/files/24615309/Stub_local_IP.patch)# Alfie Native Android App

----

This is a repository for an e-commerce Android app template.

## Setup

If you wish to use Alfie-Mock server for BE purposes for real devices, please stub the local IP and allow the connection in network_security_config.xml
Like so: 

ApolloModule.kt:

network_security_config.xml:

## Network / GraphQL Setup

The app connects to two Apollo GraphQL services managed via Hilt-qualified `ApolloClient`s:

| Qualifier | Service | Default emulator URL | Purpose |
|---|---|---|---|
| `@LegacyClient` | `legacy` | `http://10.0.2.2:4000/graphql` | Existing Mock Server — queries live here during migration |
| `@NewClient` | `bff` | `http://10.0.2.2:3000/graphql` | New BFF ([Alfie-BFF](https://github.com/Mindera/Alfie-BFF)) — add migrated `.graphql` files under `network/src/main/graphql/bff/` |

### Local development (emulator)

The Android emulator routes `10.0.2.2` to your host machine's `localhost`, so no extra config is needed when running on the emulator.

#### Legacy — Mock Server (port 4000)

The legacy client points to the existing Mock Server, which is already…
