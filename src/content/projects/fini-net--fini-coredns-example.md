---
repo: "fini-net/fini-coredns-example"
name: "fini-coredns-example"
description: "Coredns with dnscontrol example includes optional containerization 📛🌤"
readmeQualityOk: true
url: "https://github.com/fini-net/fini-coredns-example"
language: "Shell"
languages: ["Shell"]
languagePcts: [69]
topics: ["coredns", "dns-server", "dnscontrol", "example", "podman-container"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-06-15T11:51:08Z"
lastCommitAt: "2026-08-18T04:08:26Z"
lastReleaseAt: "2026-08-06T12:21:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 79
maintainers: ["dependabot[bot]", "chicks-net", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e8d356a839cedc15a8c4d8fbe1535e571b2091634c185eed2c4f1d6ac35613/fini-net/fini-coredns-example"
---

# FINI coredns example

A complete example demonstrating how to use
[DNSControl](https://github.com/DNSControl/dnscontrol) to generate DNS zone
files and serve them with [CoreDNS](https://coredns.io/) in a container.

## What's Included

This repository provides:

- **JavaScript DNS Configuration**: Define DNS records using DNSControl's
  JavaScript syntax for `example.com` and `example.org` domains
- **Automated Zone File Generation**: Convert JavaScript configurations to BIND
  zone files with `just push`
- **Containerized DNS Server**: Ready-to-run CoreDNS container serving the generated zones
- **Automated Testing**: Go test suite validating DNS responses for 10+ specific records
- **Development Workflow**: Complete `just` command recipes for building, testing, and deploying
- **GitHub Container Registry**: Pre-built container images available at
  `ghcr.io/fini-net/fini-coredns-example`

## Quick Start

1. **Generate zone files**: `just push` (uses DNSControl to create BIND files from JavaScript)
2. **Build container**: `just build_con` (creates local container with CoreDNS + zone files)
3. **Start DNS server**: `just run_con` (runs container on port 1029)
4. **Test…
