---
repo: "yutori-ai/navi-bench"
name: "navi-bench"
description: "Navi-Bench: benchmarking web agents on everyday tasks directly on real websites"
readmeQualityOk: true
url: "https://github.com/yutori-ai/navi-bench"
homepage: "https://yutori.com/blog/introducing-navigator"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["ai", "benchmark", "reinforcement-learning", "web-agent", "eval"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-11-19T07:56:36Z"
lastCommitAt: "2026-08-01T06:15:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["dhruvbatra"]
openGraphImageUrl: "https://opengraph.githubassets.com/0adac531856dfe1fbc30ef6224c01f755a575b5a49d50ac2f347fb9e56f33105/yutori-ai/navi-bench"
---

# Yutori Navi-Bench
A benchmark for evaluating web agents on everyday tasks directly on real websites.

Dataset: https://huggingface.co/datasets/yutori-ai/navi-bench

Blog post: https://yutori.com/blog/introducing-navigator

## Quick Start: Try a Task Yourself

Want to understand what the benchmark tasks look like? You can run them manually using our human-in-the-loop demo:

### Step 1: Install with Browser Support

We recommend installing with [uv](https://docs.astral.sh/uv/getting-started/installation/):
```bash
uv sync --extra eval
source .venv/bin/activate
python -m playwright install chromium webkit
```

<details>
<summary>Or, using raw pip:</summary>
```bash
pip install -e ".[eval]"
python -m playwright install chromium webkit
```
</details>

### Step 2: Run the Demo

```bash
python -m demo
```

## Usage

```python
from datasets import load_dataset
from navi_bench.base import DatasetItem, instantiate

# Load dataset from HF
dataset = load_dataset("yutori-ai/navi-bench", split="validation")

# Load a task from the dataset
task_item = DatasetItem.model_validate(dataset[0])

# Generate the task configuration
task_config = task_item.generate_task_config()

# Access task details…
