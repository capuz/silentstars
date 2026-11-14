---
repo: "slavabars/decision-cascade"
name: "decision-cascade"
description: "Local decision engine with typed, calibrated outputs (Noul/Choice/Score): cheap→strong cascade, ECE/Brier calibration, SystemOne protocol interop. Apache-2.0."
originalDescription: "Local decision engine with typed, calibrated outputs (Noul/Choice/Score): cheap→strong cascade, ECE/Brier calibration, SystemOne protocol interop. Apache-2.0."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/slavabars/decision-cascade"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["calibration", "cascade", "decision-making", "fastapi", "llm", "model-routing", "pytorch", "systemone", "uncertainty-quantification"]
stars: 73
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-13T07:46:57Z"
lastCommitAt: "2026-11-14T10:28:54Z"
lastReleaseAt: "2026-10-28T21:25:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 34
maintainers: ["slavabars"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef16913c8b8c2a87f4af927d9ecf37d2b78a34345e450db84fef5dd809500632/slavabars/decision-cascade"
discussionCount: 0
---

# decision-cascade

**Russian** · [English](https://github.com/slavabars/decision-cascade/blob/main/README.en.md)

A machine-native decision-making system in the spirit of **Jev (TypeSafe AI)**, but open source, running locally, and with a full cycle of "training → calibration → evaluation → deployment".

Instead of making an LLM generate response text, the model **decides**: state is turned into features, and decision heads return **typed, probabilistic, and calibratable** answers — Noul (yes/no), Choice (choosing from options), and Score (rating on a scale) — without a single generated token.

**Status: stable (1.7.0).** The API contract (`schema_version = "1"`), the pack format, and the meaning of `DECISION_*` variables do not break: changes happen only in major versions, with a deprecation window of two minor versions. For what exactly `1.x` promises, which surfaces remain beta, and how deprecation is declared, see [`docs/stability.md`](https://github.com/slavabars/decision-cascade/blob/main/docs/stability.md).

## Demo: two games

The engine does not write the answer as text — it **decides**: it proposes options and chooses when to pay for an expensive miscalculation. In the…
