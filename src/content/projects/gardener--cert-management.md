---
repo: "gardener/cert-management"
name: "cert-management"
description: "Manages TLS certificates in Kubernetes clusters using custom resources"
readmeQualityOk: true
url: "https://github.com/gardener/cert-management"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 44
forks: 33
openIssues: 16
closedIssues: 47
watchers: 6
contributors: 43
recentReleases: 0
createdAt: "2019-08-14T13:46:21Z"
lastCommitAt: "2026-07-20T06:33:02Z"
lastReleaseAt: "2019-12-02T08:25:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 59
maintainers: ["gardener-ci-robot", "github-actions[bot]", "MartinWeindel"]
openGraphImageUrl: "https://opengraph.githubassets.com/56971c24fd716a942ea1e4e5d2eddcb70d0b136ef2e2cef1fb3648ac771316d0/gardener/cert-management"
---

# Certificate Management

The cert-manager manages TLS certificates in Kubernetes clusters using custom resources.

In a multi-cluster environment like Gardener, using existing open source projects
for certificate management like [cert-manager](https://github.com/jetstack/cert-manager) becomes cumbersome.
With this project the separation of concerns between multiple clusters is realized more easily.
The cert-controller-manager runs in a **secured cluster** where the issuer secrets are stored.
At the same time it watches an untrusted **source cluster** and can provide certificates for it.
The cert-controller-manager relies on DNS challenges (ACME only) for validating the domain names of the certificates.
For this purpose it creates DNSEntry custom resources (in a possible separate **dns cluster**) to be
handled by the companion dns-controller-manager from [external-dns-management](https://github.com/gardener/external-dns-management).

Currently, the `cert-controller-manager` supports certificate authorities via:

* [Automatic Certificate Management Environment (ACME)](https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment) protocol like [Let's…
