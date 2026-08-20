---
repo: "Moskize91/doc-page-extractor"
name: "doc-page-extractor"
description: "Document page extraction tool powered by DeepSeek-OCR."
readmeQualityOk: true
url: "https://github.com/Moskize91/doc-page-extractor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["deepseek-ocr", "document", "ocr"]
stars: 13
forks: 7
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-02-06T00:48:01Z"
lastCommitAt: "2026-08-20T04:08:33Z"
lastReleaseAt: "2026-08-13T07:13:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 51
maintainers: ["Moskize91"]
openGraphImageUrl: "https://opengraph.githubassets.com/c795b6d2cc65c926557d95d76897ae20dc8805da67acaf5d13de5b7bf01fa1f9/Moskize91/doc-page-extractor"
---

# doc-page-extractor

Document page extraction tool that converts page images into text layouts with pixel coordinates.

The default backend remains local DeepSeek OCR. Version 1.1 adds a unified OCR adapter layer with DeepSeek OCR Vendor, DeepSeek OCR 2 Vendor, and Unlimited OCR support.

## Installation

```bash
pip install doc-page-extractor
```

PyTorch is not installed automatically. You only need CUDA PyTorch when using the local DeepSeek-OCR backend.

## Backends

### Local DeepSeek-OCR

This is the default and keeps the existing API behavior:

```python
from doc_page_extractor import create_page_extractor

extractor = create_page_extractor()
```

Install CUDA PyTorch before using this backend:

```bash
# CUDA 12.1
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121

# CUDA 11.8
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118

# CUDA 12.6
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu126
```

Check CUDA with:

```bash
nvidia-smi
python -c "import torch; print(torch.cuda.is_available())"
```

### DeepSeek OCR Vendor

Use this backend when DeepSeek OCR is exposed through an…
