---
repo: "irgaly/android-gradle-plugin-template"
name: "android-gradle-plugin-template"
description: "Template repository for modern Android Gradle Plugin Project."
readmeQualityOk: true
url: "https://github.com/irgaly/android-gradle-plugin-template"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["gradle", "gradle-plugin", "android", "kotlin"]
stars: 15
forks: 6
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-01-12T15:52:24Z"
lastCommitAt: "2026-10-10T10:05:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 51
maintainers: ["irgaly", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f710536b73b190900d7e14dd47e73cf5788d0fa6279bb06c4266ff722862c5a0/irgaly/android-gradle-plugin-template"
discussionCount: 0
---

# Android Gradle Plugin Template

Template repository for modern Android Gradle Plugin Project.

* Kotlin 2.4.10
* Android Gradle Plugin 9.3.0
  * Sample App's compileSdk = 37 (Android 17)
  * Sample App's minSdk = 33 (Android 13)
* Gradle 9.4.1
  * Version Catalog
  * Kotlin DSL (*.kts)
  * pluginManagement / dependencyResolutionManagement (settings.gradle.kts)
  * Composite Build
  * Gradle Plugin Publish Plugin
  * Gradle Signing Plugin

## Publish Plugin

docs: https://docs.gradle.org/8.7/userguide/publishing_gradle_plugins.html

* register Maven Plugin Portal Account
  * https://plugins.gradle.org/user/register
  * Using login with GitHub account is recommended to use `io.github.{user}.{plugin}` plugin id.

Set your API Key and signing key to gradle.properties, or specify it as command line arguments.

`~/.gradle/gradle.properties`

```properties
gradle.publish.key=...
gradle.publish.secret=...
signingKey="-----BEGIN PGP PRIVATE KEY BLOCK-----\
\
...\
-----END PGP PRIVATE KEY BLOCK-----\
"
signingPassword=...
```

Configure your plugin publications.

Plugin id must have your owned domain or `io.github.{user}`. see this
document:…
