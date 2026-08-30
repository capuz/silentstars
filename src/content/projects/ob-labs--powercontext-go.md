---
repo: "ob-labs/powercontext-go"
name: "powercontext-go"
description: "A powerful context engine: Let your AI Agent smarter."
readmeQualityOk: true
url: "https://github.com/ob-labs/powercontext-go"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [49, 28]
stars: 16
forks: 8
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-08-26T05:57:47Z"
lastCommitAt: "2026-08-30T00:43:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["AlexStocks", "thunguo", "begininvoke"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1346959995/8bf7ff15-0b4f-424e-ab8a-fc92ce52c6b0"
discussionCount: 0
---

# PowerContext Go

PowerContext Go requires Go 1.27.0 or newer. It preserves the frozen Python
`v0.0.2` observable contract while using Go-native domain
types, lifecycle ownership, concurrency, persistence, transports, and release
packaging.

```text
module github.com/ob-labs/powercontext-go
oracle 3a6cb0151670eaff7dc0293466edd673124e80da
```

The HTTP source of truth is [`openapi/powercontext.yaml`](https://github.com/ob-labs/powercontext-go/blob/HEAD/openapi/powercontext.yaml).
Generated code under `api/v1` and generated operation tables are never edited
by hand. Compatibility evidence lives under `test/conformance`: all 622 frozen
Python test cases are inventoried with resolvable Go or retained-host evidence.

## Repository shape

- `source`, `artifact`, `trigger`, and `inference` are lifecycle-free public
  extension contracts; `artifact/{memory,experience,skill,handoff}` contains
  the public typed Artifact families.
- `internal/{review,contextpack,handoffreport,stats,work}` contains product
  domains that are shared by the Server but are not part of the embedded Go
  SDK surface.
- `internal/runtime` owns admission, Scope boundaries, same-Scope write
  serialization,…
