---
repo: "tsenoner/plm_choice"
name: "plm_choice"
description: "Which pLM to choose? — systematic comparison of 14 protein language model embedding spaces across 100M protein pairs."
readmeQualityOk: true
url: "https://github.com/tsenoner/plm_choice"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-12-22T18:20:08Z"
lastCommitAt: "2026-10-29T21:25:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["tsenoner"]
openGraphImageUrl: "https://opengraph.githubassets.com/cea8b7167d58f517c7da6e12eb945e0b74296bac119be59a2daf9658427daedf/tsenoner/plm_choice"
---

# Which pLM to choose?

Analysis code for a systematic comparison of protein language model (pLM) embeddings.

The question the code answers: **when you pick a pLM, what actually changes?** Each
embedding space is scored against three similarity targets — sequence identity
(`fident`), structure (`alntmscore`) and function (`hfsp`, plus an EC-based axis) —
through four probes of increasing capacity, so that *inherent* geometry (training-free
distance) can be separated from *extractable* information (a trained probe).

## Install

Requires Python ≥ 3.12 and [uv](https://docs.astral.sh/uv/).

```bash
git clone https://github.com/tsenoner/plm_choice.git
cd plm_choice
uv sync --locked
```

Check the environment:

```bash
uv run plm doctor
```

## The `plm` command

Nearly every analysis step is reachable through one CLI — 56 commands over 54 of
the 58 Python entry points. `plm stages` prints the pipeline in dependency order:

```
1. Cohort   plm data novel-2024      derive the novel-2024 protein cohort
2. Embed    plm embed generate       run each pLM over the cohort FASTA -> HDF5
            plm embed random         the untrained random-vector floor
3. Pairs    plm data merge…
