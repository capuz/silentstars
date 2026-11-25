---
repo: "zllxot/CORE"
name: "CORE"
description: "ICCV2023 - CORE: Cooperative Reconstruction for Multi-Agent Perception"
readmeQualityOk: true
url: "https://github.com/zllxot/CORE"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["autonomous-driving", "multi-agent-perception", "reconstruction", "vehicle-to-vehicle"]
stars: 45
forks: 3
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-07-15T14:53:11Z"
lastCommitAt: "2026-11-25T13:18:28Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 24
maintainers: ["zllxot"]
openGraphImageUrl: "https://opengraph.githubassets.com/13d38aa039609b9f1d521b7c53d397d0913f8ca870929259b072f7e0bc597a4b/zllxot/CORE"
---

# CoRE

**Cooperative Reconstruction for Multi-Agent Perception**

Binglu Wang, Lei Zhang, Zhaozhong Wang, Yongqiang Zhao and Tianfei Zhou, ICCV 2023. [Paper](https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_CORE_Cooperative_Reconstruction_for_Multi-Agent_Perception_ICCV_2023_paper.pdf)

CoRE learns to reconstruct a bird's-eye-view feature map of the combined LiDAR observations of cooperating vehicles. Each neighbor compresses its features at three scales and transmits sparse feature vectors with their spatial indices. The ego vehicle combines the decoded messages with its local features using Attentive Collaboration. The joint point cloud supplies a training target. Inference uses the individual vehicles' observations.
