---
repo: "VectorInstitute/odyssey"
name: "odyssey"
description: "An interpretable foundation model of the patient clinical timeline: event forecasting, calibrated time-to-event alerts, and concept-level interpretability, benchmarked head-to-head against tuned GBMs, tabular foundation models, and survival baselines on MIMIC-IV, eICU, and GEMINI via the MEDS standard."
readmeQualityOk: true
url: "https://github.com/VectorInstitute/odyssey"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["foundation-models", "mimic-iv", "transformers", "state-space-models", "healthcare", "machine-learning", "clinical-ai", "concept-bottleneck", "ehr", "eicu"]
stars: 61
forks: 15
openIssues: 0
closedIssues: 8
watchers: 4
contributors: 37
recentReleases: 0
createdAt: "2023-12-01T15:46:32Z"
lastCommitAt: "2026-08-23T04:11:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 53
maintainers: ["amrit110", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c032fc10cc2db28b019ae5b52bd06232b4a6923c954780f593d5eefdf10fe363/VectorInstitute/odyssey"
discussionCount: 0
---

</p>

  </a>
  </a>
  </a>
  </a>
  <br>
  </a>
  </a>
  </a>
  </a>
</p>

---

## Goal

Odyssey builds and tests a single general model of a patient's clinical timeline: forecast which events come next and when, produce calibrated time-to-event risk for events that matter (vasopressor start, kidney injury, ICU admission, death), expose named physiological states a clinician can inspect, and, the open frontier, support interventions a clinician can trust ("assume they are hypotensive, what changes?"). That scope is the reason for a sequence model: forecasting whole timelines, timing as survival curves, and interactive what-ifs are capabilities no tabular model family offers at all.

The commitment is to the outcome, not to the method: the goal is the single best model or ensemble system across the three axes below, and the timeline-forecasting pretraining is the current best candidate, not dogma. Adapting on top of it (task heads, ensembling with tabular models, post-training on rollouts, or replacing components outright) is squarely in scope whenever the evidence says so.

The discipline of the project is that this candidate must *earn* each capability against the strongest…
