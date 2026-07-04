---
repo: "matchylabs/matchy"
name: "matchy"
description: "Fast IoC matching: scan logs for threat intel (IPs, domains, hashes)."
readmeQualityOk: true
url: "https://github.com/matchylabs/matchy"
homepage: "https://matchylabs.github.io/matchy/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["aho-corasick", "ffi", "glob", "mmap", "pattern-matching", "rust", "zero-copy", "domain-matching", "geoip", "maxmind"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-08T18:24:29Z"
lastCommitAt: "2026-07-04T23:15:21Z"
lastReleaseAt: "2025-10-28T17:11:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["sethhall"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1072448339/8a321e0e-9374-4e1f-b6da-03846970e3ac"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="book/src/images/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="book/src/images/logo-light.svg">
  </picture>
</p>

# Matchy

**Fast IoC matching against logs, network traffic, and security data.**

Matchy builds memory-mapped databases from threat intelligence feeds, enabling fast lookups of IPs, domains, file hashes, and glob patterns.

```bash
# Build a threat database from your intel feeds
matchy build threats.csv --output threats.mxy --input-format csv

# Scan your logs for matches (multi-threaded)
matchy match threats.mxy access.log

# Query individual indicators
matchy query threats.mxy 1.2.3.4
```

## Try It in Your Browser

Start at the [Matchy product page](https://matchylabs.github.io/matchy/) or open the [Matchy Analyst Console](https://matchylabs.github.io/matchy/console/) directly. The console loads a bundled demo `.mxy` threat database and scans dropped log files locally in your browser before you install the CLI.

## What It's For

**Threat Intelligence Matching**: You have threat feeds (IPs, domains, file hashes) and need to search for them in your data.

**Use Cases**:
-…
