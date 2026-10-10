---
repo: "violetljj/blind-assist"
name: "blind-assist"
description: "Open-source Android prototype for on-device assistive perception, reproducible evaluation, and evidence-bounded accessibility research. SDG 10."
readmeQualityOk: true
url: "https://github.com/violetljj/blind-assist"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["accessibility", "android", "assistive-technology", "camerax", "computer-vision", "jetpack-compose", "kotlin", "on-device-ml", "reproducible-research", "tflite"]
stars: 6
forks: 9
openIssues: 6
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-05-16T17:12:44Z"
lastCommitAt: "2026-10-10T10:03:34Z"
lastReleaseAt: "2026-08-11T16:54:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 64
maintainers: ["violetljj"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1240871143/f5386f64-cdec-4407-9828-df4e7638008d"
discussionCount: 1
---

# BlindAssist

BlindAssist is an Android showcase research prototype for goal-driven visual
assistance. It combines camera perception, risk logic, and concise guidance to
demonstrate measurable effects in clearly stated controlled conditions. It is
not a certified mobility or safety product.

App v10.15.1 opens the original home without starting perception. **Start assist**
explicitly starts the **A+LOCAL experimental mode** with
the frozen research classifier running offline on the phone. Its nominal camera/ToF
registration is not physical calibration; simulation results do not establish hardware
accuracy. The original ToF mode remains available. See [hardware guide](https://github.com/violetljj/blind-assist/blob/HEAD/docs/HARDWARE_OBSTACLE_DEMO.md).

The obstacle-perception research goal is **盲杖互补的类别无关前视障碍感知**
(cane-complementary, class-agnostic forward obstacle awareness). Priorities are
forward walls and large obstructions, body/head protrusions, suspended hazards,
and multi-height poles, with useful direction and coarse range evidence under
limited compute. The wearer chooses movement; this is not autonomous avoidance.
Very low obstacles remain secondary compatibility…
