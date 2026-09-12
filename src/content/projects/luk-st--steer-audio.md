---
repo: "luk-st/steer-audio"
name: "steer-audio"
description: "Code repository for paper \"Tuning Audio Diffusion Models through Activation Steering\""
readmeQualityOk: true
url: "https://github.com/luk-st/steer-audio"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 22
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T23:29:52Z"
lastCommitAt: "2026-09-12T08:04:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 23
maintainers: ["luk-st"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4e387261cf01a929712e346b188b23394926ab98ab0e778bf0d5adbed471b38/luk-st/steer-audio"
---

# TADA! Tuning Audio Diffusion Models through Activation Steering

<p>
  </a>  <a href="https://audio-steering.github.io">
  </a>
</p>

<p>
  <br>
  <sub>TLDR; We show where (through activation patching) and how (through benchmarking steering methods) to intervene Audio Diffusion Models for Musical Concept Modulation.</sub>
</p>

</div>

## ⚙️ Installation

1. Install with `uv`:

```bash
uv sync
source .venv/bin/activate
```

2. Copy the env template and set the project root:

```bash
cp .env.example .env
# Edit .env: set PROJECT_ROOT. HF token + cluster vars are optional.
set -a; source .env; set +a
```

3. Model checkpoints:
+ **ACE-Step weights** are downloaded to `${ACE_STEP_CACHE}`; **AudioLDM2 / Stable Audio Open** from HF.
+ **CLAP** (`music_audioset_epoch_15_esc_90.14.pt`) from [HF](https://huggingface.co/lukewys/laion_clap/tree/main):
    ```bash
    mkdir -p res/clap/pretrained
    wget -O res/clap/pretrained/music_audioset_epoch_15_esc_90.14.pt https://huggingface.co/lukewys/laion_clap/resolve/main/music_audioset_epoch_15_esc_90.14.pt
    ```

---

## 🔍 Localization

### Counterfactual prompt dataset

We release…
