---
repo: "env0/terraform-provider-env0"
name: "terraform-provider-env0"
description: "Terraform Provider for env0"
readmeQualityOk: true
url: "https://github.com/env0/terraform-provider-env0"
homepage: "https://env0.com"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["terraform", "terraform-provider", "opentofu", "opentofu-provider"]
stars: 39
forks: 15
openIssues: 10
closedIssues: 409
watchers: 10
contributors: 37
recentReleases: 0
createdAt: "2021-03-06T18:19:47Z"
lastCommitAt: "2026-09-18T14:02:51Z"
lastReleaseAt: "2021-06-22T11:50:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 61
maintainers: ["dcelasun", "yarivg", "liranfarage89"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fa38d70d0c7424ff3956790d4996145f99fbcac5a2c2f9e5c07499abf496d2f/env0/terraform-provider-env0"
---

</a>

# Terraform Provider for env0

- [Documentation](https://search.opentofu.org/provider/env0/env0/latest)
- [Usage Examples](https://github.com/env0/terraform-provider-env0/tree/main/examples)

## Quick Start

```terraform
terraform {
  required_providers {
    env0 = {
      source = "env0/env0"
    }
  }
}

provider "env0" {}

data "env0_project" "default_project" {
  name = "My First Project"
}

resource "env0_template" "example" {
  name        = "example"
  description = "Example template"
  repository  = "https://github.com/env0/templates"
  path        = "aws/hello-world"
}

resource "env0_configuration_variable" "in_a_template" {
  name        = "VARIABLE_NAME"
  value       = "some value"
  template_id = env0_template.tested1.id
}
```

## Authentication

1. Generate an `api_key` and `api_secret` from the Organization Settings page.
   See [here](https://developer.env0.com/docs/api/YXBpOjY4Njc2-env0-api#creating-an-api-key).

2. These can be provided by one of two methods:

   1. Set `ENV0_API_KEY` and `ENV0_API_SECRET` environment variables, and just declaring the provider with no parameters:

   ```terraform
      provider "env0" {}
   ```

   2. Specify these fields…
