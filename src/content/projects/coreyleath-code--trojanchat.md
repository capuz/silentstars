---
repo: "CoreyLeath-code/TrojanChat"
name: "TrojanChat"
description: " TrojanChat is a terminal-based chat application designed for USC football fans to connect and chat in real time. Built with modular, object-oriented architecture."
url: "https://github.com/CoreyLeath-code/TrojanChat"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [51, 22]
topics: ["android", "chat", "ios", "kotlin", "ktor", "realtime", "swiftui", "vaper", "websocket"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-08T21:10:01Z"
lastCommitAt: "2026-07-04T19:22:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 76
maintainers: ["CoreyLeath-code", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/af94965ad688709ec4bcc2b95363fb0ab735c0bfddc4b6c98b4b4dbf020e0bab/CoreyLeath-code/TrojanChat"
---

# TrojanChat

TrojanChat is a production-hardened, multi-client chat architecture optimized for high-concurrency environments. Moving away from standard blocking network sockets, this platform leverages asynchronous event loops to maintain thousands of concurrent connections efficiently while maintaining structural memory efficiency.

---

 Architectural Overview

The platform splits operations across an event-driven system architecture to eliminate thread-starvation issues under scale.

* **Non-Blocking Core:** Built on top of Python's raw `asyncio` streams API, replacing slow multi-threaded overhead with a high-performance single-threaded asynchronous engine.
* **Structured Serialization Protocol:** Completely dropped plaintext string messaging in favor of structured JSON payloads, allowing for strict validation boundaries and predictable message framing.
* **Rootless Isolation Security:** Containers are structurally hardened using explicit multi-stage build patterns, forcing runtime scripts to execute via a dedicated unprivileged user group (`apprunner`).

---

## 🚀 Getting Started

### Prerequisites
* Python 3.11 or higher
* Docker (Optional, for containerized isolation)

###…
