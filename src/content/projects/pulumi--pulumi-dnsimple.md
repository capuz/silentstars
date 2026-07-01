---
repo: "pulumi/pulumi-dnsimple"
name: "pulumi-dnsimple"
description: "A DNSimple Pulumi resource package, providing multi-language access to DNSimple"
url: "https://github.com/pulumi/pulumi-dnsimple"
language: "Makefile"
languages: ["Makefile", "Shell", "Go"]
languagePcts: [48, 29, 22]
stars: 5
forks: 2
openIssues: 1
closedIssues: 64
watchers: 18
contributors: 86
recentReleases: 0
createdAt: "2019-07-03T10:53:00Z"
lastCommitAt: "2026-07-01T07:05:24Z"
lastReleaseAt: "2021-03-23T16:54:17Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 68
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc487e2daa0293f2815dfc90a05c510c73d0303b8c1a1309755865f127161521/pulumi/pulumi-dnsimple"
---

# dnsimple Resource Provider

The dnsimple resource provider for Pulumi lets you manage dnsimple resources in your cloud programs. To use
this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/dnsimple

or `yarn`:

    $ yarn add @pulumi/dnsimple

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_dnsimple

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-dnsimple/sdk/v4

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Dnsimple

## Configuration

The following configuration points are available:

- `dnsimple:token` - (required) The DNSimple API v2 token. Please note that this must be an API v2 token. You can use 
   either an User or Account token, but an Account token is recommended. Can be sourced from `DNSIMPLE_TOKEN` environment
   variable.
- `dnsimple:account` - (required) The ID of the…
