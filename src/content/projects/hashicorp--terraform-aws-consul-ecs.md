---
repo: "hashicorp/terraform-aws-consul-ecs"
name: "terraform-aws-consul-ecs"
description: "Consul Service Mesh on AWS ECS (Elastic Container Service)"
readmeQualityOk: true
url: "https://github.com/hashicorp/terraform-aws-consul-ecs"
homepage: "https://www.consul.io/docs/ecs"
language: "HCL"
languages: ["HCL", "Go"]
languagePcts: [54, 46]
topics: ["consul", "servicemesh", "ecs"]
stars: 55
forks: 33
openIssues: 11
closedIssues: 23
watchers: 17
contributors: 143
recentReleases: 0
createdAt: "2021-05-11T17:13:48Z"
lastCommitAt: "2026-07-08T05:40:40Z"
lastReleaseAt: "2022-06-21T17:45:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 43
maintainers: ["dependabot[bot]", "paras-gupta2", "krutibaraiya"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e5a463c669887a85456f8dcb55fb816f67e0c84c41a584b3581d52e9dd8e82e/hashicorp/terraform-aws-consul-ecs"
---

# Consul AWS ECS Modules

This repo contains a set of modules for deploying Consul Service Mesh on
AWS ECS (Elastic Container Service).

## Documentation

See https://developer.hashicorp.com/consul/docs/ecs for full documentation.

## Architecture

Each task is created via the `mesh-task` module. This module adds
additional containers known as sidecar containers to your task definition.

Specifically, it adds the following containers:

* `consul-ecs-mesh-init` – This is the first container that starts up inside an ECS task. This is short lived.
  * At startup it connects to the available Consul servers and performs a login with the configured IAM Auth method to obtain an ACL token with appropriate privileges.
  * Using the token, it registers the service and proxy entities to Consul's catalog.
  * It then bootstraps the configuration JSON required by the Consul dataplane container and writes it to a shared volume.
  * After this point the container exits.
* `consul-dataplane` – Runs for the full lifecycle of the task. This container runs
  the [Consul dataplane](https://github.com/hashicorp/consul-dataplane) that configures and starts the Envoy proxy, which controls all the…
