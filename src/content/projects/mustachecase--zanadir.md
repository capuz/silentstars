---
repo: "MustacheCase/zanadir"
name: "zanadir"
description: "Grades whether a repository's CI actually protects it: finds missing security and quality controls, and the ones wired so they cannot fail a build."
readmeQualityOk: true
url: "https://github.com/MustacheCase/zanadir"
homepage: "https://mustachecase.github.io/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["ci-cd", "cli", "code-quality", "devops", "devsecops", "github-actions", "golang", "pipeline-security", "sarif", "sast"]
stars: 180
forks: 14
openIssues: 32
closedIssues: 97
watchers: 1
contributors: 18
recentReleases: 1
createdAt: "2025-02-15T13:49:25Z"
lastCommitAt: "2026-10-31T16:00:25Z"
lastReleaseAt: "2026-08-22T18:18:21Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 44
maintainers: ["tomersein", "1AbdullahButt", "sarankumar1325"]
openGraphImageUrl: "https://opengraph.githubassets.com/49a2186300b34c528faed060a3327596c029304e59ace00e17acb45612510b45/MustacheCase/zanadir"
discussionCount: 1
---

zanadir reads a repository's CI configuration and reports which security and
quality controls are missing, or wired so they cannot fail a build.

## What it answers

- **What is my pipeline missing?** Thirteen categories, from dependency
  scanning and secrets detection to SBOMs, workflow hardening and agent
  skill scanning, each
  checked against the tools that cover it, with suggestions that fit the
  repository's languages.
- **Does my CI actually block on security findings?** A scanner with
  `continue-on-error`, `|| true`, a push-only trigger or `allow_failure`, or
  one that only reports unless told to fail, like `trivy` without
  `--exit-code 1`, is present but cannot stop a merge. zanadir grades each
  control *enforcing*, *partial*, *advisory* or *unknown* rather than just
  covered; see [Effectiveness](#effectiveness).
- **Is that check required to merge?** With `--required-checks`, a control
  only counts as enforcing when branch protection or a ruleset requires it.
- **What do I add?** `zanadir fix` prints ready-to-paste CI configuration for
  the gaps, or writes a workflow with `--write`.

It reads GitHub Actions, GitLab CI, CircleCI, Bitbucket Pipelines, Azure…
