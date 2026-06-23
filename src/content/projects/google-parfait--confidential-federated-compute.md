---
repo: "google-parfait/confidential-federated-compute"
name: "confidential-federated-compute"
description: "TEE-hosted binaries for verifiable server-side computation."
url: "https://github.com/google-parfait/confidential-federated-compute"
language: "C++"
languages: ["C++", "Rust"]
languagePcts: [63, 21]
stars: 23
forks: 11
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 26
recentReleases: 0
createdAt: "2024-03-20T20:40:22Z"
lastCommitAt: "2026-06-23T23:17:38Z"
lastReleaseAt: "2026-03-11T23:18:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 65
maintainers: ["zpgong", "rakshita-tandon", "bmclarnon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2ee7e6da772d2d86341bd3f4ad2df8c86321558818330915d8fed68f5cc0424/google-parfait/confidential-federated-compute"
---

# Confidential Federated Compute

The Confidential Federated Compute project enables Federated Learning and
Analytics using
[Confidential Computing](https://en.wikipedia.org/wiki/Confidential_computing).
This repository holds publicly verifiable components that run within
[Trusted Execution Environments (TEEs)](https://en.wikipedia.org/wiki/Trusted_execution_environment)
and interact with user data. In order to run the components in this repository
on TEEs, this repository depends on the
[Project Oak](https://github.com/project-oak/oak) platform. In the Project Oak
terminology, this repository contains Trusted Applications that run on the Oak
Infrastructure.

## Design and Code Structure

The goal of this project is to give end users meaningful control over how their
data can be used when the data is uploaded to a central server. Trusted
Execution Environments allow proving what is running on a central server, and
our contribution is to design a distributed system that allows us to make claims
about a system of TEEs, some of which may not begin execution until after the
data has been uploaded, to create a "chain of trust" from the user that uploads
data to the TEEs that…
