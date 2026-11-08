---
repo: "conn3xorg/conn3x"
name: "conn3x"
description: "One binary to provision and configure your infrastructure."
readmeQualityOk: true
url: "https://github.com/conn3xorg/conn3x"
homepage: "https://conn3x.org"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ansible", "automation", "cli", "configuration-management", "devops", "drift-detection", "go", "hcl", "iac", "infrastructure-as-code"]
stars: 6
forks: 8
openIssues: 102
closedIssues: 39
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2026-10-24T05:16:03Z"
lastCommitAt: "2026-11-08T14:14:28Z"
lastReleaseAt: "2026-10-27T12:09:27Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "community_hub", "fork_magnet"]
healthScore: 85
undervaluedScore: 68
maintainers: ["jamesconwaydev", "foothillsdigital", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431839745/cc1f8dc2-93d7-4a54-9b3c-d1eb50380ecf"
discussionCount: 137
---

Conn3x creates your servers and sets them up, from one tool. You write one configuration
for the cloud resources and for the packages, files and services on them. `conn3x plan`
shows every change before it's made, and `conn3x apply` makes it. It works on servers you
already run, too.

That job usually takes two tools: Terraform or OpenTofu to create the machine, then
Ansible to set it up, plus the glue scripts and inventory files that hold the two
together. Conn3x does it from one binary, with one plan and one state, its record of what
it manages. We call that an IaCC tool: infrastructure as code and configuration management
in one plan. [Here's why that matters.](https://conn3x.org/blog/why-conn3x)

## Install

Linux and macOS, amd64 and arm64. Every release is signed and comes with SBOMs;
[the docs](https://docs.conn3x.org/install) show how to check one.

On macOS, with Homebrew:

```sh
brew install conn3xorg/tap/conn3x
```

Or download a release:

```sh
VERSION=0.9.0 OS=linux ARCH=amd64   # or darwin / arm64
curl -fsSLO "https://github.com/conn3xorg/conn3x/releases/download/v${VERSION}/conn3x_${VERSION}_${OS}_${ARCH}.tar.gz"
tar -xzf "conn3x_${VERSION}_${OS}_${ARCH}.tar.gz"…
