---
repo: "pulumi/pulumi-akamai"
name: "pulumi-akamai"
description: "A Akamai Pulumi resource package, providing multi-language access to Akamai"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-akamai"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [50, 28]
stars: 6
forks: 2
openIssues: 3
closedIssues: 141
watchers: 17
contributors: 80
recentReleases: 0
createdAt: "2020-08-13T11:12:04Z"
lastCommitAt: "2026-07-14T05:54:41Z"
lastReleaseAt: "2021-04-12T17:28:19Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 67
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "guineveresaenger"]
openGraphImageUrl: "https://opengraph.githubassets.com/64136ed97411189f41b56e2de0179f495d334dbffbc01b1fd9319baea4095dd7/pulumi/pulumi-akamai"
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
