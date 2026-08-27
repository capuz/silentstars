---
repo: "opendaylight/netconf"
name: "netconf"
description: "Mirror of the OpenDaylight netconf gerrit project"
readmeQualityOk: true
url: "https://github.com/opendaylight/netconf"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 92
forks: 103
openIssues: 0
closedIssues: 0
watchers: 23
contributors: 99
recentReleases: 0
createdAt: "2015-08-14T16:53:32Z"
lastCommitAt: "2026-08-27T14:03:58Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 50
maintainers: ["Sramcik", "rovarga", "ihrasko"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcd52ad07ef1e577217617f607dabcb3a566b088f357492a8bbe79e8557b8348/opendaylight/netconf"
---

# OpenDaylight NETCONF/RESTCONF implementation

This project hosts implementations of protocols defined by the [IETF NETCONF Working Group](https://datatracker.ietf.org/wg/netconf/about/).
In particular, it implements:

- [Network Configuration Protocol (NETCONF)](https://www.rfc-editor.org/rfc/rfc6241)
- [RESTCONF Protocol](https://www.rfc-editor.org/rfc/rfc8040)

Your immediate interests may be:

- Documentation is in [docs](https://docs.opendaylight.org/projects/netconf/en/latest/index.html)
- Ready-to-use applications are in [apps](https://github.com/opendaylight/netconf/blob/HEAD/apps/README.md)

# NETCONF/RESTCONF protocol layer assumptions

The code in this repository is organized roughly along the lines of
[NETCONF Protocol Layers](https://www.rfc-editor.org/rfc/rfc6241#page-9). For the purposes of this implementation, we are
making three distinct assuptions:

- RFC6241 Figure 1 looks like this:
  ```
            Layer                 Example
       +-------------+      +-----------------+      +----------------+
   (4) |   Content   |      |  Configuration  |      |  Notification  |
       |             |      |      data       |      |      data      |…
