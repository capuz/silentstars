---
repo: "zarguell/tia-n-list"
name: "tia-n-list"
description: "Threat Intel Analyst news feed and blog powered by RSS and LLMs"
readmeQualityOk: true
url: "https://github.com/zarguell/tia-n-list"
homepage: "https://zarguell.github.io/tia-n-list/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-25T17:57:53Z"
lastCommitAt: "2026-10-27T09:17:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["zarguell"]
openGraphImageUrl: "https://opengraph.githubassets.com/9199858f48f023c2cc4c71acbaa9d77c0b65d698bcdc71f4e738d68b57534dc9/zarguell/tia-n-list"
---

# Tia N. List

Story-centric cybersecurity news + remediation site. Stories are first-class
entities with timelines (original reporting → updates from multiple sources),
hot-scored by a custom static site generator (no Hugo), with RSS feeds
(daily digest / hot stories / every article / KEV catalog) and a CTI &
detection tier (ATT&CK coverage matrix, IOC feeds + STIX snapshots, Sigma/SPL/
KQL/YARA rules).

The **KEV catalog section** (`/kev/`) is powered by the kevrichment pipeline in
`kevrichment/` — per-CVE enrichment of the CISA KEV catalog (PoC availability,
exploitation preconditions, BOD 26-04 remediation timelines, hunting
hypotheses). Story pages link their CVEs straight to the matching `/kev/cves/`
page when a record exists.

## Structure

- `engine/ssg.py` — static site generator (logic only; all markup in `engine/templates/`)
- `engine/templates/` — Jinja2 templates + design system (`style.css`, light default,
  dark toggle)
- `engine/data/events/<id>.md` + `<id>.json` — hybrid store: markdown content + JSON metadata
- `engine/data/stories/<id>.json` — story metadata + ordered event refs
- `engine/digest_candidates.py` — coverage-delta brief for the daily digest…
