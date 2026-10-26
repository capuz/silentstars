---
repo: "sattyamjjain/agent-audit-kit"
name: "agent-audit-kit"
description: "Static scanner for MCP-connected AI agent pipelines. 422 rules across 14 categories, 14 compliance frameworks, OWASP Agentic 10/10 + MCP 10/10, GitHub Action, SARIF, public CVE-to-rule ledger."
readmeQualityOk: true
url: "https://github.com/sattyamjjain/agent-audit-kit"
homepage: "https://github.com/sattyamjjain/agent-audit-kit#readme"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "ai-security", "claude-code", "github-action", "mcp", "mcp-security", "owasp", "sarif", "scanner", "security"]
stars: 12
forks: 0
openIssues: 9
closedIssues: 744
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-05T15:12:41Z"
lastCommitAt: "2026-10-26T18:07:00Z"
lastReleaseAt: "2026-04-29T07:16:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["sattyamjjain", "aak-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f2896ecca25cb18c65ce3dd9d6594f4a87df1519b1eec65e750892e82527265/sattyamjjain/agent-audit-kit"
discussionCount: 0
---

<a href="benchmarks/false_positive/RESULTS.md"><img src="https://img.shields.io/badge/benign--slice%20536%20MCP%20configs-1%20HIGH%2FCRIT%20finding%2C%200%20false-brightgreen.svg" alt="Benign-slice false-positive measurement: 536 MCP configs scanned, 0 of 1 HIGH/CRITICAL findings were false positives (0.0%)"></a>

Static security scanner for MCP-connected AI agent pipelines. It finds
misconfigurations, hardcoded secrets, tool poisoning, rug pulls, trust-boundary
violations and tainted data flows across **11 agent platforms** — and emits the
compliance evidence an auditor asks for afterwards.

It runs fully offline. No account, no telemetry, no model in the loop.

## Quick start

```bash
pip install agent-audit-kit
agent-audit-kit scan .
```

`aak` is installed as a shorthand for the same command.

As a pre-commit hook:

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/sattyamjjain/agent-audit-kit
    rev: v0.6.26
    hooks:
      - id: agent-audit-kit
```

In CI:

```yaml
# .github/workflows/agent-security.yml
- uses: sattyamjjain/agent-audit-kit@v0.6.26
  with:
    severity: medium
    fail-on: high
    upload-sarif: true
```

The action writes SARIF; upload…
