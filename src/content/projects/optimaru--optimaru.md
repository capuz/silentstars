---
repo: "optimaru/optimaru"
name: "optimaru"
description: "Open-source metaheuristic solver engine for real-world combinatorial optimization (free edition)"
readmeQualityOk: true
url: "https://github.com/optimaru/optimaru"
homepage: "https://optimaru.com"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 40]
topics: ["combinatorial-optimization", "cpp", "header-only", "local-search", "metaheuristics", "operations-research", "scheduling", "solver", "vehicle-routing"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-28T17:28:05Z"
lastCommitAt: "2026-11-14T10:43:37Z"
lastReleaseAt: "2026-11-12T04:24:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["iswy1310", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/94dad0e1051892b56a19dde05d2ab23330d668096a102cea291b64232308f525/optimaru/optimaru"
---

# optimaru

A metaheuristic optimization engine for real-world routing, scheduling,
timetabling and allocation, with 22 ready-to-use models you call from Python.

optimaru comes in a free, open-source edition, this repository, and an Enterprise
edition, the optimaru API: the same engine run as a hosted service. A program
that uses this package moves onto it with one setting, an API key
([Solving on the optimaru API](#solving-on-the-optimaru-api)).

Documentation: <https://optimaru.github.io/optimaru/> (built from [`docs/`](https://github.com/optimaru/optimaru/blob/HEAD/docs)
with MkDocs; the API reference is generated from the sources).

## Quick start

```bash
pip install optimaru
```

One package with every use case as a subpackage — `optimaru.vehicle_routing`,
`optimaru.school_timetabling`, … — compiled for Linux, macOS and Windows
(Python 3.11+, pydantic 2.11+). No C++ toolchain is needed. Every use case has
two entry points: `solve(problem, ...)` for a problem built in Python, and
`solve_request(request)` for a pydantic request (JSON in, JSON out).

```python
from optimaru import vehicle_routing as vrp
from optimaru.vehicle_routing.constraints import (
    TravelTimeCost,…
