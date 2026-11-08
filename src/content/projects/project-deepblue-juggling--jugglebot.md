---
repo: "Project-DeepBlue-Juggling/Jugglebot"
name: "Jugglebot"
description: "For all code (and some CAD) for Project: DeepBlue Juggling"
readmeQualityOk: true
url: "https://github.com/Project-DeepBlue-Juggling/Jugglebot"
homepage: "https://pdj.zulipchat.com/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [52, 31]
stars: 33
forks: 5
openIssues: 0
closedIssues: 23
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-11-14T05:58:14Z"
lastCommitAt: "2026-11-08T10:40:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["Jugleer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4a138548ebe24e3c11ba46068b9d0a111d62eb4e85dba222b84f4a2beebc816/Project-DeepBlue-Juggling/Jugglebot"
---

# Jugglebot
For all CAD and code related to Project: DeepBlue Juggling

I'll try to release an updated folder here for every episode in which major changes happen.

For further information about the project as a whole, as well as more detail on specific elements of the project, please head to:
pdj.zulipchat.com

## Hardware bench-rig & analysis tools

A single-ODrive bench rig is set up for isolated single-leg characterisation
(brake resistor, separate PSU, isolated CAN bus). The bench scripts and
analysers are documented in [tools/README.md](https://github.com/Project-DeepBlue-Juggling/Jugglebot/blob/HEAD/tools/README.md):

- **Friction characterisation** — Stribeck four-parameter fit pipeline
  (`cogging_bench_test.py` → `friction_study_analyse.py`)
- **Stiction breakaway** — torque-ramp test with position-only escape detector
  (`breakaway_ramp_test.py` → `breakaway_analyse.py`)
- **Friction feedforward demo** — bench-validation of the FF stack
  (`friction_ff_demo.py`)

Canonical reference: [logbook/2026-04-27-friction-feedforward-bench-validation.md](https://github.com/Project-DeepBlue-Juggling/Jugglebot/blob/HEAD/logbook/2026-04-27-friction-feedforward-bench-validation.md).
