---
repo: "poliakarmai/gsc"
name: "gsc"
description: "GSC — verified remediation engine: SAST that proves exploits (PoC), verifies fixes (Proof-of-Fix), and self-heals CI. Apache 2.0 + Commercial."
originalDescription: "GSC — verified remediation engine: SAST that proves exploits (PoC), verifies fixes (Proof-of-Fix), and self-heals CI. Apache 2.0 + Commercial."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/poliakarmai/gsc"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-25T07:46:07Z"
lastCommitAt: "2026-10-02T09:59:35Z"
lastReleaseAt: "2026-08-28T18:15:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["poliakarmai"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2049f1d1dbf90fac0e220d3879986b19dee1a9ca0aebe3e22c2bfe89a7d1c27/poliakarmai/gsc"
---

# 🛡️ GSC — Git Security Checker

**SAST that proves an exploit, verifies the fix, and heals CI itself.**

GSC — a self-learning full-cycle AppSec platform:

```
detect → prove → fix → verify → heal → learn
```

## 🚀 Quick Start — GitHub Action

Check your repository in 30 seconds. Add a file `.github/workflows/gsc.yml`:

```yaml
name: GSC Audit
on:
  pull_request:
    branches: [main, master]

jobs:
  audit:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: poliakarmai/gsc@v1
        with:
          fail_on_critical: false   # true = block merge on CRITICAL
```

Open a pull request — GSC will scan the code, send a comment with findings (CRITICAL / HIGH) and give a security score. The core is supplied as a private Docker image `ghcr.io/poliakarmai/gsc-scanner` — the engine's source code is not published.

**Input parameters:** `path`, `deep_scan`, `fail_on_critical`, `fail_on_score`, `max_findings_to_comment`, `llm_api_key`, `llm_base_url`, `llm_model`, `sarif`, `reachability`.

LLM revalidation — on your key (BYO-LLM):
```yaml
- uses: poliakarmai/gsc@v1…
```
