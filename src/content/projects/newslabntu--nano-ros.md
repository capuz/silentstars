---
repo: "NEWSLabNTU/nano-ros"
name: "nano-ros"
description: "no_std ROS 2 client for microcontrollers and RTOS (Zephyr, FreeRTOS, NuttX, ThreadX) and Linux. Rust-first with C/C++ APIs; pluggable Zenoh / XRCE-DDS / Cyclone DDS backends; interoperates with standard ROS 2."
readmeQualityOk: true
url: "https://github.com/NEWSLabNTU/nano-ros"
homepage: "https://newslabntu.github.io/nano-ros-book/"
language: "Rust"
languages: ["Rust"]
languagePcts: [57]
topics: ["cortex-m", "cyclonedds", "dds", "embedded", "esp32", "freertos", "micro-ros", "microcontroller", "middleware", "no-std"]
stars: 18
forks: 3
openIssues: 15
closedIssues: 36
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-01-17T09:32:50Z"
lastCommitAt: "2026-11-26T14:50:08Z"
lastReleaseAt: "2026-11-07T04:08:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 66
maintainers: ["jerry73204"]
openGraphImageUrl: "https://opengraph.githubassets.com/76a9f280a213978392cc233f345e2ffc68c9bc259c376d52afa18d6c65449906/NEWSLabNTU/nano-ros"
postedAt: "2026-11-26T13:11:12.893Z"
---

# nano-ros

**ROS 2 nodes on microcontrollers and real-time operating systems.** You write
a node in Rust, C or C++, nano-ros builds it into firmware for your board, and
it joins your ROS 2 graph like any other node: `ros2 topic echo` on your
computer sees what the board publishes.

It runs with no operating system or on Zephyr, FreeRTOS, NuttX and ThreadX,
talks over Zenoh, Cyclone DDS or XRCE-DDS, and sizes its node, topic and
message pools when you build. Whether an image needs a heap depends on the
middleware you pick.

## Who it is for

- **Teaching**: robotics and embedded courses that need the same result on
  every seat, with no hardware.
- **Field work**: engineers who get a board and need its data in ROS 2 the
  same day.
- **Products**: teams who need reproducible images, offline builds and every
  board fact on a page.

[Choose your path](https://newslabntu.github.io/nano-ros-book/start/choose-your-path.html) gives each a route
through the book.

## Try it on your machine

On Ubuntu 22.04 with [ROS 2 Humble installed](https://newslabntu.github.io/nano-ros-book/start/install.html), a C++
talker runs as a program on your machine, no board or emulator needed:
