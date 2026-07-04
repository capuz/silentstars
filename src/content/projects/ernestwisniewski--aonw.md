---
repo: "ernestwisniewski/aonw"
name: "aonw"
description: "A 4X hex strategy game built with Flutter and Flame"
url: "https://github.com/ernestwisniewski/aonw"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T14:56:01Z"
lastCommitAt: "2026-07-04T19:19:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["ernestwisniewski"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90c4cc7b6fde521491ad35d6a9ce0275466ab662868b7515612a5fbd3fcd457/ernestwisniewski/aonw"
---

# Age of New Worlds

Age of New Worlds is a Flutter and Flame prototype of a hex-based 4X strategy
game. The current runtime focuses on playloop, fog of war, movement, city
growth, production, research, save/load, and the foundations for server-backed
multiplayer.

The repository is organized as a Flutter client, a Dart-only shared core
package, a generated Serverpod client package, and a Serverpod backend.

## Supported Targets

- Flutter app: web, macOS, iOS, Android, Windows, and Linux project scaffolds.
- Backend: Serverpod server with PostgreSQL and Redis.
- Tooling: local balance and benchmark CLIs under `tool/` and
  `packages/aonw_core/tool/`.

## Public Links

- Website: [aonw.net](https://aonw.net/)
- Devlog: [ernest.dev](https://ernest.dev)
- GitHub: [ernestwisniewski/aonw](https://github.com/ernestwisniewski/aonw)
- iOS: [App Store](https://apps.apple.com/pl/app/age-of-new-worlds/id6781790591)
- Windows/macOS: [Steam](https://store.steampowered.com/app/4833240/Age_of_New_Worlds/), [itch.io](https://ernest-dev.itch.io/aonw)
- Android (soon)

## Quick Start

Install Flutter 3.44 or newer, then run:

```sh
flutter pub get
dart run build_runner build…
