---
repo: "Qrouger/HInt"
name: "HInt"
description: "HInt (Homologous Interactions)"
readmeQualityOk: true
url: "https://github.com/Qrouger/HInt"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-28T13:04:48Z"
lastCommitAt: "2026-11-17T14:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["Qrouger"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eac005434b936fc699187449a62429f9abab45d8159a7030ffcca5750e69848/Qrouger/HInt"
---

# <img width="240" height="240" alt="HInt_logo" src="https://github.com/user-attachments/assets/0d85a047-f02c-4819-9bc2-b51ca8bf0aba" />
# HInt
HInt accelerates AlphaFold by optimizing computations and parallelizing structure prediction. It is a scalable pipeline for high-throughput identification of homologous proteins and interologues—proteins that maintain functional interactions.  HInt enables the discovery of conserved interaction networks that may remain undetected using sequence or structural similarity alone.

# 1. Installation

## 1.1. HInt
Conda or Mamba must be installed on your system and must not be activated before running the installation.
```bash
wget https://raw.githubusercontent.com/Qrouger/HInt/main/Install_HInt.sh
bash Install_HInt.sh
```

## 1.2. DeepLoc2 (Eukaryote)

Download the DeepLoc 2.0 package from: https://services.healthtech.dtu.dk/services/DeepLoc-2.0/

```bash
conda activate HInt
tar -xvzf deeploc-*.tar.gz
cd  deeploc2_package
pip install . torch==2.6.0
pip install triton==3.1.0 nvidia-cudnn-cu12==9.26.0.51
```

## 1.3. SignalP5

Download the SignalP5 package from:…
