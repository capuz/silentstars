---
repo: "jdx/jactionlint"
name: "jactionlint"
description: ":octocat: Static checker for GitHub Actions workflow files"
readmeQualityOk: true
url: "https://github.com/jdx/jactionlint"
homepage: "https://jactionlint.jdx.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 116
forks: 0
openIssues: 9
closedIssues: 2
watchers: 2
contributors: 115
recentReleases: 2
createdAt: "2026-10-05T00:42:21Z"
lastCommitAt: "2026-10-09T18:56:36Z"
lastReleaseAt: "2026-10-05T03:12:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 83
undervaluedScore: 29
maintainers: ["jdx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d30ca4bbe56716e8237c6e767dacbe49f76a018d0822166041af6eb947c149c/jdx/jactionlint"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://jdx.dev"]
discussionCount: 0
---

jactionlint
================

[jactionlint][repo] is a static checker for GitHub Actions workflow files and an actively maintained fork of
[rhysd/actionlint][upstream], with upstream pull requests and fixes merged here. [Try it online!][playground]

Features:

- **Syntax check for workflow files** to check unexpected or missing keys following [workflow syntax][syntax-doc]
- **Strong type check for `${{ }}` expressions** to catch several semantic errors like access to not existing property,
  type mismatches, ...
- **Actions usage check** to check that inputs at `with:` and outputs in `steps.{id}.outputs` are correct
- **Reusable workflow check** to check inputs/outputs/secrets of reusable workflows and workflow calls
- **[shellcheck][] and [pyflakes][] integrations** for scripts at `run:`
- **Security and policy checks**; [script injection][script-injection-doc] by untrusted inputs, unpinned actions, excessive
  permissions, dangerous triggers, cache poisoning, hard-coded credentials, missing timeouts, ... Covers much of what
  [zizmor][zizmor] audits, with [rules and fixes of its own](https://github.com/jdx/jactionlint/blob/HEAD/docs/zizmor-parity.md)
- **Composite actions and…
