---
repo: "muxable/rtchat"
name: "rtchat"
description: "A chat app for IRL streamers."
readmeQualityOk: true
url: "https://github.com/muxable/rtchat"
language: "Dart"
languages: ["Dart", "Go"]
languagePcts: [52, 28]
topics: ["flutter", "android", "twitch", "ios", "firebase"]
stars: 49
forks: 25
openIssues: 61
closedIssues: 313
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2021-04-11T13:01:07Z"
lastCommitAt: "2026-10-23T08:46:31Z"
lastReleaseAt: "2021-09-15T18:58:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 57
maintainers: ["kevmo314", "juaoose", "SputNikPlop"]
openGraphImageUrl: "https://opengraph.githubassets.com/188448535b0a2478fb855769e40782c3484aa17796f2c743022285f33998b996/muxable/rtchat"
---

# RealtimeChat

A chat app for IRL streamers.

## Getting Started

RealtimeChat is a standard Flutter application. We support Android and iOS but not web. To get started, follow the standard

```
flutter pub get
flutter run
```

If this is your first exposure to Flutter, follow the [install guide](https://flutter.dev/docs/get-started/install) to set up your environment. Optionally, go through the [codelab](https://flutter.dev/docs/get-started/codelab) to learn how Flutter applications are written.

## Testing

Unit and widget tests run with `flutter test`.

End-to-end tests in `integration_test/app_test.dart` run the full app against the Firebase emulator suite on an Android emulator or device:

```
npx firebase-tools emulators:exec --only auth,firestore,database --project rtchat-47692 \
  "flutter test integration_test/app_test.dart"
```

The other files in `integration_test/` are on-device text-to-speech tests that need a downloaded model; see `packages/on_device_tts/README.md`.

## Contributing

Communication is done through [our Discord server](https://discord.gg/UKHJMQs74u). Come by and say hi! Otherwise, feel free to browse our issues list for contribution ideas.

Never…
