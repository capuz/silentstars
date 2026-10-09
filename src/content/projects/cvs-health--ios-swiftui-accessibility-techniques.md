---
repo: "cvs-health/ios-swiftui-accessibility-techniques"
name: "ios-swiftui-accessibility-techniques"
description: "Demonstrates iOS SwiftUI Accessibility programming techniques using live good and bad examples that can be tested with VoiceOver and other AT. Includes documentation for developers explaining how to code accessible patterns for iOS."
readmeQualityOk: true
url: "https://github.com/cvs-health/ios-swiftui-accessibility-techniques"
language: "Swift"
languages: ["Swift", "HTML"]
languagePcts: [65, 34]
topics: ["a11y", "accessibility", "ios", "ios-accessibility", "mobile", "swiftui", "wcag", "dark-mode", "ipad", "iphone"]
stars: 383
forks: 38
openIssues: 1
closedIssues: 11
watchers: 11
contributors: 5
recentReleases: 0
createdAt: "2023-12-01T20:58:08Z"
lastCommitAt: "2026-10-09T18:56:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 37
maintainers: ["pauljadam", "dainelbac"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ef98135b465f25e512d260278439e989012e38d5d064c2c35305c2944735b70/cvs-health/ios-swiftui-accessibility-techniques"
discussionCount: 1
---

# iOS SwiftUI Accessibility Techniques
iOS and watchOS SwiftUI sample code demonstrating a variety of good and bad accessibility techniques. Learn how to apply WCAG 2.2 to iOS SwiftUI apps. Good and bad examples can be tested with VoiceOver and other iOS accessibility features.

This repo also includes **[a11y-check](#a11y-checker-a11y-check)**, a static analysis tool that scans your Swift/SwiftUI source code for accessibility issues — 45 rules across 24 WCAG 2.2 criteria, with scoring, auto-fix, and CI integration.

[Download the iOS app from the App Store.](https://apps.apple.com/app/accessibility-techniques/id6474141089)

Read the blog post, [Announcing the iOS SwiftUI Accessibility Techniques Open Source Project](https://www.linkedin.com/pulse/announcing-ios-swiftui-accessibility-techniques-open-source-adam-ldahc/).

Review project source code to learn how to apply the accessibility techniques in working SwiftUI code examples. A companion **watchOS app** is also included in the `a11yTechniques Watch App/` directory.

### Building this project

To see **a11y-check** accessibility warnings and errors inline in Xcode when you build, install the tool first:

```bash
brew tap…
