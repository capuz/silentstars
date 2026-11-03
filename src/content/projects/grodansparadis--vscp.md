---
repo: "grodansparadis/vscp"
name: "vscp"
description: "VSCP (Very Simple Control Protocol) IoT/m2m framework"
readmeQualityOk: true
url: "https://github.com/grodansparadis/vscp"
homepage: "http://www.vscp.org"
language: "C++"
languages: ["C++", "C"]
languagePcts: [61, 25]
topics: ["iot-platform", "iot-application", "iot-framework", "iot-gateway", "iothub", "m2m", "home-automation", "can-bus", "communication", "vscp"]
stars: 55
forks: 21
openIssues: 1
closedIssues: 203
watchers: 11
contributors: 7
recentReleases: 0
createdAt: "2012-09-03T13:46:36Z"
lastCommitAt: "2026-11-03T12:48:24Z"
lastReleaseAt: "2018-08-30T09:51:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 57
maintainers: ["grodansparadis", "Copilot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af104df1d17480f5220b08f2aea4937d772f6db19ed1ca942f96bc87abdd81f6/grodansparadis/vscp"
fundingLinks: ["GITHUB:https://github.com/grodansparadis"]
discussionCount: 24
---

*You can look at each device individually and create control software for each one, but we took a different approach: we designed a black-box device model and built control software that works with everything that exists. __One to unite them all__.*

  * Documentation for different parts of VSCP is available here: [https://docs.vscp.org](https://docs.vscp.org)
  * A list of all available VSCP packages is available on the [project homepage](https://vscp.org)
  * The MQTT daemon has been separated from this package and is now available here: [https://github.com/grodansparadis/vscp-mqtt-daemon](https://github.com/grodansparadis/vscp-mqtt-daemon)
  * The TCP/IP daemon has been separated from this package and is now available here: [https://github.com/grodansparadis/vscp-tcpip-daemon](https://github.com/grodansparadis/vscp-tcpip-daemon)

The code in this repository is mainly used as a common library for different VSCP components. It can be included in other projects to provide core functionality and facilitate communication between various VSCP modules. Typically, it is used as a Git submodule, but it can also be included directly as a library.

Clone with:

```bash
git clone…
