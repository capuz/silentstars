---
repo: "antonme/ipnames"
name: "ipnames"
description: "Daily updated list of FQDNs and resolved IPs of some popular sites/platforms. Made for routing of some VPNs in my router"
readmeQualityOk: true
url: "https://github.com/antonme/ipnames"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [56, 44]
stars: 44
forks: 2
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-27T19:03:38Z"
lastCommitAt: "2026-11-09T04:35:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 48
maintainers: ["antonme"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9daa55f32ef78f719eeed631fe796bbf7e6dcb5f9ff641e39557c76070b4c6/antonme/ipnames"
---

# Popular Sites/Platforms FQDNs and Resolved IPs
This repo contains daily updated list of FQDNs and resolved IPs of some popular sites/platforms. Made for my personal needs in routing of some VPNs in my router to fight censure and balkanization of the Internet a little.

Sites/platforms included: Adobe, Anthropic/Claude, Apple, Backblaze, Bing, Facebook/Instagram, GitHub, Google, HuggingFace, OpenAI/ChatGPT, Ozon, Pornhub, TikTok, Twitter/X, YouTube, and VPN provider hosts (ExpressVPN, Surfshark, TunnelBear)

## Repository Structure

### Data Files

| File Pattern | Description |
|--------------|-------------|
| `dns-*.txt` | FQDNs filtered from smaller, current DNS logs |
| `ext-dns-*.txt` | FQDNs filtered from larger external sources |
| `resolve-*.txt` | Resolved IPv4 addresses from `dns-*.txt` |
| `ipv6-resolve-*.txt` | Resolved IPv6 addresses from `dns-*.txt` |

### Configuration Files

- `servers.txt`, `servers-ext.txt`: DNS server lists for resolving names
- `full-update.fish`: Script for full cycle update
- `names-from-cache.fish`: Filters FQDNs from available logs
- `presolve*.fish`: Scripts to resolve IPs from FQDNs

## Methodology

1. Service FDQNs are collected from…
