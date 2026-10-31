---
repo: "cogniumhq/cognium-dev"
name: "cognium-dev"
description: "Static Application Security Testing platform - CLI and core library"
readmeQualityOk: true
url: "https://github.com/cogniumhq/cognium-dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 57
closedIssues: 513
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-05-26T21:39:11Z"
lastCommitAt: "2026-10-31T07:46:37Z"
lastReleaseAt: "2026-05-30T16:31:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["claude", "openmason", "elarasu"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc1970b69a8d344e79af8308a8785b5f10b38d684bf42bb4b9b396462ed9ef13/cogniumhq/cognium-dev"
discussionCount: 0
---

# cognium-dev

**Static Application Security Testing (SAST) platform for detecting security vulnerabilities through taint analysis.**

---

## Overview

cognium-dev is a high-performance SAST tool that detects security vulnerabilities across 7 programming languages using deterministic taint analysis. It provides:

- **Security passes** — SQL injection, XSS, command injection, path traversal, SSRF, and more
- **Quality passes** — Null dereference, resource leaks, dead code, N+1 queries
- **Software quality metrics** — Cyclomatic complexity, coupling, cohesion, maintainability index
- **SARIF 2.1.0 output** — Native GitHub/GitLab CI integration

Full inventory of passes and metrics: [`packages/circle-ir/docs/PASSES.md`](https://github.com/cogniumhq/cognium-dev/blob/HEAD/packages/circle-ir/docs/PASSES.md).

### Benchmark Results

cognium-dev **4.12.0**:

| Benchmark | Language | TPR | FPR |
|-----------|----------|-----|-----|
| OWASP BenchmarkJava 1.2: all 2,740 cases, scorecard rule | Java | **90.0%** | **3.0%** |
| Juliet Test Suite 1.3: `_01` cases of 9 injection CWEs, method level | Java | **99.4%** (155/156) | **21.9%** |
| SecuriBench Micro: 123 annotated cases | Java |…
