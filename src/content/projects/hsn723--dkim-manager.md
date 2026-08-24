---
repo: "Hsn723/dkim-manager"
name: "dkim-manager"
description: "Manage DKIM keys in a Kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/Hsn723/dkim-manager"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 5
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-01-21T05:47:53Z"
lastCommitAt: "2026-08-24T04:21:54Z"
lastReleaseAt: "2022-06-07T10:22:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 89
maintainers: ["dependabot[bot]", "Hsn723", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c8856dffe3ad2230054247eafad539ca878f221931e06793c7602ef9be5077/Hsn723/dkim-manager"
---

# dkim-manager
`dkim-manager` is a Kubernetes controller for creating DKIM keys.

## Motivation
When sending mail from inside a Kubernetes cluster, you might want to sign outgoing emails with a DKIM signature. Setting up DKIM involves placing a private key for the DKIM signer to consume, and registering a DNS record containing the public key. Doing so manually can be a chore, and in some environments it is not acceptable to create private keys locally. `dkim-manager` aims to facilitate this process.

## Features
`dkim-manager` is used in combination with [external-dns](https://github.com/kubernetes-sigs/external-dns). When a DKIM key is requested via the `DKIMKey` custom resource, `dkim-manager` creates a key pair, and creates two resources:

- a `Secret` containing the private key, that the mailer pod can mount and consume
- a `DNSEndpoint` containing the public key and other necessary information for `external-dns` to create the DNS record
- RSA (1024-bit, 2048-bit, 4096-bit) and ed25519 keys are supported
    - 2048-bit RSA is selected as a sensible default

It is recommended to create a delegated subdomain for the sole purpose of storing DKIM records (eg: `dkim.example.com`)…
