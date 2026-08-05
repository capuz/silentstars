---
repo: "Semantic-Infrastructure-Lab/reveal"
name: "reveal"
description: "Progressive file disclosure for agentic AI - explore files hierarchically with plugin-based analyzers"
readmeQualityOk: true
url: "https://github.com/Semantic-Infrastructure-Lab/reveal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic", "ai", "cli", "code-analysis", "developer-tools", "file-explorer", "progressive-disclosure", "python"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-21T20:03:34Z"
lastCommitAt: "2026-08-05T05:57:11Z"
lastReleaseAt: "2025-12-01T09:29:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["scottsen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b121b6c0f954ba94eb22a17b79f32771cea774681d2c30ff1ce8302bbb30a30e/Semantic-Infrastructure-Lab/reveal"
---

# Reveal

**Reveal is how AI agents understand codebases without wasting tokens.**

A local-first, adapter-driven semantic inspection layer — progressive disclosure enforced by design. One CLI, 34 URI adapters, 87 languages. Structure before content, always. Engineers and AI systems use the same tool, the same syntax, the same progressive drill-down.

```bash
reveal src/auth.py validate_token           # What does this function do?
reveal 'calls://src/?target=validate_token' # Who calls it? (cross-file)
reveal overview .                           # one-glance dashboard: quality, activity, deps
reveal 'ast://src/?complexity>10'           # What's too complex?
reveal health ssl://api.example.com domain://example.com ./src  # One-shot health check
reveal pack src/ --since main --budget 8000 # PR context snapshot for AI agents
```

## Installation

```bash
pip install reveal-cli
```

**Windows on a managed/locked-down machine?** If Application Control Policy blocks the pip-generated `reveal.exe` launcher, run `python -m reveal` instead — it uses the same install, just skips the blocked wrapper.

## What Makes It Different

**Progressive disclosure — the only way in.** `dir → file →…
