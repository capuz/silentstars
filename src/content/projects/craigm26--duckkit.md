---
repo: "craigm26/duckkit"
name: "duckkit"
description: "The Pollen Robotics Microduck as pure Swift: real policies, real kinematics, zero dependencies"
readmeQualityOk: true
url: "https://github.com/craigm26/duckkit"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["mujoco", "onnx", "pollen-robotics", "reinforcement-learning", "robotics", "swift", "swiftpm", "microduck"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-27T19:52:44Z"
lastCommitAt: "2026-08-28T14:35:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["craigm26"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3bec358e0f57a4f11c5c3168537f0b24d3ba3101395a1bda56d033b0d45f933/craigm26/duckkit"
---

# DuckKit

The [Pollen Robotics Microduck](https://github.com/pollen-robotics/microduck), as
pure Swift. Runs the robot's real trained policies, and tests on Linux.

Two products. **DuckKit** has zero dependencies — the robot, its policies, its
protocol, its voice and its choreography. **DuckEvidence** takes swift-crypto and
is the part that signs things. An app that just wants a walking duck does not
link BoringSSL to get one.

```swift
let policy = try DuckPolicy.load(contentsOf: walkingONNX)
var duck = DuckSimulation(walk: policy)

let tick = duck.step(command: DuckCommand(twist: (0.15, 0, 0)))
let sites = DuckKinematics.sitePositions(jointAngles: tick.jointAngles)
// sites["head_camera"] -> where to put the camera, 24 cm up, in metres
```

That is the actual `alpha_walking.onnx` from Pollen's repo, running the actual
61-float observation the robot's own daemon feeds it, at the robot's own 50 Hz.
Not an animation of a duck walking — the trained network walking.

## Using it

```swift
.package(url: "https://github.com/craigm26/duckkit.git", from: "1.0.0")
```

Then take the product you actually need — they are separate for a reason:

| You want | Depend on | Brings |…
