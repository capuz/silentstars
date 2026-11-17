---
repo: "FiveTechSoft/weights"
name: "weights"
description: "Weight-Space Programming: toolkit + WSP-40 challenge engine (MiMo-V2.6-Distill-Qwen-9B)"
readmeQualityOk: true
url: "https://github.com/FiveTechSoft/weights"
homepage: "https://fivetechsoft.github.io/weights/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 10
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-03T06:32:54Z"
lastCommitAt: "2026-11-17T14:35:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 40
maintainers: ["FiveTechSoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fbc71e7317d4ba54ef27be9371f6a54953058a4ea81e267c8fcafc384d25500/FiveTechSoft/weights"
---

# FiveTechSoft / weights: Weight-Space Programming (WSP)

A toolkit and a research log for **Weight-Space Programming (WSP)**: reading, comparing and editing the weights of
LLMs directly, with no gradient step.
- It inspects and edits quantized GGUF files (Q6_K) and safetensors checkpoints.
- It diffs a fine-tuned model against its base and reports what changed, including outside the weights.
- It runs declarative experiments written in WSP-Lang (`.wspl`).

Reading and editing weights needs no forward pass. **Behavioural claims do**: every behavioural result here was
measured by running the model (llama.cpp / llama-server, usually on an RTX 3060).

Starting point: MIT CSAIL's blog post [*Sparks of Weight-Space Programming*](https://rikiyat.github.io/blog/weight-space-programming/)
(Rikiya Takehi, Jayden Teoh, Alex Zhang, Omar Khattab, 2 Nov 2026; a blog post, not peer-reviewed).

## Main result (2026-11-09)

**A fine-tune's skill can be moved onto the unchanged base model as a small adapter, with no training.**
WSP-Lang's `delta_to_lora` op reads the difference between a fine-tune and its base, matrix by matrix, keeps the
strongest directions (exact SVD) and writes a normal LoRA…
