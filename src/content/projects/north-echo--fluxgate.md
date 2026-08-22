---
repo: "north-echo/fluxgate"
name: "fluxgate"
description: "CI/CD pipeline security scanner — 53 rules across GitHub Actions, GitLab CI, Azure Pipelines, Jenkins, Tekton, CircleCI"
readmeQualityOk: true
url: "https://github.com/north-echo/fluxgate"
homepage: "https://pkg.go.dev/github.com/north-echo/fluxgate/pkg/scanner"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cicd", "devsecops", "github-actions", "gitlab-ci", "go", "golang", "security", "static-analysis"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T03:54:14Z"
lastCommitAt: "2026-08-22T04:07:44Z"
lastReleaseAt: "2026-04-04T19:16:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 61
maintainers: ["north-echo", "dependabot[bot]", "SecKatie"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c9ff24e77d1331ccb016b29605bbe97b3e6e1770d1c3f1eba2af07212ffd94/north-echo/fluxgate"
---

# Fluxgate

CI/CD Pipeline Security Gate — static analysis for CI/CD pipeline configurations across 6 platforms.

Fluxgate scans workflow and pipeline files for dangerous security patterns,
including the exact misconfiguration class that enabled the
[Trivy supply chain compromise](https://github.com/aquasecurity/trivy/discussions/10425)
in March 2026.

## Quick Start

```bash
# Scan a local repository (auto-detects all 6 platforms)
fluxgate scan .

# Scan a remote repository
fluxgate remote aquasecurity/trivy

# Install
go install github.com/north-echo/fluxgate/cmd/fluxgate@latest
```

## What It Detects

### GitHub Actions (FG-xxx)

| Rule    | Severity | Description |
|---------|----------|-------------|
| FG-001  | Critical | Pwn Request: pull_request_target with fork checkout |
| FG-002  | High     | Script Injection via expression interpolation |
| FG-003  | Medium   | Tag-based action pinning (mutable references) |
| FG-004  | Medium   | Overly broad workflow permissions |
| FG-005  | Low      | Secrets exposed in workflow logs |
| FG-006  | Medium   | Fork PR code execution via build hooks |
| FG-007  | Medium   | Token exposure in build steps |
| FG-008  | Critical | OIDC…
