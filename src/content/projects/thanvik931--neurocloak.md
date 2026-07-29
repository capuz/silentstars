---
repo: "Thanvik931/NeuroCloak"
name: "NeuroCloak"
description: "Real-time AI governance platform implementing a Cognitive  Digital Twin framework. Monitors AI decisions, traces  reasoning steps, detects bias, and generates cognitive  audit reports across healthcare, finance, and defense.  React · Node.js · MongoDB · Redis · Socket.io Based on original research — KLH University, 2026"
readmeQualityOk: true
url: "https://github.com/Thanvik931/NeuroCloak"
homepage: "https://neuro-cloak.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [64, 35]
stars: 29
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-27T05:09:01Z"
lastCommitAt: "2026-07-29T06:14:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 44
maintainers: ["Thanvik931", "Paila009"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbbf7279f9b003034eb247da1c27167a36421822c46c0a396f0e5a16896c1cd/Thanvik931/NeuroCloak"
---

# NeuroCloak

A Real-Time Cognitive Digital Twin Architecture for Explainable AI Governance and Fairness Repair.

## Overview

NeuroCloak is a research-oriented open source project that adds explainability, governance, and post-hoc fairness repair to AI decision systems. It combines a Flask backend, a React + Vite frontend, and benchmarking scripts for reproducible fairness experiments.

Key features:
- Real-time decision monitoring via Socket.IO
- Human-readable decision-path explanations
- Post-hoc fairness repair (threshold-based)
- Immutable audit logs for governance and compliance

## Repository Layout

- `backend/` — Flask backend (entrypoint: `backend/app.py`).
- `frontend/` — React + Vite frontend.
- `dataset taken to train the model/` — Data preparation and benchmark scripts.
- `docker-compose.yml` — Local MongoDB and Redis service definitions.

## Quick Start

### Backend (Windows / PowerShell)

1. Create and activate a virtual environment:

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Create a `.env` file (use `config.py` / `.env.example` as reference) and set:
-…
