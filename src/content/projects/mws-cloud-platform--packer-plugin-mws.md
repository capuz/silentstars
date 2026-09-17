---
repo: "mws-cloud-platform/packer-plugin-mws"
name: "packer-plugin-mws"
description: "Packer plugin for MWS Cloud Platform Compute Builder"
readmeQualityOk: true
url: "https://github.com/mws-cloud-platform/packer-plugin-mws"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-04-22T13:48:18Z"
lastCommitAt: "2026-09-17T08:50:46Z"
lastReleaseAt: "2026-09-11T13:20:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 53
maintainers: ["Sakamoto45", "lzakharov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24dc98e6567fce2ac6162d0f3d9adfb4555ef1e1c33d9735006dafba60121be0/mws-cloud-platform/packer-plugin-mws"
---

# Packer Plugin MWS

The `MWS` multi-component plugin can be used with HashiCorp [Packer](https://www.packer.io)
to create custom images. For the full list of available features for this plugin see [docs](https://github.com/mws-cloud-platform/packer-plugin-mws/blob/HEAD/docs).

## Installation

### Using pre-built releases

#### Using the `packer init` command

Starting from version 1.7, Packer supports a new `packer init` command allowing
automatic installation of Packer plugins. Read the
[Packer documentation](https://www.packer.io/docs/commands/init) for more information.

To install this plugin, copy and paste this code into your Packer configuration .
Then, run [`packer init`](https://www.packer.io/docs/commands/init).

```hcl
packer {
  required_plugins {
    mws = {
      version = ">= 0.9.0"
      source  = "github.com/mws-cloud-platform/mws"
    }
  }
}
```

**Note: Update to Packer Plugin Installation**

With the new Packer release starting from version v1.14.0, the `packer init` command will automatically install official plugins from the [HashiCorp release site.](https://releases.hashicorp.com/)

Going forward, to use newer versions of official Packer plugins, you'll…
