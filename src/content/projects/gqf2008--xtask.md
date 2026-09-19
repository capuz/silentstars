---
repo: "gqf2008/Xtask"
name: "Xtask"
description: "A multi-task scheduling kernel"
originalDescription: "一种多任务调度内核"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gqf2008/Xtask"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 79
forks: 13
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-15T06:27:35Z"
lastCommitAt: "2026-09-19T08:15:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["gqf2008"]
openGraphImageUrl: "https://opengraph.githubassets.com/d32cad82825d2cef03c5c2f1cb1535f41bf665f06dc59a74bb859061065d40c4/gqf2008/Xtask"
---

# Xtask

A portable multi-task scheduling kernel for embedded environments, compiled and packaged together with applications, with reference to FreeRTOS implementation.

[Multi-task scheduling principle analysis][xtask]

### Notes

1. The software is still under development, the API is quite primitive and unstable
2. Regarding the working principle, there are detailed explanations in the code (including assembly), please read first

### Main Features

- [x] Single physical thread task priority + time slice scheduling mechanism, high priority preemption, fair scheduling for same priority
- [x] Heap memory allocator
- [x] Binary semaphores, counting semaphores, signal broadcast, mutexes, task notifications
- [x] Multi-producer multi-consumer queues
- [x] Critical sections
- [x] Stack overflow checking
- [x] PubSub pattern message bus
- [x] Software timers
- [x] Driver abstraction layer: `Device` top-level abstraction + five-capability trait (stream/block/control/bus/event), registry and compile-time manifest only recognize `&'static dyn Device`, "name is the bus"
- [x] FatFS-based file system
- [x] smoltcp-based network protocol stack

### Verification System

- [x] Host regression:…
