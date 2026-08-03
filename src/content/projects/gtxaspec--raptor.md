---
repo: "gtxaspec/raptor"
name: "raptor"
description: "A microservices-based streaming platform for Ingenic T-series based embedded IP cameras"
readmeQualityOk: true
url: "https://github.com/gtxaspec/raptor"
language: "C"
languages: ["C"]
languagePcts: [82]
topics: ["ingenic", "rtsp", "t10", "t20", "t21", "t23", "t30", "t31", "t32", "t40"]
stars: 32
forks: 7
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-01-09T02:05:23Z"
lastCommitAt: "2026-08-03T06:33:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 60
maintainers: ["gtxaspec", "johnchia"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a49a00e823c7a7eb22b3aa10a55549b3504c90a53c7c2e90a4df82e9815b7d7/gtxaspec/raptor"
fundingLinks: ["GITHUB:https://github.com/gtxaspec"]
discussionCount: 1
---

# Raptor Streaming System (RSS)

A modular microservice camera streamer for Ingenic SoCs. Raptor replaces the
traditional monolithic streamer with independent daemons that communicate
through POSIX shared-memory ring buffers and Unix domain control sockets.

## Why Raptor

A camera streamer sounds like one job. It is really six unrelated ones
fused together: driving a closed vendor SDK, parsing hostile network
input, writing to flash, signing media, flipping GPIOs, keeping A/V
clocks honest. The incumbents put all of that in one process, on a
device with as little as 32 MB of RAM, no swap, no operator, and an
uptime measured in months.

Raptor's position: **fault domains should match feature domains, and
the only boundary the kernel enforces is the process.** The vendor SDK
is closed, stateful, and not thread-safe, and it misbehaves in ways
nobody can patch. In a monolith, an SDK wedge takes RTSP, recording,
and motion down with it. In Raptor, exactly two daemons link the HAL;
nothing that parses network input shares an address space with the
hardware, and nothing touching the hardware has a socket open to the
world.

Nor is this "microservices" with serialization taxes: daemons…
