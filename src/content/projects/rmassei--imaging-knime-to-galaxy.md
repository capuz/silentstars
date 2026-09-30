---
repo: "rmassei/imaging_KNIME_to_Galaxy"
name: "imaging_KNIME_to_Galaxy"
description: "An AI Python framework to convert KNIME to Galaxy workflows"
readmeQualityOk: true
url: "https://github.com/rmassei/imaging_KNIME_to_Galaxy"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [73, 27]
topics: ["ai", "galaxy", "knime", "python"]
stars: 6
forks: 2
openIssues: 11
closedIssues: 40
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-11-17T12:02:54Z"
lastCommitAt: "2026-09-30T09:58:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 58
maintainers: ["lea-33", "19ngxuan", "rmassei"]
openGraphImageUrl: "https://opengraph.githubassets.com/087818a179ff399e543007e0c4b962becc41ea9382a4fead6d10ddd9aa0e7670/rmassei/imaging_KNIME_to_Galaxy"
---

# KNIME2Galaxy Workflow Translator
Translate KNIME workflows (`.knwf`) into valid Galaxy workflows (`.ga`) using embedding-based tool retrieval and LLM-guided workflow reconstruction.

## Overview

This project translates KNIME workflows into functionally equivalent Galaxy workflows.
It combines:

- Galaxy tool metadata to represent available tools  
- Mapping examples to guide translation  
- Embedding-based similarity search to retrieve relevant tools  
- Structured LLM prompting to generate valid Galaxy `.ga` workflows

## Installation

This project uses a `pyproject.toml` setup.

### Clone the repository

```bash
git clone https://github.com/rmassei/imaging_KNIME_to_Galaxy.git
cd imaging_KNIME_to_Galaxy
```

### Configure environment variables

Create a local `.env` file from the provided template:

```bash
cp .env.example .env
```

Add your LLM API key to `.env`:

```env
LLM_API_KEY=your-api-key
```

Set your preferred variables in the `.env` file. 

Do not commit the `.env` file. 

### Create a virtual environment

**Using uv**

```bash
uv sync
```

**Using Python venv**

```bash
python -m venv .venv
source .venv/bin/activate      # macOS/Linux
.venv\Scripts\activate…
