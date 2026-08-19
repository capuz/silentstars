---
repo: "leanprover/lean-eval-submissions"
name: "lean-eval-submissions"
description: "Submission pipeline and results store for the lean-eval benchmark (https://github.com/leanprover/lean-eval)"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-eval-submissions"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 3
closedIssues: 1075
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-19T12:33:50Z"
lastCommitAt: "2026-08-19T04:08:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/9054e2d445ca01eb5e7f23b061fedcb3d95627fb97c97db153cb936b50e2649f/leanprover/lean-eval-submissions"
---

# lean-eval-submissions

The submission pipeline and the stored results for the
[lean-eval](https://github.com/leanprover/lean-eval) benchmark.

This repository owns two things:

- **The submission process** — the issue intake, the `submission`
  workflow that fetches a submission, evaluates it with
  [comparator](https://github.com/leanprover/comparator), and records the
  outcome, and the reconciler that catches stranded submission issues.
- **The results store** — `results/<github-login>.json`, the append-only
  public log of solved problems.

The benchmark problem set, the `lean-eval` CLI, and the comparator/landrun
security model live in [`leanprover/lean-eval`](https://github.com/leanprover/lean-eval).
The public leaderboard that renders these results is
[`leanprover/lean-eval-leaderboard`](https://github.com/leanprover/lean-eval-leaderboard)
(**[view it →](https://lean-lang.org/eval/)**).

## Submitting a solution

Open a [**Submit benchmark solution**](https://github.com/leanprover/lean-eval-submissions/issues/new?template=submit.yml)
issue. You point it at any content that contains at least one
`lakefile.toml` whose `name` matches a benchmark problem id with a…
