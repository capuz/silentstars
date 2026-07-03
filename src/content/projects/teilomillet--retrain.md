---
repo: "teilomillet/retrain"
name: "retrain"
description: "a Python library that uses Reinforcement Learning (RL) to train LLMs."
url: "https://github.com/teilomillet/retrain"
homepage: "https://retrain.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["deepseek", "llm", "mcp", "rl", "rlvr"]
stars: 43
forks: 2
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-04-03T21:41:21Z"
lastCommitAt: "2026-07-03T06:24:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 46
maintainers: ["teilomillet"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1df24f327d567afc90e4cdfb2d83609ecc0da05eb016451175c50b87f8cac9d/teilomillet/retrain"
---

# retrain

`retrain` is a TOML-first RLVR (Reinforcement Learning with Verifiable Rewards) trainer for LLMs, built to make experiments easier to run, compare, and repeat.

If you are new, start with install -> explore commands -> run a tiny config.

## Install

Requires Python 3.11+.

```bash
# CLI + docs exploration
uv tool install retrain

# Local GPU training (adds torch)
uv tool install "retrain[local]"

# Remote Tinker backend
uv tool install "retrain[tinker]"
```

If you are developing this repo directly:

```bash
pip install -e ".[dev]"
```

## Explore the CLI

Use these first to understand what exists before you train:

```bash
retrain --help
retrain man
retrain man --topic quickstart
retrain man --list-topics
retrain backends
retrain doctor
```

Useful inspection commands while iterating:

```bash
retrain explain retrain.toml   # dry-run: what this config would do
retrain status logs            # summarize runs/campaigns under logs/
retrain plugins                # list built-ins + discovered plugins
retrain init-plugin --kind transform --name my_transform --with-test
retrain man --json --topic quickstart
retrain man --path             # editable bundled manual source
```…
