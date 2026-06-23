---
repo: "elastic/terraform-provider-elasticstack"
name: "terraform-provider-elasticstack"
description: "Terraform provider for Elastic Stack"
url: "https://github.com/elastic/terraform-provider-elasticstack"
homepage: "https://registry.terraform.io/providers/elastic/elasticstack/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["elasticsearch", "terraform-provider", "elasticstack"]
stars: 208
forks: 145
openIssues: 62
closedIssues: 1219
watchers: 210
contributors: 2445
recentReleases: 0
createdAt: "2021-10-27T10:31:30Z"
lastCommitAt: "2026-06-23T23:29:58Z"
lastReleaseAt: "2023-05-30T00:21:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 43
maintainers: ["github-actions[bot]", "tobio", "elastic-renovate-prod[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf473a539c22c0711bd7d000acb3c7814967c59df36a61632e7ea4788828642d/elastic/terraform-provider-elasticstack"
---

# Terraform Provider Elastic Stack

## Use of the provider
The Elastic Stack provider allows you to manage and configure the Elastic stack (Elasticsearch, Kibana, etc) as code using `terraform`.

## Getting started

__The provider supports Elastic Stack versions 8.0+__

It is recommended to setup at least minimum security, https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html
in order to interact with the Elasticsearch and be able to use the provider's full capabilities.

Configuring [required providers](https://www.terraform.io/docs/language/providers/requirements.html#requiring-providers):

```terraform
terraform {
  required_version = ">= 1.0.0"
  required_providers {
    elasticstack = {
      source  = "elastic/elasticstack"
      version = "~>0.9"
    }
  }
}
```

### Authentication

The Elasticstack provider offers few different ways of providing credentials for authentication.
The following methods are supported:

* Static credentials
* Environment variables

#### Static credentials

Default static credentials can be provided by adding the `username`, `password` and `endpoints` in `elasticsearch` block:

```terraform
provider…
