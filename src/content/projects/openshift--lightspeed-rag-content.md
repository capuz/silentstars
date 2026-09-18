---
repo: "openshift/lightspeed-rag-content"
name: "lightspeed-rag-content"
description: "Contains reference content used by OLS, produces embeddings index image for the content"
readmeQualityOk: true
url: "https://github.com/openshift/lightspeed-rag-content"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [77, 20]
stars: 19
forks: 38
openIssues: 3
closedIssues: 4
watchers: 8
contributors: 372
recentReleases: 0
createdAt: "2024-03-19T18:49:18Z"
lastCommitAt: "2026-09-18T14:03:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 66
maintainers: ["openshift-merge-bot[bot]", "red-hat-konflux[bot]", "xrajesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf292a1bca07807647c9a556fbc0bfeb6032e355fa07782bc05e9e4dbef9afd8/openshift/lightspeed-rag-content"
---

# OpenShift Lightspeed RAG content

## Hermetic / Konflux dependency lockfiles

Cachi2 prefetch uses split hashed requirements (RHOAI wheels vs PyPI source) and optional build-dependency lockfiles. Regenerate them with **uv** and Python **3.12** after changing `pyproject.toml` or `requirements.overrides*.txt`:

```bash
make update-konflux-deps       # regenerate RHOAI/PyPI split lockfiles for Konflux
```

Implementation: `scripts/konflux_requirements.sh`, which pins `pybuild-deps` for reproducible build-dependency resolution. If the set of wheels or sdists changes, review the `prefetch-input` blocks in `.tekton/*.yaml` (the script updates `pip.binary.packages` where it finds a matching JSON line). If resolution fails with a `dbm` cache error, remove the corrupted `pybuild-deps` cache under `~/.cache/pybuild-deps/` and rerun the command; do not commit lockfiles until it completes successfully.

RPM lockfiles (`rpms.lock.yaml`) are maintained with your org’s **rpm-lockfile** workflow; see `make update-rpm-lock` for a short pointer.

## Legacy

`scripts/generate_packages_to_prefetch.py` is **obsolete** (Cachito-era); it exits with an error and points to the targets above.
