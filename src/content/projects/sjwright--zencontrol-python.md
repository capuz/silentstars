---
repo: "sjwright/zencontrol-python"
name: "zencontrol-python"
description: "This is a python implementation of the Zencontrol TPI Advanced protocol for DALI lighting."
readmeQualityOk: true
url: "https://github.com/sjwright/zencontrol-python"
homepage: "https://support.zencontrol.com/hc/en-us/articles/360000337175-What-is-the-Third-Party-Interface-TPI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dali", "dali-2"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 6
createdAt: "2024-12-29T10:06:18Z"
lastCommitAt: "2026-09-26T08:47:41Z"
lastReleaseAt: "2026-08-04T03:18:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 79
maintainers: ["sjwright"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e958459f8ccc20253d3e57a2c022208caade66cca2cc2493c549214e3051746/sjwright/zencontrol-python"
---

# zencontrol-python

A Python implementation of the **Zencontrol TPI Advanced** protocol, organised in three layers:

- zencontrol.io: raw TPI Advanced UDP packet framing;
- zencontrol.api: control surface for TPI Advanced API commands and events;
- zencontrol.interface: an opinionated world model, suitable for smart-building integrations. It provides a fully resolved set of methods, objects, and callbacks for lights, groups, buttons, sensors and everything else in your zencontrol universe.

[**Documentation**](https://github.com/sjwright/zencontrol-python/blob/HEAD/docs/overview.md)

In addition to its own test suite, this library is exercised heavily by
[zencontrol-simulator](https://github.com/sjwright/zencontrol-simulator), a nearly feature-complete simulator of zencontrol hardware.
As part of that suite, the simulator imports and drives this library to a substantial extent.

As a practical demonstration of the library in production use, [zencontrol-homeassistant](https://github.com/sjwright/zencontrol-homeassistant) exposes the full capability of this library. Home Assistant is an open source smart building system ostensibly designed for residential homes, but is seeing…
