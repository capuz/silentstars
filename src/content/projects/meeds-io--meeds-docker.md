---
repo: "Meeds-io/meeds-docker"
name: "meeds-docker"
description: "Meeds Docker image building"
readmeQualityOk: true
url: "https://github.com/Meeds-io/meeds-docker"
homepage: "http://meeds.io/"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 13
forks: 6
openIssues: 0
closedIssues: 0
watchers: 18
contributors: 17
recentReleases: 0
createdAt: "2020-03-27T05:04:22Z"
lastCommitAt: "2026-10-29T10:20:37Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 86
undervaluedScore: 48
maintainers: ["exo-swf", "houssemexo26", "halaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cf53822e17e7449a926a0d0e4311e3def0a26c05828a1af1dc8ccd6dd6e76b8/Meeds-io/meeds-docker"
---

# Meeds Docker image 

Official Meeds Docker image

The image is compatible with the following databases system:  `MySQL` (default) / `HSQLDB` / `PostgreSQL`

 - 

> **Multi-Architecture Support**: Starting from version `7.3.0-M06`, Meeds Docker images are built for both `linux/amd64` and `linux/arm64` architectures. This allows running Meeds on Apple Silicon (M1/M2/M3), AWS Graviton, and other ARM64-based systems. Previous versions are amd64 only.

- [Configuration options](#configuration-options)
  - [Add-ons](#add-ons)
  - [Patches](#patches)
  - [JVM](#jvm)
  - [Frontend proxy](#frontend-proxy)
  - [Tomcat](#tomcat)
  - [Data on disk](#data-on-disk)
  - [Database](#database)
    - [MySQL](#mysql)
  - [ElasticSearch](#elasticsearch)
  - [Matrix](#matrix)
  - [LDAP / Active Directory](#ldap--active-directory)
  - [Mail](#mail)
  - [JMX](#jmx)
  - [Remote Debugging](#remote-debugging)
  - [Rememberme Token Expiration](#rememberme-token-expiration)
  - [Cluster](#cluster)
  - [Reward Wallet](#reward-wallet)
- [How to](#how-to)
  - [Configure Meeds Server behind a reverse-proxy](#configure-Meeds-Server-behind-a-reverse-proxy)
  - [See Meeds Server logs](#see-Meeds-Server-logs)
  -…
