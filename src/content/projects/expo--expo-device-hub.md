---
repo: "expo/expo-device-hub"
name: "expo-device-hub"
description: "A single control surface for every simulator, emulator, and device to develop your Expo app."
readmeQualityOk: true
url: "https://github.com/expo/expo-device-hub"
homepage: "https://www.npmjs.com/package/expo-device-hub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["android", "emulator", "expo", "ios", "simulator"]
stars: 206
forks: 12
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 38
recentReleases: 8
createdAt: "2026-06-05T11:25:57Z"
lastCommitAt: "2026-10-08T10:52:18Z"
lastReleaseAt: "2026-08-31T13:04:27Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 83
undervaluedScore: 30
maintainers: ["gwdp", "krystofwoldrich-agent", "szdziedzic"]
openGraphImageUrl: "https://opengraph.githubassets.com/67905a9cf381307cd8e8c50e26bb944a21e1a8c3828623ae051453b8d4e05391/expo/expo-device-hub"
---

# expo-device-hub

**Expo Device Hub** is an [Expo DevTools plugin](https://docs.expo.dev/debugging/devtools-plugins/)
that lets you preview and control your iOS simulators and Android emulators right from
the browser — without leaving your development workflow. When you run `expo start`, the
Hub adds a device dashboard where you can watch a live stream of any device, interact
with it, and manage which devices are running from one place.

## Features

- Live stream of iOS simulators and Android emulators in your browser.
- Interact directly — tap, swipe, scroll, and type into the device.
- Boot, shut down, and add devices without opening Xcode or Android Studio.
- Follows your system light/dark theme, and can flip the device's appearance too.
- Feed an Android emulator's camera a PNG from the inspector's Camera section.

> iOS simulators require macOS with Xcode. Android emulators require the Android SDK
> (`emulator`, `adb`).

## Use in an Expo app

> Using the Hub inside an Expo app requires **Expo SDK 57** or newer.

Install the plugin:

```sh
npx expo install expo-device-hub
```

Then start your project as usual:

```sh
npx expo start
```

Expo Device Hub registers itself as a…
