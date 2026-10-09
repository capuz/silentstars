---
repo: "juanagu/flutter-clean-architecture-medium"
name: "flutter-clean-architecture-medium"
description: "Flutter architecture for medium-sized projects"
readmeQualityOk: true
url: "https://github.com/juanagu/flutter-clean-architecture-medium"
language: "Dart"
languages: ["Dart"]
languagePcts: [99]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-12-12T18:09:17Z"
lastCommitAt: "2026-10-09T18:55:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 45
maintainers: ["juanagu"]
openGraphImageUrl: "https://opengraph.githubassets.com/846a950c442a374c959fc6b4147168dda3dc743ae574ffbe5a25cf0afd7f6f00/juanagu/flutter-clean-architecture-medium"
---

# Twitter App: Clean Architecture + Feature Toggles in Flutter

A small Twitter-like app that shows how to structure a Flutter project with Clean Architecture, one folder per feature, and feature toggles served by Firebase Remote Config. Every outside service (auth, database, logging, toggles) sits behind a port, so the whole UI also runs against an in-memory backend with no Firebase project at all.

**Companion to the Medium article: <add link>**

Status: sample project. Flutter 3.47.7 stable, Dart 3.13. Not a production app.

## Try it in 60 seconds

```sh
flutter pub get
flutter run -d chrome --dart-define=IN_MEMORY_BACKEND=true
```

Sign in with `demo@example.com` / `password`. The feed starts with three seeded tweets. Nothing is persisted; a restart resets everything.

## Features

Five screens:

| Route | Feature | What it does |
| --- | --- | --- |
| `/` | `auth` | Entry screen. Shows maintenance when `appIsActive` is off, then routes to home or sign-in depending on the session. |
| `/sign-in` | `sign_in` | Email + password form. Shows the sign-up button only when `signUpFeatureIsActive` is on. |
| `/sign-up` | `sign_up` | Creates an account. |
| `/home` | `home` | The feed…
