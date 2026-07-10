---
repo: "moritztng/tt-bio"
name: "tt-bio"
description: "Boltz-2, BoltzGen, ESMFold-2, Protenix v2 implementation for inference on Tenstorrent hardware"
readmeQualityOk: true
url: "https://github.com/moritztng/tt-bio"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 108
forks: 11
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 67
recentReleases: 5
createdAt: "2025-03-23T21:08:48Z"
lastCommitAt: "2026-07-10T07:00:53Z"
lastReleaseAt: "2026-07-09T22:41:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: ["moritztng"]
openGraphImageUrl: "https://opengraph.githubassets.com/641593514b1b4efccb303b20f691add151acad4abbbebca47d01295c56b3508d/moritztng/tt-bio"
---

```
████████╗████████╗        ██████╗  ██╗  ██████╗
╚══██╔══╝╚══██╔══╝        ██╔══██╗ ██║ ██╔═══██╗
   ██║      ██║    █████╗ ██████╔╝ ██║ ██║   ██║
   ██║      ██║    ╚════╝ ██╔══██╗ ██║ ██║   ██║
   ██║      ██║           ██████╔╝ ██║ ╚██████╔╝
   ╚═╝      ╚═╝           ╚═════╝  ╚═╝  ╚═════╝
```

> [!IMPORTANT]
> **TT-Boltz is now TT-Bio**

TT-Bio runs [Boltz-2](https://github.com/jwohlwend/boltz), [ESMFold2](https://github.com/Biohub/esm), and [Protenix-v2](https://github.com/bytedance/Protenix) structure prediction, [BoltzGen](#boltzgen) binder design, and [ESMC protein embeddings](#protein-embeddings-esmc) on Tenstorrent Blackhole and Wormhole, supporting single-card and multi-card configurations (e.g. QuietBox with 4 cards or Galaxy server with 32 cards). Multiple machines can also be combined into a single prediction run.

## Installation

Create a Python virtual environment with Python 3.10 or 3.12, install, then install the matching Tenstorrent system dependencies.

```bash
python3.10 -m venv env
source env/bin/activate
pip install tt-bio
tt-bio install-deps
```

`tt-bio install-deps` installs the SFPI compiler version that matches the installed `ttnn` wheel and clears…
