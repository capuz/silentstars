---
repo: "bijay-odyssey/edaprep"
name: "edaprep"
description: "Transparent, leakage-safe EDA and ML preprocessing for pandas, with an explainable planner that shows its reasoning."
readmeQualityOk: true
url: "https://github.com/bijay-odyssey/edaprep"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-cleaning", "data-quality", "data-science", "eda", "exploratory-data-analysis", "feature-engineering", "machine-learning", "pandas", "preprocessing", "python"]
stars: 7
forks: 12
openIssues: 11
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-08-22T07:48:31Z"
lastCommitAt: "2026-08-28T14:26:15Z"
lastReleaseAt: "2026-08-26T07:06:21Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 60
maintainers: ["bijay-odyssey", "LeonxLJX", "Jeferson681"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b1687ba5bb4d8a5488654d800f479942f4c09e7e5873ea1a6b479c0dd86b435/bijay-odyssey/edaprep"
discussionCount: 1
---

# edaprep

Transparent, leakage-safe EDA and ML preprocessing, with an explainable planner.

`edaprep` looks at a dataset, works out which preprocessing operations actually apply
to it, tells you what it intends to do and why, and then does it — fitting every
statistic on the training data alone.

```python
import edaprep

pipe = edaprep.AutoPipeline(target="churn", model_family="tree", random_state=42)
pipe.fit(train_df)
pipe.explain()

X_train = pipe.transform(train_df)
X_test  = pipe.transform(test_df)
```

```
income:
  + outliers_report - skew 3.22 is moderate (>= 1.0); IQR fence widened to k=3.0 for the asymmetry
  + impute_median - 2.0% missing; median rather than mean because it is unaffected by
                    the skew (3.22) and by outliers
  + transform_log1p - skew 3.22 is moderate and the column is non-negative (min 2576.27),
                      so log1p applies and is invertible
  + scale_robust - skew 3.22; robust scaling (median and IQR) rather than standard,
                   whose standard deviation is dominated by the tail

city:
  + group_rare_categories - 163 levels; those appearing in fewer than 5 rows (1.0%) are
                            grouped,…
