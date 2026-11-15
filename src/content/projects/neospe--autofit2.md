---
repo: "neospe/autofit2"
name: "autofit2"
description: "Automated end-to-end data preprocessing, model training, and evaluation pipeline"
readmeQualityOk: true
url: "https://github.com/neospe/autofit2"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-03T14:23:13Z"
lastCommitAt: "2026-11-15T11:16:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 22
maintainers: ["neospe"]
openGraphImageUrl: "https://opengraph.githubassets.com/13f33413185272fcbec28a88f67c9b86e9c67dcb019bc390428032f50fb13438/neospe/autofit2"
---

# autofit2

Few-shot text classification. Massively multilingual (50+ languages), fully automated pipeline built on `setfit` and SBERT embeddings.

## Key Features

*   **Few-Shot Learning:** High precision (95–99%) with a few dozen labeled examples.
*   **Multilingual Support:** Pretrained models for 20 languages; evaluation corpora for 50+. Scalable to 100+ via Common Crawl.
*   **Automated Pipeline:** End-to-end preprocessing, fine-tuning, evaluation, and deployment from a single JSON config.
*   **Reproducibility & Transparency:** JSON-based configuration, model card generation, and CO₂ emission tracking.

## Quickstart

Train an English moderation model on a 2% sample of [Davidson et al.](https://github.com/t-davidson/hate-speech-and-offensive-language), with one benchmark target:

```bash
git clone https://github.com/neospe/autofit2 && cd autofit2
pip install -r requirements.txt
git clone https://github.com/t-davidson/hate-speech-and-offensive-language data/en/hate-speech-and-offensive-language
cp examples/demo.json .  # the config is moved to history/ after the run
python train.py demo.json
```

Runs on CUDA, Apple silicon (MPS) or CPU; about 12 minutes on an M1. The base…
