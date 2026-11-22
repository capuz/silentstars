---
repo: "xDimon/soralog"
name: "soralog"
description: "Fast and flexible C++ logger with low-overhead logging calls"
readmeQualityOk: true
url: "https://github.com/xDimon/soralog"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 19
forks: 7
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-02-24T16:27:49Z"
lastCommitAt: "2026-11-22T02:12:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 61
maintainers: ["xDimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/969852ee9ba4eeec18436e943f55f09c0dee254ce8f22196ff73e707fc6be440/xDimon/soralog"
---

[//]: # (
Copyright Soramitsu Co., 2021-2023
Copyright Quadrivium Co., 2023
All Rights Reserved
SPDX-License-Identifier: Apache-2.0
)

# Soralog: High-Performance Logging Library

[Русская версия](https://github.com/xDimon/soralog/blob/HEAD/README.ru.md)

## Overview

Soralog is a high-performance, flexible logging library designed for C++ applications. It provides robust logging features, supports multiple logging backends, and allows extensive customization. The library is designed to be lightweight, efficient, and easy to integrate into various projects.

## Features

- Multiple log sinks: console, file, syslog, Windows Event Log, and more.
- Efficient circular buffer for log messages, without locks.
- Thread-safe logging with minimal overhead.
- Hierarchical logging groups with inheritance.
- Configurable log levels and thread info (name or id) in the lines.
- Configurable via YAML or programmatically.
- Macro-based or object-based logging interface (up to user).
- Platforms: Linux, macOS and Windows (MSVC, MinGW); static or shared libraries.
