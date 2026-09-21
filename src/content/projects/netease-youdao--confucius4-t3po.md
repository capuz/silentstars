---
repo: "netease-youdao/Confucius4-T3PO"
name: "Confucius4-T3PO"
description: "Confucius4-T3PO: a Low latency and High Quality Text-to-text Simultaneous Translation model via Pareto Policy Optimization"
readmeQualityOk: true
url: "https://github.com/netease-youdao/Confucius4-T3PO"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 22]
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-14T12:40:52Z"
lastCommitAt: "2026-09-21T09:15:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 13
maintainers: ["zhengfengL"]
openGraphImageUrl: "https://opengraph.githubassets.com/01a6c3fb1fc27eebe5fdc64aa2f89c5a190f9ad09283db52bf644ebe7afbff1c/netease-youdao/Confucius4-T3PO"
---

<h1>Confucius4-T3PO: simulTaneous Translation via pareTo Policy Optimization</h1>
</div>

    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
</div>

<br>

Confucius4-T3PO (simul**T**aneous **T**ranslation via pare**T**o **P**olicy **O**ptimization) is a **14-billion-parameter text-to-text simultaneous machine translation (SiMT) model** developed by the NetEase Youdao AI team. Its development follows a three-stage pipeline: high-quality segment-aligned data construction, streaming cold-start of the translation model, and Pareto-aware reinforcement learning for joint quality–latency optimization. It supports streaming text input and real-time `READ`/`WRITE` decisions. After receiving each fine-grained text chunk, the model dynamically decides whether to wait for further context or to immediately produce an incremental translation. Meanwhile, the model organizes the input sequence under an interleaved history protocol, enabling KV-cache reuse and reducing redundant computation overhead.

This model is a T2T (text-to-text) simultaneous translation model and does not natively support speech…
