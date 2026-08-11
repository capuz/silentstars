---
repo: "gahingwoo/linux-rk3576-npu"
name: "linux-rk3576-npu"
description: "RK3576 NPU mainlining and bring-up "
readmeQualityOk: true
url: "https://github.com/gahingwoo/linux-rk3576-npu"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [41, 39]
stars: 13
forks: 1
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-06-03T06:36:53Z"
lastCommitAt: "2026-08-11T04:48:26Z"
lastReleaseAt: "2026-06-07T10:24:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["gahingwoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e3e2d7aa2173a49a4c2c07365d5fb8631f053cea2824a0afabe895b5ceac1ec/gahingwoo/linux-rk3576-npu"
---

# linux-rk3576-npu

Mainline kernel bring-up for the RK3576 NPU on Radxa ROCK 4D.

## Upstream

The driver support is on the list. Current series:

**[RFC PATCH v6 0/9: accel/rocket: RK3576 NPU (RKNN) enablement](https://lore.kernel.org/all/20260806063413.350184-1-gahing@gahingwoo.com/)**
(2026-08-06, on top of Igor Paunovic's clocks-by-name fix)

Earlier revisions:
[v1](https://lore.kernel.org/all/20260717085220.3212274-1-gahing@gahingwoo.com/) |
[v2](https://lore.kernel.org/all/20260718031146.3368811-1-gahing@gahingwoo.com/) |
[v3](https://lore.kernel.org/all/20260731043507.1832277-1-gahing@gahingwoo.com/) |
[v4](https://lore.kernel.org/all/20260803094125.3285895-1-gahing@gahingwoo.com/) |
[v5](https://lore.kernel.org/all/20260805063826.95682-1-gahing@gahingwoo.com/)

v6 splits the driver work into preparation and enablement, adds bindings for the
power domain resets and for the NPU MMU clock set, and fixes five things found by
review: a one way poll_dying latch, a reset count that walked an unacquired
entry, two register writes that belonged under job_lock, a poll that could touch
a runtime suspended device, and a completion race that v5 had closed on only one
side. Reviewers…
