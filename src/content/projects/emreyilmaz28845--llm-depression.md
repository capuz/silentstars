---
repo: "emreYilmaz28845/LLM-Depression"
name: "LLM-Depression"
description: "Audio-LLM based binary depression classifier"
readmeQualityOk: true
url: "https://github.com/emreYilmaz28845/LLM-Depression"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 7
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-21T17:57:58Z"
lastCommitAt: "2026-09-25T09:03:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 41
maintainers: ["emreYilmaz28845"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ff484c1e00e530b7543eb3616e8bada7c7d613e4807d20f13345bc0a313ca0d/emreYilmaz28845/LLM-Depression"
---

# LLM-Depression

CV headline reporting uses the **unweighted mean of fold-level subject
metrics**, for every dataset, model and prediction route, including Spanish
D3TEC and Italian Androids. With several seeds, average folds within seed
first, then average seed means. DAIC remains a single official test.
This supersedes older pooled-CV workbook summaries; see
[the reporting rule](https://github.com/emreYilmaz28845/LLM-Depression/blob/HEAD/configs/README.md#cross-validation-reporting-rule).
Training and within-person prediction aggregation are unchanged.

Leakage-safe binary depression classification with parameter-efficient audio-language models. The repository compares audio+text, audio-only, and text-only conditions across D3TEC, Turkish, Androids, DAIC-WoZ, CMDC, and legacy E-DAIC. The main model families are Qwen2-Audio-7B / Qwen2-7B and Gemma 4 12B.

The central research question is whether raw speech adds reliable subject-level information beyond transcripts after controlling subject leakage, unequal recording length, language, dataset, model family, and evaluation procedure. The intended contribution is a harmonized multilingual evaluation protocol and empirical…
