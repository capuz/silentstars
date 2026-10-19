---
repo: "stackitcloud/gardener-extension-provider-stackit"
name: "gardener-extension-provider-stackit"
description: "Gardener extension provider for the STACKIT cloud."
readmeQualityOk: true
url: "https://github.com/stackitcloud/gardener-extension-provider-stackit"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cloud", "gardener-extension", "kubernetes", "stackit", "stackit-cloud"]
stars: 22
forks: 4
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 36
recentReleases: 0
createdAt: "2026-02-20T14:28:54Z"
lastCommitAt: "2026-10-19T09:14:51Z"
lastReleaseAt: "2026-03-26T09:59:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["ske-renovate-operator[bot]", "dergeberl", "nschad"]
openGraphImageUrl: "https://opengraph.githubassets.com/1045276e894aae0e13c5c05db989bd62f6fc7038fa44ab3cfb032ed746c002b3/stackitcloud/gardener-extension-provider-stackit"
---

# Gardener Extension Provider STACKIT

Project Gardener implements the automated management and operation of
[Kubernetes](https://kubernetes.io/) clusters as a service. This controller
implements [Gardener's extension contract](https://github.com/gardener/gardener/blob/master/docs/extensions/overview.md) for the STACKIT provider.

## Included provider-openstack components

This extension includes components derived from the
[openstack-provider](https://github.com/gardener/gardener-extension-provider-openstack)
to support internal migration efforts. These OpenStack components are not
required to use the extension on STACKIT and are only kept for internal
purposes. They will be deleted after the migration is complete.

The packages `pkg/controller/infrastructure` and `pkg/internal/infrastructure`
are mostly copies and should be kept as close to upstream as possible.

## Development

You can find all available make targets by running `make help`.

For information on our workflows, see:

- [Usage guide](https://github.com/stackitcloud/gardener-extension-provider-stackit/blob/HEAD/docs/usage/usage.md)
- [Operations…
