---
repo: "addisonwu05/OccludeBench"
name: "OccludeBench"
description: "OccludeBench: Can VLMs Find What's Missing?"
readmeQualityOk: true
url: "https://github.com/addisonwu05/OccludeBench"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-04T03:51:01Z"
lastCommitAt: "2026-11-26T23:37:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 20
maintainers: ["addisonwu05"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce43ea39ee73c3f7ba970851f98759bce9f8d7b79b8e460b8c80e2f0ce454926/addisonwu05/OccludeBench"
---

# OccludeBench: Can VLMs Find What's Missing?

**Jasin Cekinmez**<sup>\*</sup> &nbsp; **Addison J. Wu**<sup>\*</sup> &nbsp; **Ryo Mitsuhashi**<sup>\*</sup> &nbsp; **Linrong Cai** &nbsp; **Xingyu Fu** &nbsp; **Zhuang Liu**

Princeton University &nbsp;·&nbsp; <sup>\*</sup>Equal contribution

OccludeBench is a benchmark of 378 photographs, each with one object fully hidden behind a mask. In **direct** images (197) the object can only be recovered from its shadow or reflection; in **inferential** images (181) it can be inferred from the rest of the scene. Across five VLMs, accuracy averages 42.7% on direct images versus 62.7% on inferential ones, while humans show no significant gap. OccludeTrace, our four-stage diagnostic, finds that models detect and recognize the cue but fail to recover the object from it within the full image.

## Setup

```bash
git clone https://github.com/addisonwu05/OccludeBench
cd OccludeBench
pip install -r requirements.txt
cp .env.example .env   # then fill in your keys
```
