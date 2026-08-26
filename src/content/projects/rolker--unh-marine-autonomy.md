---
repo: "rolker/unh_marine_autonomy"
name: "unh_marine_autonomy"
description: "ROS package for common items for CCOM's Project 11."
readmeQualityOk: true
url: "https://github.com/rolker/unh_marine_autonomy"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [61, 35]
stars: 20
forks: 22
openIssues: 71
closedIssues: 132
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2017-12-19T18:22:52Z"
lastCommitAt: "2026-08-26T04:15:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 71
maintainers: ["rolker"]
openGraphImageUrl: "https://opengraph.githubassets.com/be457c0bfd5f26b2133df14202f25c9f6e6000e0e02c85739f1c12d663cca431/rolker/unh_marine_autonomy"
---

# UNH Marine Autonomy Framework

Welcome to the **UNH Marine Autonomy Framework** repository. This is the home of the autonomous control software developed at the Center for Coastal and Ocean Mapping / Joint Hydrographic Center (CCOM/JHC) at the University of New Hampshire (UNH), also known as *Project11*.

> **North Star**: "Tell a robot to map an area, have it do it safely, and return with good data."

## Vision
The framework is a multi-domain, community-driven platform for marine robotics.
**[Read the Vision & Strategic Pillars](https://github.com/rolker/unh_marine_autonomy/blob/HEAD/VISION.md)**

## Repository Structure

This repository is a collection of packages that form the core of the autonomy system.

*   **[`marine_autonomy`](https://github.com/rolker/unh_marine_autonomy/blob/HEAD/marine_autonomy/)**: The meta-package and core documentation for the legacy "Project11" logic.
*   **`helm_manager`**: Arbitrates control commands to the hardware.
*   **`mission_manager`**: High-level mission execution and state machine.
*   **`camp`** (External): The CCOM Autonomous Mission Planner (UI).

## Getting Started
This repository is typically part of a layered workspace setup.

###…
