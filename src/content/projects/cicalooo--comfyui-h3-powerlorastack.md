---
repo: "cicalooo/ComfyUI-H3-PowerLoraStack"
name: "ComfyUI-H3-PowerLoraStack"
description: "Minimax H3 Specific Lora Stack Loader with some additional features."
readmeQualityOk: true
url: "https://github.com/cicalooo/ComfyUI-H3-PowerLoraStack"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T09:27:37Z"
lastCommitAt: "2026-09-10T08:19:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["cicalooo"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f0ea6efa6035b53d6fa389f8122d912249465b16329340bf024b3d00d58c6d/cicalooo/ComfyUI-H3-PowerLoraStack"
---

# ComfyUI-H3-PowerLoraStack

Stacked multi-LoRA loading for **MiniMax H3**. Quantized bases keep an exact
runtime branch, AdaLN pairs are rebased between dense and curve checkpoints, and
Acc/PDD head banks are blended per sampler step instead of crashing the native
head.

</p>

## Nodes

| Node | Purpose |
| --- | --- |
| **MiniMax H3 Power LoRA Stack** | Any number of LoRAs on one node, each with a toggle and strength, plus one-click strength calibration |
| **MiniMax H3 adaLN Modality** | Scales stacked LoRAs' adaLN modulation per modality (video / text / audio) |
| **MiniMax H3 LoRA Schedule** | Varies selected stack rows' strength over denoising steps or normalized sigma |
| **MiniMax H3 LoRA Inspector** | Reports a LoRA's format, rank and adaLN basis without loading it |

## Good to know

- **AdaLN port — 8 Aug 2026, commit `28ac439`.** This stack rebases dense↔curve
  AdaLN LoRA pairs so ComfyUI does not skip them with
  `ERROR lora ... adaln_proj.linear.weight shape '[96768, 8]' is invalid for input of size 260112384`.
  The port keeps rank and restores the DC term as a bias delta. A separate
  AdaLN-fix node on the same `MODEL` is not needed; if one is already attached…
