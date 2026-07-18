---
repo: "kpavlov/koog-sauce"
name: "koog-sauce"
description: "The finishing touch to JetBrains Koog"
readmeQualityOk: true
url: "https://github.com/kpavlov/koog-sauce"
homepage: "https://kpavlov.github.io/koog-sauce/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["ai", "kotlin", "spring-ai", "koog"]
stars: 7
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T07:39:02Z"
lastCommitAt: "2026-07-18T05:47:29Z"
lastReleaseAt: "2025-05-28T18:54:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 76
undervaluedScore: 68
maintainers: ["renovate[bot]", "kpavlov"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bd6388b6bac076b9794486f81566ff03208812cce0cc5580fee4372c79b72eb/kpavlov/koog-sauce"
fundingLinks: ["GITHUB:https://github.com/kpavlov", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mailsk"]
---

# Koog-sauce — The Finishing Touch

**Koog-sauce** is a missing ingredient that connects [Koog](https://github.com/JetBrains/koog) with other frameworks.

## Features

- **Spring AI Integration** - Provides a Koog's `SpringAiLLMClient`, which uses Spring AI's [ChatClient](https://docs.spring.io/spring-ai/reference/api/chatclient.html) under the hood.
- **LangChain4j Integration** - Offers `Langchain4jLLMClient` for seamless integration with [LangChain4j](https://github.com/langchain4j/langchain4j), supporting both standard and streaming interactions.
- **AI Agent Builder** - Simplifies creation and configuration of AI agents with a fluent builder pattern, making it easy to set up complex agent behaviors.

## Requirements

- JDK 17 or higher
- Gradle 8.14.1 or higher

## Getting Started

### Add Dependency

Add the dependency to your build.gradle.kts file:

```kotlin
dependencies {
    // Core library
    implementation("me.kpavlov:koog-sauce:[LATEST]")

    // For Spring AI integration
    implementation("me.kpavlov:koog-sauce-spring-ai:[LATEST]")
    implementation("org.springframework.ai:spring-ai-openai:1.0.0")

    // For LangChain4j integration…
