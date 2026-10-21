---
repo: "cerulion-inc/cerulion"
name: "cerulion"
description: "The open-source robot runtime that records a run, re-executes it against new code, and returns an exit code."
readmeQualityOk: true
url: "https://github.com/cerulion-inc/cerulion"
homepage: "https://cerulion.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["iceoryx2", "replay", "robotics", "ros2", "rust", "simulation", "zenoh", "zero-copy"]
stars: 102
forks: 4
openIssues: 180
closedIssues: 37
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2024-07-09T07:53:42Z"
lastCommitAt: "2026-10-21T23:00:34Z"
lastReleaseAt: "2026-09-21T23:40:33Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 43
maintainers: ["raveenk9696", "lakshay2010sharma", "Galabavamsi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea3d00e26b6e42302eaf9e43f8bdf4adc172d504119b4eba296c92aba3d108da/cerulion-inc/cerulion"
discussionCount: 0
---

**Run robots. Understand failures. Test every change.**

Cerulion connects the software running on a robot to the tools that inspect it and the tests that keep it working. Run your nodes, see their data in Studio, capture a failure, and re-execute that recording against a code or model change before deploying it.

Built for **Physical AI**, Cerulion combines [iceoryx2](https://github.com/eclipse-iceoryx/iceoryx2) zero-copy shared memory, a scheduler that follows your node graph, ROS 2 interoperability and secure access to remote robots. The runtime records the data and execution context needed to turn real robot behavior into CI tests.

**[Install](#install) · [Architecture](#how-it-fits-together) · [Run the example](#quickstart-run-record-and-verify) · [Performance](#performance) · [ROS 2](#bring-your-ros-2-stack) · [Docs](https://docs.cerulion.com)**

## Why Cerulion

- **Zero-copy, beyond fixed-size messages.** Write camera frames, scans and schema-defined variable-length fields directly into shared memory. Other local processes read the same bytes.
- **A scheduler that knows your graph.** Dependency levels are computed ahead of time; trigger policies decide when nodes can run.…
