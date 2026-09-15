---
repo: "Uni-Creator/signBridge"
name: "signBridge"
description: "A real-time Indian Sign Language (ISL) recognition system powered by a Swin3D + BiLSTM deep learning pipeline, served via a Flask API and paired with a Flutter mobile app."
readmeQualityOk: true
url: "https://github.com/Uni-Creator/signBridge"
language: "Dart"
languages: ["Dart"]
languagePcts: [84]
topics: ["ai-for-accessibility", "computer-vision", "deep-learning", "gesture-recognition", "lstm", "machine-learning", "python", "pytorch", "sequence-classification", "sign-language-recognition"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-09-20T10:37:55Z"
lastCommitAt: "2026-09-15T08:54:55Z"
lastReleaseAt: "2026-05-15T09:12:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["Uni-Creator", "inboxpraveen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4db3380d8b1956251e1cc693b4a40aab741e41f16e097a3373c6297bda8df67/Uni-Creator/signBridge"
---

# signBridge

A real-time Indian Sign Language (ISL) recognition system powered by a fine-tuned **Swin3D-S** deep learning model, served via a **FastAPI** backend and paired with a **Flutter** mobile app with live translation and sentence building. 

---

## Demo!

https://github.com/user-attachments/assets/130351a1-b1d9-4432-a4a4-7e64ee8ec296

---

## Results

| Metric | Value |
|---|---|
| Top-1 Accuracy | **66.84%** |
| Macro F1 | 0.638 |
| Weighted F1 | 0.648 |
| Classes | 76 ISL words |
| Test Samples | 187 |
| Random Baseline | 1.3% |

---

## Model Architecture

### Backbone: Swin3D-S (Video Swin Transformer Small)

The model uses a **Swin3D-S** backbone pretrained on **Kinetics-400** for spatiotemporal feature extraction from video clips.

```
Input Video (3 × 16 × 224 × 224)
        ↓
Patch Embedding (Conv3D, 96 channels)
        ↓
Swin Transformer Blocks (4 stages)
  Stage 1: 2 blocks, dim=96,  resolution=8×56×56
  Stage 2: 2 blocks, dim=192, resolution=8×28×28
  Stage 3: 18 blocks, dim=384, resolution=8×14×14
  Stage 4: 2 blocks, dim=768, resolution=8×7×7
        ↓
Adaptive Average Pooling → 768-dim feature vector
        ↓
Linear Classification Head (768 → 76 classes)…
