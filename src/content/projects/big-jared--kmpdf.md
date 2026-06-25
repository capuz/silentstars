---
repo: "big-jared/kmpdf"
name: "kmpdf"
description: "Kotlin Multiplatform library for generating PDFs from Compose UI"
url: "https://github.com/big-jared/kmpdf"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-10-31T22:17:51Z"
lastCommitAt: "2026-06-25T02:07:20Z"
lastReleaseAt: "2026-06-24T18:42:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 29
maintainers: ["big-jared", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b22a4f3b4ffbca059cdc18fcebd2b433b912c6035f755b23b27052e2d61cc478/big-jared/kmpdf"
---

# KmPDF

Generate PDF documents from Compose UI on Android, iOS, and Desktop.

## Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| Android | ✅ Supported | API 26+ (Android 8.0+) |
| iOS | ✅ Supported | iOS 14.0+ (iosArm64, iosX64, iosSimulatorArm64) |
| Desktop (JVM) | ✅ Supported | JVM 17+ (macOS, Windows, Linux) |
| WASM | 🚧 Planned | Coming soon |

## Installation

```kotlin
commonMain {
    dependencies {
        implementation("io.github.big-jared:kmpdf:1.0.0")
    }
}
```

## Quick Start

```kotlin
val generator = createKmPdfGenerator()

val result = generator.generatePdf(
    config = PdfConfig(
        pageSize = PageSize.Letter,
        fileName = "my-document.pdf"
    )
) {
    page {
        Text("Hello, PDF!")
    }
    page {
        Text("Page 2 content")
    }
}

when (result) {
    is PdfResult.Success -> sharePdf(result.uri)
    is PdfResult.Error -> println(result.message)
}
```

## Usage

### Single Page

```kotlin
generator.generatePdf(
    config = PdfConfig(
        pageSize = PageSize.A4,
        fileName = "document.pdf"
    )
) {
    page {
        Column(Modifier.fillMaxSize().padding(24.dp)) {
            Text("My…
