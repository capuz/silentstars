---
repo: "MeteoSwiss/ai-models-ensembles"
name: "ai-models-ensembles"
description: "Generating Weather Model Ensembles Using ecmwf-lab/ai-models"
readmeQualityOk: true
url: "https://github.com/MeteoSwiss/ai-models-ensembles"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 23]
topics: ["numericalweatherpredictions"]
stars: 17
forks: 1
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 5
recentReleases: 1
createdAt: "2023-11-23T11:34:09Z"
lastCommitAt: "2026-11-02T13:37:55Z"
lastReleaseAt: "2026-09-02T00:24:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 47
maintainers: ["sadamov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c473209204d86586531bb5bc5070785b07a961536a97e4e11e14fec87316feaa/MeteoSwiss/ai-models-ensembles"
---

# AI Model Ensembles for Weather Forecasting

Code, pinned environments and documentation for the paper "Stochastically Perturbed Weights: Ensembles
from Deterministic Machine-Learning Weather Models" (Adamov, Fuhrer, Knutti, Schemm; submitted to AMS
Artificial Intelligence for the Earth Systems, preprint on arXiv physics.ao-ph).

Stochastically Perturbed Weights (SPW) turn a frozen deterministic ML weather model into an ensemble: each
member gets multiplicative Gaussian noise on (a subset of) the checkpoint weights, `w' = w (1 + sigma xi)`,
with no retraining. The paper applies it to Aurora, GraphCast, SFNO and AIFS and compares the resulting
ensembles with trained-probabilistic models (AIFS-ENS, Atlas, FourCastNet 3) and IFS-ENS on 112
initialisations, plus a Hurricane Milton case study.

The repository is a thin layer: [earth2studio](https://github.com/NVIDIA/earth2studio) loads the models,
fetches initial conditions and rolls out; [SwissClim Evaluations](https://github.com/swiss-ai/SwissClim_Evaluations)
verifies; this code adds the perturbations, the model registry, the Slurm workflow for CSCS Alps, one
container per model, and the analysis behind every figure and table.…
