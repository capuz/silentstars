---
repo: "frenck/python-tailscale"
name: "python-tailscale"
description: "Asynchronous client for the Tailscale API."
readmeQualityOk: true
url: "https://github.com/frenck/python-tailscale"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["tailscale", "api", "client", "vpn", "wireguard"]
stars: 67
forks: 22
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2021-11-15T22:46:38Z"
lastCommitAt: "2026-10-10T10:05:22Z"
lastReleaseAt: "2023-11-04T21:20:13Z"
status: "thriving"
tags: ["funded"]
healthScore: 93
undervaluedScore: 49
maintainers: ["frenck", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f807d9ad8063b973d84d59e928e76edbfa7af6e5234530d6986588eebec89d1f/frenck/python-tailscale"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
---

# Python: Asynchronous client for the Tailscale API

Asynchronous Python client for the Tailscale API.

## About

This package allows you to control and monitor Tailscale clients
programmatically. It is mainly created to allow third-party programs to
integrate with Tailscale.

An excellent example of this might be Home Assistant, which allows you to write
automations based on the status of your Tailscale network devices.

## Installation

```bash
pip install tailscale
```

To install with the optional CLI:

```bash
pip install "tailscale[cli]"
```

## CLI

The optional CLI lets you query and manage your tailnet directly from
the terminal. The `--api-key` option can also be set via the
`TAILSCALE_API_KEY` environment variable.

```bash
# Set credentials once via environment variable
export TAILSCALE_API_KEY="tskey-api-..."

# List all devices (includes node IDs for use with other commands)
tailscale devices

# Show detailed information for a single device
tailscale device nSRVBN3CNTRL

# Show subnet routes for a device
tailscale routes nSRVBN3CNTRL

# Authorize / deauthorize a device
tailscale authorize nSRVBN3CNTRL
tailscale deauthorize nSRVBN3CNTRL

# Delete a device from the…
