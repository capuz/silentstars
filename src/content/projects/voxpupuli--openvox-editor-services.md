---
repo: "voxpupuli/openvox-editor-services"
name: "openvox-editor-services"
description: "OpenVox Puppet DSL Server for editors"
readmeQualityOk: true
url: "https://github.com/voxpupuli/openvox-editor-services"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
stars: 5
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 90
recentReleases: 0
createdAt: "2026-06-23T05:53:07Z"
lastCommitAt: "2026-10-30T10:55:40Z"
lastReleaseAt: "2026-07-18T08:05:55Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 26
maintainers: ["rwaffen", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a1d8a452d16c43f976bf08ac6ec053fadb02599a8d26841110617c8d0567cee/voxpupuli/openvox-editor-services"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
discussionCount: 0
---

# OpenVox Editor Services

A Ruby implementation of a [Language Server](https://github.com/Microsoft/language-server-protocol) and [Debug Server](https://github.com/microsoft/debug-adapter-protocol) for OpenVox.
The internal `Puppet` Ruby namespace and `puppet/*` protocol methods are retained for compatibility.

- [OpenVox Editor Services](#openvox-editor-services)
  - [Requirements](#requirements)
  - [Setting up editor services for development](#setting-up-editor-services-for-development)
  - [Language Server](#language-server)
    - [How to run the Language Server for Development](#how-to-run-the-language-server-for-development)
    - [How to run the Language Server in Production](#how-to-run-the-language-server-in-production)
    - [Command line arguments](#command-line-arguments)
  - [Language Server Sidecar](#language-server-sidecar)
    - [How to run the Language Server Sidecar for Development](#how-to-run-the-language-server-sidecar-for-development)
    - [Example usage](#example-usage)
      - [Confirm that the Sidecar loads correctly](#confirm-that-the-sidecar-loads-correctly)
      - [Output all default Puppet Types](#output-all-default-puppet-types)
      - [Output all…
