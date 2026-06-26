---
repo: "launchdarkly/flutter-client-sdk"
name: "flutter-client-sdk"
description: "LaunchDarkly Client-side SDK for Flutter mobile applications"
url: "https://github.com/launchdarkly/flutter-client-sdk"
language: "Dart"
languages: ["Dart"]
languagePcts: [96]
topics: ["launchdarkly", "feature-flags", "feature-toggles", "launchdarkly-sdk", "sdk", "flutter", "dart", "managed-by-terraform"]
stars: 20
forks: 19
openIssues: 5
closedIssues: 30
watchers: 33
contributors: 214
recentReleases: 0
createdAt: "2020-10-27T04:18:25Z"
lastCommitAt: "2026-06-26T21:32:16Z"
lastReleaseAt: "2023-04-26T22:54:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 62
maintainers: ["kinyoklion", "LaunchDarklyReleaseBot", "tanderson-ld"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e2f277bae534a05a2badf6cdaff874b835537de6f29a5c67d89067e12ec73d3/launchdarkly/flutter-client-sdk"
---

# LaunchDarkly Client-side SDK for Flutter

## LaunchDarkly overview

[LaunchDarkly](https://www.launchdarkly.com) is a feature management platform that serves trillions of feature flags daily to help teams build better software, faster. [Get started](https://docs.launchdarkly.com/home/getting-started) using LaunchDarkly today!

## Supported Platforms

See the [pubspec.yaml](https://github.com/launchdarkly/flutter-client-sdk/blob/main/packages/flutter_client_sdk/pubspec.yaml) file for Flutter version requirements.

This SDK supports Android, iOS, Linux, macOS, Web, and Windows.

The underlying API support requirements are determined by the native plugins used by the SDK.

These include:
- [shared_preferences](https://pub.dev/packages/shared_preferences): Used for persistent caching for flag payloads and other data.
- [connectivity_plus](https://pub.dev/packages/connectivity_plus): Used for detecting network status.
- [package_info_plus]() and [device_info_plus](): Used to for the [automatic environment attributes](https://docs.launchdarkly.com/sdk/features/environment-attributes/?q=environ) feature.

## Getting started

Refer to the [SDK…
