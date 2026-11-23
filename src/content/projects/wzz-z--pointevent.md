---
repo: "wzz-z/PointEvent"
name: "PointEvent"
description: "Official GitHub repo for \"PointEvent: Rethinking Event-based Tiny Object Detection via Serialized Motion Evidence Accumulation\""
readmeQualityOk: true
url: "https://github.com/wzz-z/PointEvent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-15T10:16:00Z"
lastCommitAt: "2026-11-23T10:16:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 11
maintainers: ["wzz-z"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52eb90e391f961b30240bd525912db8995684efab581b356690cc3407d4490e/wzz-z/PointEvent"
---

# Supplemental Code

This package contains the code for "PointEvent: Polarity-Conditioned Motion Evidence Accumulation for Event-Based Tiny Object Detection".

## Data Layout

Place test `.npz` files under:

```text
data/EV-UAV/test/*.npz
data/ES-UAV/test/*.npz
```

Each `.npz` file should contain event data in `ev` or `evs_norm` format. The expected columns are `x, y, t, polarity, label`.

## Run Training

```bash
python tools/train.py \
    --config-file configs/EVUAV/evuav_polarity_accum.py \
    --num-gpus 1 \
    --options save_path=exp/EVUAV/polarity_state_accum
```

or simply `bash scripts/train.sh`.

## Run Inference

```bash
python tools/test.py \
    --config-file configs/EVUAV/evuav_polarity_accum.py \
    --num-gpus 1 \
    --options save_path=exp/EVUAV/test \
              weight=exp/EVUAV/polarity_state_accum/model/model_last.pth
```

Outputs are saved under `save_path`, including prediction `.npz`, optional `.txt`, visualizations, and `test.log`.
