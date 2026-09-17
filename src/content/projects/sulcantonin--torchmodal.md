---
repo: "sulcantonin/torchmodal"
name: "torchmodal"
description: "Differentiable modal logic for PyTorch: □ and ♢ as trainable layers over a Kripke structure, with sound interval bounds and a learnable accessibility relation. Oral @ NeSy 2026."
readmeQualityOk: true
url: "https://github.com/sulcantonin/torchmodal"
homepage: "https://openreview.net/pdf?id=uLOdtBm0Cx"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["differentiable-logic", "epistemic-logic", "fuzzy-logic", "kripke-semantics", "logic", "machine-learning", "modal-logic", "neural-symbolic", "neurosymbolic", "neurosymbolic-ai"]
stars: 6
forks: 0
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T18:17:29Z"
lastCommitAt: "2026-09-11T09:33:13Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 55
undervaluedScore: 15
maintainers: ["sulcantonin"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e17b0113769a19f7c518a625a0552119fd18a89223c87adc77772f066d20ad8/sulcantonin/torchmodal"
---

**Differentiable Modal Logic for PyTorch**

A PyTorch library implementing Modal Logical Neural Networks (MLNNs) — the first framework enabling differentiable reasoning over necessity and possibility by integrating neural networks with Kripke semantics from modal logic.

## Installation

```bash
pip install torchmodal
```

Or from a checkout (recommended while a release is pending, since features land here first):

```bash
pip install -e .
```

See [CHANGELOG.md](https://github.com/sulcantonin/torchmodal/blob/HEAD/CHANGELOG.md) for what each release contains.

## Quick Start

```python
import torch
import torchmodal
from torchmodal import nn, KripkeModel

# Create a 3-world Kripke model with learnable accessibility
model = KripkeModel(
    num_worlds=3,
    accessibility=nn.LearnableAccessibility(3, init_bias=-2.0),
    tau=0.1,
)

# Add propositions
model.add_proposition("safe", learnable=True)
model.add_proposition("online", learnable=False)

# Evaluate modal operators
A = model.get_accessibility()
box_safe = model.necessity("safe", A)       # □(safe) — necessarily safe
dia_online = model.possibility("online", A)  # ♢(online) — possibly online

# Compute contradiction loss
loss…
