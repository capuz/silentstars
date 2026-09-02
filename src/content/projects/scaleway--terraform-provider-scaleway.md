---
repo: "scaleway/terraform-provider-scaleway"
name: "terraform-provider-scaleway"
description: "Terraform Scaleway provider"
readmeQualityOk: true
url: "https://github.com/scaleway/terraform-provider-scaleway"
homepage: "https://www.terraform.io/docs/providers/scaleway/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["terraform", "terraform-provider", "scaleway"]
stars: 260
forks: 150
openIssues: 159
closedIssues: 966
watchers: 14
contributors: 158
recentReleases: 0
createdAt: "2017-06-05T20:53:58Z"
lastCommitAt: "2026-09-02T07:24:43Z"
lastReleaseAt: "2022-01-31T16:17:13Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 44
maintainers: ["estellesoulard", "dependabot[bot]", "Mia-Cross"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0485534cb45f62433eb9a69a3e58e721e7562e1aa57ad179f782cf37c41aac7/scaleway/terraform-provider-scaleway"
discussionCount: 11
---

# Terraform Provider for Scaleway

- [Provider Documentation Website](https://www.terraform.io/docs/providers/scaleway/index.html)
- Slack: [Scaleway-community Slack][slack-scaleway] ([#terraform][slack-terraform])
- [](https://goreportcard.com/report/github.com/scaleway/terraform-provider-scaleway/v2)

[slack-scaleway]: https://slack.scaleway.com/
[slack-terraform]: https://scaleway-community.slack.com/app_redirect?channel=terraform

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) 1.0
- [Go](https://golang.org/doc/install) 1.25 (to build the provider plugin)

## Building The Provider

```sh
git clone git@github.com:scaleway/terraform-provider-scaleway.git
```

Enter the provider directory and build the provider

```sh
make build
```

## Using the provider

See the [Scaleway Provider Documentation](https://registry.terraform.io/providers/scaleway/scaleway/latest/docs) to get started using the Scaleway provider.

## Developing the Provider

If you wish to work on the provider, you'll first need [Go](http://www.golang.org) installed on your machine (version 1.13+ is *required*). You'll also need to correctly setup a…
