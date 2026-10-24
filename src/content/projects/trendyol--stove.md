---
repo: "Trendyol/stove"
name: "stove"
description: "Stove: The easiest way of writing e2e/component tests for your back-end app (jvm, go, rust, node, etc) with Kotlin"
readmeQualityOk: true
url: "https://github.com/Trendyol/stove"
homepage: "https://trendyol.github.io/stove/"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [55, 21]
topics: ["e2e-testing", "kotlin", "spring-boot", "ktor", "testing-framework", "testing", "integration-testing", "test", "testing-tools", "test-automation"]
stars: 311
forks: 20
openIssues: 1
closedIssues: 67
watchers: 10
contributors: 75
recentReleases: 0
createdAt: "2023-01-18T13:03:34Z"
lastCommitAt: "2026-10-24T08:09:28Z"
lastReleaseAt: "2023-05-26T08:13:50Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 40
maintainers: ["renovate[bot]", "osoykan", "trendyol-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c91a807bf70710d891ea3ce8dccb177de6d1803a65105db4ea5ca3d31fca7d9/Trendyol/stove"
discussionCount: 1
---

End-to-end tests in Kotlin for JVM and non-JVM applications.<br/>
  Run your application with its dependencies, test complete use cases, and see what happened when they fail.

## Why Stove?

An end-to-end test suite can become a small framework of its own. There is code to boot the application, connect its dependencies, prepare data, wait for background work, and explain what went wrong. Start another service or switch application frameworks, and much of that work starts over.

Stove exists to make that work reusable. It brings application startup, dependency configuration, assertions, and diagnostics into one test lifecycle. You describe the environment your application needs, then write tests around its use cases.

That same approach works across Spring Boot, Ktor, Micronaut, and Quarkus, and extends to applications in other languages. Your test suite can keep a familiar shape as the stack around it changes.

## What a Stove test looks like

Call your application, then check its database and messages in the same test:

```kotlin
stove {
  http {
    postAndExpectBodilessResponse("/orders", body = CreateOrderRequest(userId, productId).some()) {
      it.status shouldBe 201
    }…
