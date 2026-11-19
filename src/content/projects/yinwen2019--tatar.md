---
repo: "yinwen2019/TATAR"
name: "TATAR"
description: "An official implementation of \"Share the Policy, Not the Judgment: Task-Aware Post-Training for Unified Image Quality and Aesthetic Assessment\""
readmeQualityOk: true
url: "https://github.com/yinwen2019/TATAR"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 18
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-20T06:55:33Z"
lastCommitAt: "2026-11-19T05:00:35Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 8
maintainers: ["yinwen2019"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba5672a013a8458f1583cc1ab2c109c8438d1cb88f5665778ceec1113489f5b5/yinwen2019/TATAR"
---

# Share the Policy, Not the Judgment

### Task-Aware Post-Training for Unified Image Quality and Aesthetic Assessment

Official implementation of **TATAR** (**T**ask-**A**ware **T**hinking, **A**ggregation, and **R**eward), a post-training framework in which one multimodal large language model (MLLM) scores both **image quality (IQA)** and **image aesthetics (IAA)**, while each task gets its own reasoning mode, reward, and loss weight.

---

## 📌 Overview

MLLMs can score both the technical quality and the aesthetic appeal of an image with one model. Existing unified scorers share more than the parameters: they also use one reasoning mode and one reward for both tasks, implicitly treating these choices as neutral to each task. We show that they are not.

TATAR therefore **shares the policy, not the judgment**. The whole model, including the visual encoder, stays shared across tasks, while the reasoning mode, the reward, and the loss weight are set per task.

---

## 🔍 Key Findings

We train one policy jointly on both tasks and change one setting at a time.
