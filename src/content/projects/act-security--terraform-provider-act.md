---
repo: "act-security/terraform-provider-act"
name: "terraform-provider-act"
description: "Terraform provider for Act Security"
readmeQualityOk: true
url: "https://github.com/act-security/terraform-provider-act"
homepage: "https://registry.terraform.io/providers/act-security/act/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["terraform", "terraform-provider", "act-security"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-09T06:15:56Z"
lastCommitAt: "2026-11-16T11:53:27Z"
lastReleaseAt: "2026-11-11T10:37:00Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 32
maintainers: ["Pobek", "act-terraform-provider-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af2877f0d34b2ca92c0cc0dd9f30b7e505e1a31426b504f4c44169ae3d6abe20/act-security/terraform-provider-act"
---

# terraform-provider-act

The Terraform provider for [Act Security](https://act.security). It manages Act deployments for AWS, Azure and GCP as code, authenticated with an Act API key.

Published as [`act-security/act`](https://registry.terraform.io/providers/act-security/act/latest) on the Terraform Registry.

## Usage

```hcl
terraform {
  required_providers {
    act = {
      source = "act-security/act"
    }
  }
}

provider "act" {}

data "act_current_identity" "this" {}
```

Create an API key in the Act console under Settings → API keys and set `ACT_CLIENT_ID` and `ACT_CLIENT_SECRET` from it. The provider learns the tenant from the key and asks the Act STS which regional API serves it, so there is no tenant ID, region or endpoint to configure.

## Development

See [CONTRIBUTING.md](https://github.com/act-security/terraform-provider-act/blob/HEAD/CONTRIBUTING.md).

## License

Mozilla Public License 2.0. See [LICENSE](https://github.com/act-security/terraform-provider-act/blob/HEAD/LICENSE).
