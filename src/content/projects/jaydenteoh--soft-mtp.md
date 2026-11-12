---
repo: "JaydenTeoh/Soft-MTP"
name: "Soft-MTP"
description: "Soft-MTP: Multi-Token Prediction Done Right. KL gradient recovery for faster speculative decoding and better language model training."
readmeQualityOk: true
url: "https://github.com/JaydenTeoh/Soft-MTP"
homepage: "https://arxiv.org/abs/2610.38331"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["language-model", "multi-token-prediction", "pretraining", "transformers", "mtp", "speculative-decoding"]
stars: 100
forks: 13
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-27T22:18:24Z"
lastCommitAt: "2026-11-12T05:37:06Z"
status: "newborn"
tags: []
healthScore: 70
undervaluedScore: 5
maintainers: ["JaydenTeoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/89fbda5e07172ede132de1a7a9eab80cab9f0224734433fcb12294e3f27fe17d/JaydenTeoh/Soft-MTP"
---

# Soft Multi-Token Prediction

Author: <a href="https://jaydenteoh.github.io/blog/2026/kl-gradient-recovery-trick/" style="color: #0891B2; text-decoration: none;">Jayden Teoh</a>

## Setup

```bash
git clone https://github.com/JaydenTeoh/Soft-MTP && cd Soft-MTP
pip install -r requirements.txt
python -m src.fetch_data --shards 5
```

This installs the necessary packages and fetches the pre-tokenized FineWeb-Edu tokens from
[JaydenTeoh/fineweb-edu-100bt-gpt2](https://huggingface.co/datasets/JaydenTeoh/fineweb-edu-100bt-gpt2). 

`--shards N` fetches N x 10B tokens into `data/fineweb-edu/` and resumes if interrupted. Every
config in `configs/` trains on 31.5B tokens, so 4 shards is the minimum; the default of 5 needs
~120 GB of disk while assembling.

PyTorch 2.9 or later is required to use the Muon optimizer.

## Pretrained checkpoints 🤗

The models from the paper for NTP, MTP and Soft-MTP objectives are available on the
[Hugging Face](https://huggingface.co/collections/JaydenTeoh/soft-multi-token-prediction). The MTP heads are included for self-speculative decoding; `generate()` ignores them.

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model =…
