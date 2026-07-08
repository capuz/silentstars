---
repo: "lynnswap/WebInspectorKit"
name: "WebInspectorKit"
description: "Web Inspector for WKWebView on iOS"
readmeQualityOk: true
url: "https://github.com/lynnswap/WebInspectorKit"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["ios", "web-inspector", "webkit", "devtool", "uikit"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-11-20T03:48:38Z"
lastCommitAt: "2026-07-08T05:43:08Z"
lastReleaseAt: "2026-06-22T02:58:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["lynnswap"]
openGraphImageUrl: "https://opengraph.githubassets.com/e07658ae7ad3f1209764723e94d9b259091fb5402dfc7a8a16b96af8b811840d/lynnswap/WebInspectorKit"
---

# WebInspectorKit

UIKit Web Inspector for `WKWebView`.

> [!WARNING]
> This package relies on undocumented APIs and runtime behavior, so extra care is needed before using it in App Store-bound projects.

## Features

- DOM tree browsing
- Network request logging
- Built-in DOM and Network tabs

## Requirements

- Swift 6.3+
- iOS 18+

## Platform Notes

- The current implementation targets UIKit on iOS.
- AppKit support is planned to be rebuilt separately.

## Quick Start

### UIKit

```swift
import UIKit
import WebKit
import WebInspectorKit

final class BrowserViewController: UIViewController {
    private let pageWebView = WKWebView(frame: .zero)

    @objc private func presentInspector() {
        let inspector = WebInspectorViewController()
        inspector.modalPresentationStyle = .pageSheet
        if let sheet = inspector.sheetPresentationController {
            sheet.detents = [.medium(), .large()]
            sheet.selectedDetentIdentifier = .medium
        }
        Task { @MainActor in
            try await inspector.attach(to: pageWebView)
            present(inspector, animated: true)
        }
    }
}
```

## Tabs

```swift
let inspector =…
