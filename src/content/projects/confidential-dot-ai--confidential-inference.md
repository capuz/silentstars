---
repo: "confidential-dot-ai/confidential-inference"
name: "confidential-inference"
description: "Attested confidential inference integration on bare metal"
readmeQualityOk: true
url: "https://github.com/confidential-dot-ai/confidential-inference"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [69, 25]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 10
recentReleases: 10
createdAt: "2026-09-16T23:56:28Z"
lastCommitAt: "2026-09-23T08:47:44Z"
lastReleaseAt: "2026-09-21T19:30:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 30
maintainers: ["aamirrasheed"]
openGraphImageUrl: "https://opengraph.githubassets.com/310494fd9b1630c45a5de3dc18e43f5c6cbf3323bd696dd59363318b35f2e6ff/confidential-dot-ai/confidential-inference"
---

# Confidential Inference

This repository contains the public confidential-inference product. It is the
source for the OCI workloads, the TDX node image, the Kubernetes chart, the c8s
policy tools, and the attestation verifier.

Before you contribute or create a release, read the
[developer workflow](https://github.com/confidential-dot-ai/confidential-inference/blob/HEAD/docs/runbooks/developer-workflow.md).

Live environment configuration does not belong here. Operators keep machine
names, addresses, domains, resource sizes, secret paths, and deployment
receipts in a separate private repository.

## Components

- `services/gateway`: API-key checks, request limits, routing, and attestation.
- `images/sglang`: the pinned SGLang worker and router build. The same image
  runs a real model in production and a GPU-free simulator in staging.
- `services/maintenance-gateway`: the fallback API.
- `images/control-plane-node`: the reproducible ConfOS node-image inputs.
- `helm/confidential-inference`: the generic Kubernetes application chart.
- `scripts/regenerate-c8s-allowlist.py`: c8s policy generation.
- `scripts/verify-public-attestation.py`: receipt-set verification.
- `contracts`:…
