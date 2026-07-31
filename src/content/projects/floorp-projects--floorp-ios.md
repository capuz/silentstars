---
repo: "Floorp-Projects/floorp-ios"
name: "floorp-ios"
description: "Floorp for iOS"
readmeQualityOk: true
url: "https://github.com/Floorp-Projects/floorp-ios"
language: "Swift"
languages: ["Swift"]
languagePcts: [90]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 453
recentReleases: 0
createdAt: "2026-04-20T06:46:14Z"
lastCommitAt: "2026-07-31T06:28:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 17
maintainers: ["Ryosuke-Asano", "thatswinnie", "Foxbolts"]
openGraphImageUrl: "https://opengraph.githubassets.com/7942610f63810873fa32ee3b957718b041c0062cae4642226a158d213e17c21a/Floorp-Projects/floorp-ios"
---

# Floorp for iOS

A privacy-focused browser for iOS, based on [Firefox for iOS](https://github.com/mozilla-mobile/firefox-ios) by Mozilla.

Floorp is a community-driven project that aims to provide a customizable and privacy-respecting browsing experience. This is the iOS port of [Floorp Browser](https://floorp.app).

## Building the code

### Prerequisites

- **Xcode 26.3** (the canonical version is declared in `.xcode-version`)
- **Node.js 24.18.1** (the canonical version is declared in `.nvmrc`)
- **Swift Package Manager** (the pinned packages are resolved by Xcode)
- **SwiftLint 0.62.2** for the pre-push check (`brew install swiftlint`)

### Quick Start

1. Clone the repository:

   ```shell
   git clone https://github.com/Floorp-Projects/floorp-ios.git
   cd floorp-ios
   ```

1. Install Node.js dependencies and bootstrap:

   ```shell
   ./bootstrap.sh
   ```

1. Open `Client.xcodeproj` under the `firefox-ios` folder in Xcode.

1. Select the **Fennec** scheme in Xcode.

1. Select a simulator (e.g. iPhone 17 Pro) and build with `Cmd + R`.

### Troubleshooting

- **SPM dependency issues**: Xcode → File → Packages → Reset Package Caches
- **Build errors after upstream merge**:…
