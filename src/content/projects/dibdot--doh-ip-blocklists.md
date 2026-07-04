---
repo: "dibdot/DoH-IP-blocklists"
name: "DoH-IP-blocklists"
description: "This repo contains the domain names and the resolved IPv4/IPv6 addresses of public DoH server"
readmeQualityOk: true
url: "https://github.com/dibdot/DoH-IP-blocklists"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["doh", "ipv4", "ipv6", "adblock", "banip", "dns", "dns-over-https", "dns-server", "blocklist", "domain"]
stars: 352
forks: 50
openIssues: 0
closedIssues: 8
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2019-10-04T16:32:40Z"
lastCommitAt: "2026-07-04T23:16:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 38
maintainers: ["dibdot"]
openGraphImageUrl: "https://opengraph.githubassets.com/96ee30ebd0824ee55e611c1a5a4cdfd4813a5d2adafac2d7b17e6075e9715ee7/dibdot/DoH-IP-blocklists"
---

# DoH-IP-blocklists

This repo contains the domain names and the IPv4/IPv6 addresses of public DoH server.  
The main domain list `doh-domains_overall.txt` is manually updated on a regular basis (usually once a month). All other output files in this repo are derived from that file and generated automatically with the help of the script `doh-lookup.sh`:  
  * `doh-domains[.txt|.json]`: active or accessible domains  
  * `doh-domains_abandoned[.txt|.json]`: unavailable domains  
  * `doh-ipv4[.txt|.json]`: list with the ipv4 addresses of the accessible domains  
  * `doh-ipv6[.txt|.json]`: list with the ipv6 addresses of the accessible domains  

The doh-lookup script runs automatically every hour via GitHub actions and updates the above listed output files within the repo if anything has changed.  

Have fun!  
Dirk Brenken
