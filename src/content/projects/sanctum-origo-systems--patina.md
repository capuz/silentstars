---
repo: "Sanctum-Origo-Systems/patina"
name: "patina"
description: "A persistent cognitive backend with belief graph and earned graduated autonomy"
readmeQualityOk: true
url: "https://github.com/Sanctum-Origo-Systems/patina"
homepage: "https://andywidjaja.com/patina"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 3
closedIssues: 242
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-25T16:07:30Z"
lastCommitAt: "2026-11-02T13:39:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["andywidjaja", "Bhavy-Ranka"]
openGraphImageUrl: "https://opengraph.githubassets.com/48dbe7e8ee0098ac517197b00317334d6453c4d8bb57f8035f293a4eae252a2d/Sanctum-Origo-Systems/patina"
---

# Patina

> A cognitive framework that builds beliefs about a subject, tracks confidence over time, detects contradictions, and acts on what it notices — with governed autonomy and human gates.

Patina is an architecture for building systems that form, hold, decay, and act on beliefs about a subject. It maintains an epistemically honest model with quantified confidence, temporal decay, contradiction detection, and graduated autonomy earned through accuracy. The framework is subject-agnostic: demonstrated at personal scale (one person's Slack history), designed for team and organizational scale.

## Quick Start

```bash
# Install
uv tool install patina

# Initialize
patina init

# Ingest from a Slack export (immediate value)
patina ingest --from-export ~/Downloads/slack-export.zip

# See what needs your attention
patina catch-up

# See everything ranked by priority quadrant
patina priorities
```

## What It Does

```bash
# Priority + judgment
patina catch-up                    # unified view: needs action / new / waiting
patina priorities                  # grouped by quadrant (Q1-Q4)
patina dismiss <id>                # dismiss noise, trains the model
patina objectives add "Ship…
