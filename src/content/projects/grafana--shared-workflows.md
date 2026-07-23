---
repo: "grafana/shared-workflows"
name: "shared-workflows"
description: "A public-facing, centralized place to store reusable workflows used by Grafana Labs."
readmeQualityOk: true
url: "https://github.com/grafana/shared-workflows"
language: "Go"
languages: ["Go"]
languagePcts: [69]
stars: 25
forks: 44
openIssues: 15
closedIssues: 40
watchers: 14
contributors: 181
recentReleases: 0
createdAt: "2023-08-23T21:50:08Z"
lastCommitAt: "2026-07-23T06:13:20Z"
lastReleaseAt: "2024-11-28T09:39:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 65
maintainers: ["renovate-sh-app[bot]", "github-actions[bot]", "martincostello"]
openGraphImageUrl: "https://opengraph.githubassets.com/181448a6ce4670394831dd5f70a54053f300802080ea4637a877d71f76fe4798/grafana/shared-workflows"
---

# shared-workflows

A public-facing, centralized place to store reusable GitHub workflows and action
used by Grafana Labs. See the `actions/` directory for the individual actions
themselves.

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
      "commitMessagePrefix": "chore(deps):",
      "commitMessageAction": "update",
      "commitMessageTopic":…
