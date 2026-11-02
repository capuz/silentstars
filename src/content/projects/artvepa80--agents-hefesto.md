---
repo: "artvepa80/Agents-Hefesto"
name: "Agents-Hefesto"
description: "Release-truth gate for AI-generated code: catches hallucinated APIs, missing imports and claims your code can't back up, before release. Free CLI, GitHub Action and MCP server; PRO and OMEGA add more."
readmeQualityOk: true
url: "https://github.com/artvepa80/Agents-Hefesto"
homepage: "https://hefestoai.narapallc.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-code", "cli", "code-quality", "developer-tools", "devops", "github-actions", "mcp", "open-source", "pre-commit", "python"]
stars: 7
forks: 2
openIssues: 3
closedIssues: 31
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-20T14:52:16Z"
lastCommitAt: "2026-11-02T11:35:53Z"
lastReleaseAt: "2026-03-10T02:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 81
maintainers: ["artvepa80"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b0ccf7ca8e87b328655df7525210a920b0606462437f172f030fc3cde404195/artvepa80/Agents-Hefesto"
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
