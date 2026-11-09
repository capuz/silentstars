---
repo: "gitpod-io/terraform-google-ona-runner"
name: "terraform-google-ona-runner"
description: "Terraform module to deploy Ona GCP Runner"
readmeQualityOk: true
url: "https://github.com/gitpod-io/terraform-google-ona-runner"
language: "HCL"
languages: ["HCL"]
languagePcts: [89]
stars: 5
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-03-27T10:53:44Z"
lastCommitAt: "2026-11-09T00:53:58Z"
lastReleaseAt: "2026-07-07T11:44:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 69
maintainers: ["kylos101"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c94f8c1a4c64c898c1951df080eb3bbf1f3e632febd1c4518b431866d9ce54f/gitpod-io/terraform-google-ona-runner"
---

# Ona GCP Runner

This is the Terraform module for the Ona GCP Runner. It deploys an
[Ona](https://ona.com) runner in your Google Cloud VPC, where each development
environment runs as a Compute Engine instance inside your project — source code
and credentials never leave your infrastructure.

> GCP Runners require an [Enterprise plan](https://ona.com/pricing).
> To get access, [contact our sales](https://ona.com/contact/sales).

Refer to [the Ona documentation](https://ona.com/docs/ona/runners/gcp/overview)
for setup instructions, configuration options, and troubleshooting.

---

---

## Requirements

The root module requires Terraform 1.11+, Google and Google Beta providers 7.6+
(below 8.0), and TLS provider 4.4+ (below 5.0). These versions support write-only
certificate keys and ephemeral Secret Manager reads for internal runner TLS.

When upgrading an existing deployment, review the
[Google provider 7 upgrade guide](https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/version_7_upgrade)
and inspect a plan before applying. Keep the deployment's provider lockfile
and update it intentionally with `terraform init -upgrade`.

## Upgrading

For an existing 3.x…
