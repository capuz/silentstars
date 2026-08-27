---
repo: "janit/viiwork"
name: "viiwork"
description: "LLM inference load balancer optimized for AMD Radeon VII GPUs"
readmeQualityOk: true
url: "https://github.com/janit/viiwork"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [55, 24]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T06:18:11Z"
lastCommitAt: "2026-08-27T14:30:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 14
maintainers: ["janit"]
openGraphImageUrl: "https://opengraph.githubassets.com/41fb972d442ce3eecbdfdf7d13247e02903725b0a15bf0b5cca64991a2dfb857/janit/viiwork"
---

# viiwork

LLM inference load balancer for AMD Radeon VII GPUs. Runs multiple llama-server instances and exposes a single OpenAI-compatible API with adaptive load balancing. Multiple nodes can form a mesh cluster where any node is an entry point and requests route by model.

## Background

I had 50 Radeon VII cards sitting in servers in my mother-in-law's garage (who doesn't?) and wanted to do something useful with them. viiwork was born out of that — a way to turn a pile of aging-but-capable GPUs into a practical LLM inference cluster.

The Radeon VII, Instinct MI50/MI60 are all gfx906 cards with 16GB HBM2 (32GB for MI60) and a 1 TB/s memory bus — legacy hardware that punches well above its weight for LLM inference where memory bandwidth is the bottleneck. These cards are cheap secondhand and still very capable.

viiwork is designed to be useful at any scale: a single old gaming GPU on your desktop, a few Radeon Pro VII cards in a workstation, or racks of Instinct MI50s in your mother-in-law's garage. Use it standalone as an OpenAI-compatible API, or connect it to any MCP-compatible AI assistant via the built-in MCP server.

## Quick Start

```bash
# 1. Interactive setup…
