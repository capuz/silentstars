---
repo: "hemzaz/tf-atmos"
name: "tf-atmos"
description: "Basic terraform structure with atmos toolchain"
readmeQualityOk: true
url: "https://github.com/hemzaz/tf-atmos"
language: "HCL"
languages: ["HCL", "Python"]
languagePcts: [66, 26]
stars: 6
forks: 1
openIssues: 5
closedIssues: 121
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-26T18:00:40Z"
lastCommitAt: "2026-11-13T18:30:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 79
maintainers: ["hemzaz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6078ec179eb76c677109e95e121f58336d9123b87758be3e8ed46f31a22a9a7b/hemzaz/tf-atmos"
---

# Terraform Atmos Infrastructure

AWS infrastructure for the `fnx` tenant: Terraform root modules composed into stacks with
[Atmos](https://atmos.tools/), deployed by Atmos workflows locally and Atmos Native CI in GitHub
Actions. Operating it (bootstrap, deploy, state, DR) is in [docs/OPERATIONS.md](https://github.com/hemzaz/tf-atmos/blob/HEAD/docs/OPERATIONS.md).

The repository follows Cloud Posse: when a
[Cloud Posse component](https://github.com/cloudposse-terraform-components) or module already
models something, copy its variable names, types and defaults; use typed objects, never
`map(any)`; document every deviation in a comment beside the code, naming the upstream source.

## Layout

```
atmos.yaml               Atmos config: version constraint, paths, name_template, Native CI, scaffolds
components/terraform/    63 root modules (47 hand-written, 16 vendored; + _library/ shared modules and account-map/, Cloud Posse's vendored iam-roles module, which the vendored account-map-bypass providers mixin bypasses); each has a README
stacks/orgs/fnx/         org defaults (_defaults.yaml: tags, Terraform version, S3 backend) and the stacks
stacks/catalog/          abstract component…
