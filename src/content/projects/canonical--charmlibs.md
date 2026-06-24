---
repo: "canonical/charmlibs"
name: "charmlibs"
description: "Monorepo for Canonical charmlibs."
url: "https://github.com/canonical/charmlibs"
homepage: "https://canonical.com/juju/docs/charmlibs/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["charm", "charming", "juju", "charmlibs"]
stars: 5
forks: 24
openIssues: 44
closedIssues: 42
watchers: 2
contributors: 112
recentReleases: 0
createdAt: "2025-03-04T04:51:48Z"
lastCommitAt: "2026-06-24T06:38:54Z"
lastReleaseAt: "2025-08-08T05:59:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 89
maintainers: ["james-garner-canonical", "dependabot[bot]", "MichaelThamm"]
openGraphImageUrl: "https://opengraph.githubassets.com/070a237fc440131f1dd2811b0ffe954d32d55f11b218c8524cb52d38ad0feb9d/canonical/charmlibs"
---

# charmlibs

`charmlibs` is the home of Canonical's charm libraries -- Python packages used by [Juju](https://canonical.com/juju) charms.

Charms are Python programs that use the [Ops](https://canonical.com/juju/docs/ops/) framework to manage workloads on Kubernetes or machine clouds. Charm libraries package up common functionality so that teams don't have to reinvent the wheel.

> [!IMPORTANT]
> Each library in this monorepo is distributed as a separate Python package on PyPI, so charms only include what they actually need.

There are two kinds of charm libraries:

- **General libraries** (such as [`charmlibs-apt`](apt/), [`charmlibs-pathops`](pathops/)) provide utility APIs for charms. Imported as `from charmlibs import apt`.
- **Interface libraries** (such as [`charmlibs-interfaces-tls-certificates`](interfaces/tls-certificates/)) manage the structured data that charms exchange over a Juju relation. Imported as `from charmlibs.interfaces import tls_certificates`.

## Contributing to this monorepo

`charmlibs` is for libraries that are broadly useful across different charms and teams. A library is a good fit if it both:

- **Solves a common problem**: It is useful to charms…
