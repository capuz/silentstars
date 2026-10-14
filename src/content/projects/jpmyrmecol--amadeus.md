---
repo: "jpmyrmecol/AMADEUS"
name: "AMADEUS"
description: "Annotation-free multi-animal direction estimation using self-supervised learning"
readmeQualityOk: true
url: "https://github.com/jpmyrmecol/AMADEUS"
homepage: "https://amadeus.jpmyrmecol.com/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["animal-behavior", "animal-tracking", "behavioral-analysis", "computer-vision", "ethology", "multi-animal-tracking", "self-supervised-learning", "yolo"]
stars: 28
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-19T07:12:54Z"
lastCommitAt: "2026-10-14T08:58:19Z"
lastReleaseAt: "2026-09-29T20:24:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 39
maintainers: ["jpmyrmecol", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f96e08c811d64eea27ac3d2865f409a0bc7ab2f7b10d781c2cb45f0a14e2e1f2/jpmyrmecol/AMADEUS"
---

---

**Annotation-free Multi-Animal Direction Estimation Using Self-supervised learning**

AMADEUS is a markerless multi-animal tracking system for laboratory videos. It estimates an oriented bounding box (OBB) and head direction for each animal while maintaining individual identities over time. No manual training annotation or physical marking is required.

After you configure foreground segmentation, AMADEUS extracts single-animal blobs, assigns direction classes using movement direction, and synthesizes interaction images by copy-paste augmentation. A detector trained on these images estimates OBBs and direction classes during crossings and crowding. Staged association and refinement produce individual tracks. When almost complete occlusion is expected, contrastive learning is additionally used for identity verification and correction.

## Install and launch

### Recommended environment

AMADEUS supports **NVIDIA GPUs on Windows and Linux, Apple Silicon on macOS, and AMD GPUs via ROCm on Linux and Windows 11**.

For NVIDIA GPUs, **8 GB or more of VRAM is recommended**, although the required memory depends on factors such as video resolution and the number of animals. AMADEUS…
