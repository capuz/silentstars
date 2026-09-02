---
repo: "gardener/gardener-extension-provider-aws"
name: "gardener-extension-provider-aws"
description: "Gardener extension controller for the AWS cloud provider (https://aws.amazon.com)."
readmeQualityOk: true
url: "https://github.com/gardener/gardener-extension-provider-aws"
homepage: "https://gardener.cloud"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["gardener", "extension", "aws", "kubernetes", "amazon-web-services"]
stars: 25
forks: 118
openIssues: 10
closedIssues: 172
watchers: 11
contributors: 142
recentReleases: 0
createdAt: "2020-01-30T13:30:11Z"
lastCommitAt: "2026-09-02T08:04:41Z"
lastReleaseAt: "2020-04-24T12:14:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 72
maintainers: ["gardener-ci-robot", "hebelsan", "federated-github-access[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ff8ade1289885a40c0a9b2db159d52d73bb23e47e5a773acc9373155a87567d/gardener/gardener-extension-provider-aws"
---

# Gardener Extension for AWS provider

Project Gardener implements the automated management and operation of [Kubernetes](https://kubernetes.io/) clusters as a service.
Its main principle is to leverage Kubernetes concepts for all of its tasks.

Recently, most of the vendor specific logic has been developed [in-tree](https://github.com/gardener/gardener).
However, the project has grown to a size where it is very hard to extend, maintain, and test.
With [GEP-1](https://github.com/gardener/gardener/blob/master/docs/proposals/01-extensibility.md) we have proposed how the architecture can be changed in a way to support external controllers that contain their very own vendor specifics.
This way, we can keep Gardener core clean and independent.

This controller implements Gardener's extension contract for the AWS provider.

An example for a `ControllerRegistration` resource that can be used to register this controller to Gardener can be found [here](https://github.com/gardener/gardener-extension-provider-aws/blob/HEAD/example/controller-registration.yaml).

Please find more information regarding the extensibility concepts and a detailed proposal…
