---
repo: "aaFrostnova/CiteTracer"
name: "CiteTracer"
description: "CITETRACER: Cascading Multi-Agent for Citation Hallucination Detection"
readmeQualityOk: true
url: "https://github.com/aaFrostnova/CiteTracer"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [51, 49]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-17T18:49:48Z"
lastCommitAt: "2026-07-24T06:07:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 40
maintainers: ["aaFrostnova", "shiqingma"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac507b7b792837114c4e3663bb6dac59744543fab4a58b42bce224f1b175d65/aaFrostnova/CiteTracer"
---

# CITETRACER: Cascading Multi-Agent Citation Hallucination Detection

CITETRACER detects fabricated citations in research papers and routes each
citation to one of a **12-code taxonomy** (R1-R3, P1-P3, H1-H6) so reviewers
see *which* field is wrong, not just whether the citation is fake. The
pipeline parses PDF or BibTeX input, retrieves evidence through a four-stage
cascade (Memory cache, URL Fetch, eight Scholar Connectors in parallel, Web
Agent fallback), runs deterministic field matching, and routes residual
cases to class-specialist judge agents.

On a 2,450-citation synthetic benchmark CITETRACER attains 97.1% accuracy
and class-level F1 of 97.0 / 95.8 / 98.5 for Real / Potential /
Hallucinated. On 957 real-world fabricated citations from ICLR 2026 and
ACM CCS 2026 desk-rejected submissions it catches 97.1% with no
abstentions. See [docs/taxonomy.md](https://github.com/aaFrostnova/CiteTracer/blob/HEAD/docs/taxonomy.md) for the full
taxonomy and [docs/metric_guide.md](https://github.com/aaFrostnova/CiteTracer/blob/HEAD/docs/metric_guide.md) for the scoring
protocol.

## Setup

```bash
# 1) clone
git clone https://github.com/aaFrostnova/Citation_Hallucination_Detection.git
cd…
