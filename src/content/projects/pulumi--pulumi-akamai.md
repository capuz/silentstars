---
repo: "pulumi/pulumi-akamai"
name: "pulumi-akamai"
description: "A Akamai Pulumi resource package, providing multi-language access to Akamai"
url: "https://github.com/pulumi/pulumi-akamai"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [52, 29]
stars: 6
forks: 2
openIssues: 3
closedIssues: 141
watchers: 17
contributors: 81
recentReleases: 0
createdAt: "2020-08-13T11:12:04Z"
lastCommitAt: "2026-07-04T06:12:16Z"
lastReleaseAt: "2021-04-12T17:28:19Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 67
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "guineveresaenger"]
openGraphImageUrl: "https://opengraph.githubassets.com/e43503e5ceb9302b2195228b8e83380452700bd9caeb5f347b46f3c71352bcd3/pulumi/pulumi-akamai"
---

# Akamai Resource Provider

The Akamai Resource Provider lets you manage Akamai resources.

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/akamai

or `yarn`:

    $ yarn add @pulumi/akamai

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_akamai

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-akamai/sdk/v9

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Akamai

## Configuration

The following configuration options are available

* `akamai:edgerc` - (Optional) The location of the `.edgerc` file containing credentials. Default: `$HOME/.edgerc`.
* `akamai:propertySection` - (Optional) The credential section to use for the Property Manager API (PAPI). Default `default`.
* `akamai:dnsSection` - (Optional) The credential section to use for the Config DNS API. Default `default`.
* `akamai:gtmSection` - (Optional) The credential section to use for the Config…
