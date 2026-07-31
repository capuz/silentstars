---
repo: "SuzukiHonoka/spaceship"
name: "spaceship"
description: "The spaceship project."
readmeQualityOk: true
url: "https://github.com/SuzukiHonoka/spaceship"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "grpc", "proxy"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-05-25T10:56:49Z"
lastCommitAt: "2026-07-30T08:21:09Z"
lastReleaseAt: "2022-07-13T07:53:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 58
maintainers: ["SuzukiHonoka", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9120427185b21c0e0501c82a64aee65332a2b7b09a567066ab47f445b0facc8f/SuzukiHonoka/spaceship"
---

# Spaceship

Spaceship is a tool designed to create secure tunnels to remote networks.

# Technologies Used

- gRPC
- Protocol Buffers (protobuf)

## Usage

```shell
# spaceship -h
Usage of spaceship:
  -c string
        config path (default "./config.json")
  -interval duration
        show stats interval in seconds (default 1s)
  -s    show stats
  -v    show spaceship version
```

## Linux TCP Transparent Redirect

On Linux, a client can accept TCP connections sent to it by the `REDIRECT`
target in the `iptables` or `ip6tables` `nat` table. Enable the listener with
`listen_redirect`:

```json
{
  "role": "client",
  "server_addr": "tunnel.example.com:443",
  "tls": true,
  "uuid": "00000000-0000-0000-0000-000000000001",
  "listen_redirect": "0.0.0.0:12345",
  "redirect": {
    "max_connections": 1024
  }
}
```

The listener reads `SO_ORIGINAL_DST` from each accepted socket, routes the
recovered destination IP through the configured Spaceship routes, and carries
the TCP stream through the selected egress. It is Linux-only and TCP-only.
Because REDIRECT supplies an IP address rather than a hostname, `cidr`, `exact`
IP, and `default` routes are useful here; domain routes cannot…
