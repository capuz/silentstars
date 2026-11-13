---
repo: "elixir-cloud-aai/trs-filer"
name: "trs-filer"
description: "Lightweight, flexible GA4GH Tool Registry Service (TRS) API implementation"
readmeQualityOk: true
url: "https://github.com/elixir-cloud-aai/trs-filer"
homepage: "https://trs-filer.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["api", "ga4gh", "ga4gh-trs", "elixir-europe", "elixir-on-cloud"]
stars: 8
forks: 7
openIssues: 6
closedIssues: 126
watchers: 21
contributors: 21
recentReleases: 2
createdAt: "2020-07-01T17:26:46Z"
lastCommitAt: "2026-11-13T04:43:35Z"
lastReleaseAt: "2026-11-09T21:56:09Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 77
maintainers: ["uniqueg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c07ca65ca56b30b4f55b592dd7c94213610f7e41f76bb83a86c88f0fcdd73d/elixir-cloud-aai/trs-filer"
---

# TRS-Filer

A registry of tools and workflows for your project, network or
infrastructure, brought to you by [ELIXIR On-Cloud](https://elixir-on.cloud/).
It implements the [GA4GH Tool Registry Service (TRS)
API](https://github.com/ga4gh/tool-registry-service-schemas), so that clients
such as workflow engines and execution services can find tools and workflows,
their versions and tool classes, and fetch their descriptors, test files,
container image definitions and other files, one by one or as a ZIP archive.
Additional endpoints register, update and delete tools, tool versions and
tool classes, so that you can run TRS-Filer as the registry of your own tools
or index tools that are published elsewhere. Run it
with Docker Compose or deploy it to Kubernetes with its Helm chart.

**Read the [documentation][docs]** for the architecture, the configuration,
the API, access control, the deployment with the Helm chart in
[`deployment/`][deployment], operations, upgrades and development.

## Known deployments

None listed yet.

Running TRS-Filer yourself? Open a pull request that adds your deployment
(URL, operator and notes) to this section of…
