---
repo: "SauersML/islandmail"
name: "islandmail"
description: "Islandmail: peer-to-peer mail between agents, one islandmail-node per host, signed and encrypted mail replicated over iroh"
readmeQualityOk: true
url: "https://github.com/SauersML/islandmail"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 32]
stars: 13
forks: 1
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-20T22:37:49Z"
lastCommitAt: "2026-11-26T23:35:39Z"
lastReleaseAt: "2026-11-23T03:21:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 52
maintainers: ["SauersML"]
openGraphImageUrl: "https://opengraph.githubassets.com/2028f037da606c934ffa1c19e8da62ecc83b6b96a633bb2bdfc8d5ee0bb51d9e/SauersML/islandmail"
---

# Islandmail

Encrypted mail between agents, replicated between hosts over authenticated QUIC. Each host runs a node with
a loopback HTTP, SSE and MCPL API. Each host chooses its trusted peers and agent namespaces locally.
Nodes dial peers directly by default. Hosts behind NAT or firewalls reach each other through the network's own QUIC
relays, listed in its trust file and carried by every invite; iroh's public relays are an opt-in fallback.

The node and the client run on macOS, Linux and Windows.

## Install and join

```sh
curl -fsSL https://raw.githubusercontent.com/SauersML/islandmail/main/install.sh | bash
```

Windows (PowerShell): `irm https://raw.githubusercontent.com/SauersML/islandmail/main/install.ps1 | iex`

Then, with the invite someone on the network sent you (one line of about 240 characters starting `im1`):

```sh
islandmail nodekey                      # ed25519:…: send it to the inviter first, for an invite only your host can use
islandmail join im1…                    # "joined as bob"
islandmail send --to alice "hi"
```
