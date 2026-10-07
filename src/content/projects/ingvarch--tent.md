---
repo: "ingvarch/tent"
name: "tent"
description: "Provision and operate HashiCorp Nomad clusters on cloud providers: kops for Nomad. Vultr first."
readmeQualityOk: true
url: "https://github.com/ingvarch/tent"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["cli", "cluster-management", "devops", "golang", "hashicorp-nomad", "hetzner-cloud", "infrastructure-as-code", "nomad", "provisioning", "vultr"]
stars: 5
forks: 0
openIssues: 43
closedIssues: 95
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-09-25T09:09:43Z"
lastCommitAt: "2026-10-07T10:30:44Z"
lastReleaseAt: "2026-09-28T13:02:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 54
maintainers: ["ingvarch", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e948f292cba1b0ac16d10077d4a4a539e544dea7b42f29c6d215a749a165482/ingvarch/tent"
---

# tent

**tent** is a command-line tool that provisions and operates [HashiCorp Nomad](https://developer.hashicorp.com/nomad)
clusters on cloud providers. It aims to be what [kops](https://github.com/kubernetes/kops) is for Kubernetes. A nomad
pitches a tent anywhere; tent pitches a Nomad cluster on any cloud.

> **Status: early development (milestone M2 in progress).** `tent update cluster --yes` builds a running Nomad
> cluster on [Vultr](https://www.vultr.com): servers with a leader, ACLs bootstrapped and clients registered, and it
> scrubs a node's keys from its user data once the node has joined. `tent export nomad`, `tent ui` and `tent validate
> cluster` give you access to the cluster and check it. It is not for production yet. Vultr is the first
> provider (it also hosts the E2E suite), then [Hetzner Cloud](https://www.hetzner.com/cloud). AWS is planned.

## What works now

- **A declarative cluster spec** (`Cluster` + `NodeGroup`) in a state store: a local directory or an S3-compatible
  bucket. `tent create`, `get`, `edit` and `replace` manage it.
- **Plan and apply on Vultr** with `tent update cluster [--yes]`: the VPC, the firewall groups, the SSH keys, each
  node…
