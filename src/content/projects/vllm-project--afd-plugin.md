---
repo: "vllm-project/afd-plugin"
name: "afd-plugin"
description: "vLLM plugin for attention-ffn disaggregation support"
readmeQualityOk: true
url: "https://github.com/vllm-project/afd-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 208
forks: 41
openIssues: 20
closedIssues: 84
watchers: 0
contributors: 26
recentReleases: 2
createdAt: "2026-05-14T06:44:20Z"
lastCommitAt: "2026-09-07T08:34:49Z"
lastReleaseAt: "2026-08-19T14:49:21Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 31
maintainers: ["jiangkuaixue123", "yenuo26", "ShwStone"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b699da282e8f0abf3eb260237430bb4e8876089c047b2e665c5e1d57d2d9229/vllm-project/afd-plugin"
---

# afd-plugin

| <a href="docs/design/module/index.md"><b>Documentation</b></a> | <a href="recipe/README.md"><b>Recipe</b></a> | <a href="https://deepwiki.com/vllm-project/afd-plugin"><b>DeepWiki</b></a> | <a href="https://discuss.vllm.ai"><b>User Forum</b></a> | <a href="https://vllm-dev.slack.com/archives/C0B4C1D84GG"><b>Developer Slack</b></a> | <a href="docs/assets/WeChat.png"><b>WeChat</b></a> |
</p>

## Overview

**afd-plugin** is a [vLLM](https://github.com/vllm-project/vllm)
external plugin for **Attention-FFN Disaggregation (AFD)**. It provides
plugin-owned worker classes, model runners, model wrappers, connectors,
configuration validation, compatibility shims, and hardware-gated integration
tests for GPU and Ascend NPU deployments.

> [!NOTE]
> This project is still experimental and needs more large-scale testing across
> different hardware backends.

The target runtime is **vLLM `v0.26.0`**. The plugin does not modify the vLLM
source tree. AFD behavior is installed through the `vllm.general_plugins` entry
point, `--additional-config`, automatically selected role workers, plugin-owned
model wrappers, and narrow version-scoped compatibility shims.

## Architecture

##…
