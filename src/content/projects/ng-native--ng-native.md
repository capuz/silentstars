---
repo: "ng-native/ng-native"
name: "ng-native"
description: "Angular apps, rendered as real native iOS and Android views, on React Native's Fabric renderer."
readmeQualityOk: true
url: "https://github.com/ng-native/ng-native"
homepage: "https://ng-native.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["android", "angular", "expo", "fabric", "ios", "mobile", "native", "react-native", "signals", "typescript"]
stars: 383
forks: 14
openIssues: 2
closedIssues: 224
watchers: 7
contributors: 7
recentReleases: 7
createdAt: "2026-09-27T19:15:46Z"
lastCommitAt: "2026-10-04T10:01:18Z"
lastReleaseAt: "2026-10-03T20:55:00Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 31
maintainers: ["ashley-hunter", "erkamyaman", "allcontributors[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1391318647/8096ae63-60b0-437f-b325-cc1c37861f8f"
fundingLinks: ["GITHUB:https://github.com/ashley-hunter"]
discussionCount: 2
---

# Angular Native

**Angular apps, rendered as real native iOS and Android views.**

Angular Native renders Angular components straight onto React Native's Fabric renderer, so a
`<view>` is a `UIView` on iOS and an `android.view.View` on Android, and React is never in the render
path. You write standalone components, signals, Signal Forms and `@angular/router` routes as you
would for the web, then create, run, hot reload and ship the app with Expo.

```sh
npx create-expo-app@latest my-app --template @ng-native/template
cd my-app && npx expo start
```

Scan the QR code with Expo Go, or press `i` or `a` for a simulator.

## A component

```ts
import { Component, signal } from '@angular/core';
import { Pressable, SafeAreaProvider, SafeAreaView, Text } from '@ng-native/components';

@Component({
  selector: 'app-root',
  imports: [Pressable, SafeAreaProvider, SafeAreaView, Text],
  template: `
    <safe-area-provider>
      <safe-area-view class="screen">
        <text class="title">Angular, natively</text>
        <pressable accessibilityRole="button" class="button" (press)="count.set(count() + 1)">
          <text class="label">Tapped {{ count() }} times</text>
        </pressable>…
