---
repo: "ai-dynamo/aiconfigurator"
name: "aiconfigurator"
description: "Offline optimization of your disaggregated Dynamo graph"
url: "https://github.com/ai-dynamo/aiconfigurator"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 348
forks: 128
openIssues: 28
closedIssues: 31
watchers: 6
contributors: 68
recentReleases: 1
createdAt: "2025-07-22T04:28:47Z"
lastCommitAt: "2026-06-25T01:36:59Z"
lastReleaseAt: "2026-05-01T10:15:43Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 34
maintainers: ["jasonqinzhou", "Arsene12358", "ilyasher"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bba7fd461e14970c5512ea15c746a84cbb9b23dce327a232a54b0c65e13ae30/ai-dynamo/aiconfigurator"
---

# aiconfigurator

In disaggregated serving, configuring an effective deployment is challenging: you need to decide how many prefill and decode
workers to run, and the parallelism for each worker. Combined with SLA targets for TTFT (Time to First Token) and
TPOT (Time per Output Token), optimizing throughput at a given latency becomes even more complex.

`aiconfigurator` helps you find a strong starting configuration for disaggregated serving. Given your model, GPU
count, and GPU type, it searches the configuration space and generates configuration files you can use for deployment with Dynamo.

For a technical deep dive into the design and methodology of AIConfigurator, please refer to our paper:  
[**AIConfigurator: Lightning-Fast Configuration Optimization for Multi-Framework LLM Serving**](https://arxiv.org/abs/2601.06288).

The tool models LLM inference using collected data for a target machine and framework. It evaluates thousands of
configurations and runs anywhere via the CLI.

Let's get started.

## Build and Install

### Install from PyPI

```bash
pip3 install aiconfigurator
```

### Build and Install from Source

```bash
# 1. Install Git LFS
apt-get install git-lfs  #…
