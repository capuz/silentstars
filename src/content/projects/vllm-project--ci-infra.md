---
repo: "vllm-project/ci-infra"
name: "ci-infra"
description: "This repo hosts code for vLLM CI & Performance Benchmark infrastructure."
readmeQualityOk: true
url: "https://github.com/vllm-project/ci-infra"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 57
forks: 90
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 74
recentReleases: 0
createdAt: "2024-01-05T02:46:49Z"
lastCommitAt: "2026-09-23T08:47:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 62
maintainers: ["theminghuang", "khluu", "Thangnguyenvn98"]
openGraphImageUrl: "https://opengraph.githubassets.com/125965258769c5176f7c34e0fd95745d429661cf96268247271ff8e0c1c04492/vllm-project/ci-infra"
---

# vLLM CI Infrastructure

Infrastructure-as-Code and bootstrap scripts for vLLM's continuous integration pipeline, built on [Buildkite](https://buildkite.com/) with autoscaling compute across AWS and GCP.

## Repository Structure

```
ci-infra/
├── .buildkite/            # Scheduled Buildkite pipelines (e.g. daily AMI rebuild)
├── buildkite/             # Bootstrap scripts, pipeline generation, and build helpers
│   ├── bootstrap-amd.sh   # AMD/ROCm CI entry point
│   ├── bootstrap-intel.sh # Intel CI entry point
│   ├── pipeline_generator/  # Python-based pipeline generator
│   ├── test-template-amd.j2  # AMD/ROCm Jinja2 pipeline template
│   └── scripts/           # Helper scripts (Docker bake, Codecov upload)
├── docker/                # Docker buildx bake configuration (ci.hcl)
├── terraform/
│   ├── aws/               # AWS infrastructure (primary, active)
│   ├── gcp/               # GCP GKE cluster and compute instances
│   └── gcp_old/           # GCP TPU infrastructure (v5, v6e, v7x)
├── packer/
│   ├── cpu/               # CPU build AMI with warm Docker cache
│   └── gpu/               # GPU AMI with NVIDIA drivers
├── infra-k8s/             # Kubernetes-based Buildkite…
