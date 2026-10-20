---
repo: "grafana/shared-workflows"
name: "shared-workflows"
description: "A public-facing, centralized place to store reusable workflows used by Grafana Labs."
readmeQualityOk: true
url: "https://github.com/grafana/shared-workflows"
language: "Go"
languages: ["Go"]
languagePcts: [65]
stars: 27
forks: 52
openIssues: 15
closedIssues: 44
watchers: 14
contributors: 70
recentReleases: 0
createdAt: "2023-08-23T21:50:08Z"
lastCommitAt: "2026-10-20T08:46:18Z"
lastReleaseAt: "2024-11-28T09:39:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 64
maintainers: ["renovate-sh-app[bot]", "github-actions[bot]", "ricky-undeadcoders"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc4e1a52390f11d5b6d13fdc2e697ce2660a28f22199e9c06d61c09b165000a7/grafana/shared-workflows"
---

# shared-workflows

A centralized place to store reusable workflows and GitHub Actions used by Grafana Labs.
Refer to the [`actions/`](https://github.com/grafana/shared-workflows/blob/HEAD/actions) directory for the individual actions themselves.

> **Note:** As of May 4th 2026, all action releases are immutable. Once a version tag is created, it will not be moved or overwritten.

[scorecard]: https://scorecard.dev/viewer/?uri=github.com/grafana/shared-workflows
[scorecard image]: https://api.scorecard.dev/projects/github.com/grafana/shared-workflows/badge

## Custom Renovate config

This is a monorepo containing several Actions. When we release a workflow, we create a tag `<workflow name>/v<workflow version>`.

While Dependabot can update references to these actions, Renovate can't do it out of the box. It can, however, be configured to do so:

```json
{
  "packageRules": [
    {
      "matchPackageNames": ["grafana/shared-workflows"],
      "versioning": "regex:^(?<compatibility>.*)[-/]v?(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)?$",
      "additionalBranchPrefix": "{{ lookup (split newVersion \"/\") 0 }}-",
      "commitMessagePrefix": "chore(deps):",…
