---
repo: "saschpe/android-customtabs"
name: "android-customtabs"
description: "Chrome CustomTabs for Android demystified. Simplifies development and provides higher level classes including fallback in case Chrome isn't available on device."
readmeQualityOk: true
url: "https://github.com/saschpe/android-customtabs"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
topics: ["android", "android-library", "chrome", "apk", "android-development", "library"]
stars: 383
forks: 51
openIssues: 10
closedIssues: 22
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2017-03-17T19:17:10Z"
lastCommitAt: "2026-07-21T06:11:00Z"
lastReleaseAt: "2024-09-12T15:06:16Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 28
maintainers: ["saschpe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/44d4a2e1162c3727edb92f4d250ebec2cf502762bfbe7e10c523bf38d0126029/saschpe/android-customtabs"
fundingLinks: ["GITHUB:https://github.com/saschpe"]
---

# Android CustomTabs

Chrome CustomTabs for Android demystified. Simplifies development and provides
higher level classes including fallback in case Chrome isn't available on device.

# Usage
How to create a new custom tab intent and start it with a keep-alive service
as well as a fallback to plain old WebView should Chrome not be available on
the device:

```java
CustomTabsIntent customTabsIntent = new CustomTabsIntent.Builder()
        .addDefaultShareMenuItem()
        .setToolbarColor(this.getResources().getColor(R.color.colorPrimary))
        .setShowTitle(true)
        .setCloseButtonIcon(backArrow)
        .build();

// This is optional but recommended
CustomTabsHelper.addKeepAliveExtra(this, customTabsIntent.intent);

// This is where the magic happens...
CustomTabsHelper.openCustomTab(this, customTabsIntent,
        Uri.parse("https://github.com/saschpe/android-customtabs"),
        new WebViewFallback());
```

Preload CustomTabs in your Application.java to warm-up early and reduce start-up
time:

```java
// Preload custom tabs service for improved performance
// This is optional but recommended
registerActivityLifecycleCallbacks(new…
