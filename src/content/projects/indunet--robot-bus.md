---
repo: "indunet/robot-bus"
name: "robot-bus"
description: "Lightweight ROS 2–style messaging over ZeroMQ — topics, services & actions, no ROS install. SDKs for Rust, Python, TypeScript, and C++."
readmeQualityOk: true
url: "https://github.com/indunet/robot-bus"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-13T14:38:13Z"
lastCommitAt: "2026-08-28T12:22:09Z"
lastReleaseAt: "2026-08-01T08:24:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Deng-Ran"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f396fdb38dcd6b1f6ec9f08acba91ee858287c772e4bde5fe5948a10e4934c/indunet/robot-bus"
---

English | [中文](https://github.com/indunet/robot-bus/blob/HEAD/README-zh.md)

# *Robot Bus*

Robot Bus is a lightweight, multi-language messaging **framework** with a ROS 2–style programming model — topics, services, actions, and `Node` + `spin` — built on ZeroMQ. It does not replace ROS 2; it extends the ROS ecosystem to platforms and languages where a full ROS 2 stack is difficult to deploy or heavier than needed (for example Android, Windows, and browser clients).

SDKs: **Rust**, **Python**, **TypeScript**, **C++**, **Java**, **Android**.

*Web console* — Overview / Topics / Services / Actions / Topology. Start `robot-bus-broker`, then open [http://127.0.0.1:15570](http://127.0.0.1:15570). See [§4 Web console](#4-web-console) and the [Tank demo](#32-tank-demo).

## *Design Philosophy*

- **ROS 2 model, lighter runtime:** Topics, services, actions, and `Node` + `spin` without a ROS distro, `source setup.bash`, or a workspace — one broker process plus an SDK is enough.
- **APIs that migrate:** Naming and usage stay close to ROS 2 so working code can later become a ROS 2 node, or stay on robot-bus and join an existing graph through the [ROS 2 bridge](#5-ros-2-bridge).
- **Grounded…
