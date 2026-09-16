---
repo: "Dynatrace/dynatrace-operator"
name: "dynatrace-operator"
description: "Automate Kubernetes observability with Dynatrace"
readmeQualityOk: true
url: "https://github.com/Dynatrace/dynatrace-operator"
homepage: "https://www.dynatrace.com"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["dynatrace", "kubernetes", "monitoring", "observability", "operator", "hacktoberfest"]
stars: 220
forks: 166
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 67
recentReleases: 0
createdAt: "2020-05-12T06:58:55Z"
lastCommitAt: "2026-09-16T08:41:39Z"
lastReleaseAt: "2022-02-15T18:40:13Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 44
maintainers: ["dynatrace-llc-renovate-operator[bot]", "avorima", "andriisoldatenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d9a1b798a7585b8d69724a1caf045b15b97c976c7a1619a533eb9ef5a15d6a7/Dynatrace/dynatrace-operator"
---

# Dynatrace Operator

The Dynatrace Operator supports rollout and lifecycle management of various Dynatrace components in Kubernetes and OpenShift.

* OneAgent
  * `classicFullStack` rolls out a OneAgent pod per node to monitor pods on it and the node itself
  * `applicationMonitoring` is a webhook based injection mechanism for automatic app-only injection
    * CSI Driver can be enabled to cache OneAgent downloads per node
  * `hostMonitoring` is only monitoring the hosts (i.e. nodes) in the cluster without app-only injection
    * CSI Driver is used to provide a writeable volume for the Oneagent as it's running in read-only mode
  * `cloudNativeFullStack` is a combination of `applicationMonitoring` and `hostMonitoring`
    * CSI Driver is used for both features
* ActiveGate
  * `routing` routes OneAgent traffic through the ActiveGate
  * `kubernetes-monitoring` allows monitoring of the Kubernetes API
  * `metrics-ingest` routes enriched metrics through ActiveGate

For more information please have a look at [our DynaKube Custom Resource examples](https://github.com/Dynatrace/dynatrace-operator/blob/HEAD/assets/samples/dynakube) and
our [official help…
