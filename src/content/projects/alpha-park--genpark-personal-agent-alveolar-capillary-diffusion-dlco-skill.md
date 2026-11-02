---
repo: "Alpha-Park/genpark-personal-agent-alveolar-capillary-diffusion-dlco-skill"
name: "genpark-personal-agent-alveolar-capillary-diffusion-dlco-skill"
description: "Deterministic personal agent skill for evaluating alveolar-capillary diffusing capacity (DLCO), hemoglobin normalization, transfer coefficient (KCO), and pulmonary diffusion resilience."
readmeQualityOk: true
url: "https://github.com/Alpha-Park/genpark-personal-agent-alveolar-capillary-diffusion-dlco-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agent", "genpark", "mcp", "mcp-server", "model-context-protocol", "openclaw", "personal-agent", "production-ready", "productivity", "python"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-02T13:37:51Z"
lastCommitAt: "2026-11-02T13:38:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1b2ca2b6f404e8692a5c9bcdb392b4630a68608adcdf166c899cbe4b120c1f5/Alpha-Park/genpark-personal-agent-alveolar-capillary-diffusion-dlco-skill"
---

# Alveolar-Capillary Gas Diffusion (DLCO) Skill

A sovereign personal agent capability for computational pulmonary physiology, evaluating single-breath diffusing capacity of the lung for carbon monoxide (DLCO), hemoglobin normalization, and transfer coefficient (KCO).

## Architecture

```mermaid
flowchart TD
    DiffusionInputs["DLCO Measured (mL/min/mmHg), Predicted DLCO, Hemoglobin (g/dL)"] --> HbCorrection["Dinakara/Cotes Hemoglobin Normalization Factor"]
    HbCorrection --> AdjustedDLCO["Hemoglobin-Adjusted DLCO (mL/min/mmHg)"]
    AdjustedDLCO --> PredictedPercent["Percentage of Predicted DLCO (% Predicted)"]
    AdjustedDLCO --> KCOEngine["Transfer Coefficient KCO = Adjusted DLCO / Alveolar Volume (VA)"]
    PredictedPercent & KCOEngine --> PDRS["Pulmonary Diffusion Resilience Score (0 - 100)"]
    PDRS --> Directives["OpenClaw / Hermes Altitude & Cardiorespiratory Directives"]
```

## Quickstart

```python
from client import AlveolarCapillaryDiffusionClient

client = AlveolarCapillaryDiffusionClient()

# Assess DLCO pulmonary gas exchange
res = client.evaluate_dlco_diffusion(
    measured_dlco_ml_min_mmhg=28.2,
    predicted_dlco_ml_min_mmhg=30.0,…
