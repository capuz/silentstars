---
repo: "ballerina-platform/module-ballerina-auth"
name: "module-ballerina-auth"
description: "Ballerina Auth Module"
readmeQualityOk: true
url: "https://github.com/ballerina-platform/module-ballerina-auth"
language: "Java"
languages: ["Java", "Ballerina"]
languagePcts: [58, 41]
topics: ["ballerina", "auth", "hacktoberfest", "basic-authentication", "integration", "wso2"]
stars: 112
forks: 37
openIssues: 0
closedIssues: 0
watchers: 65
contributors: 88
recentReleases: 0
createdAt: "2020-08-19T02:37:38Z"
lastCommitAt: "2026-09-15T08:55:22Z"
lastReleaseAt: "2021-02-20T06:50:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 26
maintainers: ["Akil-Dikshan", "TharmiganK", "DimuthuMadushan"]
openGraphImageUrl: "https://opengraph.githubassets.com/03b64ffe3069c593ed6d4e0ca406fb5cee0d0bb783ae5ecc0df9031107d7a613/ballerina-platform/module-ballerina-auth"
---

# Ballerina Auth Library

## Overview

This module provides a framework for authentication and authorization based on the Basic Authentication scheme specified in [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617), used to define auth providers for clients and listeners of different protocol connectors.

### Listener file user store Basic Auth provider

Represents the file user store based listener Basic Auth provider, which is used to authenticate the provided credentials against the provided file user store configurations. The users are denoted by a section in the `Config.toml` file. The username, password, and the scopes of a particular user are denoted as keys under the `users` section as shown below. For multiple users, the complete section has to be duplicated.

```toml
[[ballerina.auth.users]]
username="alice"
password="xxx"
scopes=["read", "write"]
```

### Listener LDAP user store Basic Auth provider

Represents the LDAP-based listener Basic Auth provider, which is used to authenticate the provided credentials against the provided LDAP user store configurations. This connects to an active directory or an LDAP, which retrieves the necessary user information and…
