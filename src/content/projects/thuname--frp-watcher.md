---
repo: "THUNAME/FRP-watcher"
name: "FRP-watcher"
description: "Global IPv6 FRP Probing and Data Collection"
readmeQualityOk: true
url: "https://github.com/THUNAME/FRP-watcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-02T07:15:33Z"
lastCommitAt: "2026-10-26T09:18:08Z"
lastReleaseAt: "2026-09-02T12:57:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["ct-wei"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9d46e12909cc004c0a225f9e6fb171cf2bc3a7ab23d8b6c31872849854e2db/THUNAME/FRP-watcher"
---

# FRP-watcher

An open-source tool for long-term monitoring of IPv6 Full Response Prefixes (FRP). It performs global IPv6 FRP probing and data collection using mature existing algorithms.

## Analysis Results

### BGP IPv6 Routing Prefix Analysis

We provide comprehensive analysis of BGP-announced IPv6 Fully Responsive Prefixes (FRPs) across different protocols. The following charts show the trends over time:

#### Daily New BGP Prefixes

#### Daily New Address Space Size

#### Cumulative Address Space Size (Deduplicated)

#### Cumulative Prefix Count (Deduplicated)

### Key Features
- **Deduplicated Analysis**: All cumulative metrics are calculated after removing duplicate prefixes
- **Multi-Protocol Support**: Analysis across ICMPv6, TCP/80, TCP/443, and UDP/53 protocols
- **Daily Updates**: Data is updated daily with new measurements
- **Visual Insights**: Clear, professional charts for easy interpretation

### Folder Structure
```plaintext
FRP-watcher/
├── server_Luori/        # FRP results from Luori server
├── server_gungnir/      # FRP results from Gungnir server
├── server_routing/      # BGP-announced FRP datasets
│   ├── ICMPv6/          # BGP FRPs under ICMPv6 probing
│…
