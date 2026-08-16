---
repo: "rix4uni/scope"
name: "scope"
description: "An automated GitHub Actions-based crawler that fetches and updates public scopes from popular bug bounty platforms (like Hackerone/Bugcrowd/Intigriti/etc) (updates every 10 minutes)"
readmeQualityOk: true
url: "https://github.com/rix4uni/scope"
homepage: "https://scope.krazeplanet.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["bugbounty", "bugcrowd", "hackenproof", "hackerone", "intigriti", "vrp", "yeswehack", "bug-bounty", "bugbountytips", "hacking"]
stars: 95
forks: 17
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2024-11-04T13:22:22Z"
lastCommitAt: "2026-08-16T04:08:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/27873b4c641bdb31bb51f9cfa5aec40faacc9c75f5231379765c775a11395dee/rix4uni/scope"
---

## scope

**scope** is a CLI tool and curated dataset for querying bug bounty program scopes across multiple platforms (Bugcrowd, HackerOne, Intigriti, YesWeHack). It helps security researchers quickly find which programs have specific domains or assets in scope.

### What this repo contains:
- **Automated data**: Scope data fetched and updated every 10 minutes from popular bug bounty platforms
- **CLI tool**: A simple command to search programs by target (e.g., `scope *.tidal.com`)
- **Categorized files**: Wildcards, domains, and GitHub repos separated by platform and scope type

#### NewData:
- #### Wildcards
  - [newdata_inscope_wildcards.txt](https://github.com/rix4uni/scope/blob/main/data/NewData/newdata_inscope_wildcards.txt) - Contains wildcard patterns (e.g., `*.example.com`) for matching subdomains

- #### Domains
  - [newdata_inscope_domains.txt](https://github.com/rix4uni/scope/blob/main/data/NewData/newdata_inscope_domains.txt) - Contains full domain names (e.g., `api.example.com`)

- #### GithubRepo
  - [newdata_inscope_github_repo.txt](https://github.com/rix4uni/scope/blob/main/data/NewData/newdata_inscope_github_repo.txt) - Contains GitHub repository URLs (e.g.,…
