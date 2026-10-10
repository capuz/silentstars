---
repo: "cloudfoundry/bosh-openstack-cpi-release"
name: "bosh-openstack-cpi-release"
description: "BOSH OpenStack CPI"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/bosh-openstack-cpi-release"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["openstack", "bosh", "cloud-foundry", "bosh-release", "cloudfoundry"]
stars: 35
forks: 67
openIssues: 2
closedIssues: 71
watchers: 29
contributors: 95
recentReleases: 0
createdAt: "2014-11-04T22:03:53Z"
lastCommitAt: "2026-10-10T10:01:59Z"
lastReleaseAt: "2016-02-16T17:15:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 61
maintainers: ["neddp", "cf-rabbit-bot", "dudejas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b18a7d7a31e2d33b6a8d4c57705a62d98b70ac8d49a70249e670c5e130524e4d/cloudfoundry/bosh-openstack-cpi-release"
---

# BOSH OpenStack CPI Release

* Documentation: [bosh.io/docs/openstack](https://bosh.io/docs/openstack/)
* Slack: [`#openstack` on cloudfoundry.slack.com](https://cloudfoundry.slack.com/messages/openstack) ([get your invite here](https://slack.cloudfoundry.org/))
* Mailing list: [cf-bosh](https://lists.cloudfoundry.org/pipermail/cf-bosh)
* CI https://bosh-ci.cpi.sapcloud.io
* Roadmap: [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1456570)

See [Initializing a BOSH environment on OpenStack](https://bosh.io/docs/init-openstack.html) for example usage.

See [List of OpenStack API calls](https://github.com/cloudfoundry/bosh-openstack-cpi-release/blob/HEAD/docs/openstack-api-calls.md) to get an idea about the necessary OpenStack configuration for using Bosh.

## Supported OpenStack Versions
We follow the [upstream OpenStack policy](https://docs.openstack.org/project-team-guide/stable-branches.html#maintenance-phases) of supported releases. A release is `Maintained` for ~18 months and then moves into `Extended Maintenance` if there are community members maintaining it. 

The OpenStack CPI runs automated tests against all OpenStack versions with status `Maintained` or…
