---
repo: "WangTingMan/Bluethread"
name: "Bluethread"
description: "Self-developed dual-mode Bluetooth stack in standard C++. Cross-platform for Windows, Android, Linux and RTOS.  Modular design with thread-pool scheduler. Inter-module message delivery, serial execution to reduce locks. Features HCI, L2CAP, QoS, extended flow spec, packet validation and state machines. Support feature trimming for embedded & PC.C."
readmeQualityOk: true
url: "https://github.com/WangTingMan/Bluethread"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["bluetooth", "bluetooth-library", "bluetooth-stack", "cross-platform", "bluetooth-host"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-21T04:45:40Z"
lastCommitAt: "2026-10-25T02:47:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["WangTingMan", "kingpin58"]
openGraphImageUrl: "https://opengraph.githubassets.com/000d83bd521257c6c323782a9023451aaa535a79580e24df89e068ab7ae1e4d3/WangTingMan/Bluethread"
---

> English | [简体中文](https://github.com/WangTingMan/Bluethread/blob/HEAD/README.zh-CN.md)

# Introduction of Bluetooth Protocol Stack

## Overview

This project is a fully self-developed Bluetooth protocol stack implemented in standard C++. It is not bound to any specific operating system kernel and features excellent cross-platform portability. It can be ported to any platform with a compliant C++ compiler, and currently supports Windows, Android, Linux, and various RTOS systems.

Adopting a modular architecture and task scheduling powered by a thread pool, the protocol stack achieves clear decoupling between modules. It supports feature tailoring, independent unit testing and incremental iterative development.

## Core Architecture

### 1. Cross-platform C++ Abstraction Layer

All core protocol logic is written in standard C++. Operating-system-specific primitives such as thread management, sleep, memory allocation, timer and HCI I/O are encapsulated inside a separated platform adaptation layer. No OS-specific hardcoded logic exists in upper-layer protocol modules. Only a small set of adaptation APIs need to be implemented for porting to new targets.
The stack supports flexible…
