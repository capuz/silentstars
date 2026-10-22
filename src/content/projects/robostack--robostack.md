---
repo: "RoboStack/robostack"
name: "robostack"
description: "RoboStack: conda packages for all ROS 2 distributions"
readmeQualityOk: true
url: "https://github.com/RoboStack/robostack"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 4
openIssues: 18
closedIssues: 20
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-06T09:10:44Z"
lastCommitAt: "2026-10-22T08:52:30Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 61
maintainers: ["Tobias-Fischer", "robostack-bot-dev[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98ba769acfe516dfe066de60f57ccde49a92dc10f2ef69ef0c0ca274241d80c3/RoboStack/robostack"
fundingLinks: ["GITHUB:https://github.com/RoboStack", "OPEN_COLLECTIVE:https://opencollective.com/robostack"]
---

# RoboStack: ROS 2 distributions

Conda packages of [ROS](https://www.ros.org) for Linux, macOS and Windows, built from
this repository for every supported ROS 2 distribution. To install and use them, see
the [RoboStack documentation](https://robostack.github.io/GettingStarted.html).

| Distribution | Channel |
|---|---|
| rolling | robostack-rolling on [prefix.dev](https://prefix.dev/channels/robostack-rolling) and [anaconda.org](https://anaconda.org/robostack-rolling) (the same packages) |
| lyrical | robostack-lyrical on [prefix.dev](https://prefix.dev/channels/robostack-lyrical) and [anaconda.org](https://anaconda.org/robostack-lyrical) (the same packages) |
| jazzy | [robostack-jazzy](https://anaconda.org/robostack-jazzy) (prefix.dev mirrors it) |
| humble | [robostack-humble](https://anaconda.org/robostack-humble) (prefix.dev mirrors it) |

Packages are named `ros2-<package>`, e.g. `ros2-desktop` or `ros2-rclcpp`; the
distribution comes from the channel. The older names keep working: for every package
there is also a small `ros-<distro>-<package>` package that just depends on
`ros2-<package>` of the same version (vinca's `package_name_mode: both` in
`shared/vinca.yaml`), so…
