---
repo: "takodotid/tack"
name: "tack"
description: "Switch a stateful workload's primary between sites, in step with GitOps"
readmeQualityOk: true
url: "https://github.com/takodotid/tack"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 3
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T01:04:55Z"
lastCommitAt: "2026-11-23T10:28:10Z"
lastReleaseAt: "2026-11-05T16:55:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["Hazmi35", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fd686a0865bf3dc218b20952f0e7355b7fe0001ed5eafac0a47edf87edb4291/takodotid/tack"
---

# Tack

## What it does

- The operator starts every run, after reading its plan. Tack never fails over by itself.
- Flux is held only on the objects the run changes, and the new values are committed to Git.
- Every step is in a ledger, and a run that stops resumes from it.
- A site loss works even when Git is down.

## Docs

[Install](https://tack.tako.id/guide/install) ·
[Getting started](https://tack.tako.id/guide/getting-started) ·
[Concepts](https://tack.tako.id/guide/concepts) ·
[Runbooks](https://tack.tako.id/operations) ·
[Contributing](https://tack.tako.id/contributing)

[SECURITY.md](https://github.com/takodotid/tack/blob/main/SECURITY.md) says how to report a vulnerability.

## How this project is built

AI coding agents (Claude Code) write the code, tests and docs, and a maintainer approves each RFC, merge and release. Each fix comes with a test, and CI runs the unit tests, the race detector and end-to-end tests on kind. The maintainers run Tack on their own databases.

## License

Apache-2.0. See [LICENSE](https://github.com/takodotid/tack/blob/HEAD/LICENSE).
