---
repo: "existential-birds/daydream"
name: "daydream"
description: "Agentic code-review CLI that records each review/fix/test run trajectory, building a corpus for fine-tuning open-weight models."
readmeQualityOk: true
url: "https://github.com/existential-birds/daydream"
homepage: "https://existentialbirds.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cli", "code-review", "agent", "rlhf", "agentic-ai", "claude", "fine-tuning", "llm", "machine-learning"]
stars: 21
forks: 4
openIssues: 71
closedIssues: 791
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-01T06:30:58Z"
lastCommitAt: "2026-10-29T10:20:56Z"
lastReleaseAt: "2026-03-03T23:41:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["anderskev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8787b3e3d8df79d4b34ce39427ab4b608795d578b696870f77daf93b0d9eb35/existential-birds/daydream"
---

# daydream

```text
Set up https://github.com/existential-birds/daydream for this repository.
Read its README and CLI help, install Daydream with uv and Python 3.14+,
and help me authenticate a supported backend (Claude by default, or Codex,
Pi, Osprey). Run a report-only review with --review against the intended
base branch. Show me the findings and where the trajectory was saved.
```

Daydream reviews code changes, can fix findings and run tests, and records
[ATIF](https://www.harborframework.com/docs/agents/trajectory-format) trajectories
for research toward an open-weight code-review model.

## Quick start

Requires [uv](https://docs.astral.sh/uv/), Python 3.14+, and an authenticated
[Claude Code](https://claude.ai/code) CLI (default backend), or Codex, Pi, or Osprey.
PR comments also require authenticated [gh](https://cli.github.com/).

```bash
git clone https://github.com/existential-birds/daydream.git
cd daydream
uv tool install --editable .
# If daydream is missing from PATH: uv tool update-shell, then restart your shell.
```

## Review code

```bash
daydream --review /path/to/project           # report only
daydream --comment /path/to/project          # post inline PR…
