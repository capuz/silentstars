---
repo: "nanochess/ecsbasic"
name: "ecsbasic"
description: "Extended BASIC language for Intellivision ECS"
readmeQualityOk: true
url: "https://github.com/nanochess/ecsbasic"
homepage: "https://nanochess.org/"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [100]
topics: ["basic", "cp1610", "ecs", "intellivision", "interpreter", "mattel"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-23T19:37:57Z"
lastCommitAt: "2026-07-05T21:00:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 30
maintainers: ["nanochess"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bc38d06748522ce9e3b3a6cc7a4bb0e654c2c14d1542bf5aff86c0fccef376e/nanochess/ecsbasic"
---

# ECS extended BASIC

## by Oscar Toledo G. https://nanochess.org/

### (c) Copyright 2025-2026 Oscar Toledo G.

This a BASIC language interpreter for the Mattel Intellivision Entertainment Computer System (ECS) It replaces nicely the slow and limited Intellivision ECS BASIC.

I wrote an article in two parts about its development, you can read [part1 here](https://nanochess.org/ecs_basic.html), [part2 here](https://nanochess.org/ecs_basic_2.html), and an [Atariage thread](https://forums.atariage.com/topic/384664-typing-basic-on-my-ecs/)

It is written in CP1610 assembler language, and it has been tested both in emulation and with real hardware.

For example, this program runs in 15 seconds (modified from a benchmark by carlsson):

The same program for the Mattel ECS BASIC takes 210 seconds:

The PRINT of the benchmark exists only to stop your chronometer, because all these multiplications exceed the limits of the floating-point format.

There are 26 variables (A-Z), 26 string variables (A$-Z$), and 26 unidimensional arrays (A-Z) requiring DIM first to declare them.

The floating-point support is 32 bits (25-bit mantissa, 7-bit exponent, and sign bit). Number input and output…
