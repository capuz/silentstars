---
repo: "bjdbjd/human-eval-testbed"
name: "human-eval-testbed"
description: "HumanEval Model Evaluation Tool"
originalDescription: "HumanEval 模型评估工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bjdbjd/human-eval-testbed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "anthropic", "exam", "humaneval", "llm", "openai", "test"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-27T01:18:00Z"
lastCommitAt: "2026-04-28T00:20:44Z"
status: "quiet"
tags: []
healthScore: 45
undervaluedScore: 8
maintainers: ["bjdbjd"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf7a6e403aeb448c5c0b9bb60748708bf49dbc6b429e3ffecd3d2d0b24bf60b7/bjdbjd/human-eval-testbed"
---

# HumanEval Model Evaluation Tool

Tool based on OpenAI HumanEval benchmark to evaluate the code generation capability of large language models.

## Project Structure

```
.
├── evaluate_models.py     # Evaluation script (supports full/quick/custom tests)
├── results/               # Evaluation results output directory
├── requirements.txt       # Dependency list
└── README.md
```

## Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Quick Verification (5 problems)

Run 5 problems first to verify that the generation + evaluation process is working correctly:

```bash
python evaluate_models.py \
    --api-type anthropic \
    --base-url YOUR_BASE_URL \
    --api-key YOUR_API_KEY \
    --models model-name \
    --quick
```

### 3. Full Evaluation (164 problems)

After verification passes, run all 164 problems:

```bash
python evaluate_models.py \
    --api-type anthropic \
    --base-url YOUR_BASE_URL \
    --api-key YOUR_API_KEY \
    --models model1 model2 model3 \
    --max-tokens 32768
```

## Command-line Parameters

### Basic Parameters

| Parameter      | Description                                            | Default         |…
