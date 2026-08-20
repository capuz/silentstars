---
repo: "JSChronicles/anvil"
name: "anvil"
description: "Anvil is a declarative automation engine for executing cloud operations across accounts, regions, and providers."
readmeQualityOk: true
url: "https://github.com/JSChronicles/anvil"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aws", "azure", "gcp", "github", "clouflare", "datadog", "gitlab", "pagerduty", "python"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-11T04:05:32Z"
lastCommitAt: "2026-08-20T04:07:26Z"
lastReleaseAt: "2026-05-04T03:38:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["JSChronicles", "dependabot[bot]", "python-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2be4d18abf4689ded5b896909254b4be3f27fb895c06757e3f1c3b6a81b942b7/JSChronicles/anvil"
---

# anvil

<br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="images/anvil-logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="images/anvil-logo-light.png">
  </picture>

  <h3 align="center">README</h3>

    <br />
    |
  </p>
</div>

## Introduction

Anvil is a declarative provider-aware execution engine for running Python tasks across cloud target and region fleets. Describe the work in YAML, keep task logic in plain Python modules, and let the engine handle authentication, target resolution, dependency ordering, bounded concurrency, and structured results. The current runtime preserves the AWS organization/account behavior and optimizations from earlier releases while adding explicit Azure subscription and GCP project target support.

For more, see the [documentation](https://opsfoundry.dev/).

### Why Anvil?

Anvil is built for teams that need repeatable cloud workflows, such as inventory, validation, enforcement, cleanup, and reporting, to run consistently across provider targets and regions.

- Declarative orchestration
  - Define execution in reusable YAML instead of one-off scripts.
  - Configure provider targets, regions,…
