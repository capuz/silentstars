---
repo: "chizkidd/igbo-asr-tonal-evaluation"
name: "igbo-asr-tonal-evaluation"
description: "Systematic evaluation of tonal fidelity in facebook/omniASR-CTC-1B when processing Igbo, a tonal Niger-Congo language with ~45 million speakers."
readmeQualityOk: true
url: "https://github.com/chizkidd/igbo-asr-tonal-evaluation"
homepage: "https://huggingface.co/datasets/chiz/omniASR-igbo-blindspots"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [68, 32]
topics: ["evaluation", "facebook", "meta", "omniasr", "audio", "automatic-speech-recognition", "igbo", "low-resource-languages", "model-evaluation", "multimodal"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-04T09:04:17Z"
lastCommitAt: "2026-10-17T07:59:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 45
undervaluedScore: 22
maintainers: ["chizkidd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c66dd23476f909c728f7bc001a2ea7d29dff9a8cce3ae487cb05868823797886/chizkidd/igbo-asr-tonal-evaluation"
---

# Igbo ASR Tonal Evaluation

Systematic evaluation of tonal fidelity in facebook/omniASR-CTC-1B when processing Igbo, a tonal Niger-Congo language with ~45 million speakers.

## Overview

This is a small diagnostic study (21 clips, one speaker) of how `omniASR-CTC-1B` handles Igbo tone and dot-below marks:
- **Tonal clips drop most marks:** 37 of 49 expected marks are missing (**drop rate 75.5%**, clip-level bootstrap 95% CI [57.1%, 89.7%]).
- **Tone marks nearly vanish in the tonal clips:** the reference has 43 tone-bearing letters, the model output has 5.
- **Marks are also added:** 25 marks appear where the reference has none or fewer (**added rate 25.8%** overall), so net loss (26.8%) understates how often the output disagrees with the reference. Pooled **DER is 78.4%**.
- **Minimal pairs collapse:** on the akwa and oke clips the output carries no tone marks at all.

**Reading these results:** the pattern is *consistent with* the model leaning on text-like priors rather than tone acoustics, but this study cannot show that. It has one speaker, 21 clips, a single annotator, and no comparison model. Treat it as a blind-spot probe, not a measurement of prevalence.

Explore the…
