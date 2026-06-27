---
repo: "UBCSailbot/sailbot_workspace"
name: "sailbot_workspace"
description: "UBC Sailbot's monorepo"
url: "https://github.com/UBCSailbot/sailbot_workspace"
homepage: "https://ubcsailbot.github.io/sailbot_workspace/main/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [84]
topics: ["devcontainer", "docker", "ros", "vcstool", "vscode"]
stars: 11
forks: 4
openIssues: 78
closedIssues: 284
watchers: 2
contributors: 48
recentReleases: 0
createdAt: "2022-08-09T19:58:28Z"
lastCommitAt: "2026-06-27T06:24:14Z"
lastReleaseAt: "2023-06-27T04:52:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 76
maintainers: ["raghumanimehta", "FireBoyAJ24", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cea8deb8b5d102c724c31c297e92b0a63924c2effd56755b5aa3ea3d8a45984b/UBCSailbot/sailbot_workspace"
discussionCount: 0
---

# Sailbot Workspace

This repository will get you set up to develop UBCSailbot's software on VS
Code. It is based on athackst's
[vscode_ros2_workspace](https://github.com/athackst/vscode_ros2_workspace).

## Documentation

Our documentation, including setup and run instructions, can be found on [our Docs website](https://ubcsailbot.github.io/sailbot_workspace/main/current/sailbot_workspace/overview/).

## Features

An overview of Sailbot Workspace's features can be found below.
See [our docs site](https://ubcsailbot.github.io/sailbot_workspace/main/current/sailbot_workspace/usage/workflow/)
for how to use these features.

### Style

C++ and Python linters and formatters are integrated into Sailbot Workspace:

- ament_flake8
- ament_lint_cmake
- ament_xmllint
- black
- clang-tidy
- isort

The [ament linters](https://github.com/ament/ament_lint/tree/humble) are
configured to be consistent with the
[ROS style guide](https://docs.ros.org/en/humble/The-ROS2-Project/Contributing/Code-Style-Language-Versions.html).

### Dev Container

[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
enable us to use a
[Docker…
