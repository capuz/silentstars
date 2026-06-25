---
repo: "ros2/rmw_connextdds"
name: "rmw_connextdds"
description: "ROS 2 RMW layer for RTI Connext DDS Professional and RTI Connext DDS Micro."
url: "https://github.com/ros2/rmw_connextdds"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["rti-connext-dds", "ros", "rmw"]
stars: 64
forks: 38
openIssues: 23
closedIssues: 42
watchers: 25
contributors: 68
recentReleases: 0
createdAt: "2020-10-19T21:28:35Z"
lastCommitAt: "2026-06-25T01:38:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 38
maintainers: ["fgallegosalido", "sloretz", "fujitatomoya"]
openGraphImageUrl: "https://opengraph.githubassets.com/8afbffe8ca7c8f274289beb85730ce84a581bd68d0507d045bc6b7d16fa1560d/ros2/rmw_connextdds"
---

# ROS 2 Middleware Layer for RTI Connext DDS

>[!IMPORTANT]
This README focuses on Connext RMW configuration and repository-specific development information.
For installation instructions, tutorials, and high-level release notes, see the [RTI Connext and ROS 2](https://community.rti.com/static/documentation/ros/index.html) User's Manual in the RTI Community documentation.

This repository contains an implementation of the [ROS 2](https://docs.ros.org/en/rolling)
RMW layer which allow developers to deploy their ROS applications on top of
[RTI Connext DDS Professional](https://www.rti.com/products/connext-dds-professional)

The repository provides two RMW packages:

- `rmw_connextdds`

- `rmw_connextddsmicro` (deprecated)

Package `rmw_connextdds` is meant to be a replacement for [`rmw_connext_cpp`](https://github.com/ros2/rmw_connext).
This new implementation resolves several performance issues, and it improves out-of-the-box
interoperability with DDS applications.

*The repository is undergoing stabilization, with some features still in
active development.
Please consider reporting any [issue](https://github.com/rticommunity/rmw_connextdds/issues)
that you may experience, while…
