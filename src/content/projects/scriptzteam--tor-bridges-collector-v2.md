---
repo: "scriptzteam/Tor-Bridges-Collector-v2"
name: "Tor-Bridges-Collector-v2"
description: "Collecting Tor Bridges - Version 2."
readmeQualityOk: true
url: "https://github.com/scriptzteam/Tor-Bridges-Collector-v2"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bridges", "encryption", "ipv4", "ipv6", "tor", "tor-browser", "vanilla", "webtunnel", "obfs4", "obfs4proxy"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-30T11:30:08Z"
lastCommitAt: "2026-11-22T11:53:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 38
maintainers: ["scriptzteam"]
openGraphImageUrl: "https://opengraph.githubassets.com/15546347289b16488a4089694ff0cbd2841e6c824068a17aaf936b743a35e26c/scriptzteam/Tor-Bridges-Collector-v2"
---

# Tor Bridges Collector v2

This repository automatically collects, validates, and archives Tor bridges. A GitHub Action runs every 5 minutes to fetch new bridges from the official Tor Project.

## Important Notes on IPv6 & WebTunnel

1.  **IPv6 Instability:** IPv6 bridges are significantly fewer in number and are often more susceptible to blocking or connection instability compared to IPv4.
2.  **WebTunnel Overlap:** WebTunnel bridges often use the same endpoint domain for both IPv4 and IPv6. Consequently, the IPv6 list is frequently identical to or a subset of the IPv4 list.
3.  **Recommendation:** For the most reliable connection, **prioritize using IPv4 bridges**. Use IPv6 only if IPv4 is completely inaccessible on your network.

## Bridge Lists

### Tested & Active (Recommended)
These bridges from the archive have passed a TCP connectivity test (3 retries, 10s timeout) during the last run.
