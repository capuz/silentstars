---
repo: "sunrise-yuze/SC2_WM"
name: "SC2_WM"
description: "[ICML 2026] Official implementation of \"SC²-WM: A Self-Correcting World Model with Closed-Loop Feedback for Vision-and-Language Navigation in Continuous Environments\" ."
readmeQualityOk: true
url: "https://github.com/sunrise-yuze/SC2_WM"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-20T12:16:48Z"
lastCommitAt: "2026-08-03T06:42:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 53
undervaluedScore: 26
maintainers: ["Feliciaxyao", "sunrise-yuze", "LPY1219"]
openGraphImageUrl: "https://opengraph.githubassets.com/6688b09a75d2677c5db85a5cf75a9f47b0f2d6c30d1035347e376adf9482db21/sunrise-yuze/SC2_WM"
---

# SC²-WM: A Self-Correcting World Model with Closed-Loop Feedback for Vision-and-Language Navigation in Continuous Environments

**Xuan Yao, Yuze Zhu, Junyu Gao, Zongmeng Wang, Changsheng Xu**

*🎉 Accepted at the 43rd International Conference on Machine Learning (ICML 2026)*

📄 **Paper:** [SC²-WM (ICML 2026 camera-ready, PDF)](https://github.com/sunrise-yuze/SC2_WM/blob/HEAD/paper/SC2-WM-ICML2026.pdf)

---

## Overview

Vision-and-Language Navigation in Continuous Environments (VLN-CE) requires agents to make fine-grained navigation decisions under partial observability.
However, most existing methods rely on open-loop execution, lacking mechanisms to detect and correct internal state drift during inference.
We propose SC²-WM, **a self-correcting world model framework that introduces internal feedback for closed-loop decision making** in VLN-CE.
Our method derives feedback from world-model foresight to perform state-level plan refinement before action execution.
To handle challenging scenarios, we further introduce conditional world-aware adaptation, which enables model-level correction by selectively updating the world model at test time when feedback indicates model capacity…
