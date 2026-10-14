---
repo: "kutaydemir07/PyLCSS"
name: "PyLCSS"
description: "Python Low-Code System Solutions"
readmeQualityOk: true
url: "https://github.com/kutaydemir07/PyLCSS"
homepage: "https://www.linkedin.com/company/pylcss"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["assistant-system", "cad", "fea", "llm-agents", "optimization", "sensitivity-analysis", "surrogate-modeling", "solution-spaces", "impact-analysis", "lattice"]
stars: 30
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-12-20T21:45:55Z"
lastCommitAt: "2026-10-14T08:58:13Z"
lastReleaseAt: "2026-09-28T10:20:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 37
maintainers: ["kutaydemir07"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e5e197d7d2433ebe845391b127b288e844328f6fbf73bf5e464d01265f48fdf/kutaydemir07/PyLCSS"
discussionCount: 1
---

# PyLCSS

**Low-Code System Solutions** — a desktop workbench for engineering design,
simulation and optimization through visual, node-based workflows.

- **CAE:** parametric CAD, structural and modal FEA, crash analysis, topology
  optimization and lattice design.
- **MDAO:** system modeling, solution spaces, sensitivity analysis, surrogate
  modeling and multi-objective optimization.

## Installation

### Windows

Download the Windows installer from [Releases](https://github.com/kutaydemir07/PyLCSS/releases).
Choose **CAE**, **MDAO**, or both during setup, then launch **PyLCSS** from the
Start Menu. External solvers and FreeCAD are optional setup components.

### From source

Requires Python 3.10+; Windows 10/11 is the primary platform.

```powershell
git clone https://github.com/kutaydemir07/PyLCSS.git
cd PyLCSS
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[mdao,cae]"
python -m pylcss.main
```

For one workspace, install `.[mdao]` or `.[cae]` instead. To download CalculiX,
OpenCourant and FreeCAD, run `python scripts/install_solvers.py`.

Install only the crash solver with `python scripts/install_solvers.py --only
opencourant`. The installer…
