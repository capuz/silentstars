---
repo: "neurodevs/node-lsl"
name: "node-lsl"
description: "Lab Streaming Layer (LSL) for synchronized streaming of multi-modal, time-series data over a network"
readmeQualityOk: true
url: "https://github.com/neurodevs/node-lsl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-11-02T21:08:51Z"
lastCommitAt: "2026-08-09T04:46:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 78
maintainers: ["eric-yates"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee3b6592133a3f12b93791ec83dc59588f07225786932fe47ef7446099ad09f/neurodevs/node-lsl"
---

# node-lsl

Lab Streaming Layer (LSL) for synchronized streaming of multi-modal, time-series data over a network.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [LslStreamOutlet](#lslstreamoutlet)
  - [LslEventMarkerOutlet](#lsleventmarkeroutlet)
- [Test Doubles](#test-doubles)

## Overview

This package is a Node wrapper around the C++ [liblsl](https://github.com/sccn/liblsl) library. It was developed and tested on a MacOS system with an M2 chip. It should work with any M-series chip: M1, M2, M3. There are known issues for this package with x86 MacOS architectures. It's untested for Windows or Linux.

Please note that this package currently only supports LSL outlets (sending data over a network). It does not yet support LSL inlets (receiving data from a network).

## Installation

First, you need to install the C++ [liblsl](https://github.com/sccn/liblsl) library. On MacOS, you can use Homebrew to install it, as specified in its [documentation](https://github.com/sccn/liblsl?tab=readme-ov-file#getting-and-using-liblsl):

`brew install labstreaminglayer/tap/lsl`

Then, install the package with your preferred package manager…
