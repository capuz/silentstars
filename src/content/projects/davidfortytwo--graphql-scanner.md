---
repo: "davidfortytwo/graphql-scanner"
name: "graphql-scanner"
description: "Scans a GraphQL API for security vulnerabilities"
readmeQualityOk: true
url: "https://github.com/davidfortytwo/graphql-scanner"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-16T22:32:18Z"
lastCommitAt: "2026-10-15T08:32:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["davidfortytwo"]
openGraphImageUrl: "https://opengraph.githubassets.com/96d631954c2d6d93fa12504c51c431ad05698fdd655ad9b19847ae4592d2a374/davidfortytwo/graphql-scanner"
---

# graphql-scanner

## Description

**GraphQL-scanner** checks a GraphQL endpoint for common weaknesses, including introspection exposure, schema misconfigurations, transport/perimeter issues, and safe resource-pressure signals. It uses safe defaults (no havoc), verifies findings with a reproducible `curl` command, and persists evidence only for verified findings.

> **⚠️ Authorized testing only.** Use this tool only against systems where you have explicit permission.

---

## Key Features

- ✅ **Safe defaults**: full suite designed to avoid DoS (moderate sizes, single requests for verification).  
- ✅ **Verification-first reporting**: each finding includes a reproducible `curl` (`verify_curl`) and is only recorded if verification passes smart triage.  
- ✅ **Evidence artifacts**: JSON and TXT per finding in `./evidence/`, severity-prefixed file names.  
- ✅ **Robust HTTP helpers**: JSON, `application/x-www-form-urlencoded` POSTs, and GET probing.  
- ✅ **Content-type aware parsing** and latency capture.  
- ✅ **Colorized terminal output** + optional JSON summary to stdout.

---

## Checks Performed

### Schema / Introspection
- Introspection enabled (`__schema`)  
- Circular…
