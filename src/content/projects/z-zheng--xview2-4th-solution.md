---
repo: "Z-Zheng/xview2_4th_solution"
name: "xview2_4th_solution"
description: "xView2_fourth_place"
readmeQualityOk: true
url: "https://github.com/Z-Zheng/xview2_4th_solution"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2020-03-13T02:43:35Z"
lastCommitAt: "2026-08-12T05:15:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["Z-Zheng", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/a06464e4c57ac1cc43ec3fe139c6caa396cf8c98f8a619417532d5dfa1b67dc5/Z-Zheng/xview2_4th_solution"
---

# xView2 Building Damage Assessment 4th solution

This repository contains the official 4th solution code for the xView2 building damage assessment.

## Requirements
- Python >= 3.6
- PyTorch
- simplecv
- opencv-python, albumentations, fire, etc.

## Usage
### Inference
To run inference on the test set, use `app/infer_test.py`:

```bash
python app/infer_test.py localize <output_dir> <config_path> <checkpoint_path>
python app/infer_test.py damage <output_dir> <config_path> <checkpoint_path>
python app/infer_test.py e2e_loc_dam <loc_output_dir> <dam_output_dir> <config_path> <checkpoint_path>
```

### Training
Train the model using `train.py`:

```bash
python train.py --config_path configs/e2e/guided_resnext_siamese.py --model_dir <output_dir>
```

## Dataset Note
After the full dataset is released, we will add the usage of the code.

## Directory Structure
- `app/`: Inference scripts and visualization tools.
- `configs/`: Configuration files for models and data loading.
- `data/`: Dataset loading and preprocessing utilities.
- `module/`: Model definitions and training modules.
