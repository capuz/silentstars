---
repo: "molangning/fire-av"
name: "fire-av"
description: "Fire-AV is a collection of lists that you can use to block av providers and bad ips"
readmeQualityOk: true
url: "https://github.com/molangning/fire-av"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["anti-av", "phishing", "wordlists", "firewall"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-11-16T16:24:22Z"
lastCommitAt: "2026-08-08T04:33:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6df6f31aeca207f9ca76b75748584c00e7f96281e95c77f977ea898af714f80/molangning/fire-av"
---

# Fire-AV

Fire-AV is a simple solution to your bad traffic/AV avoiding needs. Simply use the ips.txt file to begin blocking popular AV and cloud providers ips.

Aside from blocking av provider, Fire-AV can also be used as an ip encrichment tool to tag source ips

## Status
Fire-AV is now in its stable stage! Changes may still be added to `asn-list.json` and formatting may change overtime(but less frequently)

## Similar projects

[maxmind-geoip-db](https://github.com/molangning/maxmind-geoip-db/) is a mirror to the database maxmind provides for free.

## Contribution
It is an arms race to discover AV provider IPs and I need help. If you find any ips that is not in the list please open an github issue so that I can add it.

## Usage
I do not recommend directly using the lists provided unless you are willing to do a lot of trial and errors. Instead, You are encouraged to build your own filter list to tailor it to your needs/infrastructure.

The blocklists should be integrated within the http server config(ie .htaccess) or updated dynamically by fetching the list and blocking at runtime. 

ips/user-agents that fits the blacklist should be served an normal webpage or an 404 page

##…
