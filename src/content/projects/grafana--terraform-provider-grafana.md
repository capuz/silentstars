---
repo: "grafana/terraform-provider-grafana"
name: "terraform-provider-grafana"
description: "Terraform Grafana provider"
url: "https://github.com/grafana/terraform-provider-grafana"
homepage: "https://www.terraform.io/docs/providers/grafana/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["terraform", "terraform-provider", "grafana"]
stars: 498
forks: 291
openIssues: 138
closedIssues: 655
watchers: 168
contributors: 1433
recentReleases: 0
createdAt: "2017-06-05T20:54:05Z"
lastCommitAt: "2026-07-01T07:05:08Z"
lastReleaseAt: "2021-07-01T21:23:15Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 38
maintainers: ["Duologic", "renovate-sh-app[bot]", "suntala"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a4624f0aead6be6211515c7d5ca138a015d5204034467b5c6533edb3e87e528/grafana/terraform-provider-grafana"
discussionCount: 4
---

</a>

# Terraform Provider for Grafana

- Grafana website: <https://grafana.com>
- Grafana Cloud website: <https://grafana.com/products/cloud/>
- Provider Documentation: <https://registry.terraform.io/providers/grafana/grafana/latest/docs>
- Grafana Chat: [Grafana #terraform Slack channel](https://grafana.slack.com/archives/C017MUCFJUT)

We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit changes.

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) 0.12+

## Development

If you're new to provider development, a good place to start is the [Extending
Terraform](https://www.terraform.io/docs/extend/index.html) docs.

Set up your local environment by installing [Go](http://www.golang.org). Also
[Docker](https://docs.docker.com/install/) can be used for running tests.

## Local Development with Grafana
If you develop the provider and want to test locally with your Grafana provider
1. Create a `.terraformrc` file in your operating system user directory and paste the following
```
provider_installation {
   dev_overrides {
      "grafana/grafana" = "/path/to/your/terraform-provider-grafana" # this path is the directory where the binary…
