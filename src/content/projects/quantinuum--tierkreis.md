---
repo: "Quantinuum/tierkreis"
name: "tierkreis"
description: "Tierkreis Hybrid Workflow Management System"
readmeQualityOk: true
url: "https://github.com/Quantinuum/tierkreis"
homepage: "https://quantinuum.github.io/tierkreis/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [53, 37]
topics: ["hpc", "quantum-computing", "workflows", "workflow-engine", "workflow-management", "workflow-orchestration"]
stars: 25
forks: 7
openIssues: 56
closedIssues: 128
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2022-10-13T12:38:14Z"
lastCommitAt: "2026-10-27T12:39:24Z"
lastReleaseAt: "2024-04-15T13:05:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 63
maintainers: ["johnchildren", "philipp-seitz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/Quantinuum/tierkreis"
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
storage = FileStorage(workflow_id=UUID(int=12345), name="Hello World Graph")
executor = ShellExecutor(registry_path=None, workflow_dir=storage.workflow_dir)
inputs = InParams(0, 0.25, 0.5)._asdict()
run_graph(storage, executor, workflow, inputs)
result = read_outputs(workflow, storage)
```

For a more in depth tutorial see our [full getting started guide][docs-getting-started].
A small demo tutorial presented at QCUF 2026 can be found in [this][tutorial] repository.

## Quick-start

Tierkreis works best with the [uv package manager][uv]. We strongly recommend using it as your package manager for Tierkreis projects.

To get started with Tierkreis start a new `uv` project in…
