---
repo: "frappe/marketplace"
name: "marketplace"
description: "Marketplace for Frappe Apps"
readmeQualityOk: true
url: "https://github.com/frappe/marketplace"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 18
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 48
recentReleases: 0
createdAt: "2026-07-16T06:21:11Z"
lastCommitAt: "2026-10-30T11:02:42Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Aradhya-Tripathi", "netchampfaris", "karthikeyan5"]
openGraphImageUrl: "https://opengraph.githubassets.com/75535f02fe3aff17b46069fbf54ccfd0a85366533c81b724dc5b31637cb46d5a/frappe/marketplace"
---

# Marketplace

This is the marketplace for [Frappe](https://frappeframework.com) apps — a
community-editable registry of installable apps, consumed by
[`bench get-app`](https://github.com/frappe/pilot) and the Pilot admin UI's
Marketplace page.

## What's here

- `apps.json` — the index: one metadata entry per app, pointing at that app's
  release file.
- `apps/<name>.json` — one app's `releases`: each an immutable
  `branch` + `commit` pair with the app version, Frappe compatibility range,
  and dependencies on other marketplace apps.
- `validation/` — the PR-gating checks: `check.py` runs `schema_check.py` ->
  `semgrep_check.py` -> `get_app_check.py`, in that order, against each
  changed release, stopping at the first failure. `validation/utils/` holds
  their shared plumbing (cloning a release at its commit, diffing two
  registry revisions).
- `tools/` — maintenance, not CI-gated. `add_release.py` appends a release
  from an app checkout; `migrate_registry.py` was the one-shot split of the
  old branch-scoped `apps.json`.
- `.github/workflows/marketplace-app-check.yml` — validates every PR that
  touches the registry.
- `.github/workflows/publish-release.yml` — reusable…
