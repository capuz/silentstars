---
repo: "ThalesGroup/agilab"
name: "agilab"
description: "Open-source platform for reproducible AI/ML workflows, from local experimentation to distributed workers and long-lived services."
readmeQualityOk: true
url: "https://github.com/ThalesGroup/agilab"
homepage: "https://thalesgroup.github.io/agilab"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["distributed-computing", "machine-learning", "mlops", "reproducibility", "streamlit", "workflow-orchestration", "ai-agents", "cython", "dask", "experiment-tracking"]
stars: 17
forks: 1
openIssues: 10
closedIssues: 3
watchers: 2
contributors: 16
recentReleases: 10
createdAt: "2025-03-14T14:29:22Z"
lastCommitAt: "2026-07-07T06:37:24Z"
lastReleaseAt: "2026-04-27T19:51:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 66
maintainers: ["jpmorard", "Codex-Agent", "GuillaumeDemets"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab3e0d5671f190afb5e6e418647cbf652357dc0bf2a0eba32306f4a8308bdf2f/ThalesGroup/agilab"
discussionCount: 4
---

# AGILAB

AGILAB is an anti-lock-in reproducibility workbench for AI/ML engineering.
It turns notebooks and scripts into executable, portable, evidence-backed apps
with a stable `agi-core` handoff, optional MLflow tracking, and local or
distributed execution behind the same run evidence contract.

<p>
</p>

## One-Minute Proof

Run the smallest public proof first. It installs the examples profile, executes
the packaged `flight_telemetry_project`, writes `run_manifest.json`, and then
checks whether the evidence is a safe baseline before you move to notebooks,
private apps, MLflow, or cluster execution.

```bash
uv --preview-features extra-build-dependencies tool install --upgrade "agilab[examples]"
agilab first-proof --json --max-seconds 60
agilab adoption-report --strict
```

That loop is the product in miniature: controlled environment, reproducible
execution, artifacts, run evidence, and a portable handoff path without needing
the Streamlit UI or a cluster.

## Golden ML Loop

The strongest AGILAB path is intentionally small and evidence-first:

1. **Import or create** a notebook, script, or app project.
2. **Run** it through a controlled local environment first.
3. **Capture**…
