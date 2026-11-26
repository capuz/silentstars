---
repo: "blaze-b/spring-boot-sso-learning"
name: "spring-boot-sso-learning"
description: "Sample spring boot saml working application to code and debug the working of the SAML SSO spring boot code"
readmeQualityOk: true
url: "https://github.com/blaze-b/spring-boot-sso-learning"
language: "HTML"
languages: ["HTML", "Java"]
languagePcts: [52, 48]
topics: ["idp-onelogin", "sample-saml", "spring-security-saml", "okta", "spring-boot"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-11-26T16:10:48Z"
lastCommitAt: "2026-11-26T12:57:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 47
maintainers: ["blaze-b", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab281089270d6a0816098d5d6b69e3c9a42c132ee68d5acbdba470839c7deb3b/blaze-b/spring-boot-sso-learning"
---

# Spring Boot SSO Learning

Hands-on chapters for Single Sign-On with Spring Boot — each module is a small, runnable Service Provider you can build, configure, and debug.

## Chapters

| Chapter | Title | Module / Path | Summary |
| --- | --- | --- | --- |
| 0 | [SSO And SAML Basics](https://github.com/blaze-b/spring-boot-sso-learning/blob/HEAD/docs/chapter-0-sso-and-saml-basics.md) | notes | Terms, roles, and the SAML browser login flow before you touch code |
| 1 | [Spring SAML](https://github.com/blaze-b/spring-boot-sso-learning/blob/HEAD/spring-saml/README.md) | `spring-saml` | Generic SAML 2.0 SP with Spring Security’s built-in SAML2 support |
| 2 | [Spring SAML With Okta](https://github.com/blaze-b/spring-boot-sso-learning/blob/HEAD/spring-saml-okta/README.md) | `spring-saml-okta` | Same stack, focused on Okta app integration and metadata URL setup |

Planned later: OpenID Connect / OAuth2 login, Keycloak-focused examples.

## Prerequisites

- **Java 21+**
- **Maven Wrapper** (`./mvnw`) — no global Maven install required
- `openssl` when you run a module against a real IdP (local SP keypair)
- An Identity Provider for live login (Okta Developer, Keycloak, SimpleSAMLphp, …)
