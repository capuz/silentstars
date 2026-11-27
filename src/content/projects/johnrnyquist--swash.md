---
repo: "johnrnyquist/Swash"
name: "Swash"
description: "Entity Component Systems framework for Swift"
readmeQualityOk: true
url: "https://github.com/johnrnyquist/Swash"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2023-11-13T19:37:02Z"
lastCommitAt: "2026-11-27T16:26:45Z"
lastReleaseAt: "2026-11-27T16:27:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 41
maintainers: ["johnrnyquist"]
openGraphImageUrl: "https://opengraph.githubassets.com/58c66160c4422a9280431ba0ec785939e578fd8c82cdd34307dfbbdbd45c89c5/johnrnyquist/Swash"
discussionCount: 1
---

# Swash

A lightweight, fast Entity Component System framework for Swift.

Swash brings the ECS model from Ash into strongly typed Swift, with a small API surface and predictable runtime behavior. It powers real projects, including Swashteroids.

Development on `main` is targeting version **1.3.0**.

## Why Swash

- Built for game loops and real-time simulation
- Clean separation of data (Components) and behavior (Systems)
- Automatic entity-to-node matching via Engine + Family
- Small framework footprint, easy to reason about
- Battle-tested in a shipping iOS game

## What Is ECS (In Swash Terms)

- Entity: a container of components
- Component: plain data, no game logic
- Node: a typed view over required components
- System: logic that updates nodes each frame
- Engine: owns entities/systems and runs updates

If you are coming from OOP, ECS can feel unfamiliar at first. That is normal. Once it clicks, complex game behavior gets easier to scale and test.

## Installation (Swift Package Manager)

Add Swash to your `Package.swift` dependencies:

```swift
dependencies: [
	.package(url: "https://github.com/johnrnyquist/Swash.git", from: "1.2.2")
]
```
