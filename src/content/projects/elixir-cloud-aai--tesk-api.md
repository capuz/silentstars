---
repo: "elixir-cloud-aai/tesk-api"
name: "tesk-api"
description: "GA4GH TES API Service that translates tasks into Kubernetes Batch API calls"
readmeQualityOk: true
url: "https://github.com/elixir-cloud-aai/tesk-api"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["tesk", "ga4gh"]
stars: 7
forks: 21
openIssues: 6
closedIssues: 44
watchers: 26
contributors: 22
recentReleases: 0
createdAt: "2017-11-09T15:03:29Z"
lastCommitAt: "2026-11-09T04:35:37Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 65
maintainers: ["uniqueg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/942f0e5841a7cb3963cd457c96a0f7a270e9c1753df49cd2ea4f757a583b1ae6/elixir-cloud-aai/tesk-api"
---

# TESK API

The API server of [TESK][tesk], an implementation of the [GA4GH Task
Execution Service (TES) API][tes] for [Kubernetes](https://kubernetes.io),
brought to you by [ELIXIR On-Cloud](https://elixir-on.cloud/). TESK API
accepts TES tasks, runs each of them as Kubernetes jobs (a taskmaster, which
runs the task's executors and the filers for its inputs and outputs), and
reports their state and logs from those jobs and their pods; it needs no
database. Access can be limited to users with tokens from an OpenID Connect
provider and by group membership. It is a Spring Boot application, published
as the image `elixircloud/tesk-api` and deployed with the Helm chart of
[TESK][tesk].

**Read the [documentation][docs]** (the "TESK API" section of the TESK
documentation) for the API, the configuration, access control, deployment,
upgrades and development. Its sources are in [`docs/`](https://github.com/elixir-cloud-aai/tesk-api/blob/HEAD/docs/).

## Quick start

With [Docker](https://docs.docker.com/get-docker/) installed, and a
Kubernetes cluster in your kubeconfig file (`KUBECONFIG`, or
`~/.kube/config`; e.g., a local one with [kind](https://kind.sigs.k8s.io/)),
start TESK API on…
