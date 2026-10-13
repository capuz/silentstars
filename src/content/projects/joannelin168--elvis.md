---
repo: "JoanneLin168/ELVIS"
name: "ELVIS"
description: "ELVIS: Enhance Low-Light for Video Instance Segmentation in the Dark [CVPR 2026]"
readmeQualityOk: true
url: "https://github.com/JoanneLin168/ELVIS"
homepage: "https://joannelin168.github.io/research/ELVIS/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-01T15:45:24Z"
lastCommitAt: "2026-10-13T10:58:07Z"
lastReleaseAt: "2025-12-01T19:29:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 25
maintainers: ["JoanneLin168"]
openGraphImageUrl: "https://opengraph.githubassets.com/66e2218152d7f1aab162e011d9cd33d5909f132a24c8a159711378a6305e3b71/JoanneLin168/ELVIS"
---

# 	ELVIS: Enhance Low-Light for Video Instance Segmentation in the Dark [CVPR 2026]

**Authors**: _Joanne Lin, Ruirui Lin, Yini Li, David Bull, Nantheera Anantrasirichai_

**Institution**: Visual Information Laboratory, University of Bristol, United Kingdom

[[`Project Page`](https://joannelin168.github.io/research/ELVIS/)][[`arXiv`](http://arxiv.org/abs/2512.01495)]

> [!CAUTION]
> **(13/10/2026) UPDATE:** We have found a bug in our code for DEN results and have updated the tables in the arXiv page. While our proposed degradation pipeline is still the best performing pipeline, the updated metrics show that DEN performs significantly better than previously reported. 

## Usage
1. Train VDP-Net
2. Collect $\Phi$ from low-light datasets 
2. Train Mask2Former-based VIS method with ELVIS (we provide GenVIS+ELVIS code as an example)

We also provide the pre-trained weights of VDP-Net and GenVIS+ELVIS [here](https://github.com/JoanneLin168/ELVIS/releases/tag/v1.0).

## Citation
If you use our work in your research, please cite using the following BibTeX entry:
```
@article{lin2025elvis,
         title={ELVIS: Enhance Low-Light for Video Instance Segmentation in the Dark},…
