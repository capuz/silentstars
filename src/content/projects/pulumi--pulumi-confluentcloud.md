---
repo: "pulumi/pulumi-confluentcloud"
name: "pulumi-confluentcloud"
description: "A Confluent Pulumi resource package, providing multi-language access to Confluent"
url: "https://github.com/pulumi/pulumi-confluentcloud"
language: "Makefile"
languages: ["Makefile", "Go", "Shell"]
languagePcts: [42, 33, 25]
stars: 9
forks: 2
openIssues: 11
closedIssues: 227
watchers: 15
contributors: 81
recentReleases: 0
createdAt: "2022-06-05T12:58:56Z"
lastCommitAt: "2026-06-30T06:50:32Z"
lastReleaseAt: "2022-11-24T00:31:25Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 98
undervaluedScore: 64
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2dbaa5423a97e7128395a5ec1be1e4b39c3a321a814d429fc56586420281b7f/pulumi/pulumi-confluentcloud"
---

# Confluent Cloud Resource Provider

The Confluent Resource Provider lets you manage [Confluent](https://confluent.cloud/) resources.

Please Note:
This provider is built from the ConfluentInc official Terraform Provider - https://github.com/confluentinc/terraform-provider-confluent

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @pulumi/confluentcloud
```

or `yarn`:

```bash
yarn add @pulumi/confluentcloud
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumi_confluentcloud
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/pulumi/pulumi-confluentcloud/sdk
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumi.ConfluentCloud
```

## Configuration

The following configuration points are available for the `confluent cloud` provider:

- `confluentcloud:cloudApiKey` (environment: `CONFLUENT_CLOUD_API_KEY`) - the API key for `Confluent Cloud`
- `confluentcloud:cloudApiSecret`…
