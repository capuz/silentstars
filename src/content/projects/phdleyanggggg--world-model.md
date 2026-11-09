---
repo: "PhDLeYanggggg/World-model"
name: "World-model"
description: "尝试一下世界模型"
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
lastCommitAt: "2026-11-09T03:30:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["cbazhixing"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ba1f5103c52a6b95d6a9c43d24795db8f96ce86599d975cf9732f22750d88bb/PhDLeYanggggg/World-model"
---

# M3W: Real-World Multimodal Agent-Scene World Model

M3W is my research project on top-down multi-agent world modeling. I study
when a neural forecast adds value over a strong motion baseline, and how to
keep the cases that the baseline already handles well from getting worse.

The long-term aim is a useful agent-scene world model. The current work is
narrower: causal trajectory forecasting, learning intervention gain and harm,
and deciding when a neural prediction should replace a physical baseline.
Combining JEPA, Transformer and other modules is not, by itself, a contribution.

I checked how many edits the full bank actually needs. At a quarter
of a recording's rows, it can still beat both references under the
original rule in 38 of 72 hindsight views. Teaching a model from
smaller feasible plans did not reproduce that gain. Much of the
failure came from choosing the wrong trajectories to edit.
[Edit budgets and teacher experiment](https://github.com/PhDLeYanggggg/World-model/blob/HEAD/outputs/publication_readiness_2026_09/moving_cv_minimum_budget_v1/README.md).

I separated the candidate menu from the number of edits it could
make. Knowing the outcomes, the narrow menu could…
