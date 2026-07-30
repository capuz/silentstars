---
repo: "openember/openember"
name: "openember"
description: "OpenEmber is a modular embedded software framework for robots and intelligent devices."
originalDescription: "🔥 OpenEmber is a modular embedded software framework for robots and intelligent devices. OpenEmber 是一个面向机器人与智能设备的模块化嵌入式软件框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/openember/openember"
homepage: "https://openember.org"
language: "C++"
languages: ["C++"]
languagePcts: [63]
topics: ["embedded", "framework", "iot", "linux", "posix", "c", "communication-framework", "distrubted-systems", "middleware", "robotics"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-07-03T18:40:55Z"
lastCommitAt: "2026-07-30T06:06:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 56
maintainers: ["luhuadong"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3472bc1dd8ded89aa78026f5bcce326c21c9465fc4e58df7191fcfabcceee2/openember/openember"
---

# OpenEmber Modular Embedded Software Framework

**OpenEmber** is a runtime software framework for robots and intelligent devices that runs on Linux systems, providing a unified communication skeleton, Linux Peripheral I/O (LPIO), and node operation mechanisms, helping developers efficiently build complex embedded intelligent systems.

The core of OpenEmber is written in C/C++, using Kconfig + CMake + FetchContent build system. Similar to ROS2, OpenEmber is also a distributed architecture, and the node model can communicate messages through a "publish-subscribe (pub/sub)" mechanism. The framework includes common modules for device-side applications, including message communication, device management, data collection, protocol parsing, state monitoring, configuration management, logging, remote upgrades, graphical interfaces, and more. Modules synchronize through a message communication mechanism, inherently supporting distributed deployment, meaning that functional modules can be deployed on different hardware platforms (including heterogeneous multi-core platforms).

OpenEmber has a good framework design and performance, and can serve as a software starting point for products…
