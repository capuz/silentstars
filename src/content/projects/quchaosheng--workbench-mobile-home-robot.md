---
repo: "Quchaosheng/workbench-mobile-home-robot"
name: "workbench-mobile-home-robot"
description: "Evidence-first runtime for a wheeled mobile household robot with bounded actions, replayable events, and fail-closed verification."
readmeQualityOk: true
url: "https://github.com/Quchaosheng/workbench-mobile-home-robot"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["deterministic-replay", "evidence-first", "fail-closed", "gazebo", "linux-kernel", "moveit2", "python", "robotics", "ros2", "socketcan"]
stars: 123
forks: 4
openIssues: 68
closedIssues: 101
watchers: 6
contributors: 19
recentReleases: 5
createdAt: "2026-08-04T05:49:25Z"
lastCommitAt: "2026-09-17T08:49:46Z"
lastReleaseAt: "2026-09-06T03:54:29Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 92
undervaluedScore: 32
maintainers: ["Quchaosheng", "TH3478", "gulu-123"]
openGraphImageUrl: "https://opengraph.githubassets.com/498fe5c716a87a203dac828075e2028333a5f69eb2228b152bd79e2324a8da3e/Quchaosheng/workbench-mobile-home-robot"
discussionCount: 0
---

# Workbench Desk Robot

> **Verify before you say done.**
>
> An evidence-first foundation for mobile domestic robots: bounded actions,
> replayable events, and a verifier that can say **confirmed**, **refuted**, or
> **insufficient evidence**.

**Product name:** VORA Home Robot<br>
**Repository/runtime:** Workbench Desk Robot (`workbench-desk-robot`)

VORA is the product brand; Workbench remains the engineering repository and
evidence-first runtime name. The VORA mark uses an open angle and off-axis orbit
to stay distinctive without binding the identity to one robot use case.

[简体中文](https://github.com/Quchaosheng/workbench-mobile-home-robot/blob/HEAD/README.zh-CN.md) · [Interactive 3D view](https://github.com/Quchaosheng/workbench-mobile-home-robot/blob/HEAD/docs/assets/premium-product-render.html)

## Why Workbench?

Robot demos often treat “command accepted” as “task complete”. Workbench keeps
the proof in the loop:

```text
goal -> bounded planner -> semantic action -> trusted executor
                                      \-> event store -> verifier -> replay/dashboard
```

| Layer | Responsibility |
| --- | --- |
| Intent | Select from a small, typed action vocabulary |
|…
