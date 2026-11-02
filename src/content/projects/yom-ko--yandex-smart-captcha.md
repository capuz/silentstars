---
repo: "yom-ko/yandex-smart-captcha"
name: "yandex-smart-captcha"
description: "Unofficial Flutter package for Yandex SmartCaptcha"
readmeQualityOk: true
url: "https://github.com/yom-ko/yandex-smart-captcha"
homepage: "https://pub.dev/packages/yandex_smart_captcha"
language: "Dart"
languages: ["Dart"]
languagePcts: [90]
topics: ["captcha", "dart", "flutter", "invisible-captcha", "smartcaptcha", "webview", "yandex", "yandex-smart-captcha"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-11T14:45:00Z"
lastCommitAt: "2026-11-02T15:17:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 85
maintainers: ["yom-ko"]
openGraphImageUrl: "https://opengraph.githubassets.com/28e61b7668e2f1e99e15ca0b21a158ea74e479bb47aefc32e3cf03cf7446d679/yom-ko/yandex-smart-captcha"
---

# Yandex SmartCaptcha for Flutter

This package makes it easy to integrate Yandex SmartCaptcha into Flutter-based Android, iOS, and web apps. On Android and iOS, it uses a native in-app WebView. On the web, it uses a DOM element and JavaScript interop. To learn more about the Yandex SmartCaptcha service, visit its [official page](https://yandex.cloud/en/services/smartcaptcha).

## Motivation

One day at work, I urgently needed to integrate Yandex SmartCaptcha into a mobile app, and the `flutter_yandex_smartcaptcha` package came to the rescue. However, I discovered a serious bug and reported it to the author. When they didn’t respond, I decided to create a similar package myself and learn how to publish packages on pub.dev in the process. End of story.

## Usage

Super simple! Here’s the minimal example:

```dart
YandexSmartCaptcha(
  config: CaptchaConfig(
    clientKey: 'your-client-key',
  ),
  onChallengeSolved: (token) {
    // Handle the solved captcha token.
  },
)
```

In most cases, you only need the `YandexSmartCaptcha` and `CaptchaConfig` classes. `CaptchaController` is optional and useful when you need to trigger validation, reset the widget, or destroy it…
