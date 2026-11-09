---
repo: "rshade/finfocus"
name: "finfocus"
description: "FinOps CLI for Pulumi — projected costs, actual spend tracking, budget enforcement, and cost optimization for cloud infrastructure"
readmeQualityOk: true
url: "https://github.com/rshade/finfocus"
homepage: "https://rshade.github.io/finfocus/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["aws", "cloud-costs", "cloud-infrastructure", "cost-estimation", "devops", "finops", "infrastructure-as-code", "pulumi", "finfocus", "agent-skills"]
stars: 11
forks: 2
openIssues: 31
closedIssues: 936
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-12T10:33:44Z"
lastCommitAt: "2026-11-09T00:53:50Z"
lastReleaseAt: "2026-01-21T02:46:31Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure", "community_hub"]
healthScore: 99
undervaluedScore: 78
maintainers: ["rshade", "renovate[bot]", "gonzalez"]
openGraphImageUrl: "https://opengraph.githubassets.com/b137692c8033001c0c4020aeba1b2f7597185d28868bab021b1e292e18a2a1a6/rshade/finfocus"
discussionCount: 51
---

# FinFocus

*Cloud cost analysis for Pulumi infrastructure*

**See what your Pulumi stack will cost before you deploy.** FinFocus is a Go CLI and GitHub Action that prices
`pulumi preview` output through a plugin-based architecture, with budget enforcement and historical cost tracking.
Public AWS pricing needs no billing access and no changes to your Pulumi program.

## Cost on every pull request

*A real comment from the [live demo pull request](https://github.com/rshade/finfocus-demo/pull/1), updated on every push.*

Add it to a workflow with [finfocus-action](https://github.com/rshade/finfocus-action):

```yaml
- run: pulumi preview --json > plan.json
- uses: rshade/finfocus-action@v2
  with:
    pulumi-plan-json: plan.json
    install-plugins: aws-public
    fail-on-cost-increase: '100USD'
```

## Why FinFocus?

Cloud cost surprises are the norm. Teams deploy infrastructure with Pulumi but have no visibility into what it will cost until the bill arrives. FinFocus closes that gap:

- **Shift-left on costs** — See projected costs *before* you deploy, directly from `pulumi preview` output
- **No code changes required** — Works with any existing Pulumi project via JSON export
-…
