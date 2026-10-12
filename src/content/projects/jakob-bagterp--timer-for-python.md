---
repo: "jakob-bagterp/timer-for-python"
name: "timer-for-python"
description: "⏳ Lightweight package that makes it easy to measure how much time it takes to run Python programs and gauge performance of multiple, smaller bits of code ⌛️"
readmeQualityOk: true
url: "https://github.com/jakob-bagterp/timer-for-python"
homepage: "https://jakob-bagterp.github.io/timer-for-python/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["timer", "python3"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-07-01T06:41:59Z"
lastCommitAt: "2026-10-12T11:15:10Z"
lastReleaseAt: "2023-01-26T21:36:50Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 84
maintainers: ["jakob-bagterp", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8eea6fe31fb4b32a1d87c46fa2b92aec27c10ccc22a2305a1d2bbe2a248bdd/jakob-bagterp/timer-for-python"
fundingLinks: ["GITHUB:https://github.com/jakob-bagterp"]
---

# ⏳ Timer for Python ⌛️
Lightweight Python package that makes it easy to measure how much time it takes to run Python programs and gauge performance of multiple, smaller bits of code.

Ready to try? Learn [how to install](https://jakob-bagterp.github.io/timer-for-python/getting-started/installation/) and find tutorials in the [user guide](https://jakob-bagterp.github.io/timer-for-python/user-guide/).

## Getting Started
### Basics
Simply add the Timer to your imports, and then wrap the Timer function around your code to measure the performance of the executed block of code:

```python
from timer import Timer

timer = Timer()
timer.start()

# Insert your code here

timer.stop()  # Output example: 12.34 seconds
```

#### Context Manager
Alternatively, use the with statement. This will automatically start and stop the clock – and so no need to declare `timer.start()` and `timer.stop()`. Same result as before, but less code:

```python
with Timer():
    # Insert your code here

    # Output example: 12.34 seconds
```

#### Decorator
Or use the `function_timer` as a function decorator:

```python
from timer import function_timer

@function_timer()
def test_function():
    # Insert your…
