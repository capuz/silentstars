---
repo: "mbakgun/dcbln24-mbakgun"
name: "dcbln24-mbakgun"
description: "Real-Time Communication in Android: HTTP, WebSockets, and SSE This project is specifically developed for the Droidcon Berlin 2024 presentation"
readmeQualityOk: true
url: "https://github.com/mbakgun/dcbln24-mbakgun"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "dcbln24", "droidcon", "kmp", "ktor", "rest", "rest-api", "sse", "websockets", "compose"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-07-03T15:24:25Z"
lastCommitAt: "2026-11-06T11:23:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 40
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f94ba31991e99f634a1e9823dc5908dce704a17980d4726b5eef1210ea57dcca/mbakgun/dcbln24-mbakgun"
---

# Real-Time Communication in Android: HTTP, WebSockets, and SSE

This project is specifically developed for the Droidcon Berlin 2024 presentation. It showcases a Kotlin Multiplatform approach to building applications that can run on Android and server-side platforms using shared code and modern development practices.

## Project Structure

- **`/composeApp`**: Contains the Android-specific implementation using Jetpack Compose.
  - **`commonMain`**: Code that is shared across all platforms.
  - **`androidMain`**: Android-specific code including UI components and platform-specific logic.

- **`/server`**: Contains the server-side application built with Ktor.
  - **`src/main/kotlin`**: Contains Kotlin code for server-side logic.
    - **`Application.kt`**: Main entry point for the Ktor application.
    - **`RoutingRest.kt`**: Defines RESTful API endpoints.
    - **`RoutingSSE.kt`**: Defines Server-Sent Events (SSE) endpoints.
    - **`RoutingWS.kt`**: Defines WebSocket endpoints.

- **`/shared`**: Contains code that is shared between the Android and server components.
  - **`commonMain`**: Core business logic, data models, and shared utilities.
  - **`data/repository`**: Data…
