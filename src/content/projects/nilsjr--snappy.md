---
repo: "nilsjr/Snappy"
name: "Snappy"
description: "📸 Android CameraX Library"
readmeQualityOk: true
url: "https://github.com/nilsjr/Snappy"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "android-library", "camerax", "jetpack-compose", "kotlin", "library", "portfolio", "libraries"]
stars: 78
forks: 0
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-20T09:45:32Z"
lastCommitAt: "2026-11-08T14:14:15Z"
lastReleaseAt: "2022-07-27T15:55:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 37
maintainers: ["renovate[bot]", "nilsjr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5172318d87f3b0a7a2f1e548adebc8c1890a0e0fdcaf735bc50b6b875f06df97/nilsjr/Snappy"
---

**Snappy** is an android camerax library for taking snapshot fast & simple. Easy to integrate, 100% Kotlin & jetpack
compose driven.

- Activity Result API usage
- Android Jetpack CameraX for displaying preview
- Minimalistic ui design
- Coil for image loading
- Different modes (single image & multiple images)

## Download 

Available on `mavenCentral()`

```kotlin
implementation("de.nilsdruyen.snappy:snappy:0.0.1")
```

## Requirements

- AndroidX
- MinSdk 21

---

**File/Storage permissions should be requested by your app. Only camera permissions are requested by Snappy**

---

## Usage

To use Snappy in our app you need to add following code snippets.

```kotlin
import de.nilsdruyen.snappy.Snappy
import de.nilsdruyen.snappy.models.SnappyConfig
import de.nilsdruyen.snappy.models.SnappyResult

// setup snappy activity result launcher
private val launcher = registerForActivityResult(Snappy()) { result ->
  // do something
}

// or in compose
val launcher = rememberLauncherForActivityResult(Snappy()) { result ->
  when (result) {
    is SnappyResult.Success -> {
      // do something
    }
    else -> {
      // 
    }
  }
}

launcher.launch(SnappyConfig(File("")))
```…
