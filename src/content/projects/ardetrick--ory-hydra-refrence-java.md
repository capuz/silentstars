---
repo: "ardetrick/ory-hydra-refrence-java"
name: "ory-hydra-refrence-java"
description: "An example/reference implementation of Ory Hydra in Java with SpringBoot. Shows the basicis of OAuth2 integraiton with OIDC. Includes a full suite of integration tests using Testcontainers."
readmeQualityOk: true
url: "https://github.com/ardetrick/ory-hydra-refrence-java"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["gradle", "java", "oauth2", "oauth2-authorization", "oauth2-provider", "oauth2-server", "oidc", "ory-hydra", "playwright", "playwright-java"]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-11-12T19:27:19Z"
lastCommitAt: "2026-07-05T20:17:58Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 51
maintainers: ["dependabot[bot]", "ardetrick"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7ff40e14ddbdb41df8d7326c0a6408763e65815d8d3ca2c9039b36456e4102/ardetrick/ory-hydra-refrence-java"
---

# Ory Hydra Reference Implementation - Java

This is an _unofficial_ reference implementation of the User Login and Consent flow of an
[Ory Hydra](https://github.com/ory) OAuth 2.0 server written in Java with SpringBoot. This project demos some
key features/flows/integrations and the of OAuth 2.0 Authorization Code Grant flow. It is mean to be a foundation for
production implementations, but it is not an exhaustive implementation nor is guaranteed to be secure, bug free, fully
tested, or production ready.

Similar reference implementations can be found on
the [Getting Started](https://www.ory.sh/docs/getting-started/overview)
page of the official Ory website.

## Introduction

Ory Hydra is an open source project OpenID Certified OAuth 2.0 Server and OpenID Connect Provider. Ory Hydra is not an
identity provider (user sign up, user login, password reset flow), but connects to your existing identity provider
through a login and consent app. This project is an example of such a login and consent app. It aims to be a useful
reference for other Java implementations, providing insight into not only how to integrate with Ory Hydra but also how
to effectively test the entirety of the…
