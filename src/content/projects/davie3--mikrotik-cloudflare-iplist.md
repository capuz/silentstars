---
repo: "Davie3/mikrotik-cloudflare-iplist"
name: "mikrotik-cloudflare-iplist"
description: "Generate Mikrotik Address Lists for Cloudflare's IP ranges"
readmeQualityOk: true
url: "https://github.com/Davie3/mikrotik-cloudflare-iplist"
language: "RouterOS Script"
languages: ["RouterOS Script", "Python"]
languagePcts: [59, 41]
topics: ["cloudflare", "dns", "ip", "ipv4", "ipv6", "mikrotik", "routerboard", "routeros", "routeros-scripts", "script"]
stars: 77
forks: 15
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-05-06T04:54:12Z"
lastCommitAt: "2026-07-05T20:54:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 51
maintainers: ["dependabot[bot]", "baragoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/64fb71a47bc6c1278a8a01701c0a38c26affeaf75a55259de47a52d9b6dc94ab/Davie3/mikrotik-cloudflare-iplist"
---

# Mikrotik Cloudflare IP Address List

Generate Mikrotik Address Lists for Cloudflare's IP ranges.

Once created, these address lists can be used to filter Web traffic on your Mikrotik Router to only come from Cloudflare's proxied IPs. Available lists for IPv4 and IPv6 Addresses.

Cloudflare does not change these IPs often, but GitHub Actions will run at 8am UTC (12am PT) and 8pm UTC (12pm PT) to generate the lists: `cloudflare-ips-v4.rsc` and `cloudflare-ips-v6.rsc`.

**Always use caution and backup your Mikrotik configurations!**

## Usage

### Simpliest Way

- Download **install.rsc** and/or **install-v6.rsc** and upload them to your Mikrotik Router
- Run `/import file-name=install.rsc` and/or `/import file-name=install-v6.rsc` from the Mikrotik terminal
- `d3-cloudflare-download` and `d3-cloudflare-replace` will now be added to your Scripts
- `d3-cf-dl` and `d3-cf-rp` will be added to the Scheduler
- By default, the download script will run everyday at 00:05:00 and the replace script at 00:10:00. Adjust the frequency and time as needed

### Manual Way

Adjust for `cloudflare-ips-v4.rsc` and/or `cloudflare-ips-v6.rsc` depending on what you need, manually create both scripts,…
