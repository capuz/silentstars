---
repo: "sous-chefs/dhcp"
name: "dhcp"
description: "Development repository for the dhcp cookbook"
readmeQualityOk: true
url: "https://github.com/sous-chefs/dhcp"
homepage: "https://supermarket.chef.io/cookbooks/dhcp"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [87]
topics: ["chef-cookbook", "dhcp", "chef-resource", "chef", "hacktoberfest", "managed-by-terraform"]
stars: 27
forks: 44
openIssues: 1
closedIssues: 40
watchers: 21
contributors: 25
recentReleases: 0
createdAt: "2012-07-17T18:53:04Z"
lastCommitAt: "2026-11-12T11:42:55Z"
lastReleaseAt: "2023-03-23T21:41:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 88
undervaluedScore: 45
maintainers: ["damacus", "renovate[bot]", "kitchen-porter"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccbcb6de17b2c3bf1ac1c0754a0281af277b80dadb4e5856e67311f889a74419/sous-chefs/dhcp"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/sous-chefs"]
---

# DHCP Cookbook

Installs and configures ISC DHCP server in both DHCP and DHCPv6 mode.

- Supports setting up Master/Slave ISC DHCP failover (IPv4 only).
- Includes Support for DDNS
- Includes resources for managing:
  - Package installation
  - Service configuration and management
  - Global configuration
  - Hosts
  - Groups
  - Subnets
  - Shared subnets

Version 7.0.0 constitutes a major change and rewrite, please see [UPGRADING.md](https://github.com/sous-chefs/dhcp/blob/HEAD/UPGRADING.md).

For the resource completion release, see [migration.md](https://github.com/sous-chefs/dhcp/blob/HEAD/migration.md). ISC DHCP
is upstream end of life; this cookbook manages distribution-provided packages
and preserves the ISC configuration API. It does not install Kea.

## Maintainers

This cookbook is maintained by the Sous Chefs. The Sous Chefs are a community of Chef cookbook maintainers working together to maintain important cookbooks. If you’d like to know more please visit [sous-chefs.org](https://sous-chefs.org/) or come chat with us on the Chef Community Slack in [#sous-chefs](https://chefcommunity.slack.com/messages/C2V7B88SF).

## Platforms

- Debian / Ubuntu
- RHEL/CentOS and…
