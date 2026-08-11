---
repo: "Zomato/compose-sushi"
name: "compose-sushi"
description: "Sushi Design System for Compose Multi Platform"
readmeQualityOk: true
url: "https://github.com/Zomato/compose-sushi"
homepage: "https://zomato.github.io/compose-sushi/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "compose", "kotlin", "zomato"]
stars: 10
forks: 9
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 81
recentReleases: 0
createdAt: "2025-03-13T06:09:38Z"
lastCommitAt: "2026-08-11T04:49:58Z"
lastReleaseAt: "2025-08-04T07:28:27Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 86
undervaluedScore: 75
maintainers: ["firefinchdev", "Avishisht-Gupta", "Sudhanshu-Tiwari"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/1112143?s=400&v=4"
---

# Compose Sushi 🍣
#### [zomato.github.io/compose-sushi](https://zomato.github.io/compose-sushi)
Sushi Design System for Compose Multiplatform - A comprehensive design system built for Android,
iOS, Desktop and Web platforms.

## 🏗️ Project Structure

- **`sushi/sushi-core`** - Core classes used by the Sushi
- **`sushi/sushi-compose`** - Compose implementation of the Sushi design system
- **`app/`** - Sample Android/iOS application demonstrating the components
- **`website/`** - WASM/JS web application for the documentation

## 📋 Prerequisites

- **Java 17** or higher
- **Android Studio** (for Android development)
- **Xcode 15+** (for iOS development)
- **Node.js** (for web development)

## 🔧 Building the Project

### Build Sushi Libraries

```bash
# Assemble
./gradlew :sushi-compose:assemble

# Publish to local Maven repository
./gradlew :sushi-core:publishToMavenLocal :sushi-compose:publishToMavenLocal
```

## 📱 Running Sample Applications

### Android Sample App

```bash
# Install and run on connected device/emulator
./gradlew :app:installDebug

# Build APK
./gradlew :app:assembleDebug
```

Or open the project in Android Studio and run the `app` configuration.

### iOS…
