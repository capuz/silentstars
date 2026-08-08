---
repo: "moritztng/tt-bio"
name: "tt-bio"
description: "Run protein structure prediction, binder design, and embeddings on Tenstorrent hardware — Boltz-2, ESMFold2, Protenix-v2, OpenFold3, OpenDDE, BoltzGen, RFdiffusion3, ESMC, SaProt."
readmeQualityOk: true
url: "https://github.com/moritztng/tt-bio"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 118
forks: 12
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 67
recentReleases: 9
createdAt: "2025-03-23T21:08:48Z"
lastCommitAt: "2026-08-08T04:33:57Z"
lastReleaseAt: "2026-07-20T03:01:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 43
maintainers: ["moritztng"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c01ce269dd5e2aef7a85500bfafa911220dbc3d8347b6a4d1b8e1d6525aa133/moritztng/tt-bio"
---

```text
████████╗████████╗        ██████╗  ██╗  ██████╗
╚══██╔══╝╚══██╔══╝        ██╔══██╗ ██║ ██╔═══██╗
   ██║      ██║    █████╗ ██████╔╝ ██║ ██║   ██║
   ██║      ██║    ╚════╝ ██╔══██╗ ██║ ██║   ██║
   ██║      ██║           ██████╔╝ ██║ ╚██████╔╝
   ╚═╝      ╚═╝           ╚═════╝  ╚═╝  ╚═════╝
```

> [!IMPORTANT]
> **TT-Boltz is now TT-Bio**

TT-Bio runs [Boltz-2](https://github.com/jwohlwend/boltz), [ESMFold2](https://github.com/Biohub/esm), [Protenix-v2](https://github.com/bytedance/Protenix), [OpenFold3](https://github.com/aqlaboratory/openfold-3), and [OpenDDE](#structure-prediction) structure prediction, [BoltzGen](#design) and [RFdiffusion3](#design) binder/protein design, and [ESMC protein embeddings](#protein-embeddings-esmc), and [SaProt structure-aware protein embeddings](#structure-aware-protein-embeddings-saprot) on Tenstorrent Blackhole and Wormhole, supporting single-card and multi-card configurations (e.g. QuietBox with 4 cards or Galaxy server with 32 cards). Multiple machines can also be combined into a single prediction run.

## Accuracy

Every model TT-Bio serves is validated against its official reference implementation on the same input and reproduces it…
