---
repo: "EPinci/ep-s20-otbr"
name: "ep-s20-otbr"
description: "This is a minimalist, performance oriented firmare for GL's S20 that supports: latest esp-idf, thread v1.4, TREL, BBR and Home Assistant OTBR integration."
readmeQualityOk: true
url: "https://github.com/EPinci/ep-s20-otbr"
language: "C"
languages: ["C", "HTML"]
languagePcts: [69, 25]
topics: ["otbr", "thread", "gl-s20"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 2
recentReleases: 3
createdAt: "2026-05-04T21:46:45Z"
lastCommitAt: "2026-11-20T12:05:24Z"
lastReleaseAt: "2026-11-17T12:16:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 38
maintainers: ["EPinci", "judahrand"]
openGraphImageUrl: "https://opengraph.githubassets.com/80cc81fdae99d0cafb99fbb880e6374b5fa8cdd83c8fa367ec08929ad8b9d0ea/EPinci/ep-s20-otbr"
---

# GL-S20 OpenThread Border Router

[GL's S20](https://www.gl-inet.com/products/gl-s20) is a nice and inexpensive device but firmware support is lacking behind as GL's attention is on more recent hardware.
Luckily enough, they shared an [OpenSDK](https://github.com/gl-inet/s20_thread_br_opensdk) that I forked to upgrade things a bit.

This is a minimalist, performance oriented firmare that supports:

- [esp-idf](https://github.com/espressif/esp-idf) -> v6.1.1
    - Thread v1.4
    - TREL support
    - BBR support
    - Home Assistant OTBR integration
- [esp-thread-br](https://github.com/espressif/esp-thread-br) -> main @ 80fca1b
    - Used as base framework
    - Implemented only wired connectivity in order to keep the radio for Thread use only
    - Forked basic Web UI to add logs, remote/local OTA and more
- [s20_thread_br_opensdk](https://github.com/gl-inet/s20_thread_br_opensdk) -> main @ 2b610f8
    - Leveraged primarily for LED support, PIN layout and base IDF settings

**Use at your own risk!** (but you can always flash back the original firmware...)
