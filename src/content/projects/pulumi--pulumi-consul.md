---
repo: "pulumi/pulumi-consul"
name: "pulumi-consul"
description: "A Consul Pulumi resource package, providing multi-language access to HashiCorp Consul"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-consul"
language: "Makefile"
languages: ["Makefile", "Shell", "Go"]
languagePcts: [43, 26, 22]
stars: 9
forks: 2
openIssues: 0
closedIssues: 51
watchers: 20
contributors: 82
recentReleases: 0
createdAt: "2019-10-28T11:52:43Z"
lastCommitAt: "2026-07-31T06:28:41Z"
lastReleaseAt: "2021-01-29T19:54:19Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 63
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/da0cf60b517325ccc6d23740ecb93b62cba3f07e4c25979814c7d11fd21f1291/pulumi/pulumi-consul"
---

# Hashicorp Consul Resource Provider

The Consul resource provider for Pulumi lets you manage Consul resources in your cloud programs. To use
this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/consul

or `yarn`:

    $ yarn add @pulumi/consul

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_consul

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-consul/sdk/v3

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Consul

## Configuration

The following configuration points are available:

- `consul:address` - (Optional) The HTTP(S) API address of the agent to use. Defaults to `127.0.0.1:8500`.
- `consul:scheme` - (Optional) The URL scheme of the agent to use (`http` or `https`). Defaults to `http`.
- `consul:httpAuth` - (Optional) HTTP Basic Authentication credentials to be used when…
