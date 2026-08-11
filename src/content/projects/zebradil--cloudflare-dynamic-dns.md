---
repo: "Zebradil/cloudflare-dynamic-dns"
name: "cloudflare-dynamic-dns"
description: "Dynamic DNS client for Cloudflare with IPv6/IPv4 support"
readmeQualityOk: true
url: "https://github.com/Zebradil/cloudflare-dynamic-dns"
language: "Go"
languages: ["Go", "Nix"]
languagePcts: [72, 24]
topics: ["cloudflare", "dns", "dynamic-dns", "dynamic-dns-client", "systemd-timer"]
stars: 107
forks: 13
openIssues: 1
closedIssues: 27
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-08-22T22:08:32Z"
lastCommitAt: "2026-08-11T04:49:13Z"
lastReleaseAt: "2023-08-30T02:26:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 47
maintainers: ["renovate[bot]", "Zebradil", "zebradil-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/68a91977cdf2da518ca7d755628be9692224f6479213c5cbb4e1cf4acb73ebdb/Zebradil/cloudflare-dynamic-dns"
---

# Dynamic DNS client for Cloudflare

A CLI tool for updating A/AAAA record at Cloudflare DNS with the currently detected address of the specified network interface.

## Features

- Supports:
  - IPv4 and IPv6
  - Multiple domains with the same address
  - Multiple hosts in the same domain
- Tries to be smart about selecting the address to use
- Includes systemd service and timer files for automation
- Can be run in a Docker container
- Configuration via command line arguments, config file or environment variables

## Usage

The rest of this section is the output of `cloudflare-dynamic-dns --help`.

<pre>

Selects an address from the specified network interface or via an external
command and updates A or AAAA records at Cloudflare for the configured domains.
Supports both IPv4 and IPv6.

Required configuration options
--------------------------------------------------------------------------------

--iface:   network interface name to look up for an address
  or
--ipcmd:   shell command to run to get the address, should return one address
           per line. Uses https://github.com/mvdan/sh as the shell.
           Examples:
             - curl -fsSL https://api6.ipify.org…
