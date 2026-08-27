---
repo: "crusaderky/pixi-llm-recipes"
name: "pixi-llm-recipes"
description: "pixi recipes for local LLM stack"
readmeQualityOk: true
url: "https://github.com/crusaderky/pixi-llm-recipes"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-28T13:23:15Z"
lastCommitAt: "2026-08-27T14:27:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 39
maintainers: ["crusaderky"]
openGraphImageUrl: "https://opengraph.githubassets.com/48a0778d7dfc0ce1d4cddefbccfeed0e20f9893b9961178f9409e1d77db2b840/crusaderky/pixi-llm-recipes"
---

# pixi-llm-recipes

My personal setup for running LLMs locally and using them with the [pi](https://pi.dev) coding agent.
Everything lives in [pixi](https://pixi.sh/) environments, so there's no Docker and
nothing to install by hand: clone the repo, `pixi install`, and you're done.
Everything is pinned and 100% reproducible.

## A word of warning

This is tuned for my own machine, which mounts an NVIDIA RTX 3090 with 24 GB of VRAM.
Model sizes, context lengths, and quantization choices all reflect that constraint. If
your GPU is different you'll probably want to adjust `models.ini` and pick different
models.

If you have an RTX 3080 (10 GB), you can find the old `models.ini` from that era at the
[RTX3080 tag](https://github.com/crusaderky/pixi-llm-recipes/blob/RTX3080/models.ini).

## Quickstart

### Linux

```bash
curl -fsSL https://pixi.sh/install.sh | sh  # One-off installation
pixi r install  # One-off installation of several components
pixi r start-server  # Start llama.cpp server for local models
cd /path/to/workspace && pi  # Just like regular pi, but managed by pixi and sandboxed
cd /path/to/workspace && claude
herdr                              # Terminal multiplexer /…
