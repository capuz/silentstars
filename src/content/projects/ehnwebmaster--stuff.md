---
repo: "ehnwebmaster/stuff"
name: "stuff"
description: "el-brujo stuff from elhacker.NET - DDos Attacks history and List of updated IP's from detected attacks from WAF CLoudFlare Pro Plan (HTTP Layer 7 and Rate Limit)"
readmeQualityOk: true
url: "https://github.com/ehnwebmaster/stuff"
homepage: "https://blog.elhacker.net"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["ddos-attacks", "ddos", "ddos-detection", "ddos-protection", "ipset", "ipset-lists", "iptables"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-02-13T12:15:54Z"
lastCommitAt: "2026-10-10T10:05:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 70
maintainers: ["ehnwebmaster"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd10e427886536cc67a5fd9a42d71810d782ab0c37298c4ce0c4cf4f9529b7eb/ehnwebmaster/stuff"
---

# List of DDoS attacks

**Automatically reported banned IPs from fail2ban and CloudFlare WAF from [elhacker.NET](https://elhacker.net)**

---

## Overview

Two lists:

Auto-update **WAF CloudFlare** blocklist last 24 hours updated every 4 minutes
https://github.com/ehnwebmaster/stuff/blob/main/ips_bloqueadas.txt

Auto-update **fail2ban** blocklist
https://github.com/ehnwebmaster/stuff/blob/main/fail2ban-drops.txt

Works with **ipset** (iptables) — Linux, OPnsense, etc (use drop or reject) or **CloudFlare Lists** (see examples)

### How It Works

```
Attacker → fail2ban or CloudFlare from WAF detects abuse → updates the two lists every x minutes
```

1. **WAF CloudFlare** detects events from the firewall CloudFlare using API GraphQL including layer 7 DDoS, Rate Limit and WAF events including custom rules (excluding IP's from Tor and 10 or more hits and sorted by hits)
2. **fail2ban** detects too much pettitions in short range of time, 404 pettitions, modSecurity rules hits.

## The two ban lists

CloudFlare Firewall WAF
- ```https://github.com/ehnwebmaster/stuff/blob/main/ips_bloqueadas.txt```

Fail2Ban
- ```https://github.com/ehnwebmaster/stuff/blob/main/fail2ban-drops.txt```

##…
