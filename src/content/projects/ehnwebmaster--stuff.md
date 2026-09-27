---
repo: "ehnwebmaster/stuff"
name: "stuff"
description: "el-brujo stuff"
readmeQualityOk: true
url: "https://github.com/ehnwebmaster/stuff"
homepage: "https://blog.elhacker.net"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["ddos-attacks", "ddos", "ddos-detection", "ddos-protection"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-02-13T12:15:54Z"
lastCommitAt: "2026-09-27T09:30:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 74
maintainers: ["ehnwebmaster"]
openGraphImageUrl: "https://opengraph.githubassets.com/9382be2ea14f2357c374870d149b4509c1a8d70f1a8a5feae2bf12117dfe2194/ehnwebmaster/stuff"
---

# List of DDoS attacks

**Automatically reported banned IPs from fail2ban and CloudFlare WAF from [elhacker.NET](https://elhacker.net)**

</div>

---

## Overview

Two lists:

Auto-update **WAF CloudFlare** blocklist last 24 hours
https://github.com/ehnwebmaster/stuff/blob/main/ips_bloqueadas.txt

Auto-update **fail2ban** blocklist
https://github.com/ehnwebmaster/stuff/blob/main/fail2ban-drops.txt

Works with **iptables** or ipset — Linux, OPnsense, etc (use drop or reject)

### How It Works

```
Attacker → fail2ban or CloudFlare from WAF detects abuse → updates the two lists every x minutes
```

1. **WAF CloudFlare** detects events from the firewall CloudFlare using API GraphQL including layer 7 DDoS, Rate Limit and WAF events including custom rules (excluding IP's from Tor and 10 or more hits and sorted by hits)
2. **fail2ban** detects too much pettitions in short range of time or 404 pettitions from our web server

## The two ban lists

Fail2Ban
- ```https://github.com/ehnwebmaster/stuff/blob/main/fail2ban-drops.txt```

CloudFlare Firewall WAF
- ```https://github.com/ehnwebmaster/stuff/blob/main/ips_bloqueadas.txt```

## Download

Just copy download raw link

```bash…
