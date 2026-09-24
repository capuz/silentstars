---
repo: "sileod/tasksource"
name: "tasksource"
description: "Datasets collection and preprocessings framework for NLP extreme multitask learning"
readmeQualityOk: true
url: "https://github.com/sileod/tasksource"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["nlp", "benchmark", "glue", "scaling", "crossfit", "bigbench", "huggingface", "multi-task-learning-scaling", "extreme-mtl", "extreme-multi-task-learning"]
stars: 197
forks: 11
openIssues: 4
closedIssues: 5
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-12-06T15:29:02Z"
lastCommitAt: "2026-09-24T08:40:51Z"
lastReleaseAt: "2023-01-13T22:24:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 35
maintainers: ["sileod"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e78f4c863f4d6c53d1f8dbe94831b833c78d74a55e20a352ad0bb3462243dd/sileod/tasksource"
---

## tasksource  600+ curated datasets and preprocessings for instant and interchangeable use

Huggingface Datasets is an excellent library, but it lacks standardization, and datasets often require preprocessing work to be used interchangeably.
`tasksource` streamlines interchangeable datasets usage to scale evaluation or multi-task learning.

Each dataset is standardized to a `MultipleChoice`, `Classification`, or `TokenClassification` template with canonical fields. We focus on discriminative tasks (= with negative examples or classes) for our annotations but also provide a `SequenceToSequence` template. All implemented preprocessings are in [tasks.py](https://github.com/sileod/tasksource/blob/main/src/tasksource/tasks.py) or [tasks.md](https://github.com/sileod/tasksource/blob/main/tasks.md). A preprocessing is a function that accepts a dataset and returns the standardized dataset. Preprocessing code is concise and human-readable.

### Installation and usage:
`pip install tasksource`
```python
from tasksource import list_tasks, load_task
df = list_tasks(multilingual=False) # takes some time

for id in df[df.task_type=="MultipleChoice"].id:
    dataset = load_task(id) # all…
