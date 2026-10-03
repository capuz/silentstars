---
repo: "transitiverobotics/transitive"
name: "transitive"
description: "An open-source framework for full-stack robotics"
readmeQualityOk: true
url: "https://github.com/transitiverobotics/transitive"
homepage: "https://transitiverobotics.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["robotics"]
stars: 150
forks: 13
openIssues: 0
closedIssues: 5
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2022-09-21T22:46:47Z"
lastCommitAt: "2026-10-03T22:05:08Z"
lastReleaseAt: "2026-04-13T17:59:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 33
maintainers: ["chfritz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d818cc000db7c91b7d0ad9d34f2e364d58ea6d8a641db9869a6b5a8b499dcf0/transitiverobotics/transitive"
discussionCount: 0
---

# Transitive: A Full-stack Framework for Robotics

by [Transitive Robotics](https://transitiverobotics.com)

Designed with ROS in mind, but also works without.

### Key Features

1. Live-data synchronization between robot, cloud, and UI via [MQTTSync](https://transitiverobotics.com/docs/learn/mqttsync/)
   - Transparent and efficient data-sharing without the need for APIs
   - Reactively re-render UI elements when data on a robot changes ([demo](https://youtu.be/XqzpSbH8zUI)).
2. [Full-stack package management](https://transitiverobotics.com/blog/design-full-stack-packages/)
   - Notion of packages ("capabilities") that provides encapsulation and allows sharing with third-parties
   - Deployment mechanism incl. over-the-air auto-updates
   - Handles cross-device version dependencies
   - Sandboxing of capabilities, both on robot and in the cloud
   - UI component abstraction
     - Using [Web Components](https://www.webcomponents.org/introduction)
     - Easy to embed in other web applications
     - Easy to embed in React, Angular, etc.
3. [Authentication and authorization](https://transitiverobotics.com/docs/learn/auth/)
   - For robots in the fleet
   - For web application…
