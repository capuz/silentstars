---
repo: "davanstrien/uv-scripts-for-ai"
name: "uv-scripts-for-ai"
description: "Self-contained UV scripts for data & ML tasks. Includes OCR, vision, audio & more. Run one in a command, locally or on Hugging Face Jobs. Built for humans and agents."
readmeQualityOk: true
url: "https://github.com/davanstrien/uv-scripts-for-ai"
homepage: "https://huggingface.co/uv-scripts"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "huggingface", "ocr", "pep723", "uv", "hf-jobs"]
stars: 84
forks: 5
openIssues: 27
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T08:07:41Z"
lastCommitAt: "2026-09-24T08:41:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["davanstrien", "ivcrt"]
openGraphImageUrl: "https://opengraph.githubassets.com/95b518946e20c82194f56bf0b9ee1f5a0f5faf7bbb4dba60970c44f96285c0fd/davanstrien/uv-scripts-for-ai"
---

# uv-scripts-for-ai

> **A UV script is a single Python file that declares its own dependencies inline — a *portable* unit you run with `uv run` where you have the hardware, or hand to `hf jobs uv run` on [Hugging Face Jobs](https://huggingface.co/docs/huggingface_hub/guides/jobs) for a GPU. Chain several into a pipeline.**

Each script carries its own dependencies, so people and agents can run one without cloning a repo, making a virtualenv, or installing a `requirements.txt` first.

A **recipe** here is one such script. Most read and write the [Hugging Face Hub](https://huggingface.co/datasets), so one script's output dataset becomes the next one's input.

## Quickstart

Before starting, [install the `hf` CLI and sign in](https://huggingface.co/docs/hub/jobs-quickstart). Jobs needs a Hugging Face account with [pay-as-you-go credit](https://huggingface.co/pricing). Run `hf jobs hardware` for current hardware and prices.

**Try OCR on seven scanned pages** from [NASA’s *Food for Space Flight* booklet](https://huggingface.co/datasets/uv-scripts/ocr-demo). Replace `your-username` with your Hugging Face username; the results will be saved as a new dataset in your namespace:

```bash…
