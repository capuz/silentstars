---
repo: "tilde-lab/yascheduler"
name: "yascheduler"
description: "Yet another cloud computing scheduler for the high-throughput cloud scientific simulations"
readmeQualityOk: true
url: "https://github.com/tilde-lab/yascheduler"
homepage: "https://mpds.io/search/ab%20initio%20calculations"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ab-initio", "materials-informatics", "materials-science", "scheduler", "hetzner", "hetzner-cloud", "hetzner-api", "upscale", "queues", "python"]
stars: 5
forks: 7
openIssues: 21
closedIssues: 42
watchers: 1
contributors: 10
recentReleases: 1
createdAt: "2019-11-20T12:48:49Z"
lastCommitAt: "2026-09-05T07:47:22Z"
lastReleaseAt: "2026-07-11T12:27:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 97
maintainers: ["knopki", "blokhin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5125c69a5470e605564ac223762a6ba0245316f3190f2760ca34419b6a093e25/tilde-lab/yascheduler"
---

# Yet another computing scheduler & cloud orchestration engine

**Yascheduler** is a simple job scheduler designed for submitting scientific
calculations and copying back the results from the computing clouds.

Currently it supports several scientific simulation codes in chemistry and solid
state physics. Any other scientific simulation code can be supported via the
declarative control template system (see `yascheduler.conf` settings file).
There is an [example dummy C++ code](https://github.com/tilde-lab/dummy-engine)
with its configuration template.

## Installation

Use `pip` and PyPI: `pip install yascheduler`.

By default, no cloud connectors are installed.
To install the appropriate connector, use one of the commands:

- for Microsoft Azure: `pip install yascheduler[azure]`
- for UpCloud: `pip install yascheduler[upcloud]`

The last updates and bugfixes can be obtained cloning the repository:

```sh
git clone https://github.com/tilde-lab/yascheduler.git
pip install yascheduler/
```

The installation procedure creates the configuration file located at
`/etc/yascheduler/yascheduler.conf`.
The file contains credentials for Postgres database access, used directories,
cloud…
