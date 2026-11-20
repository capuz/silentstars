---
repo: "Randomizez/pycodex"
name: "pycodex"
description: "codex cli built with python"
readmeQualityOk: true
url: "https://github.com/Randomizez/pycodex"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [63, 32]
stars: 27
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-03-25T04:47:07Z"
lastCommitAt: "2026-11-20T12:20:14Z"
lastReleaseAt: "2026-11-18T04:30:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["ZRandomize", "Randomizez", "greycooker"]
openGraphImageUrl: "https://opengraph.githubassets.com/331b9aeebe7377f6ef31801821a691f3c2861edf577454a20260abfc2e143646/Randomizez/pycodex"
---

# pycodex

[中文](https://github.com/Randomizez/pycodex/blob/HEAD/README_ZH.md)

pycodex is a Python implementation of the [Codex](https://github.com/openai/codex)
coding agent. Use it in a terminal, in a browser, or from your own Python code.
It supports file editing, command execution, multiple agents and saved sessions.
See [upstream alignment](https://github.com/Randomizez/pycodex/blob/HEAD/docs/ALIGNMENT.md) for the supported scope and differences.

## Install

| Package | Includes | Python |
| --- | --- | --- |
| `python-codex` | CLI and Python API | 3.6.2+ |
| `pycodex-ws` | Core plus browser workspace and optional Feishu integration | 3.7+ |

For the CLI and Python API:

```bash
python3 -m pip install --upgrade python-codex
```

For the browser workspace, install `pycodex-ws`; it includes the matching core version:

```bash
python3 -m pip install --upgrade pycodex-ws
```
