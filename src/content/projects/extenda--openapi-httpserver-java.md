---
repo: "extenda/openapi-httpserver-java"
name: "openapi-httpserver-java"
description: "A dependency-reduced implementation of Javas HttpServer with OpenAPI validation"
readmeQualityOk: true
url: "https://github.com/extenda/openapi-httpserver-java"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["java-libs"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-04T07:23:26Z"
lastCommitAt: "2026-10-18T08:17:09Z"
lastReleaseAt: "2026-05-20T11:54:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["thced", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d3be8b15b5bf15805a8fdcaae975fca7b5b714b2bd85216f312e7af7f1bef72/extenda/openapi-httpserver-java"
---

# openapi-httpserver-java

A lightweight Java library that wraps the JDK's `com.sun.net.httpserver.HttpServer` and serves
endpoints declared in an OpenAPI 3.1.x specification. Handlers are pure functions registered by
`operationId`; the framework handles routing, OpenAPI parameter and body validation, JSON
(de)serialisation, and RFC 9457 error rendering.

## Table of contents

- [Highlights](#highlights)
- [Maven artifact](#maven-artifact)
- [Quick start](#quick-start)
  - [Multiple specs](#multiple-specs)
- [Spec loading](#spec-loading)
- [JSON mapping](#json-mapping)
- [Body parsers and response writers](#body-parsers-and-response-writers)
- [Server configuration](#server-configuration)
  - [HTTPS](#https)
  - [Content encoding](#content-encoding)
- [Interceptors and response decorators](#interceptors-and-response-decorators)
- [After-response hooks](#after-response-hooks)
- [Security](#security)
- [Request body content types](#request-body-content-types)
- [Streaming request bodies](#streaming-request-bodies)
- [Error responses (RFC 9457)](#error-responses-rfc-9457)
- [Extra (non-OpenAPI) handlers](#extra-non-openapi-handlers)
  - [Health endpoint](#health-endpoint)
- [Graceful…
