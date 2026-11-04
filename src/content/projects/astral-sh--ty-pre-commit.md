---
repo: "astral-sh/ty-pre-commit"
name: "ty-pre-commit"
description: "A pre-commit hook for ty."
readmeQualityOk: true
url: "https://github.com/astral-sh/ty-pre-commit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 162
forks: 4
openIssues: 3
closedIssues: 10
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2025-12-17T20:23:47Z"
lastCommitAt: "2026-11-04T08:03:56Z"
lastReleaseAt: "2026-01-15T00:27:46Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 36
maintainers: ["AlexWaygood", "zanieb", "astral-releases-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb43602e2a0bd07fce1b2b87620fa66c7462bfd1a81920be8407afdf6e6cca45/astral-sh/ty-pre-commit"
---

# ty-pre-commit

A [pre-commit](https://pre-commit.com/) hook for running [ty](https://github.com/astral-sh/ty) quickly over your whole Python project.

When ty is invoked by this hook, dependencies declared in your project's `pyproject.toml` will automatically be resolvable by ty. This means your project configuration remains the single source of truth: you do not need to duplicate type-checking dependencies in the hook's `additional_dependencies` setting. Any additional dependencies listed in the hook's `additional_dependencies` setting **will not be resolvable** by ty.

Under the hood, the hook runs [uv](https://github.com/astral-sh/uv)'s preview [`uv check`](https://docs.astral.sh/uv/reference/cli/#uv-check) command. Each hook revision pins both the corresponding ty version and the latest uv version that was available when that ty version was released. New ty releases trigger ty-pre-commit releases; new uv releases do not trigger releases on their own. The full uv command invoked by the hook can be found in [`.pre-commit-hooks.yaml`](https://github.com/astral-sh/ty-pre-commit/blob/HEAD/.pre-commit-hooks.yaml).

Configure ty in your project's `pyproject.toml` or `ty.toml`: see…
