---
repo: "artvepa80/Agents-Hefesto"
name: "Agents-Hefesto"
description: "AI-powered code quality agent with ML semantic analysis.  Prevents technical debt before production. Free tier:  static analysis. Pro tier: ML duplicate detection,  real-time metrics, CI/CD automation. Built for AI  coding era. Open core model: Phase 0 free, Phase 1 paid."
readmeQualityOk: true
url: "https://github.com/artvepa80/Agents-Hefesto"
homepage: "https://hefestoai.narapallc.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-code", "cli", "code-quality", "developer-tools", "devops", "github-actions", "mcp", "open-source", "pre-commit", "python"]
stars: 7
forks: 2
openIssues: 12
closedIssues: 21
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-20T14:52:16Z"
lastCommitAt: "2026-10-24T08:07:55Z"
lastReleaseAt: "2026-03-10T02:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 75
maintainers: ["artvepa80"]
openGraphImageUrl: "https://opengraph.githubassets.com/67d5701f17b7dedaff8f14000f42d09ba71427f716fba960e8d250144cc29782/artvepa80/Agents-Hefesto"
fundingLinks: ["GITHUB:https://github.com/artvepa80"]
---

# HefestoAI — release truth engine for AI-generated code

**English** | [简体中文](https://github.com/artvepa80/Agents-Hefesto/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/artvepa80/Agents-Hefesto/blob/HEAD/README.ja.md)

HefestoAI runs after your AI assistant writes the code and before it ships. It checks that what your project declares (dependencies, configs, install artifacts) matches what it actually does, and it runs security and complexity checks on the code itself.

### Quick start (GitHub Action)

**Deterministic pass/fail check for agent-written code.** It compares what your repo declares (dependencies, README, `pyproject.toml`, CHANGELOG, `action.yml`, CI) with what it actually does, and flags secrets and risky IaC. Same input, same result.

```yaml
# .github/workflows/hefesto.yml
name: HefestoAI
on: [pull_request, push]
permissions:
  contents: read
  security-events: write
jobs:
  hefesto:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: artvepa80/Agents-Hefesto@v4
        with:
          fail_on: HIGH
          sarif: 'true'
```

Findings show up under **Security > Code scanning** and as pull request annotations. Public…
