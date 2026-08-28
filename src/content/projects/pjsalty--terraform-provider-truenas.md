---
repo: "PjSalty/terraform-provider-truenas"
name: "terraform-provider-truenas"
description: "Terraform provider for TrueNAS SCALE over the JSON-RPC 2.0 WebSocket API. On the Terraform Registry."
readmeQualityOk: true
url: "https://github.com/PjSalty/terraform-provider-truenas"
homepage: "https://registry.terraform.io/providers/PjSalty/truenas/latest"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["infrastructure-as-code", "storage", "terraform", "terraform-provider", "truenas", "truenas-scale", "zfs"]
stars: 10
forks: 4
openIssues: 2
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-04-25T18:37:43Z"
lastCommitAt: "2026-08-28T15:32:20Z"
lastReleaseAt: "2026-07-01T22:30:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["PjSalty"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1217a2eed36b676cd8f07b6d35f3e48090ac0baeea3dd44565790777ceae910/PjSalty/terraform-provider-truenas"
---

# Terraform Provider for TrueNAS SCALE

Terraform provider for managing
[TrueNAS SCALE](https://www.truenas.com/truenas-scale/) storage, network,
and virtualization resources over JSON-RPC 2.0 (WebSocket). Built on
`terraform-plugin-framework`.

---

## Table of Contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [Authentication](#authentication)
- [Resources](#resources)
- [Data Sources](#data-sources)
- [Version Compatibility](#version-compatibility)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

```hcl
terraform {
  required_providers {
    truenas = {
      source  = "PjSalty/truenas"
      version = "~> 2.0"
    }
  }
}

provider "truenas" {
  url     = "https://truenas.example.com"
  api_key = var.truenas_api_key
}
```

## Quickstart

```hcl
# Create a ZFS dataset.
resource "truenas_dataset" "media" {
  name        = "media"
  pool        = "tank"
  compression = "LZ4"
  quota       = 1099511627776 # 1 TiB
  comments    = "Media library"
}

# Share it over NFS.
resource "truenas_share_nfs" "media" {
  path     = "/mnt/tank/media"
  comment  = "Media NFS share"
  networks = ["10.0.0.0/24"]…
