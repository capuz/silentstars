---
repo: "gexec/gexec"
name: "gexec"
description: "Generic execution platform for Ansible/OpenTofu/Terraform"
readmeQualityOk: true
url: "https://github.com/gexec/gexec"
homepage: "https://gexec.eu"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 21]
topics: ["ansible", "gexec", "opentofu", "terraform"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-02T09:58:33Z"
lastCommitAt: "2026-07-12T06:18:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 61
maintainers: ["renovate[bot]", "tboerger"]
openGraphImageUrl: "https://opengraph.githubassets.com/3520f1de2a0ff35be032db019c1929ecd5d130e3470fce333f4f600a99a59979/gexec/gexec"
discussionCount: 0
---

# Gexec

> [!CAUTION]
> This project is in active development and does not provide any stable release
> yet, you can expect breaking changes until our first real release!

With Gexec we are building a generic execution platform for Ansible, OpenTofu
and Terraform. Besides that it should be possible to execute any kind of script
which is supported by [Asdf][asdf] plugins. Some plugins are installed as part
of the containers, if you are installing this project differently it is up to
you to install and configure [Asdf][asdf].

## Install

You can download prebuilt binaries from the [GitHub releases][releases] or from
our [download site][downloads]. Besides that we also prepared repositories for
DEB and RPM packages which can be found at [Cloudsmith][pkgrepo]. If you prefer
to use containers you could use our images published on [GHCR][ghcr]. You are a
Mac user? Just take a look at our [homebrew formula][homebrew]. If you need
further guidance how to install this take a look at our [documentation][docs].

Package repository hosting is graciously provided by [Cloudsmith][cloudsmith].
Cloudsmith is the only fully hosted, cloud-native, universal package management
solution, that enables…
