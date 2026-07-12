---
repo: "SynnoDB/SynnoDB"
name: "SynnoDB"
description: "Synthesizing Database engines for your workloads"
readmeQualityOk: true
url: "https://github.com/SynnoDB/SynnoDB"
homepage: "https://synnodb.com"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-06-10T07:19:53Z"
lastCommitAt: "2026-07-12T06:18:08Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["JWehrstein", "urbanmatthias", "t-eckmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/3274f6246aaf608304dae13731d68394d8f31c8f7885e0f9044b0d6710cc101c/SynnoDB/SynnoDB"
---

<br>

**A drop-in replacement for DuckDB that transparently accelerates your SQL with auto-generated
bespoke C++ engines** - falling back to DuckDB for everything else, cross-checked for correctness.

[🌐 Website](https://synnodb.com) &nbsp;·&nbsp;
[📄 Paper](https://arxiv.org/pdf/2603.02001) &nbsp;·&nbsp;
[📦 PyPI](https://pypi.org/project/synnodb/) &nbsp;·&nbsp;
[📓 Demo Notebook](https://github.com/SynnoDB/SynnoDB/blob/HEAD/tutorials/gen_tpch_demo.ipynb)

*Required Notice: Copyright 2026 SynnoDB*
</div>

---

SynnoDB grew out of the research project [**Bespoke-OLAP**](https://github.com/DataManagementLab/BespokeOLAP)
([paper](https://arxiv.org/pdf/2603.02001)): an LLM agent that synthesizes workload-specific,
one-size-fits-one C++ query engines. SynnoDB packages that idea as a production-ready DuckDB drop-in.

Install from **[PyPI](https://pypi.org/project/synnodb/)**:

```bash
pip install synnodb              # the demo DuckDB drop-in router
pip install "synnodb[factory]"   # + the Bespoke-Agent factory that generates engines
```

New here? [`tutorials/gen_tpch_demo.ipynb`](https://github.com/SynnoDB/SynnoDB/blob/HEAD/tutorials/gen_tpch_demo.ipynb) runs the whole loop end
to…
