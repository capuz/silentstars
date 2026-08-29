---
repo: "SpareCores/sc-inspector-data"
name: "sc-inspector-data"
description: "Spare Cores Inspector Data"
readmeQualityOk: true
url: "https://github.com/SpareCores/sc-inspector-data"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-05T09:26:50Z"
lastCommitAt: "2026-08-29T17:29:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 67
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/50b0e5ba86d8a95c1296801f619d4be4f883f215067c755231e6199884ce4b86/SpareCores/sc-inspector-data"
---

# Spare Cores Inspector Data

Data collected by [`sparecores-inspector`](https://github.com/SpareCores/sc-inspector)
under the `data` folder using the `vendor/server` directory structure, referring to the
vendor by its `vendor_id`, and using the `api_reference` for the server.

# Collected data

In general, consult the [SpareCores Inspector](https://github.com/SpareCores/sc-inspector)
repository for the technical details about the data collected, and the
[Spare Cores Navigator Benchmark Coverage](https://sparecores.com/navigator/benchmark-workloads)
page for a higher level overview.

## Timing

Each inspected instance may have a `timing/` directory (alongside task directories such as
`dmidecode/`). Orchestration state for the timing task lives in `timing/meta.json`. Per GitHub
Actions run, timestamps are stored under `timing/<GITHUB_RUN_ID>/` so repeated starts of the same
instance type keep separate histories.

Files are plain text with a single UTC timestamp per line, in ISO-8601 form
(`YYYY-MM-DDTHH:MM:SSZ`). They are written to separate files (not `meta.json`) so the GitHub
Actions start workflow and the remote `inspect` run can commit independently. The run id comes from
the…
