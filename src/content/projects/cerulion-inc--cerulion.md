---
repo: "cerulion-inc/cerulion"
name: "cerulion"
description: "The open-source robot runtime that records a run, re-executes it against new code, and returns an exit code."
readmeQualityOk: true
url: "https://github.com/cerulion-inc/cerulion"
homepage: "https://cerulion.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["iceoryx2", "replay", "robotics", "ros2", "rust", "simulation", "zenoh", "zero-copy"]
stars: 101
forks: 4
openIssues: 317
closedIssues: 73
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2024-07-09T07:53:42Z"
lastCommitAt: "2026-11-04T10:42:04Z"
lastReleaseAt: "2026-09-21T23:40:33Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 43
maintainers: ["lakshay2010sharma", "raveenk9696"]
openGraphImageUrl: "https://opengraph.githubassets.com/2694cb88ffff81ab7c08044c3d4ca61df79e2db414f0e0638005c47b50bd493f/cerulion-inc/cerulion"
discussionCount: 0
---

**Run robots. Understand failures. Test every change.**

Cerulion connects the software running on a robot to the tools that inspect it and the tests that keep it working. Run your nodes, see their data in Studio, capture a failure, and re-execute that recording against a code or model change before deploying it.

Built for **Physical AI**, Cerulion combines [iceoryx2](https://github.com/eclipse-iceoryx/iceoryx2) zero-copy shared memory, a scheduler that follows your node graph, ROS 2 interoperability and secure access to remote robots. The runtime records the data and execution context needed to turn real robot behavior into CI tests.

**[Install](#install) · [Architecture](#how-it-fits-together) · [Run the example](#quickstart-run-record-and-verify) · [Performance](#performance) · [ROS 2](#bring-your-ros-2-stack) · [Docs](https://docs.cerulion.com)**

## Why Cerulion

- **Zero-copy, beyond fixed-size messages.** Write camera frames, scans and schema-defined variable-length fields directly into shared memory. Other local processes read the same bytes.
- **A scheduler that knows your graph.** Dependency levels are computed ahead of time; trigger policies decide when nodes can run.…
