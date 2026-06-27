---
repo: "openshift/lightspeed-operator"
name: "lightspeed-operator"
description: "Operator for the OpenShift Lightspeed Service"
url: "https://github.com/openshift/lightspeed-operator"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 14
forks: 51
openIssues: 0
closedIssues: 9
watchers: 8
contributors: 2916
recentReleases: 0
createdAt: "2024-01-15T16:52:22Z"
lastCommitAt: "2026-06-27T00:46:42Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 76
maintainers: ["openshift-merge-bot[bot]", "red-hat-konflux[bot]", "raptorsun"]
openGraphImageUrl: "https://opengraph.githubassets.com/e47d0763c2f646f904c35b76c2dafb4253e9af512de4cc85c84093ed59023b27/openshift/lightspeed-operator"
---

# OpenShift Lightspeed Operator

For users who just want to run OpenShift Lightspeed, please refer to the [OpenShift Lightspeed Repository](https://github.com/openshift/lightspeed-service). This documentation provides instructions needed for setting up and using the service.

A Kubernetes operator for managing [Red Hat OpenShift Lightspeed](https://github.com/openshift/lightspeed-service).

## Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - How to add or modify components
- **[Architecture](ARCHITECTURE.md)** - Internal architecture and developer guide
- **[AGENTS.md](AGENTS.md)** - AI assistant guide: coding conventions, patterns, and available skills

## Getting Started

You'll need an OpenShift 4.16+ cluster to run against.

> [!IMPORTANT]
> Officially, the Operator only supports OpenAI, Azure OpenAI, WatsonX, RHELAI and RHOAI as large language model (LLM) providers, but technically, if you have an OpenAI API compatible model server (Ollama, VLLM, MLX), it should work.

### Running on the cluster

**Note:** Your controller will automatically use the current context from your `kubeconfig` file (i.e. whatever cluster `oc cluster-info` shows).

1. Deploy the…
