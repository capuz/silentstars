---
repo: "stanford-star/relbench"
name: "relbench"
description: "RelBench: Relational Deep Learning Benchmark"
readmeQualityOk: true
url: "https://github.com/stanford-star/relbench"
homepage: "https://relbench.stanford.edu"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["benchmark", "graph-neural-networks", "relational-databases", "tabular-data", "relational-foundation-models", "tabular-foundation-models"]
stars: 382
forks: 89
openIssues: 9
closedIssues: 93
watchers: 13
contributors: 28
recentReleases: 0
createdAt: "2023-10-29T18:29:52Z"
lastCommitAt: "2026-08-25T04:09:59Z"
lastReleaseAt: "2024-07-27T20:10:58Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 33
maintainers: ["rishabh-ranjan", "github-actions[bot]", "JustinGu32"]
openGraphImageUrl: "https://opengraph.githubassets.com/3072d358ba514adf65a8df5aa452f523b7696fe158d8b1576353e800ee84b187/stanford-star/relbench"
---

</p>

</p>

## News

RelBench 3 loads every dataset family below from the Hugging Face Hub with one call —
`relbench.load_dataset("<org>/<repo>/<name>")` — the core databases
([`stanford-star/relbench-v1`](https://huggingface.co/datasets/stanford-star/relbench-v1),
[`stanford-star/relbench-v2-extra`](https://huggingface.co/datasets/stanford-star/relbench-v2-extra)),
CTU/ReDeLEx ([`stanford-star/redelex`](https://huggingface.co/datasets/stanford-star/redelex)),
4DBInfer ([`stanford-star/dbinfer`](https://huggingface.co/datasets/stanford-star/dbinfer)) and
TGB ([`stanford-star/tgb`](https://huggingface.co/datasets/stanford-star/tgb)); the `[ctu]` extra is
gone. MIMIC-IV requires PhysioNet credentials and is not hosted. TGB and 4DBInfer tasks that
use their own scoring protocols load as data only (see [`MIGRATION.md`](https://github.com/stanford-star/relbench/blob/HEAD/MIGRATION.md)).

- **Aug 2026** — RelBench v3 released: datasets and tasks load straight from [Hugging Face](https://huggingface.co/stanford-star), a new [leaderboard](https://star-project.stanford.edu/relbench/leaderboard/) with automated submissions, and bug fixes ([migration…
