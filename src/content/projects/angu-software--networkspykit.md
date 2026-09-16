---
repo: "angu-software/NetworkSpyKit"
name: "NetworkSpyKit"
description: "A lightweight, thread-safe HTTP spy and stub tool for testing code that performs network requests in Swift."
readmeQualityOk: true
url: "https://github.com/angu-software/NetworkSpyKit"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-13T15:01:19Z"
lastCommitAt: "2026-09-16T08:46:47Z"
lastReleaseAt: "2025-10-29T10:51:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["dependabot[bot]", "angu-software"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a3476986997b892f0d0449161c951e0201530d00f0d0632a11fffc8126db265/angu-software/NetworkSpyKit"
discussionCount: 0
---

# 🕵 NetworkSpyKit

`NetworkSpyKit` is a lightweight, thread-safe HTTP spy and stub tool for testing code that performs network requests in Swift.

It allows you to:
- Record outgoing `URLRequest`s
- Return predefined or dynamic stubbed responses
- Assert request behavior without hitting the real network
- Keep your tests fast, isolated, and deterministic

---

## ✅ Features

- 🚫 **Never touches the real network**
- 🧪 **Spy** on requests (headers, body, URL, method)
- 🎭 **Stub** custom responses on a per-request basis
- 🧵 **Thread-safe** and safe for parallel test execution
- ☕ Built-in teapot response for fun (and HTTP 418 awareness)

---

## 🧩 Integration

`NetworkSpy` works with any network clients which are [`URLSession`](https://developer.apple.com/documentation/foundation/urlsession)-based.

### 1. Inject `NetworkSpy.sessionConfiguration` into your networking stack or library.

**URLSession**

```swift
import Foundation

import NetworkSpyKit

let networkSpy = NetworkSpy(sessionConfiguration: .default)

let networkClient = URLSession(configuration: networkSpy.sessionConfiguration)
```

**[Alamofire](https://alamofire.github.io/Alamofire/)**

```swift
import Alamofire…
