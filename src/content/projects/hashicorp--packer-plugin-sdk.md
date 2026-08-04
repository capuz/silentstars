---
repo: "hashicorp/packer-plugin-sdk"
name: "packer-plugin-sdk"
description: " Packer Plugin SDK enables building Packer plugins (builders, provisioners, or post-processors) to manage any service providers or custom in-house solutions "
readmeQualityOk: true
url: "https://github.com/hashicorp/packer-plugin-sdk"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 42
forks: 61
openIssues: 34
closedIssues: 23
watchers: 5
contributors: 190
recentReleases: 0
createdAt: "2020-10-29T23:58:49Z"
lastCommitAt: "2026-08-04T06:11:44Z"
lastReleaseAt: "2024-06-18T16:32:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 59
maintainers: ["tanmay-hc", "tenthirtyam", "anurag5sh"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f95f023392197040de0f3ccefc8add93a909dbcec680fc0cc89e15adbfc9d9f/hashicorp/packer-plugin-sdk"
---

# Packer Plugin SDK

This SDK enables building Packer plugins. This allows Packer's users to use both the officially-supported builders, provisioners, and post-processors, and custom in-house solutions.

Packer itself is a tool for building identical machine images for multiple platforms from a single source configuration. You can find more about Packer on its [website](https://www.packer.io) and [its GitHub repository](https://github.com/hashicorp/packer).

## Packer CLI Compatibility

Packer v1.7.0 or later is needed for this SDK. Versions of Packer prior to that release are still compatible with third-party plugins, but the plugins should use the plugin tooling from inside earlier versions of Packer to ensure complete API compatibility.

## Go Compatibility

The Packer Plugin SDK follows Go’s official [support policy](https://go.dev/doc/devel/release#policy).
Refer to [`go.mod`](https://github.com/hashicorp/packer-plugin-sdk/blob/HEAD/go.mod) for the minimum required Go version.

## Getting Started

See the [Extending Packer](https://www.packer.io/docs/plugins/creation#extending-packer) docs for a guided tour of plugin development.

## Documentation

See the [Extending…
