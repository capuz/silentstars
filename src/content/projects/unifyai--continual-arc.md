---
repo: "unifyai/continual-arc"
name: "continual-arc"
description: "A continual learning benchmark built on the three ARC-AGI editions"
readmeQualityOk: true
url: "https://github.com/unifyai/continual-arc"
homepage: "https://continual-arc.unify.ai"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-agents", "arc-agi", "benchmark", "continual-learning", "lifelong-learning"]
stars: 34
forks: 5
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-17T17:45:15Z"
lastCommitAt: "2026-11-13T18:37:31Z"
lastReleaseAt: "2026-10-17T17:47:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["djl11", "unify-brain-operator[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8a80a5dc319ffe73e3ac2d4947f29699e5eb736fac291d1a08420da78620408/unifyai/continual-arc"
---

# Continual-ARC

ARC-AGI measures how efficiently a system picks up a new skill from a few examples, but it serves each task once.
Continual-ARC serves a lifelong stream built from the three ARC-AGI editions instead, in which the same tasks recur
after dormant gaps with fresh instances while new tasks keep arriving. On each instance the learner may pay for one
more demonstration or submit an answer, and it may try again after a wrong one. On an instance it solves, a wrong
answer and a demonstration each cost one; an instance it does not solve costs the whole budget of sixteen, however it
failed, and we charge the learner the share of that budget it used.

Learning on the job can mean two things: remembering the rule of a task met before, and getting better at tasks never
met. So after the stream we freeze the learner and give it two tests. Each is one round in which every instance starts
from the learner's state at the end of the stream, so nothing learned on one test instance reaches another. The seen
test serves fresh instances of the tasks the learner met, which measures memorization. The held-out test serves 100
ARC-AGI-1 evaluation tasks it never met, which measures…
