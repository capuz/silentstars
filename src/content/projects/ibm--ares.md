---
repo: "IBM/ares"
name: "ares"
description: "AI Robustness Evaluation System"
readmeQualityOk: true
url: "https://github.com/IBM/ares"
homepage: "https://ibm.github.io/ares/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["agentic-ai", "ai", "blue-teaming", "red-teaming", "owasp", "owasp-top-10", "adversarial-testing", "automated-red-teaming", "security"]
stars: 73
forks: 29
openIssues: 18
closedIssues: 52
watchers: 0
contributors: 26
recentReleases: 1
createdAt: "2025-08-14T12:42:47Z"
lastCommitAt: "2026-10-28T09:57:18Z"
lastReleaseAt: "2026-08-21T14:12:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["stefano81", "renovate[bot]", "nedshivina"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d4e7af11264b4e06967794034c97f7366c0a46ec4d5182f6b2d445bf451a264/IBM/ares"
---

# AI Robustness Evaluation System (ARES)

**Stop wondering if your AI is secure. Know for certain.**

ARES automates LLM red-teaming so you can test your models against real attacks before deployment. Plug in your attacks, evaluators, and guardrails. Test across models. Get unified reports.

[Install ARES](#-quick-installation), run this [quickstart](https://github.com/IBM/ares/blob/HEAD/example_configs/quickstart.yaml) example, and view results in chat format:
```bash
ares evaluate example_configs/quickstart.yaml -l
ares show-chat -f results/keyword_evaluation.json --open
```

```
┌───────────────────────────────────────────────────────────────────────────┐
│                         ARES Evaluation Flow                              │
└───────────────────────────────────────────────────────────────────────────┘

  📋 Define Goals          🎯 Select Strategy          📊 Evaluate Results
       │                          │                            │
       ▼                          ▼                            ▼
┌──────────────┐          ┌───────────────┐          ┌─────────────────┐
│ What to test │ ───────> │ How to attack │ ───────> │ How to measure  │
└──────────────┘…
