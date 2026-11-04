---
repo: "koyeb/kreconciler"
name: "kreconciler"
description: "A control-loop library for things that are not in k8s"
readmeQualityOk: true
url: "https://github.com/koyeb/kreconciler"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 52
forks: 9
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2021-06-16T09:18:31Z"
lastCommitAt: "2026-11-04T08:04:23Z"
lastReleaseAt: "2025-03-13T17:25:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 64
undervaluedScore: 27
maintainers: ["bchatelard", "lukaszo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bdded77e1c71771a7dbbcee5948c92e7ff15220aea209a098bb0fa14ccdb080/koyeb/kreconciler"
---

# kreconciler

A library to build control-loops for things other than Kubernetes.

## Principle

[Kubernetes operators](https://www.infoq.com/articles/kubernetes-operators-in-depth/) are amazing for building
reliable operational tooling.

Unfortunately as its name points out it is specific to Kubernetes.
This library brings a simple way to build `reconcilers` which is the core of an operator.
It runs a loop that for each event coming in will trigger the control-loop.

Its core goals are:

1. Remain simple, caching, resync are not meant to be builtins because they are hard to be generic.
2. Observability is important so it's instrumented with [opentelemetry](https://opentelemetry.io/).
3. Keep the number of dependencies low.

The reason why 2 is so important is that testing an operator is incredibly complicated.
It's therefore necessary to make execution of the reconciler as observable as possible to be able to figure out issues.

## Who uses it

At Koyeb we've built reconcilers that helps keeping our models in sync with [Hashicorp Nomad](https://www.nomadproject.io/) and [Kuma](https://github.com/koyeb/kreconciler/blob/HEAD/kuma.io/).

## Contributing

See…
