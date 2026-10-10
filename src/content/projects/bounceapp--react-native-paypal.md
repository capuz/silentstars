---
repo: "Bounceapp/react-native-paypal"
name: "react-native-paypal"
description: "React Native wrapper to bridge PayPal iOS and Android SDK"
readmeQualityOk: true
url: "https://github.com/Bounceapp/react-native-paypal"
homepage: "https://bounceapp.github.io/react-native-paypal/"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [46, 24]
stars: 11
forks: 1
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2022-08-01T11:02:01Z"
lastCommitAt: "2026-10-10T10:05:26Z"
lastReleaseAt: "2024-12-17T12:33:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 55
maintainers: ["renovate[bot]", "lennartschoch", "gabrieldonadel"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c5aaabffd8a48d3f293409131c03888d2c654de73b0675f04b871df84519f21/Bounceapp/react-native-paypal"
---

# @bounceapp/react-native-paypal

React Native wrapper to bridge PayPal iOS and Android SDK,
support only `requestBillingAgreement` for the moment

### Platform Compatibility

| Android Device | Android Emulator | iOS Device | iOS Simulator | Expo GO | Web |
| -------------- | ---------------- | ---------- | ------------- | ------- | --- |
| ✅             | ✅               | ✅         | ✅            | ❌      | ❌  |

## Documentation

[API Reference](https://bounceapp.github.io/react-native-paypal/).

> **Upgrading from 0.8.x?** 1.0.0 moves to Braintree Android v5 and iOS v7 and
> is a breaking release. See the [migration guide](https://github.com/Bounceapp/react-native-paypal/blob/HEAD/MIGRATION.md).

## Installation

```sh
yarn add @bounceapp/react-native-paypal
```

This is an [Expo module](https://docs.expo.dev/modules/overview/), so your app
needs the `expo` package. Bare React Native apps can add it with
`npx install-expo-modules@latest`. It requires Expo SDK 56 or later.

### Requirements

|         | Minimum                       |
| ------- | ----------------------------- |
| Expo    | SDK 56                        |
| iOS     | 16.0 (Braintree iOS v7)       |
| Android |…
