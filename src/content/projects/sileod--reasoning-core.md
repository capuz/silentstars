---
repo: "sileod/reasoning-core"
name: "reasoning-core"
description: "Procedural data generators suite for synthetic pretraining and formal reasoning"
url: "https://github.com/sileod/reasoning-core"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["dataset", "dataset-generation", "grpo", "llm", "logic", "reasoning", "rlvr", "verifiers", "pre-training", "pre-pre-training"]
stars: 43
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-03-10T10:54:32Z"
lastCommitAt: "2026-07-03T12:23:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["sileod", "vlcmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ff30bd9c53195c6c1452577a52247f3e42dc8745ec9f55efc67985b04965c0a/sileod/reasoning-core"
---

# Reasoning Core ◉

reasoning-core is a suite of textual procedural data generators for language model pre-training and post-training.
It is centered on expressive formal and algorithmic tasks, including full fledged first-order-logic, formal mathematics with Lean/TPTP, planning, and CFG syntax tasks.

We release pre-generated data scaled to more than 10B tokens  
🤗 [https://hf.co/collections/reasoning-core/datasets](https://huggingface.co/collections/reasoning-core/datasets)

# Standalone
```python
uv pip install reasoning-core

from reasoning_core import list_tasks, get_task, score_answer

T = get_task('arithmetics')()
x = T.generate_example()
assert score_answer(x.answer, x)==1
```

# Task examples and task authoring guide
[GALLERY](https://github.com/sileod/reasoning-core/blob/main/GALLERY.md) (names link to gallery examples)  

[`arithmetics`](GALLERY.md#arithmetics) · [`math_word_problem`](GALLERY.md#math_word_problem) · [`equation_system`](GALLERY.md#equation_system) · [`lean_missing_proof_line_selection`](GALLERY.md#lean_missing_proof_line_selection) · [`lean_candidate_compilation`](GALLERY.md#lean_candidate_compilation) · [`tptp_entailment`](GALLERY.md#tptp_entailment) ·…
