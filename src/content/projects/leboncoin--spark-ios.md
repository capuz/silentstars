---
repo: "leboncoin/spark-ios"
name: "spark-ios"
description: "✨ Simple, Modular & Accessible UI Components for your iOS Applications"
readmeQualityOk: true
url: "https://github.com/leboncoin/spark-ios"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 22
forks: 5
openIssues: 0
closedIssues: 511
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2023-02-08T10:37:12Z"
lastCommitAt: "2026-10-29T14:02:46Z"
lastReleaseAt: "2023-06-09T13:54:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["robergro", "spark-ui-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/599044314/afebe837-846b-4be4-acec-10b4081ee689"
discussionCount: 0
---

# Spark iOS Design System

**Spark** is the [Leboncoin](https://www.leboncoin.fr/)'s _Design System_.

This repository is for **iOS only**, supporting both **SwiftUI** and **UIKit**.

It is composed of a theming solution, components, and resources (iconography).

## 🚀 Getting Started

_Note: Instructions below are for using **SPM** without the Xcode UI. It's the easiest to go to your Project Settings -> Swift Packages and add SparkComponentButton from there._

To integrate using Apple's Swift package manager, without Xcode integration, add the following as a dependency to your `Package.swift`:

```swift
.package(url: "https://github.com/leboncoin/spark-ios.git", .upToNextMajor(from: "2.0.0"))
```

and then specify `Spark` as a dependency of the Target in which you wish to use the SparkComponentButton.

Here's an example `Package.swift`:

```swift
// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "MyPackage",
    platforms: [
        .iOS(.v17)
    ],
    products: [
        .library(
            name: "MyPackage",
            targets: ["MyPackage"]),
    ],
    dependencies: [
        .package(
            url:…
