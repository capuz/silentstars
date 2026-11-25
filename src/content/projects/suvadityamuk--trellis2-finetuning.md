---
repo: "suvadityamuk/trellis2-finetuning"
name: "trellis2-finetuning"
description: "LoRA fine-tuning for TRELLIS.2 image-to-3D on your own 3D meshes: containers, scripts, HF Jobs and an agent skill"
readmeQualityOk: true
url: "https://github.com/suvadityamuk/trellis2-finetuning"
homepage: "https://huggingface.co/suvadityamuk/trellis-2-finetune-gso"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["3d", "agent-skills", "fine-tuning", "huggingface", "image-to-3d", "lora", "peft", "trellis", "trellis2"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-06T02:26:44Z"
lastCommitAt: "2026-11-25T03:14:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 17
maintainers: ["suvadityamuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ae66c01ba0f69628095e111701133fe060d800f747bda71a3820d212a21f717/suvadityamuk/trellis2-finetuning"
---

# Fine-tuning TRELLIS.2 geometry with LoRA: code release

Code for LoRA fine-tuning the two geometry flows of
[TRELLIS.2](https://github.com/microsoft/TRELLIS.2) (the sparse-structure flow and the
shape flow) on your own 3D meshes. We used it to adapt TRELLIS.2 to 188 shoes from
Google Scanned Objects. On 9 held-out shoes, Chamfer distance fell from 0.174 to 0.033
and F-score@0.02 rose from 0.28 to 0.80.

There are two ways to run it, and both do the same work:

- **With the containers** ([Using the containers](#using-the-containers)). The
  `trellis2-prep` and `trellis2-train` images take a Hub repo of meshes, turn it into
  latents and train LoRA adapters. They write everything back to the Hub, on HF Jobs or
  on your own GPU. You don't need to clone anything.
- **With the two scripts in this repo** ([One-script version](#one-script-version)):
  `preprocess.py` and `finetune.py` run inside the base image with this repo mounted,
  and are easy to read and change.

To have a coding agent (Claude Code, Codex, Cursor, ...) run it for you, see
[Use it with an agent](#use-it-with-an-agent).
