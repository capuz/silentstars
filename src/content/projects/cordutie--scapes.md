---
repo: "cordutie/SCAPES"
name: "SCAPES"
description: "Semantically Conditioned Autoregressive Prior for Environmental Sounds"
readmeQualityOk: true
url: "https://github.com/cordutie/SCAPES"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T19:05:31Z"
lastCommitAt: "2026-11-01T10:44:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 49
maintainers: ["cordutie"]
openGraphImageUrl: "https://opengraph.githubassets.com/00fa205be8a1047b625c8a084be6f472b24575e604c5d3eceb406cd3f6cb4702/cordutie/SCAPES"
---

# SCAPES

**SCAPES** (Semantically Conditioned Auto-Regressive Prior for Environmental Sounds) is a generative audio framework for high-fidelity environmental texture synthesis with semantic control.

Try the online demo: [](https://huggingface.co/spaces/cordutie/SCAPES-demo)

## Installation

Requirements: Linux, Python 3.12, an NVIDIA GPU with a recent driver (CUDA 12), git.

Clone the repository with its codec wrappers (the git submodule `external/audio_codec_wrappers/`):

```bash
git clone --recurse-submodules https://github.com/cordutie/SCAPES.git
cd SCAPES
git submodule update --init    # only needed if you cloned without --recurse-submodules
```

Create the virtual environment and install SCAPES in it:

```bash
python3.12 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt --extra-index-url https://download.pytorch.org/whl/cu128
pip install --no-deps msclap==1.3.4 "magenta-rt @ git+https://github.com/magenta/magenta-realtime@694a545e4ba0b88bf1150137b129582166d3e07f"
pip install music2latent==0.1.8
pip install -e ./external/audio_codec_wrappers
python external/audio_codec_wrappers/scripts/fetch_weights.py --codec spectrostream…
