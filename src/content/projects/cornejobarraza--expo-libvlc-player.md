---
repo: "cornejobarraza/expo-libvlc-player"
name: "expo-libvlc-player"
description: "LibVLC Player for Expo"
readmeQualityOk: true
url: "https://github.com/cornejobarraza/expo-libvlc-player"
language: "Kotlin"
languages: ["Kotlin", "Swift", "TypeScript"]
languagePcts: [43, 30, 21]
topics: ["expo", "libvlc", "player", "react-native", "expo-libvlc-player", "expolibvlcplayer"]
stars: 37
forks: 9
openIssues: 1
closedIssues: 20
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-07-03T10:20:01Z"
lastCommitAt: "2026-07-07T06:38:31Z"
lastReleaseAt: "2025-07-08T06:48:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["cornejobarraza", "wendaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd9919cd966331a04ae4df85d8dc1e5747c029a8f091d4172333829843f72d5f/cornejobarraza/expo-libvlc-player"
discussionCount: 1
---

</p>

<h1 align="center">LibVLC Player for Expo</h1>

  </a>
</p>

</p>

  <i>Screenshots taken from the <a href="example/App.tsx">Example App</a> on Android and iOS</i>
</p>

### Supported versions

| Platform             | Version |
| -------------------- | ------- |
| React Native         | 0.83    |
| Android / Android TV | 7+      |
| iOS / Apple TV       | 15.1+   |

## Installation

```
npm install expo-libvlc-player
```

### Bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured](https://docs.expo.dev/bare/installing-expo-modules/) the `expo` package.

### Configure for Android

No additional configuration necessary.

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Configure for TV

Set the `EXPO_TV` environment variable, and run prebuild to make the TV modifications to the project.

```
EXPO_TV=1 npx expo prebuild --clean
```

### Configuration in app config

You can configure `expo-libvlc-player` using its built-in config plugin if you use config plugins in your project.

#### Example app.json with config plugin

```json
{
  "expo": {
    "plugins": [
      […
