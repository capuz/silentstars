---
repo: "pytask-dev/pytask-r"
name: "pytask-r"
description: "Run R scripts with pytask."
readmeQualityOk: true
url: "https://github.com/pytask-dev/pytask-r"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["pytask"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-07-22T08:44:46Z"
lastCommitAt: "2026-08-12T04:55:13Z"
lastReleaseAt: "2021-07-22T06:59:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 55
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "tobiasraabe"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d57173b81c2651272c1ca03a9750e1b9051682bafc5c34bc941f080a22b53bb/pytask-dev/pytask-r"
---

# pytask-r

______________________________________________________________________

Run R scripts with pytask.

## Installation

pytask-r is available on [PyPI](https://pypi.org/project/pytask-r) and
[Anaconda.org](https://anaconda.org/conda-forge/pytask-r). Install it with

```console
$ uv add pytask-r

# or

$ pixi add pytask-r
```

You also need to have R installed and `Rscript` on your command line. Test it by typing
the following on the command line

```console
Rscript --help
```

If an error is shown instead of a help page, you can install R with `pixi`.

```console
pixi add r-base
```

Or install install R from the official [R Project](https://www.r-project.org/).

For serializing task data, install either `r-jsonlite` for JSON or `r-yaml` for YAML.

## Usage

To create a task that runs an R script, define a task function with the `@mark.r`
decorator. The `script` keyword provides an absolute path or a path relative to the task
module.

```python
from pathlib import Path
from pytask import mark

@mark.r(script=Path("script.r"))
def task_run_r_script(produces: Path = Path("out.rds")):
    pass
```

If you are wondering why the function body is empty, know that pytask-r…
