---
repo: "sprksocial/client"
name: "client"
description: "Open Source TikTok alternative built on AT Protocol"
url: "https://github.com/sprksocial/client"
homepage: "https://sprk.so"
language: "Dart"
languages: ["Dart"]
languagePcts: [94]
topics: ["atproto", "atprotocol", "flutter"]
stars: 76
forks: 3
openIssues: 4
closedIssues: 12
watchers: 4
contributors: 5
recentReleases: 9
createdAt: "2025-02-10T07:04:25Z"
lastCommitAt: "2026-06-26T23:40:58Z"
lastReleaseAt: "2026-06-19T00:49:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 54
maintainers: ["knotbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8010446158e5c7970ded1c2084d265384a862a54a34c70df51f5b96288d54ab/sprksocial/client"
---

# Spark Social App

Welcome to the codebase for the Spark Social mobile app.

Get the Spark Social app:

- [iOS](https://apps.apple.com/us/app/spark-social-in-your-hands/id6743555448)
- [Android](https://play.google.com/store/apps/details?id=so.sprk.app)

## Overview

This repo contains the mobile client for Spark Social. This is a Flutter app,
written in Dart, using MaterialApp as its base.

Spark is an open source shortform social app for photos and videos built on AT
Protocol. It's an open alternative to closed platforms like Instagram and
Tiktok.

We support stories, reusable sounds, DMs, and we have a built-in photo and video
editor powered by [pro_image_editor](https://github.com/hm21/pro_image_editor).

## Structure

The app is organized with a feature-first structure and uses Riverpod + GetIt +
Freezed + AutoRoute. We also utilize the open source
[atproto.dart](https://github.com/myConsciousness/atproto.dart) client
libraries.

### Project Layout

```text
lib/
  main.dart
  src/
    core/        # shared infrastructure (network, routing, utils, theme, etc.)
    features/    # feature modules
      <feature>/
        data/
        providers/
        ui/
widgetbook/      #…
