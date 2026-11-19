---
repo: "Erichestein0702/MUSICprompt"
name: "MUSICprompt"
description: "AI MUSICprompt - Curated collection of AI music prompts"
originalDescription: "AI MUSICprompt-精选AI音乐提示词汇总"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Erichestein0702/MUSICprompt"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-music", "prompt-engineering", "suno-ai", "translate", "udio"]
stars: 6
forks: 1
openIssues: 158
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-25T09:34:38Z"
lastCommitAt: "2026-11-19T05:00:04Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 80
undervaluedScore: 11
maintainers: ["Erichestein0702"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb94fb0a0a8e8702c0781f12e590f4a02f481b9636f22478ff020eba76faff54/Erichestein0702/MUSICprompt"
---

# MUSICprompt

An open-source Prompt dataset, search tool, and deterministic Prompt compiler for AI music creation.

The focus of v2 is not simply adding more text, but making the data **auditable, portable, searchable, and verifiable**: separating raw parameters from model inferences, and separating text quality from actual generation results.

## Current Data

| Metric | Current value |
|---|---:|
| Unique Prompts | 283 |
| Text quality score ≥ 8 (text reference only) | 95 |
| Generation validation passed | 0 |
| Evaluation tasks completed | 0 / 40 |
| Explicit BPM | 49 |
| Explicit key | 23 |
| Average text quality score | 7.44 |
| Average generation score | N/A |

## Quick Start

```bash
python -m pip install -r requirements.txt
python tools/build.py
```

`build.py` generates SQLite, CSV, website data, and statistics from the unified fact data, and checks the main document links.

### Search Prompts

```bash
python tools/search_prompts.py --query "electronic"
python tools/search_prompts.py --genre pop --min-score 8
python tools/search_prompts.py --use-case party
python tools/search_prompts.py --stats
```
