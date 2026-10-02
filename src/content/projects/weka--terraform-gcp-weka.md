---
repo: "weka/terraform-gcp-weka"
name: "terraform-gcp-weka"
description: "Create weka cluster on GCP using TF"
readmeQualityOk: true
url: "https://github.com/weka/terraform-gcp-weka"
language: "HCL"
languages: ["HCL", "Go"]
languagePcts: [57, 37]
stars: 6
forks: 8
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2022-05-25T10:27:03Z"
lastCommitAt: "2026-10-02T10:00:33Z"
lastReleaseAt: "2022-09-15T16:11:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 58
undervaluedScore: 57
maintainers: ["assafgi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f21898b4524b386db8aff8988ba902a8d03c05b058300582542a793ec12949f1/weka/terraform-gcp-weka"
---

# GCP-WEKA deployment Terraform module
The GCP-WEKA Deployment Terraform module simplifies the creation of WEKA deployments on the Google Cloud Platform (GCP). It allows you to efficiently manage resources such as launch templates, cloud functions, workflows, and schedulers. Using the Terraform module establishes a process that automatically launches instances based on the specified cluster size.

<br>**Scope:** This README describes the Terraform module’s configuration files. For the introduction and deployment workflows, refer to **WEKA installation on GCP** in [WEKA documentation](https://docs.weka.io).

## Network deployment options
When deploying WEKA on GCP, you have two options for network configuration:

* Use an existing network:
<br>If you choose this option, WEKA uses your existing network resources.
These resources include a Virtual Private Cloud (VPC), subnets, security groups (firewalls), private DNS zones, and VPC access connectors.
Ensure that you provide the necessary network parameters when using an existing network.

* Automatically create network resources:
<br>Alternatively, WEKA can create the required network resources for you.
This includes setting up a…
