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
stars: 11
forks: 11
openIssues: 63
closedIssues: 365
watchers: 1
contributors: 14
recentReleases: 10
createdAt: "2026-10-24T05:16:03Z"
lastCommitAt: "2026-11-25T03:18:18Z"
lastReleaseAt: "2026-10-27T12:09:27Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "community_hub", "fork_magnet"]
healthScore: 97
undervaluedScore: 72
maintainers: ["jamesconwaydev", "foothillsdigital", "SatriaBagusNurhadianto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431839745/cc1f8dc2-93d7-4a54-9b3c-d1eb50380ecf"
discussionCount: 139
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

## What a plan looks like

Somebody changed nginx's port by hand on `web1`. The next `conn3x plan` reads the file back, shows the line that moved, and queues the reload that goes with it:
