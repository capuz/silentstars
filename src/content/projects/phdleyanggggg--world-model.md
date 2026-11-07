---
repo: "PhDLeYanggggg/World-model"
name: "World-model"
description: "Try out the world model."
originalDescription: "尝试一下世界模型"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PhDLeYanggggg/World-model"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-21T15:29:00Z"
lastCommitAt: "2026-11-07T09:30:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["cbazhixing"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2b3b414ecb31ad7f933be8a713fba885671e6aa18d864f90c060218d76a6e20/PhDLeYanggggg/World-model"
---

# M3W: Real-World Multimodal Agent-Scene World Model

M3W is my research project on top-down multi-agent world modeling. I study
when a neural forecast adds value over a strong motion baseline, and how to
keep the cases that the baseline already handles well from getting worse.

The long-term aim is a useful agent-scene world model. The current work is
narrower: causal trajectory forecasting, learning intervention gain and harm,
and deciding when a neural prediction should replace a physical baseline.
Combining JEPA, Transformer and other modules is not, by itself, a contribution.

## Current Result

I tested whether adding past-image alignment to each agent's history helps
without replacing its native coordinates. The new model keeps both views;
the matched control adds the same capacity without the camera transform.
There is no forced future-camera restoration or trajectory residual decoder.

| Whole-12 Comparison | Known-Label Gain Difference | Completion Lower | Source-Bootstrap Interval for Lower |
|---|---:|---:|---:|
| Observed-view node vs same-capacity native node | +0.828 pp | -4.979 pp | [-7.692, -2.333] pp |
| Observed-view node vs original actor | -0.321 pp | -5.995…
