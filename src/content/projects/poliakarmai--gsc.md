---
repo: "poliakarmai/gsc"
name: "gsc"
description: "GSC — verified remediation engine: SAST that proves exploits (PoC), verifies fixes (Proof-of-Fix), and self-heals CI. Apache 2.0 + Commercial."
readmeQualityOk: true
url: "https://github.com/poliakarmai/gsc"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-25T07:46:07Z"
lastCommitAt: "2026-08-28T14:35:54Z"
lastReleaseAt: "2026-08-13T09:09:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["poliakarmai"]
openGraphImageUrl: "https://opengraph.githubassets.com/953f46dacd6dce9dffb1e9b6a8a83af54c1890c0c4aa2027ed4932e0f986fb1e/poliakarmai/gsc"
---

# 🛡️ GSC — Git Security Checker

**SAST, которое доказывает эксплойт, верифицирует фикс и лечит CI само.**

GSC — самообучающаяся AppSec-платформа полного цикла:

```
detect → prove → fix → verify → heal → learn
```

## 🚀 Быстрый старт — GitHub Action

Проверьте свой репозиторий за 30 секунд. Добавьте файл `.github/workflows/gsc.yml`:

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
          fail_on_critical: false   # true = блокировать merge при CRITICAL
```

Откройте pull request — GSC отсканирует код, пришлёт комментарий с находками
(CRITICAL / HIGH) и поставит оценку безопасности. Ядро поставляется как
закрытый Docker-образ `ghcr.io/poliakarmai/gsc-scanner` — исходный код движка
не публикуется.

**Входные параметры:** `path`, `with_poc`, `with_chains`, `deep_scan`,
`fail_on_critical`, `fail_on_score`, `max_findings_to_comment`.

## Что умеет

| Слой | Возможности |
|---|---|
| **SAST** | 50 детекторов (SAST · SCA · Secrets · IaC), YAML rule DSL,…
