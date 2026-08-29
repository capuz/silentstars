---
repo: "leanprover/lean-eval-submissions"
name: "lean-eval-submissions"
description: "Submission pipeline and results store for the lean-eval benchmark (https://github.com/leanprover/lean-eval)"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-eval-submissions"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 31]
stars: 6
forks: 2
openIssues: 7
closedIssues: 1202
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-19T12:33:50Z"
lastCommitAt: "2026-08-29T10:20:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbecfb8bce3955dd3180a38d373756387ae9866d6e9608ad5844db224fe23d8/leanprover/lean-eval-submissions"
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
