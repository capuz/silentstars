---
repo: "drhodes/libspec"
name: "libspec"
description: "A python based class system for declaring specs "
readmeQualityOk: true
url: "https://github.com/drhodes/libspec"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["dsl", "llm", "python", "sdd"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-01-26T07:35:32Z"
lastCommitAt: "2026-08-24T04:20:22Z"
lastReleaseAt: "2026-08-24T04:22:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 61
maintainers: ["drhodes", "Kevin-Prichard"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b7f5fe5c995017c6cb933d0419f285381aed34038bdb89ecef8f61077823ef/drhodes/libspec"
---

# libspec

> **an ounce of spec is worth a pound of tokens**

`libspec` is a **Specification Management System** in Python. Features and
requirements are declared as Python classes; their docstrings are compiled into
content-addressed snapshots, diff'd over time, and served to LLM coding agents
via MCP.

### The deepest capability: generic specifications

The most powerful thing `libspec` enables is **generic specifications** —
published base classes that encode *how features should be documented and
specified*, not what any particular feature does.

```python
from libspec import Feature
from libspec.diataxis import Diataxis        # pip install libspec-diataxis
from libspec.conventional_commits import Commit # pip install libspec-conventional-commits

# Inherit once at your project base class.
class MyFeature(Feature, Diataxis, Commit): pass

# Every downstream feature automatically carries both contracts —
# enforced at spec-generation time, not as a style guide to forget.
class AwesomeNavBar(MyFeature):
    def tutorial(self):    return "In this tutorial we will build..."
    def how_to(self):      return "To highlight the active route..."
    def reference(self):   return…
