---
repo: "sparkplug23/PulSar"
name: "PulSar"
description: "Custom firmware for ESP82xx and ESP32 based hardware for home automation and measurement systems."
readmeQualityOk: true
url: "https://github.com/sparkplug23/PulSar"
homepage: "https://github.com/sparkplug23/HACSDocsBasic"
language: "C++"
languages: ["C++", "HTML", "C"]
languagePcts: [43, 34, 20]
topics: ["automation", "home", "esp8266", "esp32", "sensors", "lights", "mqtt", "measurements", "sdcard", "nextion"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-01-06T04:30:03Z"
lastCommitAt: "2026-10-26T03:01:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 76
maintainers: ["sparkplug23"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb2940465cc089c8190d31c32acbf8735a17d32a7e1e4a276a2a8c313cc37c05/sparkplug23/PulSar"
---

# PulSar

Firmware for _ESP8266_ and _ESP32_ equiped devices for integration with smart home systems. The project has been written to be highly modular, but also includes some bespoke firmware options for specific use cases. The modularity is intended to allow easy integration of additional sensors or drivers as the project grows. 

*The current release of this project into the public domain is to allow easy sharing with early adopters who are helping to test and debug this project for future official public release.*

Note: The documentation on this project is currently sparse and not maintained as significant changes are ongoing to the firmware. Credit to the developers who have inspired and contributed to this code will be added when documentation is added.

# Overview

The project has a layout with related code being grouped into classes, also reffered to as "modules", since each class performs a specialised task. The modules are further grouped by the type of task they perform (e.g., Networking, Sensors) and placed into their own folders [Figure 1].

These folders can be summarised as follows:
  * `0_ConfigUser` - Allows configuration of the desired functionality of the…
