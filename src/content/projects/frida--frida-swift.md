---
repo: "frida/frida-swift"
name: "frida-swift"
description: "Frida Swift bindings"
readmeQualityOk: true
url: "https://github.com/frida/frida-swift"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [77, 21]
stars: 173
forks: 53
openIssues: 4
closedIssues: 6
watchers: 9
contributors: 10
recentReleases: 0
createdAt: "2016-04-03T23:05:12Z"
lastCommitAt: "2026-10-09T18:56:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 41
maintainers: ["oleavr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c60778d23ad03e13b46f008b97934b6b3a622dead888bd7e68fb472014d4f42/frida/frida-swift"
fundingLinks: ["GITHUB:https://github.com/frida"]
---

# frida-swift

Swift bindings for [Frida](https://frida.re) — the dynamic instrumentation
toolkit.

`frida-swift` lets you use Frida from Swift or SwiftUI through fully
`async/await`-based APIs and structured concurrency instead of delegates.

---

## 🧩 Install

### Apple platforms (macOS, iOS)

Build and install the framework locally:

```bash
make
```

Then either:

- Copy `build/Frida/Frida.framework` into your Xcode project, **or**
- Run:

  ```bash
  make install
  ```

  for a shared installation.
  You may first want to configure the prefix:

  ```bash
  ./configure --prefix=/your/installation/prefix
  ```

### Linux (and other non-Apple platforms)

Install Frida as a system library so it's available via `pkg-config`:

```bash
pkg-config --cflags --libs frida-core-1.0
```

Then add the Swift package dependency as usual — `Package.swift` will
automatically use the system library instead of the binary xcframework.

---

## 🖥️ Example (SwiftUI)

Here’s a minimal SwiftUI view that lists connected devices and lets you tap to
attach:

```swift
import Frida
import SwiftUI

struct DevicesView: View {
    @StateObject private var model = DeviceListModel(manager: DeviceManager())…
