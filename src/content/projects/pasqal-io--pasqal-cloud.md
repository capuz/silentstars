---
repo: "pasqal-io/pasqal-cloud"
name: "pasqal-cloud"
description: "Python SDKs to interact with Pasqal Cloud Services. "
readmeQualityOk: true
url: "https://github.com/pasqal-io/pasqal-cloud"
homepage: "https://docs.pasqal.com"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [55, 45]
stars: 23
forks: 7
openIssues: 12
closedIssues: 39
watchers: 5
contributors: 30
recentReleases: 0
createdAt: "2021-07-02T11:42:25Z"
lastCommitAt: "2026-10-16T08:27:25Z"
lastReleaseAt: "2026-01-14T17:05:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 44
maintainers: ["Fenkiou", "thomasbaronnet", "sarjevane"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f34500b6bb44f70fd7d702c139bc15391b8bbc5b8d22a1c222ac20130d8927/pasqal-io/pasqal-cloud"
discussionCount: 2
---

# pasqal-cloud

`pasqal-cloud` is a Python package to run quantum sequences on [Pasqal](https://www.pasqal.com/) neutral atom quantum computers.

It implements the Pulser [`RemoteConnection`](https://docs.pasqal.com/pulser/) interface so any sequence written with Pulser can be submitted to Pasqal QPUs and emulators.

## Version Support & Deprecation Timeline

| Version | Release Date | End of Support |
|---------|--------------|----------------|
| 0.20.5  | 2025-09-15   | 2026-09-15     |
| 0.20.6  | 2025-10-21   | 2026-10-21     |
| 0.20.7  | 2026-01-13   | 2027-01-13     |
| 0.20.8  | 2026-01-30   | 2027-01-30     |
| 0.21.0  | 2026-02-25   | 2027-02-25     |
| 0.22.0  | 2026-03-17   | 2027-03-17     |
| 0.23.0  | 2026-06-30   | 2027-03-30     |
| 0.24.0  | 2026-09-07   | 2027-09-07     |

## Getting started

To install the latest release of the `pasqal-cloud` (formerly pasqal-sdk), have Python 3.10 or higher installed, then
use pip:

```bash
pip install pasqal-cloud
```

If you wish to **install the development version of the pasqal-cloud and from source** instead, do the
following from within
this repository after cloning it:

```bash
pip install -e pasqal-cloud…
