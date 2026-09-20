---
repo: "shuai132/rpc_core"
name: "rpc_core"
description: "a tiny rpc library, support c++14 and Rust, and other languages: C Python JavaScript TypeScript"
readmeQualityOk: true
url: "https://github.com/shuai132/rpc_core"
language: "C++"
languages: ["C++", "Rust"]
languagePcts: [70, 29]
topics: ["rpc", "mcu", "cpp11", "serialization", "rust", "rpccore", "cpp14"]
stars: 52
forks: 6
openIssues: 1
closedIssues: 3
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-05-21T04:24:20Z"
lastCommitAt: "2020-05-21T04:24:20Z"
lastReleaseAt: "2025-01-01T10:15:55Z"
status: "archived"
tags: []
healthScore: 50
undervaluedScore: 26
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f7347823e6607f162eae0c72d93f77596cb1998ba5d47afb6c1226ec513580f6/shuai132/rpc_core"
---

# rpc_core

a tiny C++14 rpc library, supports all platforms (macOS, Linux, Windows, iOS, Android, etc.) and most microchips (
Arduino, STM32, ESP32/ESP8266, etc.)

**Recommend TCP-based implementation: [asio_net](https://github.com/shuai132/asio_net)**

## Introduction

Full-feature rpc frameworks (e.g. `gRPC` and `bRPC`) are very complex and not suitable for use on embedded platforms.

This project offers a lightweight and user-friend rpc library that is better suited for one-to-one rpc calls.
It supports all platforms and a wide range of microchips, including Arduino, STM32, ESP32/ESP8266, and more.

Note:
This library only offers the protocol layer and API, it **does not** include the implementation of the transport layer.
For TCP-based implementation: [asio_net](https://github.com/shuai132/asio_net)

## Features

* Header-Only
* No-Schema
* Support performance-limited platforms including microchips
* Support any connection type (`tcp socket`, `serial port`, etc.)
* High Performance Serialization, support most STL containers and user type
* Serialization plugins implementations for `flatbuffers` and `nlohmann::json`
* Support `co_await`, depend on `C++20` and `asio`, or custom…
