---
repo: "az0/vpn_ip"
name: "vpn_ip"
description: "ip addresses of VPNs"
readmeQualityOk: true
url: "https://github.com/az0/vpn_ip"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 97
forks: 12
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-05-01T20:04:59Z"
lastCommitAt: "2026-08-28T12:23:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 45
maintainers: ["actions-user", "az0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b687858faeef19a7a01447dc113453da80d1a1b472a97999dc3be4f8220d7bce/az0/vpn_ip"
---

# Network Addresses for VPN and Proxy Services

This repository contains lists of hostnames and IP addresses for various VPNs (e.g., ProtonVPN, Windscribe, Browsec, VeePN, Hoxx) as well as some proxies. The repository is useful for network administrators, security professionals, and security researchers.

This repository provides these lists:

* **hostname.txt**: A unique list of hostnames that have at least one valid IP address.
* **adguard.txt**: Like `hostname.txt` but in [Adguard format](https://adguard-dns.io/kb/general/dns-filtering-syntax/?utm_medium=ui) which significantly reduces file size while generalizing to new subdomain names.
* **ip.txt**: IP addresses only for the servers that actually serve as VPNs.

Efforts have been made to avoid blocking the IP addresses of general-purpose sites, currently Cloudflare and Shopify. If another non-VPN site is blocked, open an issue.

## How to use

For comprehensive blocking of VPNs, set up filtering at two levels.

First, use `hostname.txt` or `adguard.txt` to block hostname resolution at your DNS server (e.g., [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome), [Pi-hole](https://pi-hole.net/)). For use certain systems…
