---
repo: "tomasf/Cadova"
name: "Cadova"
description: "Swift DSL for parametric 3D modeling"
readmeQualityOk: true
url: "https://github.com/tomasf/Cadova"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["3d", "cad", "dsl", "swift"]
stars: 421
forks: 16
openIssues: 0
closedIssues: 14
watchers: 9
contributors: 5
recentReleases: 0
createdAt: "2024-12-06T13:56:05Z"
lastCommitAt: "2026-09-29T10:03:25Z"
lastReleaseAt: "2025-12-18T09:15:14Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 36
maintainers: ["tomasf", "fponticelli", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/357dc820fc48e958fef1aacb231fc383735d495b3cdf44a74d0536aad8ffed3f/tomasf/Cadova"
discussionCount: 14
---

# Cadova

Cadova is a Swift library for creating 3D models through code, with a focus on 3D printing. It offers a programmable alternative to traditional CAD tools, combining precise geometry with the expressiveness and elegance of Swift.

Cadova models are written entirely in Swift, making them easy to version, reuse, and extend. The result is a flexible and maintainable approach to modeling, especially for those already comfortable with code.

Cadova runs on macOS, Windows, and Linux. To get started, read the [Getting Started guide](https://tomasf.github.io/Cadova/documentation/cadova/gettingstarted).

Full documentation, including [What is Cadova?](https://tomasf.github.io/Cadova/documentation/cadova/whatiscadova), is available at [cadova.org/docs](https://cadova.org/docs). See the [wiki](https://github.com/tomasf/Cadova/wiki) for related projects: the viewer app, libraries, and example models built with Cadova.

## Example

```swift
await Model("Hex key holder") {
    let height = 20.0
    let spacing = 8.0
    Stack(.x, spacing: spacing) {
        for size in stride(from: 1.5, through: 5.0, by: 0.5) {
            RegularPolygon(sideCount: 6, widthAcrossFlats: size)
        }…
