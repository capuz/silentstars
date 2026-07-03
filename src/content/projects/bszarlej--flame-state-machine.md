---
repo: "bszarlej/flame_state_machine"
name: "flame_state_machine"
description: "A lightweight, type-safe state machine for the Flame game engine, enabling modular and reusable behavior for Flame components."
url: "https://github.com/bszarlej/flame_state_machine"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-01T07:41:49Z"
lastCommitAt: "2026-07-03T12:39:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["bszarlej"]
openGraphImageUrl: "https://opengraph.githubassets.com/99e4eefd7ffda5f064e8963141e018a881ef54643e579d694f86c8dd33aa50ee/bszarlej/flame_state_machine"
---

# flame_state_machine

A lightweight and flexible **finite state machine** package for the [Flame](https://flame-engine.org/) game engine, written in Dart.

Manage complex stateful behaviors for your Flame `Component`s with ease, enabling clean and maintainable game logic.

## Features

- Generic state machine designed to work seamlessly with Flame `Component`s
- Supports prioritized state transitions with custom guard conditions
- Lifecycle callbacks for entering, exiting, rendering and updating states
- Support for transitions that can occur from any state

## Usage

### 1. Create states

Extend the `State<T>` class to define your custom states:

```dart
class IdleState extends State<Enemy> {
  @override
  void onEnter(Enemy enemy, [State<Enemy>? from]) {
    print('Enemy entered Idle state');
  }

  @override
  void onExit(Enemy enemy, [State<Enemy>? to]) {
    print('Enemy exited Idle state');
  }

  @override
  void onRender(Canvas canvas, Enemy enemy) {
    // optionally render idle-specific visuals here (useful for debugging)
  }

  @override
  void onUpdate(double dt, Enemy enemy) {
    // handle idle behavior
  }
}
```

### 2. Setup state machine in your Flame component…
