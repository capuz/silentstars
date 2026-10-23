---
repo: "dhbw-ma-ppp/ppp-2026"
name: "ppp-2026"
description: "Practical Python Programming DHBW Mannheim 2026"
readmeQualityOk: true
url: "https://github.com/dhbw-ma-ppp/ppp-2026"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [70, 30]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2026-09-23T15:00:58Z"
lastCommitAt: "2026-10-23T08:47:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["RetlawElias", "Nils2809", "VincentMoegele"]
openGraphImageUrl: "https://opengraph.githubassets.com/455aba65011b51eb4c272a95610147c95b2d1939348af5255d3b6b3f3248209a/dhbw-ma-ppp/ppp-2026"
---

# ppp-2026
Documents and exercises for 'Programming and Problem Solving with Python' at DHBW Mannheim 2026

# Setup
You need [uv](https://docs.astral.sh/uv/getting-started/installation/), [git](https://git-scm.com/),
[VS Code](https://code.visualstudio.com/) and an account on github.com.

```
git clone https://github.com/dhbw-ma-ppp/ppp-2026.git
cd ppp-2026
uv sync          # installs Python 3.14 and all libraries into .venv
uv run pytest    # should report "2 passed"
```

Open the `ppp-2026` folder in VS Code and install the recommended extensions when asked.
Whenever the course needs new libraries, run `uv sync` again after `git pull`.

# Repository layout
- `exercises/ex01/`, `exercises/ex02/`, ...: exercise descriptions, starter code and starter tests
- `students/<github-login>/ex01/`, ...: **your solutions**. Copy the exercise folder here and work in the copy.
  Use your GitHub login exactly as GitHub spells it; CI rejects PRs that change files anywhere else.
- `data/`: input data for exercises
- `lectures/`: lecture notebooks
- `REVIEWING.md`: what a code review must contain

# Checking your work
The same checks run automatically (CI) on every pull request:
```
uv run pytest…
