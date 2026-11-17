---
repo: "Bugb-Technologies/cert-x-gen"
name: "cert-x-gen"
description: "Polyglot execution engine and CLI for vulnerability detection using real code"
readmeQualityOk: true
url: "https://github.com/Bugb-Technologies/cert-x-gen"
homepage: "https://cxg.bugb.io"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [71, 27]
topics: ["bug-bounty", "cli", "devsecops", "execution-engine", "go", "penetration-testing", "polyglot", "python", "rust", "security"]
stars: 21
forks: 0
openIssues: 22
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-01-12T20:31:45Z"
lastCommitAt: "2026-11-17T14:48:48Z"
lastReleaseAt: "2026-11-10T09:12:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 52
maintainers: ["Animesh-Sri-bugb", "Shahid-BugB", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b2ff165d972c0b2652a2a475374686f272f3149a53eb351246b370125b87b1f/Bugb-Technologies/cert-x-gen"
discussionCount: 0
---

Write security checks as real code — Python, Rust, Go, C, Shell, or YAML — and run them reproducibly, at scale.

---

## What is CERT-X-GEN

Modern security scanning has outgrown static templates. Today's vulnerability detection often requires real programming logic, protocol-level control, data processing, and reuse of existing scripts — yet most scanners force everything into YAML-only abstractions.

CERT-X-GEN is a different kind of scanner. It is a **polyglot security execution engine** that treats vulnerability detection as code, not configuration. You write detection logic in the language that fits the problem — CERT-X-GEN handles orchestration, execution, and output.

**What this means in practice:**

```bash
# Run a Python template for stateful protocol checks
cxg scan --scope 192.168.1.100:25 --templates smtp-open-relay.py

# Run a Go template for high-performance database probing
cxg scan --scope db.example.com:5432 --templates postgresql-default-credentials.go

# Mix multiple languages in one scan
cxg scan --scope targets.txt --templates redis*.py,docker*.go,system*.sh
```

### Highlights

- A **language-agnostic runtime** for vulnerability detection logic
- A **unified…
