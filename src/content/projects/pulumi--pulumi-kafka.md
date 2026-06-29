---
repo: "pulumi/pulumi-kafka"
name: "pulumi-kafka"
description: "A Kafka Pulumi resource package, providing multi-language access to Kafka"
url: "https://github.com/pulumi/pulumi-kafka"
language: "Makefile"
languages: ["Makefile", "Shell", "Go"]
languagePcts: [49, 30, 21]
stars: 18
forks: 0
openIssues: 1
closedIssues: 73
watchers: 19
contributors: 85
recentReleases: 0
createdAt: "2019-10-15T13:27:11Z"
lastCommitAt: "2026-06-29T07:23:22Z"
lastReleaseAt: "2021-01-13T20:59:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 57
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f0a9b7f6a1d822e1b6ff1ad58a7e206c29d9029659b4d5b2dba42aca09b043/pulumi/pulumi-kafka"
---

# Kafka Resource Provider

The Kafka resource provider for Pulumi lets you manage Kafka resources in your cloud programs. To use
this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/kafka

or `yarn`:

    $ yarn add @pulumi/kafka

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_kafka

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-kafka/sdk/v3

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Kafka

## Configuration

The following configuration points are available:

* kafka:bootstrapServers - (Required) A list of host:port addresses that will be used to discover the full set of alive brokers.
* kafka:caCert - (Optional) The CA certificate or path to a CA certificate file to validate the server's certificate.
* kafka:clientCert - (Optional) The client certificate or path to a file…
