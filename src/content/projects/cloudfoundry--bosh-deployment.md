---
repo: "cloudfoundry/bosh-deployment"
name: "bosh-deployment"
description: "Collection of BOSH manifests referenced by cloudfoundry/docs-bosh"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/bosh-deployment"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 138
forks: 233
openIssues: 5
closedIssues: 192
watchers: 45
contributors: 139
recentReleases: 0
createdAt: "2016-11-12T00:40:14Z"
lastCommitAt: "2026-08-18T02:21:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 50
maintainers: ["mkocher"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0976430e895f54298bd484411bd824091f580ebf51755f70560243dfc8bdf65/cloudfoundry/bosh-deployment"
---

# bosh-deployment

This repository is intended to serve as a reference and starting point for developer-friendly configuration of the Bosh Director. Consume the `master` branch. Any changes should be made against the `develop` branch (it will be automatically promoted once it passes tests).

## Important notice for users of bosh-deployment and Bosh DNS versions older than 1.28

As of Bosh DNS version 1.28, Bosh DNS is now built with Go 1.15. This version of Go demands that TLS certificates be created with a SAN field, in addition to the usual CN field.

The following certificates are affected by this change and will need to be regenerated:

* `/dns_healthcheck_server_tls`
* `/dns_healthcheck_client_tls`
* `/dns_api_server_tls`
* `/dns_api_client_tls`

If you're using Credhub or another external variable store, then you will need to use `update_mode: converge` as documented here: <https://bosh.io/docs/manifest-v2/#variables>.<br>
If you are not using Credhub or another external variable store, then you will need to follow the usual procedure for regenerating your certificates.

## Noble stemcells

We deploy using Noble stemcells; however, if you would prefer to use the Jammy…
