---
repo: "bbuchsbaum/rMVPA"
name: "rMVPA"
description: "Multivoxel Pattern Analysis in R "
readmeQualityOk: true
url: "https://github.com/bbuchsbaum/rMVPA"
homepage: "http://bbuchsbaum.github.io/rMVPA/"
language: "R"
languages: ["R"]
languagePcts: [91]
topics: ["neuroimaging-data", "multivoxel-pattern-analysis", "fmri"]
stars: 12
forks: 10
openIssues: 9
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2014-04-01T18:32:25Z"
lastCommitAt: "2026-08-28T14:36:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 60
maintainers: ["bbuchsbaum", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e742d64897dbca078dff20525187e089188fe6a045d6d1bfa2749e8278aac773/bbuchsbaum/rMVPA"
---

# rMVPA — multivoxel pattern analysis in R

A methodologically rigorous toolbox for decoding and representational
analysis of neuroimaging data. One model spec runs *regionally* or via
*searchlight*. Cross-validation respects fMRI run structure. RSA, MS-ReVE
contrast decomposition, model-space connectivity, ERA cross-decoding, and
domain-adaptive REMAP-RRR are all first-class — no one-off scripts in a
graveyard of unmaintained lab repos.

📖 **Documentation:** <https://bbuchsbaum.github.io/rMVPA/>

## The mental model

```
mvpa_dataset  ──►   mvpa_design   ──►   model_spec   ──►   engine     ──►   result
(voxels x time      (response,         (rsa_model,        (run_regional      (regional_mvpa_result
 + mask)             block_var,         mvpa_model,        run_searchlight)   searchlight_result)
                     splits)            feature_rsa, …)
```

Three S3 layers — **dataset → design → model_spec** — and two engines
(`run_regional` / `run_searchlight`). The same `model_spec` works in both.
Cross-validation, parallelism (via `future`), error handling, and per-ROI
diagnostics come for free.

## What you can build with it

| You want to … | Reach for | Vignette |…
