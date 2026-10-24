---
repo: "zauberzeug/rosys"
name: "rosys"
description: "An all-Python robot system based on web technologies. The purpose is similar to ROS, but it's based on NiceGUI and easier to use for mobile robotics."
readmeQualityOk: true
url: "https://github.com/zauberzeug/rosys"
homepage: "https://rosys.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["robotics", "ros", "python", "asyncio", "websocket", "web"]
stars: 138
forks: 18
openIssues: 4
closedIssues: 40
watchers: 9
contributors: 26
recentReleases: 0
createdAt: "2020-07-20T13:29:11Z"
lastCommitAt: "2026-10-24T08:07:54Z"
lastReleaseAt: "2021-12-04T04:49:31Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 46
maintainers: ["falkoschindler", "pascalzauberzeug", "evnchn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2b8fb6f74a958c2f6d81ee18370fc16897fcd1dda548a86dec07586fa879af5/zauberzeug/rosys"
discussionCount: 27
---

# RoSys - The Robot System

RoSys provides an easy-to-use robot system.
Its purpose is similar to [ROS](https://www.ros.org/).
But RoSys is fully based on modern web technologies and focusses on mobile robotics.

The full documentation is available at [rosys.io](https://rosys.io/).

## Principles

### All Python

Python is great to write business logic.
Computation-heavy tasks are wrapped in processes, accessed through WebSockets or called via C++ bindings.
Like you would do in any other Python program.

### Modularity

You can structure your code as you please.
RoSys provides its magic without assuming a specific file structure, configuration files or enforced naming.

### Event Loop

Thanks to [asyncio](https://docs.python.org/3/library/asyncio.html) you can write your business logic without locks and mutexes.
The execution is [parallel but not concurrent](https://realpython.com/python-concurrency/) which makes it easier to read, write and debug.
In real-case scenarios this is also much faster than [ROS](https://www.ros.org/).
Its multiprocessing architecture requires too much inter-process communication.

### Web UI

Most machines need some kind of human interaction.
RoSys is…
