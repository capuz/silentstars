---
repo: "rancher/dartboard"
name: "dartboard"
description: "Code, instructions and results for scalability and performance tests on the Rancher product family "
readmeQualityOk: true
url: "https://github.com/rancher/dartboard"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [38, 24]
stars: 9
forks: 15
openIssues: 25
closedIssues: 18
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2024-08-14T20:16:54Z"
lastCommitAt: "2026-08-10T05:05:47Z"
lastReleaseAt: "2024-11-12T14:23:31Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 76
maintainers: ["renovate-rancher[bot]", "git-ival", "MSpencer87"]
openGraphImageUrl: "https://opengraph.githubassets.com/77751e4da07cf0e1fbe5ebacc763036ff9abffe8ff1163e935910fa9b0b7205a/rancher/dartboard"
---

# Dartboard

A tool to run scalability and performance tests on the Rancher product family.

Supports deploying to AWS and Azure or a local Docker daemon (via k3d) for infrastructure; k3s, RKE2 and AKS as Kubernetes distributions; any recent version of Rancher.

## Usage

 - create a Definition of Alacritous and Repeatable Test (or **dart**) YAML file by adapting one of the examples in [darts](https://github.com/rancher/dartboard/blob/HEAD/darts)
 - `dartboard deploy --dart=./darts/my_dart.yaml` will:
   - deploy (virtual) infrastructure via [OpenTofu](https://opentofu.org/): the cluster Rancher runs on ("upstream"), clusters managed by Rancher ("downstream") and a special "tester" cluster where load generation and monitoring software runs
   - deploy and configure Rancher
   - execute load tests via [k6](https://k6.io/)
 - `dartboard destroy` destroys all infrastructure

Special cases:
 - `dartboard apply` only runs `tofu apply` without configuring any software (Rancher, load generation, monitoring...)
 - `dartboard load` only runs k6 load tests assuming Rancher has already been deployed
 - `dartboard get-access` returns details to access the created clusters and applications

To…
