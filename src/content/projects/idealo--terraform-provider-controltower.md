---
repo: "idealo/terraform-provider-controltower"
name: "terraform-provider-controltower"
description: "Use AWS Control Tower from Terraform"
url: "https://github.com/idealo/terraform-provider-controltower"
homepage: "https://registry.terraform.io/providers/idealo/controltower"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["terraform", "terraform-provider", "aws"]
stars: 26
forks: 11
openIssues: 5
closedIssues: 16
watchers: 5
contributors: 49
recentReleases: 0
createdAt: "2021-05-19T19:07:04Z"
lastCommitAt: "2026-06-25T06:42:17Z"
lastReleaseAt: "2025-01-02T09:16:42Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 39
maintainers: ["renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dc7b5aad6c00aa5cd35360555a55231aa8f8193dab50d07fdcd1b662d8ece42/idealo/terraform-provider-controltower"
---

# Control Tower Terraform Provider (terraform-provider-controltower)

## Documentation

You can browse documentation on the [Terraform provider registry](https://registry.terraform.io/providers/idealo/controltower/latest/docs).

## Developing the Provider

If you wish to work on the provider, you'll first need [Go](http://www.golang.org) installed on your machine.

To compile the provider, run `make build`. This will build the provider and put the provider binary in the `bin` directory under the project's root folder.

To generate or update documentation, run `go generate`.

In order to run the full suite of Acceptance tests, run `make testacc`.

*Note:* Acceptance tests create real resources, and often cost money to run.

```sh
$ make testacc
```

## Testing the Provider Locally

You can test the provider locally before creating a PR by following the steps below:

```sh
$ make build # make sure to have the build version in the executable name as a postfix e.g. terraform-provider-controltower_v2.0.0
```
create a `~/.terraformrc` file your home directory with the following content:
```hcl
provider_installation {
  dev_overrides {
    "registry.terraform.io/idealo/controltower" =…
