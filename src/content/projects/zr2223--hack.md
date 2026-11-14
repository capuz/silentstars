---
repo: "Zr2223/HACK"
name: "HACK"
description: "[AAAI 2026] Head-Aware KV Cache Compression for Efficient Visual Autoregressive Modeling"
readmeQualityOk: true
url: "https://github.com/Zr2223/HACK"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 6
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-15T13:34:06Z"
lastCommitAt: "2026-11-14T10:50:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 22
maintainers: ["Zr2223"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9a5d465c081c45203c87e33c4cd3f954274951397fd549a33f0b105178a9e3/Zr2223/HACK"
---

>**"Hack the Cache, Keep the Vision."**

# (AAAI 2026) Head-Aware KV Cache Compression for Efficient Visual Autoregressive Modeling 

<!-- [Ziran Qin](https://github.com/Zr2223)<sup>1</sup>, Youru Lv<sup>1</sup>, Mingbao Lin<sup>2*</sup>, Hang Guo<sup>3</sup>, <br> Zeren Zhang<sup>4</sup>, Danping Zou<sup>1</sup>, Weiyao Lin<sup>1*</sup>

---

## 📖 Abstract

>Visual Autoregressive (VAR) models adopt a next-scale prediction paradigm, offering high-quality content generation with substantially fewer decoding steps. However, existing VAR models suffer from significant attention complexity and severe memory overhead due to the accumulation of key-value (KV) caches across scales. In this paper, we tackle this challenge by introducing KV cache compression into the next-scale generation paradigm. We begin with a crucial observation: attention heads in VAR models can be divided into two functionally distinct categories: *Contextual Heads* focus on maintaining semantic consistency, while *Structural Heads* are responsible for preserving spatial coherence. This structural divergence causes existing one-size-fits-all compression methods to perform poorly on VAR models. To address this, we…
