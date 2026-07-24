---
repo: "IAmTester35/react-native-nitro-sse"
name: "react-native-nitro-sse"
description: "High-performance Server-Sent Events (SSE) for React Native, powered by Nitro Modules."
readmeQualityOk: true
url: "https://github.com/IAmTester35/react-native-nitro-sse"
language: "Kotlin"
languages: ["Kotlin", "TypeScript", "Swift"]
languagePcts: [33, 31, 28]
stars: 20
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T04:39:17Z"
lastCommitAt: "2026-07-24T06:07:51Z"
lastReleaseAt: "2026-03-02T01:56:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 36
maintainers: ["IAmTester35", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b4bf4bf8046107a68166b51f21579bc405ed1e1b2786357f986a2870e844a97/IAmTester35/react-native-nitro-sse"
---

# react-native-nitro-sse

High-performance Server-Sent Events (SSE) client for React Native, built on top of **Nitro Modules (JSI)**. Designed for mission-critical apps requiring high-throughput streaming, battery optimization, and extreme stability.

---

## Why NitroSSE?

Traditional EventSource libraries run on the JS thread or use the legacy React Native Bridge. NitroSSE moves the entire control logic down to the native layer:

*   **Zero-Latency JSI**: Instantaneous JS-Native communication bypassing the async bridge.
*   **Advanced Backpressure**: Batches high-frequency events and employs tail-drop strategies to keep UI thread fluid under extreme load.
*   **Intelligent Reconnect**: Automatic recovery using **Exponential Backoff** and **Jitter** to prevent server stampedes.
*   **Lifecycles**: Auto-hibernates connections in background and resumes on foreground to preserve battery.
*   **Heartbeat Watchdog**: Native detection of keep-alive/ping comments to auto-reconnect dead sockets.
*   **RN DevTools Integration**: Plug-and-play network tracing in **React Native 0.83+ DevTools** (monitor streams directly).
*   **Local Mocking Engine**: Simulates streams, connection drops,…
