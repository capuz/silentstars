---
repo: "UniversalRobots/Universal_Robots_Client_Library"
name: "Universal_Robots_Client_Library"
description: "A C++ library for accessing the UR interfaces that facilitate the use of UR robotic manipulators by external applications."
readmeQualityOk: true
url: "https://github.com/UniversalRobots/Universal_Robots_Client_Library"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 200
forks: 144
openIssues: 10
closedIssues: 101
watchers: 17
contributors: 39
recentReleases: 0
createdAt: "2020-08-18T10:47:55Z"
lastCommitAt: "2026-09-04T08:10:25Z"
lastReleaseAt: "2025-02-20T08:17:48Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 46
maintainers: ["urfeex", "URJala", "urrsk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d2f8300ba3efe44b72f82b619f17519368cfdc3310f7037bb17677d015d1d87/UniversalRobots/Universal_Robots_Client_Library"
---

# Universal Robots Client Library

A C++ library for accessing Universal Robots interfaces. With this library C++-based drivers can be
implemented in order to create external applications leveraging the versatility of Universal Robots
robotic manipulators.

The library has no external dependencies besides the standard C++ libraries such as ROS, or boost
to make it easy to integrate and maintain. It also serves as the foundation for the ROS and ROS 2
drivers.

---

 </div>

## Requirements

* **Polyscope** (The software running on the robot controller) version **3.14.3** (for CB3-Series),
  or **5.9.4** (for e-Series) or **10.7.0** (For PolyScope X) or higher. If you use an older
  Polyscope version it is suggested to update your robot. If for some reason (please tell us in the
  issues why) you cannot upgrade your robot, please see the [version compatibility
  table](https://github.com/UniversalRobots/Universal_Robots_Client_Library/blob/HEAD/doc/polyscope_compatibility.rst) for a compatible tag.
* The library requires an implementation of **POSIX threads** such as the `pthread` library

## Build instructions

See [Build /…
