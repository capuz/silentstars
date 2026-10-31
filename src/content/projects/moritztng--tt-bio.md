---
repo: "moritztng/tt-bio"
name: "tt-bio"
description: "Protein structure prediction, binding affinity, protein design and protein language models on Tenstorrent Blackhole and Wormhole hardware, from one card to a Galaxy server."
readmeQualityOk: true
url: "https://github.com/moritztng/tt-bio"
homepage: "https://moritztng.github.io/tt-bio/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["computational-biology", "drug-discovery", "protein-design", "protein-language-models", "protein-structure-prediction", "tenstorrent", "binding-affinity"]
stars: 126
forks: 13
openIssues: 0
closedIssues: 18
watchers: 3
contributors: 70
recentReleases: 0
createdAt: "2025-03-23T21:08:48Z"
lastCommitAt: "2026-10-31T09:54:35Z"
lastReleaseAt: "2026-07-20T03:01:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 48
maintainers: ["moritztng"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9924ac8e503628cd4750db6b64887ca0d4134c88e194ad54c1d4f9b7a61e84f/moritztng/tt-bio"
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

TT-Bio runs biomolecular structure prediction, protein design and protein language models on
Tenstorrent Blackhole and Wormhole hardware, on one card or many (a QuietBox has 4 cards, a Galaxy
server 32).

Each release scores every model against its official reference implementation on the same input,
and a check passes inside that reference's own run-to-run noise. Boltz-2 and OpenFold3 miss on some
inputs run without an MSA or templates, ESMFold2-Fast's confidence score at 512 residues is being
re-checked, and the other gated models pass every check. The methodology,
per-target results and reproduction commands are in
[`docs/implementation-parity.md`](https://github.com/moritztng/tt-bio/blob/HEAD/docs/implementation-parity.md).
Predictions and designs per hour per server, and throughput per dollar of purchase price and of
total cost of…
