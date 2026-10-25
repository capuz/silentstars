---
repo: "damonitor/damo"
name: "damo"
description: "DAMON user-space tool"
readmeQualityOk: true
url: "https://github.com/damonitor/damo"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 90
forks: 28
openIssues: 1
closedIssues: 28
watchers: 4
contributors: 25
recentReleases: 0
createdAt: "2024-08-09T19:34:53Z"
lastCommitAt: "2026-10-25T22:04:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 50
maintainers: ["sjp38"]
openGraphImageUrl: "https://opengraph.githubassets.com/202e2c18c64c574952838e8aeeadc527265213ef639a6b47f930cb8b2a295bd9/damonitor/damo"
discussionCount: 0
---

DAMO: DAMON Operator
====================

`damo` is a user space tool for [DAMON](https://damonitor.github.io).  Using
this, you can monitor the data attributes including access patterns of your
system or workloads, and do data attributes-aware memory management operations.

Official Repositories
---------------------

Official git repos for `damo` are hosted on kernel.org and GitHub:

- kernel.org: https://git.kernel.org/pub/scm/linux/kernel/git/sj/damo.git
- GitHub: https://github.com/damonitor/damo

Demo Video
==========

Please click the below thumbnail to show the short demo video.  Note that the
video is recorded in 2020, and hence not showing features added after the demo.

http://img.youtube.com/vi/l63eqbVBZRY/0.jpg)](
http://www.youtube.com/watch?v=l63eqbVBZRY
"DAMON: a demo for the Kernel Summit 2020")

Getting Started
===============

Follow below instructions and commands to monitor and visualize the access
pattern of your workload.

    $ # install damo using packaging systems listed above,
    $ # or cloning the source repo and updating $PATH.
    $ sudo damo start $(pidof <your workload>)
    $ sudo damo report access
    $ sudo damo record ongoing
    $ sudo damo…
