---
repo: "wiremind/wiremind-helm-charts"
name: "wiremind-helm-charts"
description: "A list of Helm Charts used and maintained by Wiremind"
readmeQualityOk: true
url: "https://github.com/wiremind/wiremind-helm-charts"
homepage: "https://artifacthub.io/packages/search?repo=wiremind&sort=relevance&page=1"
language: "Go Template"
languages: ["Go Template", "Mustache"]
languagePcts: [45, 41]
topics: ["helm", "kubernetes"]
stars: 54
forks: 113
openIssues: 12
closedIssues: 44
watchers: 3
contributors: 90
recentReleases: 0
createdAt: "2020-11-23T16:07:37Z"
lastCommitAt: "2026-09-10T08:21:04Z"
lastReleaseAt: "2020-11-24T16:08:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 63
maintainers: ["arthlr", "nahuel11500", "spnngl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b604529a09db26005fe34620a5c117c8ab9667d3c9ae4ad9845296f6a644708/wiremind/wiremind-helm-charts"
discussionCount: 1
---

# wiremind Helm Charts

This is a set of Helm Charts used and maintained by Wiremind. Do not hesitate to create Pull Requests.

All charts are visible from the Artifact Hub: https://artifacthub.io/packages/search?repo=wiremind&sort=relevance&page=1

## CRDs charts

To update CRDs of a specific chart, please refer to its README.md, if there is none, just copy paste the upstream CRDs into ours.

Then run this command:
```bash
MY_CHART="mycrdschartname"
find ./charts/$MY_CHART -type f -exec sed -i -e '/creationTimestamp: null/d' {} \;
```

Running this command is mandatory because of this:
> During the [upgrade to controller-tools@v2](https://github.com/kubernetes-sigs/cluster-api/pull/1054) for v1alpha2, we noticed a failure would occur running Cluster API test suite against the new CRDs, specifically `spec.metadata.creationTimestamp in body must be removed`. The investigation showed that `controller-tools@v2` behaves differently than its previous version when handling types from [metav1](https://github.com/wiremind/wiremind-helm-charts/blob/HEAD/k8s.io/apimachinery/pkg/apis/meta/v1) package. \n In more details, we found that embedded (non-top level) types that embedded…
