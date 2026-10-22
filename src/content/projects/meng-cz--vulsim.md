---
repo: "meng-cz/vulsim"
name: "vulsim"
description: "Visualized μarch Language (VUL) Backend Toolchain for Microarchitecture Design, Simulation, and RTL Generation."
originalDescription: "Visualized μarch Language (VUL) Backend Toolchain for Microarchitecture Design, Simulation, and RTL Generation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/meng-cz/vulsim"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-30T02:16:54Z"
lastCommitAt: "2026-10-22T08:52:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 66
maintainers: ["meng-cz"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb37a30b991ae2d43b4b879cec3b57e32d35e11d61f8e0b42737da96785a2f1a/meng-cz/vulsim"
---

# LuoYuan Microarchitecture Modeling and Simulation Platform

## Project Overview

LuoYuan (泺源) Microarchitecture Modeling and Simulation Platform is a software platform for modeling, exploring, and debugging processor microarchitectures. It is built on Visualized μarch Language (VUL), a new high-level chip description language.

Based on VUL, the LuoYuan platform provides designers of new microarchitectures with:

1. A unified, structured, general-purpose behavior-level design description for microarchitectures
2. Cycle-accurate parallel simulation, with cycle behavior aligned to the final RTL implementation
3. Built-in debugging and performance statistics tools
4. Automated RTL code generation

## Overall Project Architecture

## Project Map

This project is the core command-line toolchain for Vul. Related project directories are listed below:

| Component | Type | Responsibility | Current Status | Entry |
| --- | --- | --- | --- | --- |
| RTLZZ: VULC++-RTL compiler | Sub-repository | Compiles combinational logic functions described in VULC++ into Verilog | Developed in sync with the main project | [RTLZZ](https://github.com/meng-cz/RTLzz) |
| VUL Tools VSCode Extension |…
