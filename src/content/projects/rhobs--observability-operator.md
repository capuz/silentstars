---
repo: "rhobs/observability-operator"
name: "observability-operator"
description: "Create Monitoring Stacks you need on your Kubernetes clusters!"
readmeQualityOk: true
url: "https://github.com/rhobs/observability-operator"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 50
forks: 92
openIssues: 37
closedIssues: 55
watchers: 12
contributors: 55
recentReleases: 0
createdAt: "2021-09-22T11:38:40Z"
lastCommitAt: "2026-10-16T08:26:11Z"
lastReleaseAt: "2022-06-17T13:24:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 58
maintainers: ["dependabot[bot]", "simonpasquier", "jgbernalp"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa3dba4c0f2c96b412346b073ddf085e368e43da1525286b568ffbaab7175dde/rhobs/observability-operator"
---

# observability-operator

The Observability Operator is a Kubernetes operator which enables the
management of Monitoring/Alerting stacks through Kubernetes CRDs. Eventually it
might also cover Logging and Tracing.

The project relies heavily on the [controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) library.

## Trying out the Operator

Observability Operator requires Operator Lifecycle Manager (OLM) to be running
in cluster. The easiest way is to use OpenShift where OLM is preinstalled.

Once the operator is installed, you can follow-up with the [User Guides](https://github.com/rhobs/observability-operator/blob/HEAD/docs/user-guides/README.md).

### OpenShift

Add the Observability Operator Catalog as shown below.

```
kubectl apply -f hack/olm/catalog-src.yaml
```
This adds a new Catalog to the list of catalogs. Now, you should be able to use
OLM Web interface to install/uninstall Observability Operator like any other
operator.

If you prefer CLI, applying the subscription as shown below will install the
operator.

```
kubectl create -f ./hack/olm/subscription.yaml
```

####  Uninstall

It is easier to use the web console to remove the installed operator.…
