---
repo: "KatherLab/LLM-Scheduler"
name: "LLM-Scheduler"
description: "Scheduling vLLM instances on multiple GPUs using SLURM"
readmeQualityOk: true
url: "https://github.com/KatherLab/LLM-Scheduler"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T16:04:10Z"
lastCommitAt: "2026-09-07T08:34:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 30
maintainers: ["FWao"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b699da282e8f0abf3eb260237430bb4e8876089c047b2e665c5e1d57d2d9229/KatherLab/LLM-Scheduler"
---

# KatherLab LLM Scheduler

A web-based tool for scheduling and serving large language models (LLMs) on shared GPU clusters. Built for research teams and labs that need to coordinate access to limited GPU resources across multiple models and users.

---

## What problem does this solve?

If your lab has GPU servers and multiple people want to run different LLMs at different times, things get messy fast:

- Who's using which GPUs right now?
- Can I run my model without conflicting with someone else's?
- How do I start/stop vLLM without SSH-ing into a node every time?
- How do my scripts and tools connect to the right model endpoint?

**KatherLab LLM Scheduler solves all of this.** Think of it as a **shared calendar for your GPUs** — with automatic model lifecycle management and a built-in OpenAI-compatible API proxy.

---

## Key Features

- 📅 **Visual GPU timeline** — see what's running, planned, and free across every node. Drag-and-drop to create, move, and resize bookings.
- 🚀 **One-click model start** — pick from a model catalog, choose a time and duration; the scheduler handles Slurm submission, health checks, and routing.
- ⚡ **ASAP booking** and Slurm-backed start estimates…
