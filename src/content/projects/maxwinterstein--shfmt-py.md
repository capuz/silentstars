---
repo: "MaxWinterstein/shfmt-py"
name: "shfmt-py"
description: "The shfmt shell script formatter as a pip-installable binary, plus a ready-made pre-commit hook. No Go toolchain required."
readmeQualityOk: true
url: "https://github.com/MaxWinterstein/shfmt-py"
homepage: "https://pypi.org/project/shfmt-py/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["bash", "code-formatter", "formatter", "pre-commit", "pre-commit-hook", "pypi", "shell", "shell-script", "shfmt"]
stars: 22
forks: 3
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2021-08-24T16:13:27Z"
lastCommitAt: "2026-10-25T09:01:10Z"
lastReleaseAt: "2026-05-13T07:52:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 65
maintainers: ["renovate[bot]", "MaxWinterstein", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/497dd17b9860a09529c4c7b39b31ca2973a424e7244bb5e47782e7b3d443d5ce/MaxWinterstein/shfmt-py"
---

# shfmt-py

`pip install shfmt-py` puts [shfmt], the shell script formatter, on the `PATH` of your Python
environment and gives you a ready-made [pre-commit] hook.

This is packaging only — no patches, no Python API, nothing to `import`, no `python -m shfmt`. On
common platforms the wheel bundles upstream's binary; elsewhere the build downloads and
checksum-verifies it, or — where no build is pinned for your platform — copies an existing `shfmt`
from your `PATH` unverified ("How the binary gets installed" below has the details). For what
`shfmt` does and which flags it takes, run `shfmt --help` or read the [upstream docs][shfmt].

Modeled after [shellcheck-py], adapted for `shfmt`.

## Install

```bash
pip install shfmt-py
```

Or as a standalone tool, isolated from any project environment:

```bash
uv tool install shfmt-py
# or
pipx install shfmt-py
```

Requires Python 3.9 or newer; the binary itself has no Python runtime dependency. CI covers
CPython 3.9, 3.13, 3.14 and 3.15 on Linux, macOS (arm64 and x86_64) and Windows.

The distribution installs exactly one executable — `shfmt`, or `shfmt.exe` on Windows — into the
environment's scripts directory, so it is on `PATH` whenever…
