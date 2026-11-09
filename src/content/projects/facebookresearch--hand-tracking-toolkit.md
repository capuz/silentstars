---
repo: "facebookresearch/hand_tracking_toolkit"
name: "hand_tracking_toolkit"
description: "This repository contains utilities for loading data from Meta's datasets with hand pose annotations, computing hand tracking metrics, and visualising results of a hand tracking method."
readmeQualityOk: true
url: "https://github.com/facebookresearch/hand_tracking_toolkit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 83
forks: 4
openIssues: 0
closedIssues: 10
watchers: 11
contributors: 11
recentReleases: 0
createdAt: "2024-04-09T09:45:37Z"
lastCommitAt: "2026-11-09T03:28:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 33
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7d76c4048652c80e4ea37053a5f2cea0b584a6526fc0eb9f8cbd33bb8b8fc79a/facebookresearch/hand_tracking_toolkit"
---

# A toolkit for egocentric hand tracking research

### Check out the [Multiview Egocentric Hand Tracking Challenge](https://eval.ai/web/challenges/challenge-page/2333/overview)!!

This repository contains the following tools for hand tracking research:

- APIs for loading data from the UmeTrack and HOT3D datasets
- Computation of metrics used in the Hand Tracking Challenge
- Data visualization helpers

## Datasets

The datasets are provided using the
[WebDataset](https://huggingface.co/docs/hub/en/datasets-webdataset) format. The
file structure of each sequence is as follows:

```
├─ train
│  ├─ subject_000_separate_hand_000000.tar
│  ├─ subject_000_hand_hand_000001.tar
│  ├─ ...
│  ├─ subject_049_hand_hand_000099.tar
├─ pose_test
│  ├─ subject_050_separate_hand_000100.tar
│  ├─ subject_050_hand_hand_000101.tar
│  ├─ ...
│  ├─ subject_079_hand_hand_000199.tar
├─ shape_test
│  ├─ subject_080_separate_hand_000300.tar
│  ├─ subject_080_hand_hand_000301.tar
│  ├─ ...
│  ├─ subject_099_hand_hand_000399.tar
```

Each tar file is assumed to contain 2~4 synchronized monochrome streams plus an
optional RGB stream. The image files are suffixed with the image stream ID which
can be used to…
