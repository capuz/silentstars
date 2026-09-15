---
repo: "observeinc/terraform-provider-observe"
name: "terraform-provider-observe"
description: "Terraform Observe provider"
readmeQualityOk: true
url: "https://github.com/observeinc/terraform-provider-observe"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 8
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 48
recentReleases: 0
createdAt: "2019-12-13T17:39:24Z"
lastCommitAt: "2026-09-15T08:54:18Z"
lastReleaseAt: "2023-12-06T20:21:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 87
maintainers: ["sfc-gh-abpappu", "obs-gh-abhinavpappu", "georgios-observeinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/286f6e4d70bc6f4f52e1c36507afe899f407117857a8782fd2b94989ddde2c3c/observeinc/terraform-provider-observe"
---

# Observe Terraform Provider

## Requirements

-	[Terraform](https://www.terraform.io/downloads.html) 1.x
-	[Go](https://golang.org/doc/install) 1.18 (to build the provider plugin)

## Building The Provider

```sh
git clone git@github.com:observeinc/terraform-provider-observe.git
```

When it comes to building you have two options:

#### `go install`

If you don't mind installing the development version of the provider globally, you can use `go install` in the provider directory which will build and link the binary into your `$GOBIN` directory.

```sh
go install
```

#### `go build`

If you would rather install the provider locally and not impact the stable version you already have installed, you can use the `~/.terraformrc` file to tell Terraform where your provider is. You do this by building the provider using Go.

```sh
go build -o terraform-provider-observe
```

And then update your `~/.terraformrc` file to point at the location
you've built it.

```
provider_installation {
dev_overrides {
  "observeinc/observe" = "path/to/terraform-provider-observe/terraform-provider-observe"
}
# For all other providers, install them directly from their origin provider
# registries as…
