---
repo: "ssshamiii/Brain-HIVE"
name: "Brain-HIVE"
description: "Learning Brain Representation with Hierarchical Visual Embeddings"
readmeQualityOk: true
url: "https://github.com/ssshamiii/Brain-HIVE"
homepage: "https://openreview.net/pdf?id=IEq71qS8B7"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 28
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T11:33:12Z"
lastCommitAt: "2026-11-12T05:42:46Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 26
maintainers: ["Jia-hn"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fc8ab554f13739e63e36be567e2a085f5ed474c965cebfc2f0728e2a15b5afd/ssshamiii/Brain-HIVE"
---

# BrainHiVE: Learning Brain Representation with Hierarchical Visual Embeddings

BrainHIVE is a brain–vision decoding project for brain-to-image retrieval and reconstruction.

We align EEG/MEG embeddings to a single fused visual token built from multiple pretrained visual encoders that cover both high-level semantics (e.g., CLIP) and low-level visual details (e.g., VAE latents). Alignment is trained with a simple contrastive objective.

For reconstruction, we use a pretrained Fusion Prior that maps the fused token into a frozen diffusion backbone (text-free), making generation stable and reusable across different brain encoders under the same fusion-based training scheme.
# News

- Pre-cached visual embeddings for both the THINGS-EEG2 and THINGS-MEG datasets are now available on Hugging Face:  
  https://huggingface.co/datasets/fakekungfu/Brain-HIVE_Visual_Embeddings

- The training pipeline has been rolled back to a previous version that includes random embedding dropout.  
  This change is intended to better support classifier-free guidance in **SDXL-Base** and the corresponding **IP-Adapter**.

- We recommend using the **SynCLR** combination for better performance, achieving…
