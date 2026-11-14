---
repo: "Boom5426/VCDesign-CED"
name: "VCDesign-CED"
description: "VCDesign: Finite-Budget Intervention Design for Virtual Cells"
readmeQualityOk: true
url: "https://github.com/Boom5426/VCDesign-CED"
homepage: "https://boom5426.github.io/VCDesign-CED/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["single-cell", "virtual-cell", "cellular-intervention"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-24T14:00:16Z"
lastCommitAt: "2026-11-14T10:32:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 28
maintainers: ["Boom5426"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6b2596e42b7e023d48b6543cc36d1f063c399bf6a9e0fb512546fda205a0468/Boom5426/VCDesign-CED"
---

**VCDesign** formulates cellular intervention design as finite-budget ranking over a variable candidate set. A solver ranks feasible interventions for a source-to-target transition; evaluation scores the executable top-$B$ prefix using independently measured held-out outcomes. In this CRISPRi benchmark, utility measures the direction of the transcriptomic response. **VCDesign-CED** combines direct candidate scoring with effects inferred from historical perturbation measurements and biological knowledge when a candidate's own response is absent from the CED effect atlas.

## ✨ From prediction to design

      Score a variable set of feasible interventions for a requested source-to-target transition and select the top-B prefix.
      Exclude the query identity and grade selected candidates using independently measured held-out outcomes.
      Distill historical responses into an effect predictor using STRING and MAP-KG candidate knowledge.

### Choose the information regime

| Candidate information at decision time | Recommended route |
| :--- | :--- |
| Measured candidate responses are available | Direct response-profile retrieval |
| Candidate responses are unavailable |…
