---
repo: "googleapis/kotlin-genai"
name: "kotlin-genai"
description: "Google Gen AI Kotlin SDK provides an interface for developers to integrate Google's generative models into their Kotlin/Java/Android applications."
readmeQualityOk: true
url: "https://github.com/googleapis/kotlin-genai"
homepage: "https://googleapis.github.io/kotlin-genai/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 102
recentReleases: 3
createdAt: "2026-06-16T16:41:00Z"
lastCommitAt: "2026-07-09T20:44:31Z"
lastReleaseAt: "2026-07-09T20:07:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["jaycee-li", "release-please[bot]", "MarkDaoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1bb27bfb370900c2fa23e3450e1f6bdd91dc0ce177bc5d53324d38b9708ed31/googleapis/kotlin-genai"
---

# Google Gen AI Kotlin SDK

--------
**Documentation:** https://googleapis.github.io/kotlin-genai/
--------

The Google Gen AI Kotlin SDK provides an idiomatic Kotlin interface for
developers to integrate Google's generative models into their applications. It
supports both the [Gemini Developer API](https://ai.google.dev/gemini-api/docs)
and the
[Gemini Enterprise Agent Platform API](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
(formerly Vertex AI).

> [!NOTE] This SDK is currently in early development. At this stage, only
> `generateContent` and `generateContentStream` are supported.

> [!WARNING]
> **Mobile Security: API Keys & Cloud Credentials**
>
> While this SDK supports Android targets via Kotlin Multiplatform, **we strongly discourage embedding API keys or Google Cloud IAM credentials (such as Service Account JSON keys or OAuth tokens)** directly into public mobile client applications due to the risk of credential theft and cloud project compromise via reverse engineering.
>
> * **For public mobile apps** connecting directly to generative models from client devices, we strongly recommend using **[Firebase AI…
