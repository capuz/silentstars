---
repo: "alphaparkinc/genpark-personal-agent-cardiac-qtc-dispersion-ventricular-repolarization-skill"
name: "genpark-personal-agent-cardiac-qtc-dispersion-ventricular-repolarization-skill"
description: "GenPark high-grade production skill - https://www.genpark.ai | https://www.linkedin.com/company/92955550"
readmeQualityOk: true
url: "https://github.com/alphaparkinc/genpark-personal-agent-cardiac-qtc-dispersion-ventricular-repolarization-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-30T10:22:18Z"
lastCommitAt: "2026-10-30T10:22:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 14
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f548f1f29b1d1fe19a25c1cb7c15b88910e90ebafd152852c196e8d985a18e8/alphaparkinc/genpark-personal-agent-cardiac-qtc-dispersion-ventricular-repolarization-skill"
---

# Cardiac QTc Interval Dispersion & Repolarization Instability Skill

An industrial-grade Model Context Protocol (MCP) server providing `assess_qtc_dispersion_repolarization`. Built with **100% pure Python standard library** (zero pip dependencies).

## Overview
Calculates heart-rate corrected QT intervals via Bazett, Fridericia, and Framingham formulas, evaluates precordial QTc dispersion, and flags torsadogenic ventricular arrhythmia risks.

- **Official Web Portal**: [https://www.genpark.ai](https://www.genpark.ai)
- **Corporate Entity**: [GenPark Inc on LinkedIn](https://www.linkedin.com/company/92955550)
- **Domain Category**: `Personal Agent (Bio / Electrocardiology)`

## MCP Tool Specification
### `assess_qtc_dispersion_repolarization`
Parameters:
- `qt_interval_measured_ms` (float): Raw measured QT interval in milliseconds
- `heart_rate_bpm` (float): Heart rate in beats per minute
- `qt_max_ms_in_leads` (float): Maximum QT interval across 12 precordial leads (ms)
- `qt_min_ms_in_leads` (float): Minimum QT interval across 12 precordial leads (ms)
- `is_female` (bool): Biological sex of subject

### Self-Test
```bash
python skills.py --test
```

###…
