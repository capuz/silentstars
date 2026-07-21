---
repo: "saschpe/android-versioninfo"
name: "android-versioninfo"
description: "A version info widget for Android. Material style."
readmeQualityOk: true
url: "https://github.com/saschpe/android-versioninfo"
language: "Java"
languages: ["Java", "Shell"]
languagePcts: [78, 22]
topics: ["fragments", "android", "dialog", "android-library", "android-app", "gradle"]
stars: 21
forks: 7
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-04-19T21:45:22Z"
lastCommitAt: "2026-07-21T06:10:47Z"
lastReleaseAt: "2024-09-12T14:59:47Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 55
maintainers: ["saschpe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0992dfa350992e94c8d1051cb43d6458d98ff058c915cced6e65695cc4d818dd/saschpe/android-versioninfo"
fundingLinks: ["GITHUB:https://github.com/saschpe"]
---

# Android VersionInfo

All about activities have a version info widget somewhere. This library provides one that can be
used as a dialog or fragment. It honors default styling rules, Material-style:

# Usage
Allows to either display version information in a dialog:

```java
VersionInfoDialogFragment.newInstance(
        getString(R.string.app_name),
        BuildConfig.VERSION_NAME,
        "Sascha Peilicke",
        R.mipmap.ic_launcher)
    .show(getSupportFragmentManager(), "version_info");
```

Or a (support) Fragment:

```java
DialogFragment fragment = VersionInfoDialogFragment.newInstance(
        getString(R.string.app_name),
        BuildConfig.VERSION_NAME,
        "Sascha Peilicke",
        R.mipmap.ic_launcher);
getSupportFragmentManager()
    .beginTransaction()
    .replace(R.id.container, fragment)
    .commit();
```

Check out the sample app in `app/` to see it in action.

# Download
Artifacts are published to [Maven Central][maven-central]:
```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("de.peilicke.sascha:android-versioninfo:2.3.1")
}
```

# In use by
* [Alpha+ Player - Unofficial player for Soma…
