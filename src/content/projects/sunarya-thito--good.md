---
repo: "sunarya-thito/good"
name: "good"
description: "Game Overdrive On Dart"
readmeQualityOk: true
url: "https://github.com/sunarya-thito/good"
homepage: "https://sunarya-thito.github.io/good/"
language: "Dart"
languages: ["Dart"]
languagePcts: [84]
topics: ["2d-game", "2d-game-engine", "flutter", "game", "game-engine", "flutter-game-engine"]
stars: 6
forks: 0
openIssues: 98
closedIssues: 175
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-24T23:00:31Z"
lastCommitAt: "2026-09-08T08:15:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 52
maintainers: ["sunarya-thito"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1220446325/927dc047-90b8-43bc-920e-f98ebef463b0"
discussionCount: 0
---

# good

GOOD — **G**ame **O**verdrive **O**n **D**art — is an ECS game engine for
Flutter.

Your game is data in columns and systems that walk them. The simulation runs on
its own isolate at a fixed timestep, keeps every component in shared native
memory, and allocates nothing on the per-frame path, so neither a Flutter
rebuild nor the garbage collector can stall it.

The good ecosystem includes `goo2d` for 2D games and `goo3d` for 3D games, both
built on the `good` kernel.

```bash
flutter pub add goo2d
```

That is the only dependency a 2D game needs, because `goo2d` re-exports the
kernel. Physics and networking are separate packages you add when you want
them, and each one needs its system declared before it does anything.

**[Read the documentation](https://sunarya-thito.github.io/good/)** for
installing, starting a project, building a game and shipping it.

## Packages

| Package | What it is |
|---|---|
| [`goo2d`](https://github.com/sunarya-thito/good/blob/HEAD/packages/goo2d) | The 2D engine, and the only thing a 2D game depends on |
| [`goo3d`](https://github.com/sunarya-thito/good/blob/HEAD/packages/goo3d) | The 3D engine: transforms, hierarchy and the camera |
|…
