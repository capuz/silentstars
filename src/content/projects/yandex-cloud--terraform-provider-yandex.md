---
repo: "yandex-cloud/terraform-provider-yandex"
name: "terraform-provider-yandex"
description: "Terraform Yandex provider"
readmeQualityOk: true
url: "https://github.com/yandex-cloud/terraform-provider-yandex"
homepage: "https://www.terraform.io/docs/providers/yandex/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["terraform-provider", "yandex", "terraform"]
stars: 264
forks: 150
openIssues: 149
closedIssues: 248
watchers: 20
contributors: 117
recentReleases: 0
createdAt: "2019-02-21T21:22:10Z"
lastCommitAt: "2026-10-24T08:19:52Z"
lastReleaseAt: "2021-02-19T16:23:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 42
maintainers: ["robot-piglet", "shaltaev"]
openGraphImageUrl: "https://opengraph.githubassets.com/66ecd92c8336b675c1ab30b983f01ef304396c2b5acb9b74609e5ee6f916c7a7/yandex-cloud/terraform-provider-yandex"
---

Terraform Provider
==================

- Documentation: https://terraform-provider.yandexcloud.net

Requirements
------------

- [Terraform](https://www.terraform.io/downloads.html) 0.12+
- [Go](https://golang.org/doc/install) 1.21 (to build the provider plugin)

Building The Provider
---------------------

Clone repository to: `$GOPATH/src/github.com/yandex-cloud/terraform-provider-yandex`

```sh
$ mkdir -p $GOPATH/src/github.com/yandex-cloud; cd $GOPATH/src/github.com/yandex-cloud
$ git clone git@github.com:yandex-cloud/terraform-provider-yandex
```

Enter the provider directory and build the provider

```sh
$ cd $GOPATH/src/github.com/yandex-cloud/terraform-provider-yandex
$ make build
```

Using the provider
----------------------
If you're building the provider, follow the instructions to [install it as a plugin.](https://www.terraform.io/docs/plugins/basics.html#installing-plugins) After placing it into your plugins directory,  run `terraform init` to initialize it. Documentation about the provider specific configuration options can be found on the [provider's website](https://registry.terraform.io/providers/yandex-cloud/yandex/latest/docs).
An example of using an installed…
