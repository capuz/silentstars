---
repo: "bujiio/buji-pac4j"
name: "buji-pac4j"
description: "Bridge from the pac4j security library to Shiro"
url: "https://github.com/bujiio/buji-pac4j"
homepage: "http://www.pac4j.org"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "shiro", "security", "authentication", "authorization", "cas", "oauth", "saml", "openid-connect", "ldap"]
stars: 497
forks: 124
openIssues: 0
closedIssues: 0
watchers: 38
contributors: 15
recentReleases: 0
createdAt: "2012-07-13T18:18:17Z"
lastCommitAt: "2026-06-27T00:49:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 35
maintainers: ["renovate[bot]", "leleuj", "philippberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d0c26df53ea894bbd4d808f77c377485cb383b8db0f427ba5624426eaacea3f/bujiio/buji-pac4j"
---

</p>

The `buji-pac4j` project is a **bridge from pac4j to Shiro** to push the pac4j security context into the Shiro security context.  
It's based on the **[pac4j security engine](https://github.com/pac4j/pac4j)**. It's available under the Apache 2 license.

| buji-pac4j     | JDK | pac4j | Shiro  | Operating philosophy        | Usage of Lombok | Status           |
|----------------|-----|-------|--------|-----------------------------|-----------------|------------------|
| version >= 9.1 | 17  | v6    | v2.0.2 | Bridge only                 | Yes             | Production ready |
| version >= 9   | 17  | v6    | v1.11  | Bridge only                 | Yes             | Production ready |
| version >= 8   | 11  | v5    | v1.9   | Bridge only                 | No              | Production ready |
| version >= 6   | 11  | v5    | v1.8   | Standalone security library | No              | Production ready |
| version >= 5   | 8   | v4    | v1.5   | Standalone security library | No              | Production ready |

**It must be used with a [pac4j security library](https://www.pac4j.org/implementations.html)**:
- Certainly, the [javaee-pac4j](https://github.com/pac4j/jee-pac4j)…
