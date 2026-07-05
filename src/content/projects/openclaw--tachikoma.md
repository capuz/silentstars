---
repo: "openclaw/Tachikoma"
name: "Tachikoma"
description: "One interface, every AI model. A Swift SDK to interface with AI providers."
readmeQualityOk: true
url: "https://github.com/openclaw/Tachikoma"
homepage: "http://tachikoma.build"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ai", "sdk", "swift"]
stars: 280
forks: 46
openIssues: 0
closedIssues: 6
watchers: 4
contributors: 52
recentReleases: 1
createdAt: "2025-08-02T18:14:34Z"
lastCommitAt: "2026-07-05T20:59:17Z"
lastReleaseAt: "2026-04-28T01:46:06Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 40
maintainers: ["steipete", "Tugser", "vincentkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddd1aec910665f446e1eff6f2b3c3ff97bca92346b4439952caf12c5e8abd141/openclaw/Tachikoma"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# Tachikoma — Swift AI SDK

</p>

Modern, Swift-native APIs for text, vision, tools, and realtime voice.
</div>

## Install

Swift Package Manager:

```swift
.package(url: "https://github.com/steipete/Tachikoma.git", branch: "main"),
```

```swift
.product(name: "Tachikoma", package: "Tachikoma"),
```

## Quick Start

```swift
import Tachikoma

let text = try await generate("Write a haiku about Swift.", using: .anthropic(.opus45))
print(text)
```

### Streaming

```swift
import Tachikoma

let stream = try await stream("Explain actors in Swift.", using: .openai(.gpt54))
for try await delta in stream {
    print(delta.content ?? "", terminator: "")
}
```

### Conversation

```swift
import Tachikoma

let conversation = Conversation()
conversation.addUserMessage("You are a concise assistant.")
conversation.addUserMessage("Summarize Swift concurrency in 3 bullets.")
let reply = try await conversation.continue(using: .anthropic(.opus45))
print(reply)
```

### Vision

```swift
import Tachikoma

let pngData: Data = /* ... */
let image = ImageInput(data: pngData, mimeType: "image/png")
let answer = try await analyze(image: image, prompt: "What’s in this image?", using: .openai(.gpt55))…
