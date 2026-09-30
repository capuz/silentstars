---
repo: "luiacuaniello/perspectivegraph"
name: "perspectivegraph"
description: "Open-source attack-path engine for AWS and Kubernetes: correlates your scanners into one graph and blocks the pull request that opens a route to your data."
readmeQualityOk: true
url: "https://github.com/luiacuaniello/perspectivegraph"
homepage: "https://demo.a3thinker.it"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["apache-age", "appsec", "attack-graph", "attack-path", "aws", "cnapp", "devsecops", "golang", "kubernetes", "sbom"]
stars: 8
forks: 0
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-21T20:52:23Z"
lastCommitAt: "2026-09-30T09:57:13Z"
lastReleaseAt: "2026-08-03T14:45:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 51
maintainers: ["luiacuaniello", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276326233/1abd7477-02ed-43ad-b42e-25f30e6240c0"
discussionCount: 0
---

<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/wordmark-dark.svg">
  </picture>
</h1>

</p>

PerspectiveGraph joins what you already run - Trivy, Semgrep, Cloud Custodian, Falco, plus your
AWS and Kubernetes state - into one graph of your *real* environment, and asks a single question
of it: **can someone get from the internet, through privilege that is too broad, to something
worth stealing?**

On a pull request it asks that question **before the merge**: the check goes red only when *this
change* opens a route, and the fix comes back as its own pull request. Open source (Apache 2.0),
runs on your infrastructure, collects no telemetry.

*Twelve seconds of `make demo`: what is exploitable now → the ranked routes → one route's kill
chain and the fix it generates → whether the scores can be trusted. Sample scanner output and
seeded verdicts, not a real environment.*

- **[See it running](https://demo.a3thinker.it)** - the same dashboard, published read-only. Nothing to install.
- **[Check your own AWS account](#check-your-own-account-in-30-seconds)** - one read-only command, no deployment.
- **[Put it on your pull…
