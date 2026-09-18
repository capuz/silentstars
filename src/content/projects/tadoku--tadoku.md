---
repo: "tadoku/tadoku"
name: "tadoku"
description: "Tadoku is a friendly foreign-language reading contest aimed at building a habit of reading in your non-native languages."
readmeQualityOk: true
url: "https://github.com/tadoku/tadoku"
homepage: "https://tadoku.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [50, 39]
topics: ["language-learning", "contest-platform"]
stars: 28
forks: 6
openIssues: 31
closedIssues: 145
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2019-01-08T11:18:02Z"
lastCommitAt: "2026-09-18T14:03:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 63
maintainers: ["antonve"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0168fd379f877503e73976ae5e877493a0aea15c51b45553e66ce538415fb4/tadoku/tadoku"
---

# Tadoku Monorepo

Tadoku had a significant rewrite and the documentation hasn't been updated yet to reflect these changes.
The documentation for this repository can be found at https://tadoku.github.io/tadoku/.

## Dev Environment

Use `k8s/dev/` through the root `Tiltfile` for both shared and local clusters.
Set `TADOKU_TILT_CONFIG` to a machine-level config path so the same config works
across Git worktrees, or copy `tilt_config.json.example` to the gitignored
`tilt_config.json` for a checkout-local override. Tilt fails closed when neither
is configured.

Common commands:

```sh
make dev-up      # start Tilt
make dev-down    # stop Tilt-managed resources
make dev-reset   # delete/recreate the operator-managed dev DB, rerun migrations, and seed data
make dev-seed    # rerun idempotent seed data only
make dev-logs    # stream Tilt logs
```

The dev Postgres cluster is a Zalando `postgresql` custom resource with persistent volumes, so ordinary `tilt down`/`tilt up` keeps data.
`make dev-reset` is the destructive reset path: it deletes the operator CR and its PVCs, reapplies the CR, restarts services so init-container migrations run, then seeds deterministic dev…
