---
repo: "navikt/mock-oauth2-server"
name: "mock-oauth2-server"
description: "Mock OAuth2/OpenID Connect server for JVM tests and Docker Compose. No security workarounds needed."
readmeQualityOk: true
url: "https://github.com/navikt/mock-oauth2-server"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["oauth2", "mock", "mock-oauth2-server", "kotlin", "java", "docker", "openid-connect", "oidc", "jwt", "security"]
stars: 421
forks: 72
openIssues: 0
closedIssues: 146
watchers: 8
contributors: 47
recentReleases: 0
createdAt: "2020-01-21T20:12:30Z"
lastCommitAt: "2026-09-29T10:04:37Z"
lastReleaseAt: "2020-02-20T21:00:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 37
maintainers: ["dependabot[bot]", "ybelMekk", "tronghn"]
openGraphImageUrl: "https://opengraph.githubassets.com/e251502b13542e4f84356540995bf152eb4b553cb4d0b5dbe0e2b22cccf49f68/navikt/mock-oauth2-server"
---

</p>

<h1 align="center">mock-oauth2-server</h1>

> [!NOTE]
> The latest stable version is shown in the Maven Central badge above. See the [release notes](https://github.com/navikt/mock-oauth2-server/releases) for what has changed.

---

## Table of Contents

- [Quick Start](#quick-start)
- [What it does](#what-it-does)
- [Supported Flows](#supported-flows)
- [Usage](#usage)
  - [In JVM Tests](#in-jvm-tests)
  - [Standalone / Docker](#standalone--docker)
  - [Docker Compose](#docker-compose)
  - [Token Customization via JSON_CONFIG](#token-customization-via-json_config)
  - [Auto-added claims](#auto-added-claims)
  - [aud claim resolution](#aud-claim-resolution)
  - [HTTPS](#https)
  - [CORS](#cors)
  - [Debugger](#debugger)
- [Configuration Reference](#configuration-reference)
- [API Reference](#api-reference)
- [Migration guide](#migration-guide)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Quick Start

Add the dependency:

**Gradle Kotlin DSL**

```kotlin
testImplementation("no.nav.security:mock-oauth2-server:$mockOAuth2ServerVersion")
```

**Maven**

```xml
<dependency>
  <groupId>no.nav.security</groupId>…
