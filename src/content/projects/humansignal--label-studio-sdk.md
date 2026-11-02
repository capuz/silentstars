---
repo: "HumanSignal/label-studio-sdk"
name: "label-studio-sdk"
description: "Label Studio SDK"
readmeQualityOk: true
url: "https://github.com/HumanSignal/label-studio-sdk"
homepage: "https://api.labelstud.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 194
forks: 126
openIssues: 63
closedIssues: 71
watchers: 8
contributors: 57
recentReleases: 0
createdAt: "2021-11-01T20:08:18Z"
lastCommitAt: "2026-11-02T17:57:12Z"
lastReleaseAt: "2024-11-04T17:10:52Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 45
maintainers: ["matt-bernstein", "yyassi-heartex", "bmartel"]
openGraphImageUrl: "https://opengraph.githubassets.com/5759b26d8d3394776411055c4fce0fec6b1d6e082dff7bb8c67b9209dc17ee2f/HumanSignal/label-studio-sdk"
---

# Label Studio Python Library

The Label Studio Python Library provides convenient access to the Label Studio API from applications written in Python.

# Documentation
Explore the Label Studio API documentation [here](https://api.labelstud.io/).

# Installation

```sh
pip install --upgrade label-studio-sdk
# or
poetry add label-studio-sdk
```

# Usage

```python
from label_studio_sdk import LabelStudio

client = LabelStudio(
    base_url='YOUR_LABEL_STUDIO_URL',  
    api_key="YOUR_API_KEY",
)
```

## CLI

The SDK also includes a CLI entrypoint that mirrors SDK resources and methods.

On **leaf commands** (for example `projects create`), use **`-h`** for minimal help (one-line summary, SDK signature, and options) and **`--help`** for the full generated documentation (parameters, examples, return shape, and options). Top-level groups only register **`--help`**.

Nested Fern client groups map to nested CLI subcommands: dots in the Python SDK path become spaces, and underscores become hyphens. For example, `client.projects.stats.label_distribution_counts(...)` is:

```bash
label-studio-sdk projects stats label-distribution-counts --param id=1 --dry-run
```

Other nested examples:…
