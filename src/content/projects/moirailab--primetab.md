---
repo: "MoiraiLab/primetab"
name: "primetab"
description: "Interpretable pegRNA design with tabular foundation models"
originalDescription: "Interpretable pegRNA design with tabular foundation models"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MoiraiLab/primetab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-12T08:22:52Z"
lastCommitAt: "2026-10-12T11:15:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 10
maintainers: ["AwczR"]
openGraphImageUrl: "https://opengraph.githubassets.com/7694d1f1741aa80a5c86c58d119ea212424cb4fd06bddeff37e893680232b7d8/MoiraiLab/primetab"
---

# PrimeTab

**Cross-domain generalization + in-context learning (ICL) driven interpretable pegRNA automated design framework**
*Cross-domain, in-context-learning driven interpretable pegRNA design with tabular foundation models.*

PrimeTab represents Prime Editing design as **tabular features**, retrieves reference samples per candidate from historical experimental records, and then uses **TabPFN (tabular foundation model)** to predict editing efficiency via in-context learning and rank the candidates. Model weights are fixed; newly added experimental data only enters the context, enabling **training-free** adaptation to new cells / new datasets.

## Core pipeline
```
Target edit (editseq)
  → PE2-NGG candidate generation (model-free)        primetab.generation
  → 73 structured features → 107-dim input           primetab.features
  → Per-candidate reference sample retrieval         primetab.retrieval
  → TabPFN in-context learning prediction            primetab.backends / primetab.inference
  → Ranking within each editing request → candidate list   primetab.ranking
```

## Method advantages

**Training-free onboarding of new cells.** TabPFN weights are fixed; measured records…
