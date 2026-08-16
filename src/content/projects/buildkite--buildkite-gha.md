---
repo: "buildkite/buildkite-gha"
name: "buildkite-gha"
description: "Run GitHub Actions workflows as native Buildkite builds"
readmeQualityOk: true
url: "https://github.com/buildkite/buildkite-gha"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 34
forks: 2
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 18
recentReleases: 10
createdAt: "2026-07-22T05:03:37Z"
lastCommitAt: "2026-08-16T04:07:58Z"
lastReleaseAt: "2026-08-08T03:03:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 36
maintainers: ["ampagent", "lox", "wolfeidau"]
openGraphImageUrl: "https://opengraph.githubassets.com/abb020643ddb9fefb758476233efcef82dff8dfab6212737665587a7a3c2f3b2/buildkite/buildkite-gha"
---

# buildkite-gha

Run GitHub Actions workflows as native Buildkite jobs without creating a GitHub Actions run.

`buildkite-gha` turns each supported workflow job and static matrix entry into a Buildkite job. Steps run in a compatibility runtime inside that job. Buildkite owns scheduling, logs, retries, cancellation, and the build UI.

> [!IMPORTANT]
> `buildkite-gha` is an experimental pre-1.0 preview. The released plugin path supports Linux x86-64 and native macOS arm64. The production path supports local and public actions, static Buildkite job-accessible secrets, and narrowly scoped, job-bound checkout, `GITHUB_TOKEN`, artifact, and cache integrations. Private actions and GitHub-compatible OIDC are unsupported.

## How it works

Buildkite creates the build. The plugin reads the workload from the workflow file and dynamically uploads the jobs it supports.

| GitHub Actions | Buildkite |
| --- | --- |
| Triggers and filters under `on:` | Select applicable workflow groups inside an existing Buildkite build |
| Workflow run | Existing Buildkite build |
| Job | Buildkite command job |
| Matrix entry | Buildkite command job |
| `needs` | `depends_on` with verified result transport |
|…
