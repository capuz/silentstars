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
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-30T11:30:08Z"
lastCommitAt: "2026-10-26T09:17:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["scriptzteam"]
openGraphImageUrl: "https://opengraph.githubassets.com/491a6d13adf2e1fa1d9b0d70ca8bfdaca25117162ae37aa15c0f666049b84b82/scriptzteam/Tor-Bridges-Collector-v2"
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

| Transport | IPv4 (Tested) | Count | 
| :--- | :--- | :--- |
| **obfs4** | [obfs4_tested.txt](https://raw.githubusercontent.com/scriptzteam/Tor-Bridges-Collector-v2/refs/heads/main/bridges/obfs4_tested.txt) | **221** |
| **WebTunnel** |…
