---
repo: "NUS-Program-Verification/AutoRocq"
name: "AutoRocq"
description: "Agentic Theorem Prover for Rocq for Program Verification"
readmeQualityOk: true
url: "https://github.com/NUS-Program-Verification/AutoRocq"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["llm-agent", "rocq-prover", "theorem-proving", "verification"]
stars: 26
forks: 5
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2026-02-24T08:21:32Z"
lastCommitAt: "2026-08-31T10:01:59Z"
lastReleaseAt: "2026-08-28T09:21:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 13
maintainers: ["zhaohuanqdcn", "nus-agentic-program-verification", "dingf3ng"]
openGraphImageUrl: "https://opengraph.githubassets.com/0694c83941d206a90e462da11871f56303c30606bc15a7831697835e309d8b60/NUS-Program-Verification/AutoRocq"
---

# AutoRocq: Agentic Theorem Prover for Verification

**Paper**: [FSE 2026](https://dl.acm.org/doi/10.1145/3808164)

---

This repository contains the source code of AutoRocq, an agent prover in Rocq (formerly Coq) 9.0.0.

To discharge a formally stated theorem in Rocq, the agent runs in the following loop:

```python
context = get_initial_context()
tools = ['plan', 'tactic', 'context_search']
while not coq.is_proof_complete():
    action = llm.next_action(goal, context)
    coq.apply(action)
    context.update()
    goal.update()
```

where the LLM interacts with the Rocq proof assistant (via [CoqPyt](https://github.com/sr-lab/coqpyt)) in real time to develop a proof. 

---

### What's New

#### LiteLLM support

AutoRocq now supports your favorite model through LiteLLM! See the supported model [list](https://models.litellm.ai) and [configuration](https://github.com/NUS-Program-Verification/AutoRocq/blob/HEAD/proof-search/configs/readme.md).

#### Interactive REPL

AutoRocq now supports [interactive mode](#interactive-mode), where you can *co-develop* a proof with the agent, monitoring progress and providing hints in real time with the built-in [shell](#repl-commands).

---

###…
