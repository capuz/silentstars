---
repo: "dawn2766/PVSC-Net"
name: "PVSC-Net"
description: "This project implements ship acoustic classification based on deep learning, utilizing underwater audio data from the DeepShip partial dataset to automatically identify different types of ships through PVSC-Net (Probabilistic Variational Ship Classification Network)."
originalDescription: "本项目实现了基于深度学习的船舶声学分类，利用DeepShip部分数据集中的水下音频数据，通过PVSC-Net（概率变分船舶分类网络）自动识别不同类型的船舶。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dawn2766/PVSC-Net"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-15T04:54:05Z"
lastCommitAt: "2026-07-14T05:52:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 19
maintainers: ["dawn2766"]
openGraphImageUrl: "https://opengraph.githubassets.com/734c790cee19086d4bf67b3789eba2d49ac708544ccf35fab805266f5c6ea218/dawn2766/PVSC-Net"
---

# Deep Learning Based Underwater Acoustic Target Classification

This project implements ship acoustic classification based on deep learning, including three models: **PVSCNet**, **VesselCNN**, and **DVSCNet**, which can be trained separately and compared based on a unified log.

---

## Directory Structure

```
Semi-Supervised-VAE-Acoustic-Classification/
├── data/                         # Original data
├── processed/                    # X.npy, y.npy, groups.npy, labels.npy
├── PVSCNet/
│   ├── model_PVSCNet.py
│   ├── train_PVSCNet.py
│   ├── checkpoint_best_PVSCNet.pt
│   ├── checkpoint_latest_PVSCNet.pt
│   ├── log_best_PVSCNet.json
│   ├── log_latest_PVSCNet.json
│   ├── curve_training_PVSCNet.png
│   └── matrix_confusion_PVSCNet.png
├── VesselCNN/                    # Same model, training, and product structure
├── DVSCNet/                      # Same model, training, and product structure
├── training_utils.py             # Shared data, training, and logging logic for the three training entrances
├── plot_compare_models.py        # Plot comparison curves from the three latest logs
├── curve_comparison_three_models.png
├── data_preprocess.py
└── README.md
```

Each model…
