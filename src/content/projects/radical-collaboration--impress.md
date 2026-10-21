---
repo: "radical-collaboration/IMPRESS"
name: "IMPRESS"
description: "Integrated Machine-learning for PRotEin Structures at Scale"
readmeQualityOk: true
url: "https://github.com/radical-collaboration/IMPRESS"
homepage: "https://radical-project.github.io/impress"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 2
closedIssues: 30
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2023-03-03T21:11:35Z"
lastCommitAt: "2026-10-21T21:15:00Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 78
maintainers: ["drawadiagram"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cdbe6c6dad45881b2b9d4dcaf5ea90ae9675d2ff82036a18a4abd7cc50187fd/radical-collaboration/IMPRESS"
---

# Integrated Machine-learning for PRotEin Structures at Scale (IMPRESS)

IMPRESS is a high-performance computational framework to enable the inverse design of proteins using foundation models such as ProteinMPNN, RFDiffusion3, and Boltz-2. It runs many asynchronous, adaptive protein-design pipelines concurrently on HPC resources through [RADICAL AsyncFlow](https://pypi.org/project/radical-asyncflow/).

## Documentation
[IMPRESS Docs](https://radical-collaboration.github.io/IMPRESS/)

## Installation
```shell
git clone https://github.com/radical-collaboration/IMPRESS.git
cd IMPRESS
pip install .
```

HPC execution backends (Dragon, RADICAL-Pilot) come from `rhapsody`, which is
installed separately:

```shell
pip install "rhapsody-py[dragon,telemetry]"
```

## Example
```python
import asyncio

from radical.asyncflow import WorkflowEngine
from rhapsody.backends import DragonExecutionBackend

from impress import ImpressBasePipeline, ImpressManager, PipelineSetup

class MyPipeline(ImpressBasePipeline):
    def register_pipeline_tasks(self):
        @self.auto_register_task()
        async def design(*args, **kwargs):
            return "python3 design.py"…
