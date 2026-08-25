---
repo: "john-rocky/hf-to-litertlm"
name: "hf-to-litertlm"
description: "Custom converter: open-weight Hugging Face LLMs/VLMs -> on-device LiteRT-LM (.litertlm), with one-command reproduction"
readmeQualityOk: true
url: "https://github.com/john-rocky/hf-to-litertlm"
homepage: "https://john-rocky.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-07T03:40:33Z"
lastCommitAt: "2026-08-25T04:11:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 45
maintainers: ["john-rocky"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd757c73e1858bb8588a9677ede8c7412bdf021759a20409c7ccbfc285af2626/john-rocky/hf-to-litertlm"
---

# hf-to-litertlm

Convert open-weight Hugging Face models to **`.litertlm`** bundles for the **LiteRT-LM**
runtime (CPU/GPU on iOS, Android, desktop). Two things live here:

1. **A finetune converter.** `python scripts/convert.py <org>/<model>` — one command from Hub
   id to a gated bundle. It covers finetunes of Qwen3.5, LFM2.5, MiniCPM5, granite-4.0-h,
   Falcon-H1, and every dense architecture the stock exporter handles — about **2,470 tagged
   derivatives** on the Hub as of 2026-08-25. LoRA/PEFT repos merge automatically. Every bundle
   is gated before it is called done; broken models are refused with a machine-readable reason.
2. **One-command reproductions** of the published litert-community models: **18 LLMs and
   13 single-image VLMs**, with the full recipe record in [REPRODUCE.md](https://github.com/john-rocky/hf-to-litertlm/blob/HEAD/REPRODUCE.md).

## Setup

```bash
pip install litert-torch ai-edge-quantizer "transformers==5.14.*" huggingface_hub litert-lm
export PY=python    # scripts default to ~/venvs/ltconv040dev/bin/python; override with PY
```

One family needs a different stack: **Qwen3.5** exports only on litert-torch *main*
(`pip install 'litert-torch @…
