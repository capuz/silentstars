---
repo: "Scodive/Paper-Agent-Skills"
name: "Paper-Agent-Skills"
description: "A comprehensive library of AI agent skills for academic research and writing, designed to be used by autonomous agents to generate high-quality research outputs."
readmeQualityOk: true
url: "https://github.com/Scodive/Paper-Agent-Skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-24T07:04:02Z"
lastCommitAt: "2026-11-05T11:25:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 19
maintainers: ["Scodive"]
openGraphImageUrl: "https://opengraph.githubassets.com/de13512e86dd4cb04a9806c482eb13fd21a19e20fb9acf130cd931cd389aed2d/Scodive/Paper-Agent-Skills"
---

# Paper-Agent-Skills

Evidence-aware research writing skills for AI agents. Revise a manuscript against supplied experiment records and references, with traceable suggestions, focused edits, and validation reports.

Includes **academic paper revision**, **rebuttal preparation**, and **presentation storyboarding**. The host agent performs the review; bundled Python tools package the evidence and validate edits. The tools require no model API key.

## Installation

Python 3.10+ and Node.js are required for this installation path. Install all three skills into the shared agent directory, which DSH can discover:

```bash
npx skills add Scodive/Paper-Agent-Skills --agent universal --skill '*' --copy --yes
python3 -m venv .paper-agent-venv
.paper-agent-venv/bin/python -m pip install -r .agents/skills/academic-paper-writing/scripts/requirements.txt
```

Each skill includes its executable tools and readable runtime. A source checkout is not required after installation. Other supported agents can be selected through the skills CLI.

## Usage

Open an agent session in your working directory and provide:

> Use academic-paper-writing to revise paper.tex against results.csv and…
