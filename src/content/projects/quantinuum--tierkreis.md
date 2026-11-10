---
repo: "Quantinuum/tierkreis"
name: "tierkreis"
description: "Tierkreis Hybrid Workflow Management System"
readmeQualityOk: true
url: "https://github.com/Quantinuum/tierkreis"
homepage: "https://quantinuum.github.io/tierkreis/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 27]
topics: ["hpc", "quantum-computing", "workflows", "workflow-engine", "workflow-management", "workflow-orchestration"]
stars: 25
forks: 7
openIssues: 51
closedIssues: 137
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2022-10-13T12:38:14Z"
lastCommitAt: "2026-11-10T11:38:31Z"
lastReleaseAt: "2024-04-15T13:05:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["johnchildren", "philipp-seitz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dfb680d917238d0f56dbaadf1fc59042694b9e2b6027ed515aabfa2a9e53304/Quantinuum/tierkreis"
discussionCount: 3
---

# Tierkreis

Quantum-classical hybrid workflow orchestration tool.
This is the top level repository containing the python packages.

## Introduction

Tierkreis allows users to define hybrid workflows as computational graphs
```python
class InParams(NamedTuple):
    a: TKR[float]
    b: TKR[float]
    c: TKR[float]

g = Graph(InParams, TKR[float])
x = g.task(add(g.inputs.a, g.inputs.b))
y = g.task(add(x, g.inputs.c))
workflow = g.finish_with_outputs(y)
```
and run them on different execution platforms

```python
runtime = await new_default()
with runtime:
    workflow_id = await runtime.save_workflow("hello-world", workflow)
    run_id = await runtime.start_new_run(
        workflow_id,
        {"a": 0, "b": 0.25, "c": 0.5},
    )
    await runtime.wait_for(run_id)
    result = await runtime.get_outputs(run_id)
```

For a more in depth tutorial see our [full getting started guide][docs-getting-started].
A small demo tutorial presented at QCUF 2026 can be found in [this][tutorial] repository.

## Quick-start

Tierkreis works best with the [uv package manager][uv]. We strongly recommend using it as your package manager for Tierkreis projects.

To get started with Tierkreis start a…
