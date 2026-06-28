---
repo: "beam-bots/bb"
name: "bb"
description: "The resilient robotics framework"
url: "https://github.com/beam-bots/bb"
homepage: "https://beambots.dev/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 88
forks: 4
openIssues: 6
closedIssues: 15
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2025-12-06T00:23:31Z"
lastCommitAt: "2026-06-28T06:57:09Z"
lastReleaseAt: "2025-12-29T03:04:49Z"
status: "thriving"
tags: ["funded"]
healthScore: 92
undervaluedScore: 34
maintainers: ["jimsynz", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9146dd2591a9069ecd553b2ff999987c92c91efa3a1e387f603e55a21231ce4/beam-bots/bb"
fundingLinks: ["GITHUB:https://github.com/jimsynz"]
---

# Beam Bots

Beam Bots is a framework for building resilient robotics projects in Elixir.

`bb` is the core of a wider ecosystem of packages — servo drivers, sensors,
inverse kinematics solvers, visualisation tooling and more — that work together
so you can build your robot with exactly the features you want. Browse the full
list at [github.com/beam-bots](https://github.com/orgs/beam-bots/repositories).

## Features

- **Spark DSL** for defining robot topologies (links, joints, sensors, actuators)
- **Physical units** via `~u` sigil with automatic SI conversion (e.g., `~u(90 degree)`, `~u(0.1 meter)`)
- **Topology-based supervision** - supervision tree mirrors robot structure for fault isolation
- **Hierarchical PubSub** - subscribe to messages by path or subtree
- **Forward kinematics** - compute link positions using Nx tensors
- **Message system** - typed payloads with schema validation
- **Command system** - state machine with arm/disarm and custom commands
- **URDF export** - export robot definitions for use with ROS tools

## Example

```elixir
defmodule MyRobot.Robot do
  use BB

  topology do
    link :base_link do
      joint :shoulder do
        type(:revolute)…
