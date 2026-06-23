---
repo: "CharlesCNorton/touchstone"
name: "touchstone"
description: "An SMT-based verifier and type inferencer for Python: proves contracts, equivalence, and trap-freedom (with counterexamples) over a Rocq trust base."
url: "https://github.com/CharlesCNorton/touchstone"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["proof", "smt", "python", "type-inference"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-16T04:28:48Z"
lastCommitAt: "2026-06-23T23:17:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["CharlesCNorton"]
openGraphImageUrl: "https://opengraph.githubassets.com/57ff231608a215b51c6d7a13a0a87468e23a515cd4efc5e121d09dc6b54941a1/CharlesCNorton/touchstone"
---

# Touchstone

An SMT-based verifier for a subset of Python. Touchstone takes a function and a property and returns
**PROVED** (it holds for all inputs), **REFUTED** (with a counterexample), or **UNKNOWN** (with a reason),
by translating the code to Z3 rather than running it. Every PROVED is corroborated by a second solver (cvc5)
and rests on a trust base machine-checked in Rocq.

```sh
pip install touchstone-prover
```

```python
import touchstone as t

# state the property in Python, over the parameters and `result`
t.prove("def f(x):\n    return x + x\n", "result == 2 * x").status        # 'PROVED'

# or write the contract as decorators on the function itself
t.verify_contracts('''
@require("n >= 0")
@ensure("result == n")
def count(n):
    i = 0
    while i < n:
        i = i + 1
    return i
''').status                                                              # 'PROVED'

# or check two implementations agree on every input
t.verify_equiv("double", "f", "def f(a):\n    return a + a\n",
               "def g(a):\n    return 2 * a\n", {}).status                # 'PROVED'
```

## Benchmarks

On the hand-written…
