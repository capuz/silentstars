---
repo: "N-Nieto/Inner_Speech_Dataset"
name: "Inner_Speech_Dataset"
description: "Codes to reproduce the Inner speech Dataset publicated by Nieto et al."
readmeQualityOk: true
url: "https://github.com/N-Nieto/Inner_Speech_Dataset"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [52, 40]
stars: 110
forks: 39
openIssues: 1
closedIssues: 14
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2020-11-11T21:44:42Z"
lastCommitAt: "2026-10-29T21:24:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 28
maintainers: ["N-Nieto"]
openGraphImageUrl: "https://opengraph.githubassets.com/54dd9a92461a95f5570e81a610e1ad85fe3a8e227128e1d8356e2518953eb3a4/N-Nieto/Inner_Speech_Dataset"
---

# Inner Speech Dataset

 
  

---

## Overview

The **Inner Speech Dataset** is an **EEG-based open-access dataset** for inner speech recognition.  
This repository provides scripts to **download, preprocess, explore, and analyze** the dataset.  

- Dataset: [OpenNeuro](https://openneuro.org/datasets/ds003626)  
- Publication: [Nieto et al., Scientific Data, 2022](https://www.nature.com/articles/s41597-022-01147-2)  

**New:** Helper scripts for easy downloading:  
- Raw EEG data: `Raw_data_download_tutorial.py`  
- Preprocessed derivatives: `Derivatives_download_tutorial.py`

> **Note:** A major refactor on **29/11/2025** improved `InnerSpeech_preprocessing.py`. Please report any issues if encountered.

---

# Get Started

## 1. Environment Setup

Create an environment with all dependencies:

```bash
conda env create -f environment.yml
conda activate inner_speech
```

## 2. Download the Data

### Raw Data
Using the provided `Raw_data_download_tutorial.py`, you can partially or fully download the raw `.bdf` data.

> **Note:**  Useful for re-running custom preprocessing

## 3. Data Processing

Preprocessing is implemented in Python using MNE. The main script…
